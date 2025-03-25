import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export async function POST(request: Request) {
  try {
    const { email, content } = await request.json();

    // Validate input
    if (!email || !content) {
      return NextResponse.json(
        { error: "Email and content are required" },
        { status: 400 }
      );
    }

    // Format message for Telegram
    const message = `📧 New Contact Form Submission\n\nFrom: ${email}\n\nMessage:\n${content}`;

    // Send to Telegram
    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHANNEL_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}