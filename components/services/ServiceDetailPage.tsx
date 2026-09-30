"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Sparkles,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";
import Footer from "@/components/Footer";
import { servicesOrder } from "@/lib/services";
import type { ServicePageContent } from "@/lib/service-page-content";

const blueText = "bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent";
const primaryCta = "service-primary inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:scale-105 hover:from-blue-500 hover:to-indigo-500";

export default function ServiceDetailPage({ config }: { config: ServicePageContent }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [people, setPeople] = useState(20);
  const [hours, setHours] = useState(15);
  const [cost, setCost] = useState(1200);
  const [autoShare, setAutoShare] = useState(60);
  const Icon = config.icon;
  const savedHours = Math.round(people * hours * 4.33 * (autoShare / 100));
  const savedCost = savedHours * cost;

  return (
    <div className="services-light min-h-screen bg-white font-sans text-slate-950 selection:bg-blue-200 selection:text-blue-950">
      <LandingNavbar />
      <main className="pt-14">
        <div className="sticky top-14 z-40 border-b border-slate-800/80 bg-[#0B1120]/90 px-4 py-3.5 backdrop-blur-md sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/#services" className="group inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition-colors hover:text-blue-400"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to services</Link>
            <div className="hidden items-center gap-2 text-xs font-semibold text-slate-400 sm:flex"><span>Services</span><ChevronRight className="h-3.5 w-3.5 text-slate-600" /><span className="font-bold text-blue-400">{config.title}</span></div>
            <a href="https://calendar.app.google/UWRRkZgCUAzc2i9i8" target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-600/20 px-3 py-1.5 text-xs font-bold text-blue-300 transition-colors hover:bg-blue-600/30 sm:inline-flex">Book strategy call <ArrowRight className="h-3 w-3" /></a>
          </div>
        </div>

        <section className="relative overflow-hidden border-b border-slate-800/60 py-14 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-cyan-600/10 blur-[140px]" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-400"><Icon className="h-3.5 w-3.5" /> {config.title}</div>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">{config.heroLead} <span className={blueText}>{config.heroHighlight}</span></h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{config.intro}</p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row"><Link href="/login" className={primaryCta}>{config.primaryCta} <ArrowRight className="h-4 w-4" /></Link><a href="#flow" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-4 text-sm font-bold text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white">{config.secondaryCta}</a></div>
              <div className="flex flex-col gap-3 pt-2 text-xs text-slate-400 sm:flex-row sm:gap-6"><span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" />{config.highlights[0]}</span><span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-blue-400" />{config.highlights[1]}</span></div>
            </div>
            <LivePanel panel={config.panel} />
          </div>
        </section>

        <section className="border-b border-slate-800/80 bg-[#0B1120]/60 py-8"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">{config.stats.map((stat) => <div key={stat.label} className="text-center"><p className="text-xl font-extrabold text-white sm:text-2xl">{stat.value}</p><p className="mt-1 text-xs text-slate-400">{stat.label}</p></div>)}</div></section>

        <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={config.challenge.eyebrow} title={config.challenge.title} description={config.challenge.desc} /><div className="grid gap-8 md:grid-cols-2"><ContrastCard title={config.challenge.oldLabel} bullets={config.challenge.oldBullets} bad /><ContrastCard title={config.challenge.newLabel} bullets={config.challenge.newBullets} /></div></div></section>

        <section id="flow" className="scroll-mt-28 border-y border-slate-800/80 bg-[#0B1120]/80 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={config.flow.eyebrow} title={config.flow.title} description={config.flow.desc} /><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{config.flow.steps.map((step) => { const StepIcon = step.icon ?? WorkflowIcon; return <article key={step.num} className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-blue-500/40"><div className="mb-5 flex items-center justify-between"><span className="rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-xs font-bold text-blue-400">Stage {step.num}</span><StepIcon className="h-5 w-5 text-slate-600 transition-colors group-hover:text-blue-400" /></div><h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-300">{step.title}</h3><p className="text-sm leading-relaxed text-slate-400">{step.desc}</p></article>; })}</div></div></section>

        <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={config.cards.eyebrow} title={config.cards.title} description={config.cards.desc} /><CardGrid cards={config.cards.items} /></div></section>

        {config.calculator && <AutomationCalculator people={people} setPeople={setPeople} hours={hours} setHours={setHours} cost={cost} setCost={setCost} autoShare={autoShare} setAutoShare={setAutoShare} savedHours={savedHours} savedCost={savedCost} />}

        <section className="border-y border-slate-800/80 bg-[#0B1120]/80 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={config.focus.eyebrow} title={config.focus.title} description={config.focus.desc} /><CardGrid cards={config.focus.items} /><p className="mx-auto mt-8 max-w-4xl rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-center text-sm leading-relaxed text-blue-100">Every engagement is built around your existing operating reality, then adapted as the system starts producing real feedback.</p></div></section>

        <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow="What we measure" title="A system is only useful when the right work moves." description="The practical outputs and indicators that show whether the motion is getting sharper over time." /><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{config.metrics.map((metric) => <article key={metric.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-6"><p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-400">{metric.label}</p><h3 className="mb-3 text-xl font-extrabold text-white">{metric.value}</h3><p className="text-sm leading-relaxed text-slate-400">{metric.desc}</p></article>)}</div></div></section>

        <section className="border-t border-slate-800 bg-[#0B1120]/80 py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow="Before you ask" title="The questions teams ask before we start." /> <div className="space-y-4">{config.faqs.map((faq, index) => <article key={faq.q} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60"><button type="button" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"><span className="text-sm font-bold text-white sm:text-base">{faq.q}</span><ChevronDown className={`h-5 w-5 shrink-0 text-blue-400 transition-transform ${openFaqIndex === index ? "rotate-180" : ""}`} /></button>{openFaqIndex === index && <p className="border-t border-slate-800/80 px-5 pb-6 pt-4 text-sm leading-relaxed text-slate-300 sm:px-6">{faq.a}</p>}</article>)}</div></div></section>

        <section className="relative overflow-hidden py-20"><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-slate-900 via-[#0B1120] to-blue-950/50 p-8 text-center shadow-2xl sm:p-12 lg:p-16"><div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" /><div className="relative"><Sparkles className="mx-auto mb-5 h-5 w-5 text-blue-400" /><h2 className="mb-4 text-3xl font-extrabold text-white sm:text-5xl">{config.final.title}</h2><p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300">{config.final.desc}</p><div className="flex flex-col justify-center gap-4 sm:flex-row"><Link href="/login" className={primaryCta}>{config.final.cta} <ArrowRight className="h-4 w-4" /></Link><Link href="/#services" className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-7 py-4 text-sm font-bold text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">See all services</Link></div></div></div></div></section>

        <section className="border-t border-slate-800 bg-[#0B1120] py-12"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-slate-500">Explore another service</p><div className="flex flex-wrap justify-center gap-3">{servicesOrder.filter((service) => service.id !== config.id).map((service) => <Link key={service.id} href={`/services/${service.id}`} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-bold text-slate-300 transition-colors hover:border-blue-500/50 hover:text-blue-300">{service.title}</Link>)}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}

function LivePanel({ panel }: { panel: ServicePageContent["panel"] }) {
  return <div className="lg:col-span-5"><div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0B1120] p-6 shadow-2xl shadow-blue-500/10 sm:p-7"><div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-600/10 blur-2xl" /><div className="relative mb-5 flex items-center justify-between border-b border-slate-800 pb-4"><span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-200"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" /> {panel.title}</span><span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-blue-400">{panel.badge}</span></div><div className="relative space-y-3.5 font-mono text-xs">{panel.rows.map((row, index) => <div key={row.label} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-3.5"><span className="flex items-center gap-2.5 text-slate-300"><span className={`h-2 w-2 rounded-full ${index % 2 ? "bg-cyan-400" : "bg-blue-400"}`} />{row.label}</span><span className="rounded-lg border border-blue-500/30 bg-blue-500/20 px-2.5 py-1 font-bold text-blue-300">{row.value}</span></div>)}</div></div></div>;
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: string }) {
  return <div className="mx-auto mb-14 max-w-3xl text-center"><p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-400">{eyebrow}</p><h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>{description && <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>}</div>;
}

