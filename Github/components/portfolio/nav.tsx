"use client"

interface NavProps {
  activeSection: string
  onNav: (section: string) => void
}

export function Nav({ activeSection, onNav }: NavProps) {
  const links = [
    { label: "About", id: "about" },
    { label: "Work", id: "metrics" },
    { label: "Case Studies", id: "case-studies" },
    { label: "Leadership", id: "leadership" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-foreground">Ankur Barve</span>
        <div className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => onNav(l.id)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === l.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:AnkurBarve@Hotmail.com"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-primary text-white transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  )
}
