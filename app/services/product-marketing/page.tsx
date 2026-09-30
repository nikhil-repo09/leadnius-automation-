"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronRight,
  Compass,
  FileText,
  Layers,
  Lightbulb,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";
import Footer from "@/components/Footer";
import { servicesOrder } from "@/lib/services";

const connectedSystemNodes = [
  { label: "Product", desc: "Core Technology & Features", icon: Layers, color: "from-blue-500 to-cyan-500" },
  { label: "Customer Problem", desc: "Real Friction & Pain Points", icon: AlertCircle, color: "from-amber-500 to-orange-500" },
  { label: "Value", desc: "Clear Business Outcomes", icon: Lightbulb, color: "from-emerald-500 to-teal-500" },
  { label: "Market", desc: "Target Buyer Alignment", icon: Compass, color: "from-indigo-500 to-purple-500" },
  { label: "Growth", desc: "Scalable Pipeline & Revenue", icon: TrendingUp, color: "from-blue-600 to-violet-600" },
];

const problemPoints = [
  "Customers do not immediately understand what the product does.",
  "Product features are explained, but customer value is unclear.",
  "Marketing and sales teams use different messages.",
  "The website focuses on capabilities instead of business outcomes.",
  "The product is valuable but difficult to differentiate.",
  "Product launches do not create enough market attention.",
];

const servicePillars = [
  { number: "01", title: "Customer and Market Research", description: "Understand the ideal customer, buyer needs, market opportunities, decision-making factors, and challenges that influence purchase decisions.", icon: Search, badge: "Insight Gathering" },
  { number: "02", title: "Product Positioning", description: "Define who the product is for, what problem it solves, why it matters, and how it should stand apart from existing alternatives.", icon: Target, badge: "Strategic Foundation" },
  { number: "03", title: "Product Messaging", description: "Create a clear messaging system that connects product capabilities with customer needs, business value, and measurable outcomes.", icon: Sparkles, badge: "Narrative System" },
  { number: "04", title: "Competitive Insights", description: "Study the competitive landscape to identify market gaps, differentiation opportunities, and stronger positioning directions.", icon: BarChart3, badge: "Market Analysis" },
  { number: "05", title: "Website and Product Content", description: "Improve website messaging, product pages, landing pages, solution pages, and conversion-focused content.", icon: FileText, badge: "Content Strategy" },
  { number: "06", title: "Sales and Launch Enablement", description: "Create practical product materials that support sales conversations, product launches, campaigns, and customer communication.", icon: Rocket, badge: "GTM Readiness" },
];

const approachSteps = [
  { num: "01", title: "Understand", desc: "Learn about the product, business model, customers, market, competitors, and growth goals.", details: ["Stakeholder interviews", "Technical deep-dive", "Market context mapping"] },
  { num: "02", title: "Clarify", desc: "Identify the most valuable customer segments, core customer problems, product advantages, and market opportunities.", details: ["Segment prioritization", "Buyer pain audits", "Value hypothesis"] },
  { num: "03", title: "Position", desc: "Build a clear position that explains where the product fits, who it serves, and why customers should choose it.", details: ["Category framing", "Differentiation pillar", "Market stance"] },
  { num: "04", title: "Communicate", desc: "Create product messaging, narratives, website content, sales materials, and campaign communication.", details: ["Messaging matrix", "Story architecture", "Collateral drafting"] },
  { num: "05", title: "Activate", desc: "Apply the strategy across marketing, sales, product launches, customer engagement, and growth initiatives.", details: ["Team alignment", "Sales playbook launch", "Performance feedback"] },
];

const deliverables = [
  "Product positioning framework", "Ideal customer profile", "Buyer insights", "Product messaging architecture", "Core value propositions",
  "Product narrative", "Competitive analysis", "Market differentiation strategy", "Website messaging recommendations", "Product page content",
  "Sales presentation", "Product one-pager", "Product launch messaging", "Campaign messaging", "Internal messaging guide",
];

