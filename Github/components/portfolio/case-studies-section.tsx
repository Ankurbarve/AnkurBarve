"use client"

import { caseStudies, type CaseStudy } from "@/lib/portfolio-data"

function CaseStudyCard({
  study,
  onClick,
}: {
  study: CaseStudy
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className="p-6 rounded-2xl border border-border bg-card cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary"
    >
      <span className="text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
        {study.tag}
      </span>
      <h3 className="font-serif text-xl font-bold mt-4 mb-3 text-foreground">{study.title}</h3>
      <p className="text-sm leading-relaxed mb-4 text-muted-foreground">{study.summary}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {study.results.slice(0, 3).map((r, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-warm-gray text-foreground font-medium">
            {r.metric}
          </span>
        ))}
      </div>
      <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
        Read the story
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </div>
  )
}

interface CaseStudiesSectionProps {
  onSelectStudy: (study: CaseStudy) => void
}

export function CaseStudiesSection({ onSelectStudy }: CaseStudiesSectionProps) {
  return (
    <section id="case-studies" className="py-20 px-4 bg-warm-gray">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-coral" />
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Case Studies</span>
        </div>
        
        {/* Section headline */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-12 text-foreground">
          Selected work, <span className="italic font-normal text-muted-foreground">latest first</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((s) => (
            <CaseStudyCard key={s.id} study={s} onClick={() => onSelectStudy(s)} />
          ))}
        </div>
      </div>
    </section>
  )
}
