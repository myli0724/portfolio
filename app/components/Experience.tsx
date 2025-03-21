"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { ProjectPreview } from "@/components/ui/project-preview"
import { projectPreviews } from "./project-preview-data"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
  setExpandedIndex(prev => prev === index ? null : index);
};

const experiences = [
    
    {
      company: "Nibble! Inc",
      companyUrl: "http://nibblepro.cn/",
      project: "BiteBook SaaS System",
      projectUrl: "http://bitebook.cn/",
      location: "Remote (Part-time)",
      period: "2024 - Present",
      role: "Freelancer (Full Stack Software developer)",
      description: "A hotel and bar reservation management SaaS platform co-developed and operated with Hope & Sesame (庙前冰室) for Guangzhou Nibble Technology Co., Ltd.",
      techStack: [
        { name: "React", url: "https://react.dev" },
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "Shadcn UI", url: "https://ui.shadcn.com" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com" },
        { name: "PostgreSQL", url: "https://www.postgresql.org" },
        { name: "Drizzle ORM", url: "https://orm.drizzle.team" },
        { name: "Ant Design", url: "https://ant.design" },
        { name: "DnD Kit", url: "https://dndkit.com" }
      ],
      achievements: [
        "Utilized the AI-driven IDE *Cursor* to accelerate MVP prototyping",
        "Optimized and improved UI/UX design, including animations and landing page styling with SSR (Server-Side Rendering).Enhanced mobile responsiveness for improved user experience",
        "Implemented visual order queue management using DnD Kit drag-and-drop components",
        "Integrated QR code functionality with coupon management",
        "Automated order seating arrangements, order sequencing, and check-in/expiry management",
        "Implemented i18n for multilingual support(Planning to release soon)",
        "Built CI/CD pipelines to ensure high-quality code delivery, especially for AI-generated code"
      ]
    },
    {
      company: "Junmemama Education Inc",
      companyUrl: "https://junemama.com/",
      project: "Junemamax AI Education SaaS Platform",
      projectUrl: "https://junemamax.com/",
      location: "Remote (Part-time)",
      period: "2024.12 - Present",
      role: "Freelancer (Full Stack Software developer)",
      description: "An education SaaS platform designed to streamline CRM, SOP management, and AI-driven marketing operations.",
      techStack: [
        { name: "React", url: "https://react.dev" },
        { name: "Next.js", url: "https://nextjs.org" },
        { name: "PostgreSQL", url: "https://www.postgresql.org" },
        { name: "Drizzle ORM", url: "https://orm.drizzle.team" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com" },
        { name: "TanStack Table", url: "https://tanstack.com/table" },
        { name: "Qdrant", url: "https://qdrant.tech" },
        { name: "Vercel AI SDK", url: "https://sdk.vercel.ai" },
        { name:"Dify", url: "https://dify.ai/"}
      ],
      achievements: [
        "Developed core SOP and CRM management tables",
        "Integrated an AI-powered assistant using RAG and Qdrant to build an internal knowledge base and AI agent workflows, supporting tasks such as meeting transcription (Whisper ASR), Email communication, and WhatsApp community engagement via Dify AI Agent",
        "Enhanced content creation workflows with AI-driven rich text editing and copywriting support",
        "Delivered business insights through BI visualizations integrated with AI agents, leveraging Vercel AI SDK for generative UI",
        "Implemented multi-tenant architecture to support multiple clients with isolated environments"
      ]
    },{
      company: "Guangzhou Bidi Data Technology Co., Ltd.",
      companyUrl: "https://www.biaoxunkuaiche.com/",
      project: "Distributed Data Web Scraping System",
      projectUrl: "https://www.biaoxunkuaiche.com/",
      location: "Guangzhou (Canton), China",
      period: "2023.12 - 2024.3",
      role: "Java Intern in Big Data Department",
      description: "Developed and maintained the department's distributed data web scraping and monitoring system, focusing on automated data extraction and processing with machine learning integration.",
      techStack: [
        { name: "Spring Boot", url: "https://spring.io/projects/spring-boot" },
        { name: "Quartz", url: "http://www.quartz-scheduler.org" },
        { name: "Redis", url: "https://redis.io" },
        { name: "HDFS", url: "https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html" },
        { name: "MinIO", url: "https://min.io" },
        { name: "MongoDB", url: "https://www.mongodb.com" },
        { name: "ELK", url: "https://www.elastic.co/elastic-stack" },
        { name: "Kafka", url: "https://kafka.apache.org" }
      ],
      achievements: [
        "Developed and maintained distributed data web scraping system with automated data cleaning and deduplication processes",
        "Optimized asynchronous multithreading web scraping using CompletableFuture API, improving data processing performance",
        "Implemented web scraping techniques using Selenium and RPA technologies for parsing and bypassing anti-crawler measures",
        "Collaborated with Algorithm teams on LLM + RAG projects for knowledge base Q&A system implementation"
      ]
    },
    {
      company: "Guangzhou University",
      companyUrl: "https://www.gzhu.edu.cn",
      project: "✨Aixcat: a SaaS chatbot Platform Based on AIGC",
      projectUrl: "https://about.aixcat.top",
      location: "Guangzhou (Canton), China",
      period: "2023.9 - 2024.6",
      role: "Research Assistant in AI Lab",
      description: "An experimental academic project aimed at leveraging cutting-edge Generative AI and advanced techniques (RAG, CoT, Agent, Fine-tuning) to enhance specific domain's performance (fintech, stock market, academic, medical healthcare), based on Spring Boot, Vue.js, and Python.",
      techStack: [
        { name: "Spring Boot", url: "https://spring.io/projects/spring-boot" },
        { name: "Vue.js", url: "https://vuejs.org" },
        { name: "Python", url: "https://www.python.org" },
        { name: "PostgreSQL", url: "https://www.postgresql.org" },
        { name: "RabbitMQ", url: "https://www.rabbitmq.com" },
        { name: "Redis", url: "https://redis.io" },
        { name: "Netty", url: "https://netty.io" },
        { name: "LangChain", url: "https://www.langchain.com" },
        { name: "pgvector", url: "https://github.com/pgvector/pgvector/"},
        { name: "vLLM", url: "https://docs.vllm.ai/en/stable/"}
      ],
      achievements: [
        "Implemented high-performance non-blocking network I/O using Netty and WebSocket/SSE protocol for streaming LLM responses",
        "Developed Vue.js frontend for rendering Markdown and LaTeX format text with user-friendly UI/UX",
        "Built large file upload system with custom thread pool and RabbitMQ for asynchronous task execution",
        "Implemented distributed rate limiting using Redisson RateLimiter with AOP annotations",
        "Integrated LangChain and PostgreSQL pgvector for RAG-enhanced document processing",
        "Optimized on-device, self-hosted open-source models (Llama, Qwen) using vLLM for data security"
      ]
    }
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-neutral-50 to-red-100 dark:from-gray-900 dark:to-red-950 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
            
              <div className="relative z-10">
                {/* Experience Card Header */}
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    <Globe className="w-6 h-6 mr-2 text-red-500" />
                    {exp.company}
                  </h3>
                </a>
                <a href={exp.projectUrl} target="_blank" rel="noopener noreferrer" className="block mb-4">
                  <h4 className="text-xl font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors">
                    {exp.project}
                  </h4>
                </a>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{exp.description}</p>
                {/* Tech Stack Section */}
                <div className="mb-6">
                  <h5 className="text-lg font-medium mb-3 dark:text-gray-200">Tech Stack</h5>
                  <div className="flex flex-wrap gap-3">
                    {exp.techStack.map((tech, idx) => (
                      <a
                        key={idx}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {tech.name}
                      </a>
                    ))}
                  </div>
                </div>
                {/* Expandable Details Section */}
                <div className="mt-6">
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                  >
                    <span className="mr-2">
                      {expandedIndex === index ? 'Close Details' : 'Show Details'}
                    </span>
                    {expandedIndex === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <motion.div
                    id={`details-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedIndex === index ? 'auto' : 0,
                      opacity: expandedIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6">
                      <h5 className="text-lg font-medium mb-3 dark:text-gray-200">Key Achievements</h5>
                      <ul className="list-none space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {projectPreviews[exp.project] && (
                      <div className="mt-8">
                        <h5 className="text-lg font-medium mb-4 dark:text-gray-200">Project Preview</h5>
                        <ProjectPreview images={projectPreviews[exp.project].images} />
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

