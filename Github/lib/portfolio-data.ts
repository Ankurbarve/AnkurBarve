export interface CaseStudyResult {
  metric: string
  detail: string
}

export interface CaseStudy {
  id: string
  tag: string
  title: string
  summary: string
  problem: string
  approach: string[]
  results: CaseStudyResult[]
  impact: string
  techStack: string[]
}

export interface LeadershipTopic {
  id: string
  question: string
  context: string
  situation: string
  task: string
  action: string
  result: string
  principle: string
}

export const metrics = [
  { value: "15+", label: "Years Experience", icon: "📈" },
  { value: "60%", label: "Processing Time Reduced", icon: "⚡" },
  { value: "$2.7M", label: "Annual Cost Savings", icon: "💰" },
  { value: "9→1", label: "Systems Consolidated", icon: "🔗" },
  { value: "19K+", label: "Users on Platform", icon: "👥" },
  { value: "94%", label: "Cost Saved (AI Build)", icon: "🤖" },
]

export const caseStudies: CaseStudy[] = [
  {
    id: "fmv",
    tag: "BUY VS. BUILD",
    title: "AI-Driven Fair Market Value Assessment",
    summary: "Replaced a $250K vendor quote with a $15K in-house AI-powered solution that reduced assessment time by 60% across all business units.",
    problem: "Fair Market Value (FMV) assessment was entirely manual — directors spent ~10 days per cycle cross-referencing vendor proposals against benchmark Excel data. Each proposal had ~10 line items to assess. No scalability path existed beyond one business unit.",
    approach: [
      "Initiated a structured buy vs. build evaluation against the $250K vendor quote",
      "Requested and obtained a Vercel V0 license, self-trained on the platform",
      "Built the complete solution: React frontend via V0, Supabase backend, OpenAI LLM via AI gateway",
      "Designed Excel-based bi-annual data ingestion pipeline with full parsing strategy and error handling",
      "Implemented human-in-the-loop design — multiple AI-generated descriptions for reviewers to choose from",
      "Architected for multi-BU scalability from day one",
    ],
    results: [
      { metric: "$250K → $15K", detail: "94% cost reduction vs. vendor quote" },
      { metric: "60%", detail: "Reduction in director assessment time" },
      { metric: "10 → 4 days", detail: "Assessment turnaround improvement" },
      { metric: "~75%", detail: "Decrease in data errors" },
      { metric: "6 BUs", detail: "Organic cross-BU adoption after single demo" },
    ],
    impact: "Presented this use case to executive leadership, proposing an AI-first mentality for the organization. Leadership agreed — currently building a predictive model prototype for IIR approval cycle optimization.",
    techStack: ["React", "Vercel V0", "Supabase", "OpenAI LLM", "GitHub", "Excel Data Pipeline"],
  },
  {
    id: "consolidation",
    tag: "PLATFORM TRANSFORMATION",
    title: "Post-Acquisition Enterprise Platform Consolidation",
    summary: "Unified 9 legacy systems into one platform across 6 business units, saving $2.7M annually and designing a governance model adopted org-wide.",
    problem: "Following Takeda's acquisition of Shire, the combined organization inherited 9 separate legacy systems managing overlapping Medical Affairs workflows. Annual licensing costs totaled ~$5M with significant redundancy. Each of the 6 business units operated under different SOPs, creating conflicts when forced onto a shared platform.",
    approach: [
      "Mapped capabilities of all 9 legacy systems against functional requirements of every business unit",
      "Led platform selection, vendor negotiation, and migration roadmap for the unified solution",
      "Engaged Ethics & Compliance, Legal, Finance, and BU leaders to harmonize SOPs",
      "Built phased customization plan addressing each BU's priorities sequentially",
      "Designed governance model: 3 stakeholder groups, bi-weekly functional meetings, monthly cross-functional sessions",
      "Prepared and circulated decision decks before every meeting — stakeholders arrived ready to decide, not discover",
    ],
    results: [
      { metric: "9 → 1", detail: "Legacy systems consolidated to single platform" },
      { metric: "54%", detail: "Licensing cost reduction ($5M → $2.3M)" },
      { metric: "$2.7M", detail: "Annual savings achieved" },
      { metric: "6 BUs", detail: "Aligned on shared platform with governance" },
      { metric: "19K+", detail: "Users migrated to unified platform" },
    ],
    impact: "The governance framework was adopted as a reference model by other complex platform teams within the organization. Cross-BU dynamics shifted from conflict-driven to genuinely collaborative within 6 months.",
    techStack: ["iEnvision", "Veeva", "SAP", "Power BI", "Jira", "Confluence"],
  },
  {
    id: "chatbot",
    tag: "AI / CONVERSATIONAL",
    title: "AI-Powered SAP Chatbot for Payment Tracking",
    summary: "Designed and deployed a conversational AI chatbot that eliminated manual payment status follow-ups for global stakeholders.",
    problem: "Global stakeholders across Medical Affairs needed to track payment statuses for grants, sponsorships, and vendor contracts. The process required manual follow-ups with finance teams, creating delays, redundant communication, and poor visibility into payment timelines.",
    approach: [
      "Identified the pain point through stakeholder interviews and support ticket analysis",
      "Designed a conversational AI interface integrated with SAP payment data",
      "Defined user flows for common queries: payment status, expected dates, escalation paths",
      "Worked with engineering to build the chatbot with natural language understanding",
      "Piloted with one business unit, iterated based on feedback, then rolled out globally",
    ],
    results: [
      { metric: "80%+", detail: "Reduction in manual payment follow-up inquiries" },
      { metric: "Real-time", detail: "Payment visibility for global stakeholders" },
      { metric: "24/7", detail: "Self-serve access replacing business-hours-only support" },
    ],
    impact: "Transformed a high-friction, manual process into an on-demand self-serve experience — demonstrating how conversational AI can improve transparency and reduce operational burden in enterprise workflows.",
    techStack: ["SAP Integration", "NLP", "Conversational AI", "API Gateway"],
  },
  {
    id: "geo",
    tag: "WORKFLOW AUTOMATION",
    title: "API-Driven GEO Workflow Automation",
    summary: "Eliminated manual data entry in clinical research workflows through API integrations, saving 57 hours annually with improved data accuracy.",
    problem: "GEO (Grants Evaluation & Oversight) workflows required coordinators to manually enter data across multiple systems for each research study submission. This was error-prone, time-consuming, and created bottlenecks as submission volume grew.",
    approach: [
      "Mapped the end-to-end GEO workflow to identify manual touchpoints and data handoff gaps",
      "Designed API-driven integrations to automatically sync data between enterprise systems",
      "Defined data validation rules and error handling to ensure accuracy and compliance",
      "Coordinated with engineering on phased rollout — starting with highest-volume workflows",
      "Measured adoption and error rates post-launch to quantify impact",
    ],
    results: [
      { metric: "57 hrs/yr", detail: "Annual time savings from eliminated manual entry" },
      { metric: "~0%", detail: "Data entry errors post-automation" },
      { metric: "100%", detail: "Adoption across targeted GEO workflows" },
    ],
    impact: "Proved the value of API-first integration strategy for Medical Affairs, leading to broader adoption of automated data flows across other platform modules.",
    techStack: ["REST APIs", "iEnvision", "SAP", "Data Validation Engine"],
  },
  {
    id: "synthesia",
    tag: "AI / CONTENT",
    title: "AI-Generated Training Content with Synthesia",
    summary: "Replaced traditional video production with AI-powered training content, saving ~$40K while improving onboarding quality at global scale.",
    problem: "Onboarding and training for the global Medical Affairs platform required video content that was expensive to produce, slow to update, and difficult to localize. Traditional production cycles took weeks and cost thousands per module.",
    approach: [
      "Evaluated AI video generation platforms and selected Synthesia for enterprise training use cases",
      "Developed a content strategy covering platform workflows, compliance procedures, and best practices",
      "Created AI-generated training videos with consistent presenter, multi-language support capability",
      "Built a self-serve training library accessible to all business units globally",
      "Measured engagement and comprehension metrics post-launch",
    ],
    results: [
      { metric: "~$40K", detail: "Cost savings vs. traditional video production" },
      { metric: "Days → Hours", detail: "Content creation cycle time reduction" },
      { metric: "Global", detail: "Scalable across all 6 business units" },
    ],
    impact: "Established AI-generated content as a viable, cost-effective alternative to traditional production — another proof point in the broader AI-first transformation narrative presented to executive leadership.",
    techStack: ["Synthesia", "AI Video Generation", "LMS Integration"],
  },
  {
    id: "rpa",
    tag: "RPA / AUTOMATION",
    title: "RPA Bots for Coordinator Workflows & Translation",
    summary: "Deployed RPA bots to automate repetitive coordinator tasks and translation workflows, reducing manual effort and improving throughput.",
    problem: "Coordinators across Medical Affairs spent significant time on repetitive, rule-based tasks — data transfers between systems, status updates, and document translation coordination. These tasks were low-judgment but high-volume, creating bottlenecks during peak submission periods.",
    approach: [
      "Conducted time-motion analysis to identify highest-impact automation opportunities",
      "Designed RPA workflows for coordinator task automation — data transfers, status syncing, and report generation",
      "Built a separate RPA bot for translation workflow management — automating document routing, vendor assignment, and status tracking",
      "Defined exception handling rules for cases requiring human intervention",
      "Piloted with one team, measured time savings, then expanded",
    ],
    results: [
      { metric: "70%+", detail: "Reduction in manual coordinator task time" },
      { metric: "2x", detail: "Throughput improvement during peak periods" },
      { metric: "Near-zero", detail: "Error rate on automated workflows" },
    ],
    impact: "Freed coordinator capacity for higher-value work and established RPA as a scalable automation layer within the Medical Affairs technology stack.",
    techStack: ["RPA", "Process Automation", "Workflow Design", "Exception Handling"],
  },
]

