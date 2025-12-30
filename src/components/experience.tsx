"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Nubank",
    role: "Software Engineer",
    period: "2025 – Present",
  },
  {
    company: "deX Labs",
    role: "Staff Software Engineer",
    period: "2023 – 2025",
  },
  {
    company: "Octadesk",
    role: "Software Engineer",
    period: "2020 – 2023",
  },
]

export function Experience() {
  return (
    <motion.section 
      className="mb-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <h2 className="text-xs font-medium uppercase tracking-wider text-muted mb-4">
        Experience
      </h2>
      
      <div className="space-y-2">
        {experiences.map((exp) => (
          <div 
            key={exp.company} 
            className="flex items-baseline justify-between text-sm"
          >
            <span>
              <span className="text-foreground font-medium">{exp.company}</span>
              <span className="text-muted"> · {exp.role}</span>
            </span>
            <span className="text-muted text-xs">{exp.period}</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
