"use client"

import type { CaseStudy } from "@/lib/portfolio-data"

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-6">
      <h4 className="font-serif text-lg font-bold mb-3 text-foreground">
        {title}
      </h4>
      {typeof children === "string" ? (
        <p className="text-sm leading-relaxed text-muted-foreground">{children}</p>
      ) : (
        children
      )}
    </div>
  )
}

interface CaseStudyModalProps {
  study: CaseStudy | null
  onClose: () => void
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  if (!study) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4 bg-foreground/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl border border-border p-8 relative bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-warm-gray flex items-center justify-center text-lg hover:bg-border transition-colors text-muted-foreground"
        >
          x
        </button>
        <span className="text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
          {study.tag}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-4 mb-3 text-foreground">{study.title}</h2>
        <p className="text-base mb-8 text-muted-foreground">{study.summary}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {study.results.map((r, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-warm-gray">
              <div className="text-xl font-serif font-bold text-primary">{r.metric}</div>
              <div className="text-xs text-muted-foreground mt-1">{r.detail}</div>
            </div>
          ))}
        </div>

        <Section title="The Problem">{study.problem}</Section>
        <Section title="My Approach">
          <ul className="space-y-3">
            {study.approach.map((a, i) => (
              <li key={i} className="text-sm flex gap-3 text-muted-foreground">
                <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {a}
              </li>
            ))}
          </ul>
        </Section>
        <Section title="The Impact">{study.impact}</Section>
        <Section title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((t, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full bg-warm-gray text-foreground font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
