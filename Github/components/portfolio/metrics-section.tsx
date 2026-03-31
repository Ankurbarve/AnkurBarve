import { metrics } from "@/lib/portfolio-data"

function MetricCard({
  value,
  label,
  index,
}: {
  value: string
  label: string
  icon: string
  index: number
}) {
  return (
    <div
      className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className="text-3xl sm:text-4xl font-serif font-bold text-primary">{value}</span>
      <span className="text-sm text-center mt-2 text-muted-foreground">{label}</span>
    </div>
  )
}

export function MetricsSection() {
  return (
    <section id="work" className="py-20 px-4 bg-warm-gray">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          Impact by the Numbers
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Real results from real projects. Here&apos;s what I&apos;ve helped achieve.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m, i) => (
            <MetricCard key={i} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
