"use client"

import { motion } from "framer-motion"
import { Code, Layout, Server, Smartphone, Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Services() {
  

  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern personal portfolio built with Next.js and Tailwind CSS",
      githubUrl: "https://github.com/username/portfolio",
      imageUrl: "/placeholder-project1.jpg",
      techStacks: ["Next.js", "TypeScript", "Tailwind CSS"],
      linkType: "github"
    },
    {
      title: "E-commerce App",
      description: "Full-stack e-commerce application built with React, Redux, and Node.js",
      githubUrl:  "URL_ADDRESS.com/username/ecommerce-app",
      imageUrl: "/placeholder-project2.jpg",
      techStacks: ["React", "Redux", "Node.js"],
      linkType: "link"
    },
    {
      title: "Blog Platform",
      description: "Full-stack blog platform built with Next.js, GraphQL, and MongoDB",
      githubUrl: "",
      imageUrl: "/placeholder-project2.jpg",
      techStacks: ["React", "Redux", "Node.js"],
      linkType: "link"
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-neutral-50 to-red-100 dark:from-gray-900 dark:to-red-950 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2 dark:text-white">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStacks.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300 gap-2"
              >
                {project.linkType === 'github' ? (
                  <Github className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
                <span>View {project.linkType === 'github' ? 'on GitHub' : 'Link'}</span>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 -mt-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </div>
  </section>
  )
}

