"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="about" className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Photo with tagline below */}
          <div className="flex flex-col items-center flex-shrink-0">
            {/* Photo with yellow accent */}
            <div className="relative mb-4">
              <div className="absolute -inset-4 bg-yellow rounded-full -z-10 transform -rotate-12" />
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-warm-gray border-4 border-white shadow-lg overflow-hidden">
                <Image
                  src="/images/ankur-profile.png"
                  alt="Ankur Barve"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
            {/* Handwritten tagline below photo */}
            <Image
              src="/images/tagline.png"
              alt="AI is smart. I make it useful."
              width={280}
              height={40}
              className="mt-2 h-auto"
            />
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Open to opportunities badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm text-muted-foreground">Open to opportunities</span>
            </div>

            {/* Main headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-2">
              Ankur Barve
            </h1>
            <p className="text-lg font-medium text-primary mb-4">
              Senior Product Manager · Associate Director Level
            </p>

            {/* Subtitle */}
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-6">
              15+ years turning{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-coral bg-clip-text text-transparent font-semibold">
                complex enterprise workflows
              </span>{" "}
              into scalable, AI-powered platforms in healthcare and life sciences.
              I don&apos;t just write PRDs — I build working products with AI tooling, ship them, and prove ROI before asking for investment.
            </p>

            {/* Domain tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="text-coral font-medium">Healthcare</span>
              <span className="px-3 py-1 rounded-full bg-white border border-border text-sm text-foreground">Life Sciences</span>
              <span className="px-3 py-1 rounded-full bg-white border border-border text-sm text-foreground">Enterprise SaaS</span>
              <span className="text-coral font-medium">AI-Powered Platforms</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold transition-all hover:scale-105 bg-primary text-white shadow-md"
              >
                View my work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-full text-base font-semibold border-2 border-foreground text-foreground transition-all hover:scale-105 hover:bg-foreground hover:text-background"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
