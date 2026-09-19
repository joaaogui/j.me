"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Clash Deck Advisor",
    description: "A collection-aware Clash Royale coach. It keeps a deck's archetype and only recommends swaps the account can actually play.",
    url: "https://clash.joaog.space",
    host: "clash.joaog.space",
  },
  {
    title: "Brawl Account Coach",
    description: "Account analysis for Brawl Stars: what to upgrade, where trophies are stuck, and which brawlers are worth pushing.",
    url: "https://brawl.joaog.space",
    host: "brawl.joaog.space",
  },
  {
    title: "Listening Habits",
    description: "A decade of Last.fm scrobbles, read for obsessions, discovery, and how taste changes over time.",
    url: "https://lastfm.joaog.space",
    host: "lastfm.joaog.space",
  },
  {
    title: "Verity",
    description: "Document checks that return a verdict in seconds instead of a pile of manual review.",
    url: "https://verity.joaog.space",
    host: "verity.joaog.space",
  },
  {
    title: "YouTube Analyzer",
    description: "Channel and video performance, ranked by what actually got watched rather than by upload date.",
    url: "https://youtube.joaog.space",
    host: "youtube.joaog.space",
  },
  {
    title: "Spotify Popularity",
    description: "Search an artist and see which tracks are carrying them right now.",
    url: "https://spotify.joaog.space",
    host: "spotify.joaog.space",
  },
  {
    title: "IMDb Best Season",
    description: "Episode ratings rolled up so the best season of a show is obvious.",
    url: "https://imdb.joaog.space",
    host: "imdb.joaog.space",
  },
]

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-6 lg:mb-8">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted">
          Projects
        </h2>
        <p className="mt-2 text-sm text-muted">
          Tools running on this domain.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.05 }}
            className="group block rounded-xl border border-border bg-background px-5 py-4 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent/80">
                  {project.host}
                </p>
              </div>
              <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
