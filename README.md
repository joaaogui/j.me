# João Guilherme - Portfolio

A minimal, elegant portfolio website built with modern web technologies.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Fonts**: Instrument Serif + Geist Sans

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout with fonts & metadata
│   ├── page.tsx      # Main portfolio page
│   └── globals.css   # Global styles
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── hero.tsx      # Hero section
│   ├── about.tsx     # About section
│   ├── experience.tsx # Experience timeline
│   ├── projects.tsx  # Projects grid
│   └── contact.tsx   # Contact section & footer
└── lib/
    └── utils.ts      # Utility functions
```

## Design Principles

- **Minimal & Clean**: Generous whitespace, focused content
- **Typography-First**: Elegant serif headings with modern sans-serif body
- **Subtle Interactions**: Smooth animations that enhance without distracting
- **Performance**: Static generation for instant load times

## Deployment

Deploy on [Vercel](https://vercel.com/) for optimal performance:

```bash
npm run build
```

## License

MIT

---

Built by [João Guilherme](https://linkedin.com/in/joaaogui)
