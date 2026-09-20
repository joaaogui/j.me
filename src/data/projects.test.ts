import { describe, expect, it } from "vitest";
import { projects } from "./projects";

describe("portfolio projects", () => {
  it("marks Clash and Brawl as personal demos", () => {
    const clash = projects.find((p) => p.title === "Clash Deck Advisor");
    const brawl = projects.find((p) => p.title === "Brawl Account Coach");
    expect(clash?.kind).toBe("Personal demo");
    expect(brawl?.kind).toBe("Personal demo");
  });

  it("keeps catalog tools public", () => {
    const publicTitles = [
      "Listening Habits",
      "Verity",
      "YouTube Analyzer",
      "Spotify Popularity",
      "IMDb Best Season",
    ];
    for (const title of publicTitles) {
      expect(projects.find((p) => p.title === title)?.kind).toBe("Public tool");
    }
  });

  it("uses joaog.space hosts", () => {
    for (const project of projects) {
      expect(project.host.endsWith(".joaog.space") || project.host === "joaog.space").toBe(
        true,
      );
      expect(project.url).toMatch(/^https:\/\//);
    }
  });
});