function ContrastCard({ title, bullets, bad = false }: { title: string; bullets: string[]; bad?: boolean }) {
  const Icon = bad ? X : Check;
  return <article className={`relative overflow-hidden rounded-3xl border p-7 sm:p-8 ${bad ? "border-red-900/40 bg-red-950/20" : "border-blue-500/40 bg-[#0B1120] shadow-xl shadow-blue-500/5"}`}><div className="mb-6 flex items-center gap-3 border-b border-slate-800 pb-4"><span className={`rounded-xl border p-2 ${bad ? "border-red-500/20 bg-red-500/10 text-red-400" : "border-blue-500/30 bg-blue-500/20 text-blue-400"}`}>{bad ? <XCircle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}</span><h3 className={`text-xl font-bold ${bad ? "text-red-400" : "text-blue-400"}`}>{title}</h3></div><ul className="space-y-4">{bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"><Icon className={`mt-0.5 h-4 w-4 shrink-0 ${bad ? "text-red-400" : "text-blue-400"}`} />{bullet}</li>)}</ul></article>;
}

function CardGrid({ cards }: { cards: ServicePageContent["cards"]["items"] }) {
  return <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">{cards.map((card) => { const Icon = card.icon ?? WorkflowIcon; return <article key={card.title} className="group flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-7 transition-colors hover:border-blue-500/40 hover:bg-slate-800/60"><div className="mb-5 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-widest text-blue-400">{card.eyebrow}</span><span className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-2.5 text-blue-400 transition-transform group-hover:scale-110"><Icon className="h-5 w-5" /></span></div><h3 className="mb-3 text-2xl font-extrabold text-white">{card.title}</h3><p className="mb-6 text-sm leading-relaxed text-slate-300">{card.desc}</p><ul className="mt-auto space-y-3 border-t border-slate-800 pt-5">{card.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />{bullet}</li>)}</ul></article>; })}</div>;
}