const outcomes = [
  { title: "Clearer Customer Understanding", desc: "Help potential customers understand what the product does and why it is relevant to them.", icon: Users, highlight: "Reduced buyer confusion" },
  { title: "More Consistent Communication", desc: "Give marketing, sales, product, and leadership teams one shared language for describing the product.", icon: Sparkles, highlight: "Unified cross-team message" },
  { title: "Stronger Market Differentiation", desc: "Communicate the value of the product in a way that is more distinct and relevant.", icon: Target, highlight: "Unrivaled position" },
  { title: "Better Go-to-Market Execution", desc: "Create a clear foundation for campaigns, launches, sales enablement, website content, and growth initiatives.", icon: TrendingUp, highlight: "Accelerated campaign velocity" },
];

const audiences = [
  ["B2B SaaS companies", "Scaling multi-tier products with feature velocity"],
  ["AI product companies", "Translating cutting-edge tech into clear commercial ROI"],
  ["Technology startups", "Establishing initial market category and customer traction"],
  ["Companies preparing for a product launch", "Ensuring maximum market noise and buyer excitement"],
  ["Businesses entering a new market", "Adapting value narrative to new buyer segments"],
  ["Teams repositioning an existing product", "Re-igniting growth and moving up-market"],
  ["Companies with complex products", "Making sophisticated architectures easy to choose"],
  ["Growing companies requiring consistency", "Aligning sales, product, and marketing communications"],
];

const disconnected = ["Feature-heavy product descriptions", "Different messages across teams", "Generic customer targeting", "One-time strategy documents", "Marketing and sales working separately"];
const connected = ["Buyer-focused communication", "Clear and differentiated positioning", "Consistent messaging across touchpoints", "Practical tools for execution", "Marketing, sales, and product teams aligned"];

const blueText = "bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent";
const primaryCta = "service-primary inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:scale-105 hover:from-blue-500 hover:to-indigo-500";

