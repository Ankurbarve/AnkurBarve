"use client"

import { useState, useEffect } from "react"
import { Nav } from "@/components/portfolio/nav"
import { HeroSection } from "@/components/portfolio/hero-section"
import { MetricsSection } from "@/components/portfolio/metrics-section"
import { HowIWorkSection } from "@/components/portfolio/how-i-work-section"
import { CaseStudiesSection } from "@/components/portfolio/case-studies-section"
import { LeadershipSection } from "@/components/portfolio/leadership-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"
import { CaseStudyModal } from "@/components/portfolio/case-study-modal"
import { LeadershipModal } from "@/components/portfolio/leadership-modal"
import { caseStudies, leadershipTopics } from "@/lib/portfolio-data"
import type { CaseStudy, LeadershipTopic } from "@/lib/portfolio-data"

export default function Portfolio() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<LeadershipTopic | null>(null)
  const [activeSection, setActiveSection] = useState("about")

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.3 }
    )
    const sections = ["about", "metrics", "case-studies", "leadership", "contact"]
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav activeSection={activeSection} onNav={scrollTo} />
      <HeroSection />
      <MetricsSection />
      <HowIWorkSection />
      <CaseStudiesSection onSelectStudy={setSelectedStudy} />
      <LeadershipSection onSelectTopic={setSelectedTopic} />
      <ContactSection />
      <Footer />
      <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
      <LeadershipModal topic={selectedTopic} onClose={() => setSelectedTopic(null)} />
    </div>
  )
}
