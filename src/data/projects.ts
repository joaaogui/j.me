export type ProjectKind = "Personal demo" | "Public tool";

export interface ProjectEntry {
  title: string;
  description: string;
  url: string;
  host: string;
  kind: ProjectKind;
}

export const projects: ProjectEntry[] = [
  {
    title: "Clash Deck Advisor",
    description:
      "Personal Clash Royale report for one account. Collection-aware swaps that keep the deck's archetype.",
    url: "https://clash.joaog.space",
    host: "clash.joaog.space",
    kind: "Personal demo",
  },
  {
    title: "Brawl Account Coach",
    description:
      "Personal Brawl Stars dossier for one account: upgrades, trophy pushes, and a next-session plan.",
    url: "https://brawl.joaog.space",
    host: "brawl.joaog.space",
    kind: "Personal demo",
  },
  {
    title: "Listening Habits",
    description:
      "A decade of Last.fm scrobbles, read for obsessions, discovery, and how taste changes over time.",
    url: "https://lastfm.joaog.space",
    host: "lastfm.joaog.space",
    kind: "Public tool",
  },
  {
    title: "Verity",
    description:
      "Document checks that return a verdict in seconds instead of a pile of manual review.",
    url: "https://verity.joaog.space",
    host: "verity.joaog.space",
    kind: "Public tool",
  },
  {
    title: "YouTube Analyzer",
    description:
      "Channel and video performance, ranked by what actually got watched rather than by upload date.",
    url: "https://youtube.joaog.space",
    host: "youtube.joaog.space",
    kind: "Public tool",
  },
  {
    title: "Spotify Popularity",
    description: "Search an artist and see which tracks are carrying them right now.",
    url: "https://spotify.joaog.space",
    host: "spotify.joaog.space",
    kind: "Public tool",
  },
  {
    title: "IMDb Best Season",
    description: "Episode ratings rolled up so the best season of a show is obvious.",
    url: "https://imdb.joaog.space",
    host: "imdb.joaog.space",
    kind: "Public tool",
  },
];

export const PROJECTS = projects;
