import { howIWork } from "@/lib/portfolio-data"

export function HowIWorkSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          How I Work
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          My approach to.. building products that actually make a difference.
        </p>
        <div className="grid sm:grid-cols-3 gap-8">
          {howIWork.map((w, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{w.icon}</span>
              </div>
              <h3 className="font-serif text-lg font-bold mb-3 text-foreground">{w.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
