"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Youtube Analyzer",
    description: "Analytics tool ranking videos by popularity and engagement.",
    url: "https://youtube.joaog.space",
    techs: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Spotify Popularity",
    description: "Search for your favorite artist and instantly discover their trending tracks.",
    url: "https://spotify.joaog.space",
    techs: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "IMDB Best Season",
    description: "Discover the highest-rated seasons of any TV show.",
    url: "https://imdb.joaog.space",
    techs: ["React", "TypeScript", "Tailwind"],
  },
]

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-xs font-medium uppercase tracking-wider text-muted mb-6 lg:mb-8">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            className="group block p-5 rounded-xl border border-border bg-background hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
            </div>
            
            <p className="text-sm text-muted mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-1.5">
              {project.techs.map((tech) => (
                <Badge key={tech} variant="default" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
