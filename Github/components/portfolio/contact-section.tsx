export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-warm-gray">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-foreground">
          {"Let's work together!"}
        </h2>
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          {"I'm exploring Senior Product Manager and Associate Director opportunities in healthcare, life sciences, and enterprise SaaS. NYC, Cambridge MA, West Coast, or remote — I'm flexible."}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:AnkurBarve@Hotmail.com"
            className="px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105 bg-primary text-white shadow-lg"
          >
            Drop me an email
          </a>
          <a
            href="https://linkedin.com/in/ankur-barve"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full text-base font-semibold border-2 border-foreground text-foreground transition-all hover:scale-105 hover:bg-foreground hover:text-background"
          >
            Connect on LinkedIn
          </a>
        </div>
        <p className="text-sm mt-8 text-muted-foreground">
          +1-971-277-8212 · New Jersey, USA · Open to Relocation
        </p>
      </div>
    </section>
  )
}
