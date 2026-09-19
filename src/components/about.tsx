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
        <span className="text-foreground">Software engineer at Nubank</span>,
        building the small public tools on this site alongside the platforms
        at work. Previously staff engineer at deX Labs.
      </p>
    </motion.section>
  )
}

