"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <motion.div
      className="fixed right-4 top-20 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="relative"
        >
          <List className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle outline</span>
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1">
                {sections.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleClick(id)}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors duration-300 ${activeSection === id
                      ? "text-red-600 dark:text-red-400 bg-gray-100 dark:bg-gray-700"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

