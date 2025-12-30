"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <motion.section 
      className="mb-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
    >
      <p className="text-muted leading-relaxed">
      <span className="text-foreground">7+ years</span> of building high-performance platforms.
      
        Focused on analytics-driven development and polished user experiences.
      </p>
    </motion.section>
  )
}
