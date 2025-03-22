"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, GitBranch, Terminal, Layers, Cpu, Globe, Workflow, BrainCircuit } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const skills = [
  {
    icon: Server,
    name: "Backend Development",
    tech: "Java, Spring, Node.js, Express",
    description: "Creating robust server-side applications with focus on scalability and clean architecture.",
    color: "text-red-600",
  },
  {
    icon: Code,
    name: "Frontend Development",
    tech: "React.js, Next.js, Vue.js",
    description:
      "Building responsive and interactive user interfaces with modern React features and Next.js for optimal performance.",
    color: "text-red-500",
  },
  {
    icon: Database,
    name: "Database Management",
    tech: "MySQl, PostgreSQL, MongoDB",
    description: "Designing and implementing efficient database schemas and queries for optimal data management.",
    color: "text-red-700",
  },
  {
    icon: Layout,
    name: "UI/UX Design",
    tech: "Tailwind CSS, Shadcn UI",
    description: "Crafting beautiful and intuitive user interfaces with modern design principles and frameworks.",
    color: "text-red-800",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    tech: "Git, GitHub/Gitlab",
    description: "Managing code versions efficiently with Git and collaborating effectively through GitHub.",
    color: "text-red-900",
  },
  {
    icon: Cpu,
    name: "API Development",
    tech: "REST, gRPC",
    description: "Designing and implementing efficient APIs for seamless data communication.",
    color: "text-rose-700",
  },
  {
    icon: Globe,
    name: "Cloud Computing",
    tech: "AWS, GCP, Azure, Cloudflare",
    description: "Deploying and managing applications in the cloud for scalability and reliability.",
    color: "text-rose-500",
  },
  {
    icon: Layers,
    name: "Containerization",
    tech: "Docker, Kubernetes",
    description: "Containerizing applications for consistent deployment and scaling.",
    color: "text-rose-700",
  },
  {
    icon: Terminal,
    name: "Command Line",
    tech: "Linux, Bash",
    description: "Proficient in command-line operations for system administration and automation.",
    color: "text-rose-900",
  },
  {
    icon: Workflow,
    name: "DevOps",
    tech: "CI/CD, GitHub Actions, Jenkins",
    description: "Automating software delivery processes for efficient deployment and scalability.",
    color: "text-rose-800",
  },
  {
    icon: BrainCircuit ,
    name: "ML/AI",
    tech: "TensorFlow, PyTorch, LLM",
    description: "Training and deploying machine learning models for various applications.",
    color: "text-rose-900",
  },
  {
    icon: Code,
    name: "Language",
    tech: "Java, Python, C/C++, JavaScript, Go",
    description: "Proficient in various programming languages for diverse application development.",
    color: "text-rose-500",
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-red-50 to-neutral-100 dark:from-gray-900 dark:via-red-950 dark:to-gray-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