export const leadershipTopics: LeadershipTopic[] = [
  {
    id: "conflict",
    question: "How do you resolve conflicts between stakeholders with competing priorities?",
    context: "At Takeda, after consolidating 9 legacy systems into one platform, 6 business units with different SOPs were forced to share a single system. Requirement conflicts were severe — one BU's priority directly contradicted another's.",
    situation: "Post-acquisition, each business unit had its own SOPs, legal templates, and approval workflows. When we rolled out the unified platform, BU leaders started escalating conflicting requirements — some wanted customization that would break workflows for others.",
    task: "I needed to create a sustainable model that resolved immediate conflicts while preventing future ones — without letting any single BU dominate the roadmap.",
    action: "I designed a structured governance approach: first, I engaged Ethics & Compliance, Legal, Finance, and all BU leaders to harmonize SOPs wherever possible. Then I mapped the remaining gaps and built a phased customization plan. I segmented stakeholders into 3 functional groups and set up bi-weekly meetings for each, plus monthly cross-functional sessions. The key: I always came prepared with proposals and options — stakeholders selected from vetted paths rather than debating from scratch. Conflicts were resolved with data-backed facts and realistic next steps.",
    result: "Within 6 months, cross-BU dynamics shifted from adversarial to genuinely collaborative. Stakeholders started proactively engaging and building relationships. My governance model was adopted as a reference framework by other complex platforms in the organization.",
    principle: "Come with options, not open questions. When you prepare the decision framework, stakeholders align faster because they're choosing — not creating from zero.",
  },
  {
    id: "success",
    question: "How do you measure product success?",
    context: "When I built the AI-driven FMV assessment tool, I needed to define success in a way that would convince executive leadership to fund an AI-first strategy for the entire organization.",
    situation: "We had a $250K vendor quote for FMV automation. I proposed building in-house with AI tooling for a fraction of the cost. Leadership was skeptical — I needed concrete metrics to prove the approach worked.",
    task: "Define and track success metrics that would demonstrate both immediate product value and strategic organizational impact.",
    action: "I established a multi-layered measurement framework: (1) Cost efficiency — $15K build vs. $250K quote, 94% savings. (2) Time impact — assessment turnaround from 10 days to under 4 days, 60% reduction in director time. (3) Quality — ~75% decrease in data errors through automated matching. (4) Adoption — tracked cross-BU demand after initial demo; organic adoption across all 6 BUs validated product-market fit. (5) Strategic impact — used these results to build the business case for an org-wide AI-first strategy.",
    result: "Every metric exceeded targets. The measurable results gave me the credibility to present to VP and SVP stakeholders and secure buy-in for the AI-first approach. I'm now leading a second AI prototype (IIR predictive model) that was funded directly because of these proven outcomes.",
    principle: "Layer your metrics: operational (time, cost, errors), adoption (usage, demand), and strategic (does this change how the org thinks?). The strongest proof of product success is when it creates pull for the next product.",
  },
  {
    id: "influence",
    question: "How do you influence without direct authority?",
    context: "Driving AI adoption across a global pharmaceutical organization where I had no direct reports and stakeholders ranged from coordinators to SVPs.",
    situation: "I saw the opportunity to use AI tooling (Vercel V0, OpenAI) to dramatically reduce cost and time-to-value for Medical Affairs products. But I had no formal authority to mandate AI adoption — I needed to convince leadership, engineering, compliance, and business teams to support this shift.",
    task: "Build organizational momentum for an AI-first product strategy without positional authority.",
    action: "I started by building proof, not presentations. I self-trained on V0, built the FMV tool myself, and created a working demo — not a slide deck. I then demoed the working product to one BU first, letting the results speak. When other BUs saw the demo and wanted it, I had organic demand as leverage. For executive buy-in, I prepared a formal business case with specific cost comparisons ($250K vs. $15K), time savings (60%), and error reduction (75%). I also created AI-generated training content using Synthesia to show AI's breadth beyond just product building.",
    result: "Leadership approved the AI-first approach. I am now trusted as the AI product innovation lead within Medical Affairs, and I'm building the next prototype. The key was showing, not telling — a working product is the most persuasive argument.",
    principle: "Build proof, not decks. A working prototype that people can touch and react to is worth more than any strategy document. Let results create pull, then formalize the strategy.",
  },
  {
    id: "ambiguity",
    question: "How do you operate in ambiguity?",
    context: "Post-acquisition at Takeda, there was no playbook for consolidating 9 disparate Medical Affairs systems into one platform across 6 business units in different regions with different regulatory requirements.",
    situation: "After the Shire acquisition, I inherited a landscape with no clear target architecture, no unified requirements, no governance model, and stakeholders who didn't yet know each other. The only certainty was that 9 systems were unsustainable.",
    task: "Create clarity and a path forward in an environment where almost nothing was defined.",
    action: "I started with what I could control: mapping all 9 systems' capabilities against every BU's functional requirements. This created the first shared artifact everyone could react to. From there, I facilitated SOP alignment sessions to find common ground before tackling differences. I built the phased customization plan to give each BU a clear timeline for when their specific needs would be addressed. And I established the governance cadence to create a predictable rhythm in an unpredictable environment. Every meeting had a pre-circulated deck so stakeholders always knew what was coming.",
    result: "Reduced licensing costs by 54% ($2.7M/year), successfully migrated 19,000+ users to a single platform, and created a governance model that turned chaos into collaborative, data-driven decision-making.",
    principle: "In ambiguity, your first job is to create a shared artifact — a map, a document, a prototype — that gives people something to react to. Clarity doesn't come from thinking harder; it comes from making something visible.",
  },
  {
    id: "prioritization",
    question: "How do you prioritize when everything is urgent?",
    context: "Managing a platform shared by 6 business units, each with their own urgent requirements, compliance deadlines, and leadership pressure.",
    situation: "After consolidating onto a single platform, every BU had a backlog of critical requests. Compliance deadlines, user experience issues, and new feature requests all competed for the same engineering bandwidth. Everyone's ask was 'priority one.'",
    task: "Create a transparent, fair prioritization framework that stakeholders would accept and that would maximize business impact.",
    action: "I introduced a structured approach: first, I segmented all requests by functional area (grants, research, publications) so each group debated within their domain in bi-weekly meetings. Then, in the monthly cross-functional meeting, I presented a platform-wide view with my recommended prioritization based on: (1) compliance/regulatory risk, (2) number of users impacted, (3) business revenue impact, and (4) implementation effort. I always came with a proposed stack rank and the rationale. Stakeholders could challenge with data, but they couldn't just assert urgency without evidence.",
    result: "The framework reduced prioritization debates by roughly 70%. Stakeholders trusted the process because it was transparent and data-driven. Engineering teams could plan sprints with confidence because priorities were stable between governance cycles.",
    principle: "Make the framework visible and the criteria explicit. When everyone knows the rules, 'everything is urgent' becomes 'here's where this falls and why.' Your job as PM is to absorb the pressure so engineering doesn't have to.",
  },
  {
    id: "failure",
    question: "Tell me about a time something failed and what you learned.",
    context: "The initial rollout of the unified platform post-acquisition — before I implemented the governance model.",
    situation: "After consolidating 9 legacy systems into one platform, we rolled it out across all 6 business units. But we did it without a formal governance process. Almost immediately, severe conflicts erupted — BUs had different SOPs, and changes for one unit would break workflows for another. The platform was live but the organization was in chaos.",
    task: "Diagnose why the rollout created more problems than it solved, and fix it without destabilizing the platform further.",
    action: "I owned the failure openly — the rollout was technically successful but organizationally premature. I paused feature development to focus on governance. I brought in Ethics & Compliance, Legal, and Finance to align SOPs before adding any more customization. I designed the segmented governance model with bi-weekly and monthly cadences. And I changed my own approach: instead of shipping features and hoping for alignment, I started pre-circulating decision decks and showing up with options.",
    result: "The governance model resolved the conflicts within 6 months and became a reference framework. The lesson: a successful technical deployment without organizational readiness isn't actually a success. Now I always plan governance and change management as part of the rollout — not after it.",
    principle: "Ship the process alongside the product. Technical go-live without organizational readiness is just creating a more expensive problem. The best PMs know that adoption planning IS the product strategy.",
  },
]

export const howIWork = [
  {
    icon: "🤖",
    title: "AI-First Builder",
    desc: "I use Vercel V0, OpenAI, and other AI tools to build working prototypes — not just wireframes. If I can validate an idea by shipping a working version for $15K instead of buying a $250K solution, I will.",
  },
  {
    icon: "🏗️",
    title: "Platform Thinker",
    desc: "I design for scale from day one. Whether it's consolidating 9 systems into 1 or architecting a multi-BU governance model, I think in systems — not features.",
  },
  {
    icon: "🤝",
    title: "Governance Designer",
    desc: "I come to every meeting with proposals, not open questions. I segment stakeholders, pre-circulate decisions, and resolve conflicts with data. My governance frameworks get adopted by other teams.",
  },
]