function AutomationCalculator({ people, setPeople, hours, setHours, cost, setCost, autoShare, setAutoShare, savedHours, savedCost }: { people: number; setPeople: (value: number) => void; hours: number; setHours: (value: number) => void; cost: number; setCost: (value: number) => void; autoShare: number; setAutoShare: (value: number) => void; savedHours: number; savedCost: number }) {
  return <section id="calculator" className="scroll-mt-28 border-y border-slate-800/80 bg-[#0B1120]/80 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow="The honest math" title="How many hours could you get back?" description="Move the sliders for an illustrative estimate. Your real number comes from a workflow-mapping session, not a blind promise." /><div className="grid overflow-hidden rounded-3xl border border-slate-800 bg-[#0B1120] shadow-2xl lg:grid-cols-12"><div className="space-y-8 border-b border-slate-800 bg-slate-950/70 p-6 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r"> <RangeInput label="People doing repetitive admin" value={people} min={1} max={50} suffix="" onChange={setPeople} /><RangeInput label="Hours each spends on it per week" value={hours} min={1} max={35} suffix=" hrs" onChange={setHours} /><RangeInput label="Loaded cost per hour" value={cost} min={200} max={4000} step={100} prefix="₹" onChange={setCost} /><RangeInput label="Share of that load that's automatable" value={autoShare} min={20} max={90} step={5} suffix="%" onChange={setAutoShare} /></div><div className="flex flex-col justify-between bg-gradient-to-br from-blue-950/30 via-slate-900 to-indigo-950/20 p-6 sm:p-10 lg:col-span-5"><div className="space-y-6"><p className="text-xs font-bold uppercase tracking-widest text-blue-400">Estimated reclaim · per month</p><div><p className="font-mono text-4xl font-extrabold text-white sm:text-5xl">{formatIndian(savedHours)} <span className="font-sans text-3xl text-blue-400">hrs</span></p><p className="mt-1 text-xs text-slate-400">handed back to your team every month</p></div><div><p className="font-mono text-4xl font-extrabold text-blue-400 sm:text-5xl">₹{formatIndian(savedCost)}</p><p className="mt-1 text-xs text-slate-400">in loaded cost redirected to real work</p></div></div><p className="mt-8 border-t border-slate-800 pt-6 text-xs leading-relaxed text-slate-400">Assumes the automatable share above at roughly 4.33 weeks per month. This is a planning estimate, not a quote.</p></div></div></div></section>;
}

function RangeInput({ label, value, min, max, step = 1, prefix = "", suffix = "", onChange }: { label: string; value: number; min: number; max: number; step?: number; prefix?: string; suffix?: string; onChange: (value: number) => void }) {
  return <label className="block space-y-3"><span className="flex items-center justify-between gap-4 text-sm font-semibold text-slate-200"><span>{label}</span><b className="shrink-0 rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-base text-blue-400">{prefix}{formatIndian(value)}{suffix}</b></span><input type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-blue-500" /></label>;
}

function formatIndian(value: number) { return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(value); }
const WorkflowIcon = Clock3;
