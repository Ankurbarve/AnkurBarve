"use client"

import type { LeadershipTopic } from "@/lib/portfolio-data"

interface LeadershipModalProps {
  topic: LeadershipTopic | null
  onClose: () => void
}

export function LeadershipModal({ topic, onClose }: LeadershipModalProps) {
  if (!topic) return null

  const sections = [
    { label: "Situation", content: topic.situation, bg: "bg-blue-50", border: "border-sky", text: "text-blue-700" },
    { label: "Task", content: topic.task, bg: "bg-yellow-50", border: "border-yellow", text: "text-yellow-700" },
    { label: "Action", content: topic.action, bg: "bg-green-50", border: "border-green-400", text: "text-green-700" },
    { label: "Result", content: topic.result, bg: "bg-orange-50", border: "border-primary", text: "text-orange-700" },
  ]

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
        <h2 className="font-serif text-2xl font-bold mb-3 text-foreground">{topic.question}</h2>
        <p className="text-base mb-8 italic text-muted-foreground">{topic.context}</p>

        <div className="space-y-4">
          {sections.map((s, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl border-l-4 ${s.bg} ${s.border}`}
            >
              <span className={`text-xs font-bold tracking-wide uppercase ${s.text}`}>
                {s.label}
              </span>
              <p className="text-sm leading-relaxed mt-2 text-foreground">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 rounded-xl bg-secondary border border-border">
          <span className="text-sm font-bold text-secondary-foreground">
            My Principle
          </span>
          <p className="text-base leading-relaxed mt-2 text-foreground font-medium">
            {topic.principle}
          </p>
        </div>
      </div>
    </div>
  )
}
