"use client"

import { leadershipTopics, type LeadershipTopic } from "@/lib/portfolio-data"

function LeadershipCard({
  topic,
  onClick,
}: {
  topic: LeadershipTopic
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className="p-6 rounded-2xl border border-border bg-card cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-yellow"
    >
      <h3 className="font-serif text-lg font-bold mb-3 text-foreground">{topic.question}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{topic.context}</p>
      <span className="text-sm font-semibold mt-4 inline-flex items-center gap-1 text-primary">
        My approach
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </div>
  )
}

interface LeadershipSectionProps {
  onSelectTopic: (topic: LeadershipTopic) => void
}

export function LeadershipSection({ onSelectTopic }: LeadershipSectionProps) {
  return (
    <section id="leadership" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          Product Leadership
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          How I think about the hard problems. Click to see my approach.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipTopics.map((t) => (
            <LeadershipCard key={t.id} topic={t} onClick={() => onSelectTopic(t)} />
          ))}
        </div>
      </div>
    </section>
  )
}