export default function ProductMarketingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const activeApproach = approachSteps[activeStep];

  return (
    <div className="services-light min-h-screen bg-white font-sans text-slate-950 selection:bg-blue-200 selection:text-blue-950">
      <LandingNavbar />

      <main className="pt-14">
        <div className="sticky top-14 z-40 border-b border-slate-800/80 bg-[#0B1120]/90 px-4 py-3.5 backdrop-blur-md sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/#services" className="group inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition-colors hover:text-blue-400">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to services
            </Link>
            <div className="hidden items-center gap-2 text-xs font-semibold text-slate-400 sm:flex">
              <span>Services</span><ChevronRight className="h-3.5 w-3.5 text-slate-600" /><span className="font-bold text-blue-400">Product Marketing</span>
            </div>
            <a href="https://calendar.app.google/UWRRkZgCUAzc2i9i8" target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-600/20 px-3 py-1.5 text-xs font-bold text-blue-300 transition-colors hover:bg-blue-600/30 sm:inline-flex">
              Book strategy call <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <section className="relative overflow-hidden border-b border-slate-800/60 py-14 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-[140px]" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-400"><Sparkles className="h-3.5 w-3.5" /> Product marketing</div>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">Turn Complex Products Into <span className={blueText}>Clear Market Stories.</span></h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Your product may solve an important problem, but customers need to understand its value quickly. We help B2B, SaaS, AI, and technology companies build clear positioning, buyer-focused messaging, and product narratives that make their solutions easier to understand, trust, and choose.</p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Link href="/login" className={primaryCta}>Build your product strategy <ArrowRight className="h-4 w-4" /></Link>
                <a href="https://calendar.app.google/UWRRkZgCUAzc2i9i8" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-4 text-sm font-bold text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white">Talk to an expert</a>
              </div>
              <div className="flex flex-col gap-3 pt-2 text-xs text-slate-400 sm:flex-row sm:gap-6"><span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Buyer-centric framework</span><span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-blue-400" /> B2B & deep-tech specialization</span></div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-blue-900/20">
                <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4"><span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300"><Workflow className="h-4 w-4 text-blue-400" /> Product marketing system flow</span><span className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-mono text-[10px] text-blue-400">Connected loop</span></div>
                <div className="space-y-3">
                  {connectedSystemNodes.map((node, index) => { const Icon = node.icon; return <div key={node.label}><div className="group flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-800/90 p-3.5 transition-colors hover:border-blue-500/50"><div className="flex items-center gap-3"><div className={`rounded-xl bg-gradient-to-r ${node.color} p-2.5 text-white`}><Icon className="h-4 w-4" /></div><div><div className="flex items-center gap-2 text-xs font-bold text-white">{node.label}{index === 2 && <span className="rounded border border-emerald-500/30 bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300">Core lever</span>}</div><p className="text-[11px] text-slate-400">{node.desc}</p></div></div><ChevronRight className="h-4 w-4 text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-blue-400" /></div>{index < connectedSystemNodes.length - 1 && <div className="mx-7 h-2 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 opacity-50" />}</div>; })}
                </div>
                <p className="mt-6 border-t border-slate-800 pt-4 text-center font-mono text-[11px] text-slate-400">Product → Customer problem → Value → Market → Growth</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-800/60 bg-[#0B1120]/50 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading icon={AlertCircle} eyebrow="Market challenges" eyebrowClass="border-amber-500/20 bg-amber-500/10 text-amber-400" title={<>A Strong Product Needs a <span className="text-amber-400">Strong Market Story.</span></>} /><div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{problemPoints.map((point, index) => <div key={point} className="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-colors hover:border-amber-500/40"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 font-mono text-xs font-bold text-amber-400 transition-transform group-hover:scale-110">0{index + 1}</span><p className="text-sm font-medium leading-relaxed text-slate-300">{point}</p></div>)}</div><div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 p-6 text-center sm:p-8"><div className="absolute bottom-0 left-0 top-0 w-1.5 bg-amber-500" /><p className="text-base font-bold leading-relaxed text-amber-200 sm:text-xl">“When product messaging is unclear, customer acquisition becomes harder, sales conversations take longer, and marketing loses focus.”</p></div></div></section>

        <section className="border-b border-slate-800/60 py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading icon={Layers} eyebrow="Service pillars" title={<>Product Marketing Built Around <span className={blueText}>Buyer Understanding</span></>} /><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{servicePillars.map((pillar) => { const Icon = pillar.icon; return <article key={pillar.number} className="group relative flex min-h-80 flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 p-8 transition-colors hover:border-blue-500/50 hover:bg-slate-800/60"><div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl transition-colors group-hover:bg-blue-500/10" /><div><div className="mb-6 flex items-center justify-between"><span className="font-mono text-2xl font-black text-blue-400/80">{pillar.number}</span><span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-[10px] font-bold text-slate-300">{pillar.badge}</span></div><div className="mb-5 w-fit rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3.5 text-blue-400 transition-transform group-hover:scale-110"><Icon className="h-6 w-6" /></div><h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-300">{pillar.title}</h3><p className="text-sm leading-relaxed text-slate-400">{pillar.description}</p></div><div className="mt-6 flex items-center gap-2 border-t border-slate-800/80 pt-4 text-xs font-bold text-blue-400">Explore component <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div></article>; })}</div></div></section>

        <section className="border-b border-slate-800/60 bg-[#0B1120]/50 py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading icon={Workflow} eyebrow="Structured methodology" eyebrowClass="border-indigo-500/20 bg-indigo-500/10 text-indigo-400" title={<>From Product Insight to <span className={blueText}>Market Execution</span></>} /><div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12"><div className="space-y-3 lg:col-span-5">{approachSteps.map((step, index) => <button type="button" key={step.num} onClick={() => setActiveStep(index)} className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all ${activeStep === index ? "translate-x-1 border-blue-500 bg-slate-900 shadow-lg shadow-blue-500/10" : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80"}`}><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-extrabold ${activeStep === index ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"}`}>{step.num}</span><span><span className={`mb-1 block text-base font-bold ${activeStep === index ? "text-white" : "text-slate-300"}`}>{step.title}</span><span className="block text-xs leading-relaxed text-slate-400">{step.desc}</span></span></button>)}</div><div className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl lg:col-span-7"><span className="pointer-events-none absolute right-8 top-2 font-mono text-8xl font-black text-slate-800/40">{activeApproach.num}</span><div><span className="mb-4 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-xs font-bold text-blue-400">Phase {activeApproach.num} of 05</span><h3 className="mb-4 text-3xl font-extrabold text-white">{activeApproach.title}</h3><p className="mb-8 max-w-xl text-base leading-relaxed text-slate-300">{activeApproach.desc}</p><h4 className="mb-3 text-xs font-extrabold uppercase tracking-widest text-slate-400">Key phase execution points</h4><div className="grid grid-cols-1 gap-3 sm:grid-cols-3">{activeApproach.details.map((detail) => <div key={detail} className="flex items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-800/80 p-3.5 text-xs font-medium text-slate-200"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />{detail}</div>)}</div></div><div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6"><span className="text-xs text-slate-400">Step progress indicator</span><div className="flex gap-1.5">{approachSteps.map((step, index) => <span key={step.num} className={`h-2 rounded-full transition-all ${index === activeStep ? "w-8 bg-blue-500" : "w-2 bg-slate-800"}`} />)}</div></div></div></div></div></section>

        <section className="border-b border-slate-800/60 py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading icon={FileText} eyebrow="Concrete outputs" eyebrowClass="border-purple-500/20 bg-purple-500/10 text-purple-400" title="What You Receive" /><div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">{deliverables.map((item) => <div key={item} className="group flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 transition-colors hover:border-purple-500/40 hover:bg-slate-800/60"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-400 transition-transform group-hover:scale-110" /><span className="text-xs font-bold leading-snug text-slate-200 group-hover:text-white">{item}</span></div>)}</div><p className="mx-auto max-w-4xl rounded-2xl border border-purple-800/50 bg-purple-950/30 p-6 text-center text-sm font-semibold leading-relaxed text-purple-200">Every deliverable is designed to be useful beyond the strategy phase and can be applied by your marketing, sales, product, and leadership teams.</p></div></section>

        <section className="border-b border-slate-800/60 bg-[#0B1120]/50 py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading icon={TrendingUp} eyebrow="Measurable impact" eyebrowClass="border-emerald-500/20 bg-emerald-500/10 text-emerald-400" title={<>What a Clear Product Story <span className="text-emerald-400">Can Change</span></>} /><div className="grid grid-cols-1 gap-8 md:grid-cols-2">{outcomes.map((outcome) => { const Icon = outcome.icon; return <article key={outcome.title} className="group flex gap-6 rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-emerald-500/40"><div className="h-fit shrink-0 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-400 transition-transform group-hover:scale-110"><Icon className="h-7 w-7" /></div><div><span className="mb-3 inline-block rounded border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400">{outcome.highlight}</span><h3 className="mb-2 text-xl font-extrabold text-white">{outcome.title}</h3><p className="text-sm leading-relaxed text-slate-400">{outcome.desc}</p></div></article>; })}</div></div></section>

        <section className="border-b border-slate-800/60 py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading icon={Users} eyebrow="Target organizations" eyebrowClass="border-cyan-500/20 bg-cyan-500/10 text-cyan-400" title="Who This Service Is For" /><div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{audiences.map(([title, desc], index) => <article key={title} className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-colors hover:border-cyan-500/40 hover:bg-slate-800/60"><span className="mb-4 flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-xs font-bold text-cyan-400 transition-transform group-hover:scale-110">{index + 1}</span><h3 className="mb-2 text-base font-bold text-white transition-colors group-hover:text-cyan-300">{title}</h3><p className="text-xs leading-relaxed text-slate-400">{desc}</p></article>)}</div></div></section>

        <section className="border-b border-slate-800/60 bg-[#0B1120]/50 py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading icon={Compass} eyebrow="Strategic advantage" title={<>More Than Product Copy. <span className={blueText}>A System for Market Communication.</span></>} description="Product marketing is not only about writing better website copy or creating a launch presentation. It connects customer research, positioning, messaging, sales enablement, product communication, and market strategy into one practical system." /><div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"><ComparisonCard title="Disconnected Product Marketing" icon={X} items={disconnected} variant="disconnected" /><ComparisonCard title="Connected Product Marketing" icon={Check} items={connected} variant="connected" /></div></div></section>

        <section className="relative overflow-hidden py-24"><div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="relative overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-br from-blue-900/60 via-slate-900 to-indigo-900/60 p-10 text-center shadow-2xl sm:p-16"><div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" /><div className="relative"><span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/20 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-blue-300"><Sparkles className="h-3.5 w-3.5" /> Next steps</span><h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Your Product Has Value. <span className={blueText}>Make It Clear to the Market.</span></h2><p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">Build a product story that helps the right customers understand your solution, recognize its value, and confidently take the next step.</p><div className="flex flex-col justify-center gap-4 sm:flex-row"><Link href="/login" className={primaryCta}>Start a product marketing project <ArrowRight className="h-4 w-4" /></Link><a href="https://calendar.app.google/UWRRkZgCUAzc2i9i8" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-8 py-4 text-sm font-bold text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white">Book a strategy call</a></div></div></div></div></section>

        <section className="border-t border-slate-800 bg-[#0B1120] py-12"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-slate-500">Explore another service</p><div className="flex flex-wrap justify-center gap-3">{servicesOrder.filter((service) => service.id !== "product-marketing").map((service) => <Link key={service.id} href={`/services/${service.id}`} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-bold text-slate-300 transition-colors hover:border-blue-500/50 hover:text-blue-300">{service.title}</Link>)}<Link href="/#services" className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold text-blue-300">All services</Link></div></div></section>
      </main>

      <Footer />
    </div>
  );
}

function SectionHeading({ icon: Icon, eyebrow, title, description, eyebrowClass = "border-blue-500/20 bg-blue-500/10 text-blue-400" }: { icon: typeof Sparkles; eyebrow: string; title: React.ReactNode; description?: string; eyebrowClass?: string }) {
  return <div className="mx-auto mb-16 max-w-3xl text-center"><div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider ${eyebrowClass}`}><Icon className="h-3.5 w-3.5" />{eyebrow}</div><h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h2>{description && <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>}</div>;
}

function ComparisonCard({ title, icon: Icon, items, variant }: { title: string; icon: typeof Check; items: string[]; variant: "connected" | "disconnected" }) {
  const isConnected = variant === "connected";
  return <article className={`rounded-3xl border p-8 ${isConnected ? "border-blue-500/40 bg-blue-950/20 shadow-xl shadow-blue-500/10" : "border-red-900/30 bg-red-950/10"}`}><div className={`mb-6 flex items-center gap-3 border-b pb-4 ${isConnected ? "border-blue-500/30" : "border-red-900/30"}`}><span className={`rounded-xl border p-2 ${isConnected ? "border-blue-500/30 bg-blue-500/20 text-blue-400" : "border-red-500/20 bg-red-500/10 text-red-400"}`}><Icon className="h-5 w-5" /></span><h3 className="text-lg font-bold text-white">{title}</h3></div><ul className="space-y-4">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm text-slate-400"><Icon className={`mt-0.5 h-4 w-4 shrink-0 ${isConnected ? "text-emerald-400" : "text-red-400"}`} />{item}</li>)}</ul></article>;
}
