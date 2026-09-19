"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/joaaogui",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/joaaogui",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:joaaogui@gmail.com",
    icon: Mail,
  },
]

export function Hero() {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1
        className="text-3xl md:text-4xl font-serif tracking-tight mb-2"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
      >
        João Guilherme
      </h1>

      <p className="text-muted mb-4">
        Senior Software Engineer at <span className="text-foreground font-medium">Nubank</span>
      </p>

      <div className="flex gap-1">
        <TooltipProvider delayDuration={0}>
          {socialLinks.map((link) => (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-border-light transition-all duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </motion.section>
  )
}

