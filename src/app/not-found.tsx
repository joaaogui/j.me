import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-16 flex items-center">
      <div className="max-w-xl mx-auto py-20">
        <p className="text-xs font-medium uppercase tracking-wider text-muted mb-3">
          404
        </p>
        <h1
          className="text-3xl md:text-4xl font-serif tracking-tight mb-3"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          Page not found
        </h1>
        <p className="text-muted leading-relaxed mb-8">
          That route is not part of joaog.space. Head back to the homepage or open one of the tools listed there.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center min-h-11 px-5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Back to joaog.space
        </Link>
      </div>
    </main>
  )
}
