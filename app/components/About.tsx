"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Wrench, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [    
    { icon: <Server className="w-8 h-8 text-green-500" />, title: "Backend", description: "Java, Spring Boot, Node.js, Microservice" },

    { icon: <Code className="w-8 h-8 text-red-500" />, title: "Frontend", description: "React, Next.js, Vue.js" },
    { icon: <Database className="w-8 h-8 text-purple-500" />, title: "Database", description: "MySQL, PostgreSQl, MongoDB" },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Performance", description: "MQ, Redis Caching" },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "AI/LLM",
      description: "Generative AI (RAG/CoT/Fine-tuning/Agent), LangChain/pgvector/Qdrant, vLLM, MCP Protocol"
    },
    {
      icon: <Wrench className="w-8 h-8 text-pink-500" />,
      title: "Tools",
      description: "IntelliJ IDEA, VS Code, Git, Docker, Vibe-Coding (Cursor/Copilot/Cline)"
    }
  ]

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-br from-neutral-50 to-red-100 dark:from-gray-900 dark:to-red-950 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              As a passionate Full Stack Developer, I specialize in building robust and scalable web applications. With
              a strong foundation in Java/Spring, MicroService, React/Vue.js, Node.js, Redis, MQ, PostgreSQL/Mysql/MongoDB, I create seamless full-stack solutions
              that deliver exceptional user experiences(UI/UX).
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My expertise extends to modern frameworks like Next.js. I'm
              committed to writing clean, efficient code.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Besides, I actively explore AI/LLM related filds including RAG, prompt engineering, 
           model fine-tuning and Agent. Actively using the AI coding assistant to foster the development efficiency(Vibe Coding). Staying up-to-date with the latest industry trends to
           deliver cutting-edge solutions.</p>
          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <h3 className="text-xl font-semibold dark:text-white">{skill.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

