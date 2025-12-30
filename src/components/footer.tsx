"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer 
      className="mt-auto pt-8 text-xs text-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <p>
        © {new Date().getFullYear()} · Built with{" "}
        <a 
          href="https://nextjs.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Next.js
        </a>
        {" "}·{" "}
        <a 
          href="https://github.com/joaaogui/j.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Source
        </a>
      </p>
    </motion.footer>
  )
}
