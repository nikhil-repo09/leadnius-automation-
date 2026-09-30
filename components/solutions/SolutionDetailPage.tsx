"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Sparkles,
  X,
  XCircle,
} from "lucide-react";
import Footer from "@/components/Footer";
import LandingNavbar from "@/components/LandingNavbar";
import { solutionsOrder, type SolutionId } from "@/lib/solutions";

type Step = { num: string; title: string; desc: string };
type Card = { eyebrow: string; title: string; desc: string; bullets: string[] };
type Showcase = { eyebrow: string; title: string; desc: string; bullets: string[] };

export type SolutionPageContent = {
  id: SolutionId;
  title: string;
  icon: LucideIcon;
  heroLead: string;
  heroHighlight: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  panel: { title: string; badge: string; rows: { label: string; value: string }[] };
  stats: { value: string; label: string }[];
  challenge: { eyebrow: string; title: string; desc: string; oldLabel: string; oldBullets: string[]; newLabel: string; newBullets: string[] };
  showcase?: { eyebrow: string; title: string; desc: string; items: Showcase[] };
  flow: { eyebrow: string; title: string; desc: string; steps: Step[] };
  cards: { eyebrow: string; title: string; desc: string; items: Card[] };
  comparison?: { eyebrow: string; title: string; desc: string; primaryLabel: string; secondaryLabel: string; rows: { label: string; primary: string; secondary: string }[] };
  layers?: { eyebrow: string; title: string; desc: string; items: { number: string; title: string; subtitle: string; desc: string; chips: string[] }[] };
  fit: { eyebrow: string; title: string; desc?: string; items: { title: string; desc: string }[] };
  metrics?: { label: string; value: string; desc: string }[];
  faqs: { q: string; a: string }[];
  final: { title: string; desc: string; cta: string };
};

const gradientText = "bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent";
const primaryCta = "solution-primary inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:scale-105 hover:from-blue-500 hover:to-indigo-500";

export default function SolutionDetailPage({ config }: { config: SolutionPageContent }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const Icon = config.icon;
  const showcase = config.showcase;

  return (
    <div className="solutions-light min-h-screen bg-white font-sans text-slate-950 selection:bg-blue-200 selection:text-blue-950">
      <LandingNavbar />
      <main className="pt-14">
        <div className="solution-sticky sticky top-14 z-40 border-b border-slate-200 bg-white/95 px-4 py-3.5 backdrop-blur-md sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/#solutions" className="group inline-flex items-center gap-2 text-xs font-bold text-slate-400 transition-colors hover:text-blue-400"><ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to solutions</Link>
            <div className="hidden items-center gap-2 text-xs font-semibold text-slate-400 sm:flex"><span>Solutions</span><ChevronRight className="h-3.5 w-3.5 text-slate-600" /><span className="font-bold text-blue-400">{config.title}</span></div>
            <a href="https://calendar.app.google/UWRRkZgCUAzc2i9i8" target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-600/20 px-3 py-1.5 text-xs font-bold text-blue-300 transition-colors hover:bg-blue-600/30 sm:inline-flex">Book strategy call <ArrowRight className="h-3 w-3" /></a>
          </div>
        </div>

        <section className="solution-hero relative overflow-hidden border-b border-slate-200 py-14 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/15 blur-[140px]" />
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-widest text-blue-400"><Sparkles className="h-3.5 w-3.5" /> Solutions · {config.title}</div>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{config.heroLead} <span className={gradientText}>{config.heroHighlight}</span></h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{config.intro}</p>
              <div className="flex flex-col gap-4 pt-2 sm:flex-row"><Link href="/login" className={primaryCta}>{config.primaryCta} <ArrowRight className="h-4 w-4" /></Link><a href="#how" className="solution-secondary inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">{config.secondaryCta}</a></div>
            </div>
            <LivePanel panel={config.panel} Icon={Icon} />
          </div>
        </section>

        <section className="solution-stats border-b border-slate-200 bg-slate-50 py-9"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-6 sm:px-6 lg:px-8">{config.stats.map((stat) => <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5"><p className="text-2xl font-extrabold text-blue-600 sm:text-3xl">{stat.value}</p><p className="mt-2 text-xs leading-snug text-slate-500">{stat.label}</p></div>)}</div></section>

        <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={config.challenge.eyebrow} title={config.challenge.title} description={config.challenge.desc} /><div className="grid gap-8 md:grid-cols-2"><ContrastCard title={config.challenge.oldLabel} bullets={config.challenge.oldBullets} bad /><ContrastCard title={config.challenge.newLabel} bullets={config.challenge.newBullets} /></div></div></section>

        {showcase && <section className="border-y border-slate-800/80 bg-[#0B1120]/75 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={showcase.eyebrow} title={showcase.title} description={showcase.desc} /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{showcase.items.map((item, index) => <article key={item.title} className="group rounded-3xl border border-slate-800 border-l-4 border-l-blue-500 bg-slate-900/80 p-6 transition-colors hover:border-blue-500/50"><p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-blue-400">{item.eyebrow}</p><h3 className="mb-2 text-xl font-extrabold text-white">{item.title}</h3><p className="mb-5 text-sm leading-relaxed text-slate-400">{item.desc}</p><ul className="space-y-2 border-t border-slate-800 pt-5">{item.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2 text-xs leading-relaxed text-slate-300"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />{bullet}</li>)}</ul><span className="mt-5 inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-emerald-400">{index === showcase.items.length - 1 && config.id === "ai-employees-enterprise" ? "on demand" : "on shift"}</span></article>)}</div></div></section>}

        <section id="how" className="scroll-mt-28 border-b border-slate-800/80 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={config.flow.eyebrow} title={config.flow.title} description={config.flow.desc} /><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{config.flow.steps.map((step) => <article key={step.num} className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-blue-500/40"><p className="mb-4 font-mono text-2xl font-extrabold text-blue-400">{step.num}</p><h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-300">{step.title}</h3><p className="text-sm leading-relaxed text-slate-400">{step.desc}</p></article>)}</div></div></section>

        <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={config.cards.eyebrow} title={config.cards.title} description={config.cards.desc} /><CardGrid items={config.cards.items} /></div></section>

        {config.layers && <section className="border-y border-slate-800/80 bg-[#0B1120]/75 py-20"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={config.layers.eyebrow} title={config.layers.title} description={config.layers.desc} /> <div className="space-y-5">{config.layers.items.map((layer) => <article key={layer.number} className="flex flex-col gap-5 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 md:flex-row md:items-center"><span className="shrink-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-center font-mono text-xs font-bold uppercase tracking-wider text-blue-400">{layer.number}</span><div><p className="text-xs font-bold uppercase tracking-widest text-slate-500">{layer.title}</p><h3 className="mt-1 text-xl font-extrabold text-white">{layer.subtitle}</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">{layer.desc}</p><div className="mt-4 flex flex-wrap gap-2">{layer.chips.map((chip) => <span key={chip} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[11px] font-semibold text-blue-200">{chip}</span>)}</div></div></article>)}</div></div></section>}

        {config.comparison && <section className="border-y border-slate-800/80 bg-[#0B1120]/75 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={config.comparison.eyebrow} title={config.comparison.title} description={config.comparison.desc} /><div className="overflow-x-auto rounded-3xl border border-slate-800"><table className="w-full min-w-[660px] text-left text-sm"><thead><tr className="border-b border-slate-800 bg-slate-900/90 text-xs font-bold uppercase tracking-wider text-slate-400"><th className="px-6 py-4">Capability</th><th className="border-x border-blue-500/25 bg-blue-950/50 px-6 py-4 text-blue-300">{config.comparison.primaryLabel}</th><th className="px-6 py-4">{config.comparison.secondaryLabel}</th></tr></thead><tbody>{config.comparison.rows.map((row) => <tr key={row.label} className="border-b border-slate-800/80 last:border-0"><th className="bg-slate-900/50 px-6 py-4 font-bold text-white">{row.label}</th><td className="border-x border-blue-500/20 bg-blue-950/20 px-6 py-4 text-blue-200">✓ {row.primary}</td><td className="px-6 py-4 text-slate-400">✕ {row.secondary}</td></tr>)}</tbody></table></div></div></section>}

        {config.metrics && <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow="What we measure" title="A system is only useful when the work moves." description="Clear operating measures give your team a way to see whether the solution is earning its place." /><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{config.metrics.map((metric) => <article key={metric.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-6"><p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-400">{metric.label}</p><h3 className="mb-3 text-xl font-extrabold text-white">{metric.value}</h3><p className="text-sm leading-relaxed text-slate-400">{metric.desc}</p></article>)}</div></div></section>}

        <section className="border-y border-slate-800/80 bg-[#0B1120]/75 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow={config.fit.eyebrow} title={config.fit.title} description={config.fit.desc} /><div className="grid grid-cols-1 gap-6 md:grid-cols-3">{config.fit.items.map((item, index) => <article key={item.title} className="flex items-start gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6"><span className="font-mono text-xl font-extrabold text-blue-400">0{index + 1}</span><div><h3 className="mb-2 text-base font-bold text-white">{item.title}</h3><p className="text-sm leading-relaxed text-slate-400">{item.desc}</p></div></article>)}</div></div></section>

        <section className="py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionTitle eyebrow="Before you ask" title="The questions teams ask." /> <div className="space-y-4">{config.faqs.map((faq, index) => <article key={faq.q} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60"><button type="button" onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"><span className="text-sm font-bold text-white sm:text-base">{faq.q}</span><ChevronDown className={`h-5 w-5 shrink-0 text-blue-400 transition-transform ${openFaqIndex === index ? "rotate-180" : ""}`} /></button>{openFaqIndex === index && <p className="border-t border-slate-800/80 px-5 pb-6 pt-4 text-sm leading-relaxed text-slate-300 sm:px-6">{faq.a}</p>}</article>)}</div></div></section>

        <section className="relative overflow-hidden py-20"><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="solution-cta relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 text-center shadow-xl shadow-blue-100/60 sm:p-12 lg:p-16"><div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" /><div className="relative"><Sparkles className="mx-auto mb-5 h-5 w-5 text-blue-500" /><h2 className="mb-4 text-3xl font-extrabold text-slate-950 sm:text-5xl">{config.final.title}</h2><p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-600">{config.final.desc}</p><div className="flex flex-col justify-center gap-4 sm:flex-row"><Link href="/login" className={primaryCta}>{config.final.cta} <ArrowRight className="h-4 w-4" /></Link><Link href="/#solutions" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">See all solutions</Link></div></div></div></div></section>

        <section className="border-t border-slate-800 bg-[#0B1120] py-12"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-slate-500">Explore another solution</p><div className="flex flex-wrap justify-center gap-3">{solutionsOrder.filter((solution) => solution.id !== config.id).map((solution) => <Link key={solution.id} href={`/solutions/${solution.id}`} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-bold text-slate-300 transition-colors hover:border-blue-500/50 hover:text-blue-300">{solution.title}</Link>)}</div></div></section>
      </main>
      <Footer />
    </div>
  );
}

function LivePanel({ panel, Icon }: { panel: SolutionPageContent["panel"]; Icon: LucideIcon }) {
  return <div className="lg:col-span-5"><div className="solution-live-panel relative overflow-hidden rounded-3xl border border-blue-200 bg-white p-6 shadow-xl shadow-blue-100/60 sm:p-7"><div className="relative mb-5 flex items-center justify-between border-b border-slate-200 pb-4"><span className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-700"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" /> {panel.title}</span><Icon className="h-4 w-4 text-blue-500" /></div><div className="space-y-3.5 font-mono text-xs">{panel.rows.map((row, index) => <div key={row.label} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5"><span className="flex items-center gap-2.5 text-slate-700"><span className={`h-2 w-2 rounded-full ${index % 3 === 1 ? "bg-indigo-400" : index % 3 === 2 ? "bg-purple-400" : "bg-blue-400"}`} />{row.label}</span><span className="shrink-0 rounded-lg border border-blue-200 bg-blue-50 px-2.5 py-1 font-bold text-blue-600">{row.value}</span></div>)}</div><p className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-[10px] font-bold uppercase tracking-widest text-slate-500"><span>Live workspace</span><span className="text-emerald-600">{panel.badge}</span></p></div></div>;
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mx-auto mb-14 max-w-3xl text-center"><p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-400">{eyebrow}</p><h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>{description && <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>}</div>;
}

function ContrastCard({ title, bullets, bad = false }: { title: string; bullets: string[]; bad?: boolean }) {
  const Icon = bad ? X : Check;
  return <article className={`rounded-3xl border p-7 sm:p-8 ${bad ? "border-red-900/40 bg-red-950/20" : "border-blue-500/40 bg-[#0B1120] shadow-xl shadow-blue-500/5"}`}><div className="mb-6 flex items-center gap-3 border-b border-slate-800 pb-4"><span className={`rounded-xl border p-2 ${bad ? "border-red-500/20 bg-red-500/10 text-red-400" : "border-blue-500/30 bg-blue-500/20 text-blue-400"}`}>{bad ? <XCircle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}</span><h3 className={`text-xl font-bold ${bad ? "text-red-400" : "text-blue-400"}`}>{title}</h3></div><ul className="space-y-4">{bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"><Icon className={`mt-0.5 h-4 w-4 shrink-0 ${bad ? "text-red-400" : "text-blue-400"}`} />{bullet}</li>)}</ul></article>;
}

function CardGrid({ items }: { items: Card[] }) {
  return <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">{items.map((card) => <article key={card.title} className="flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-7 transition-colors hover:border-blue-500/40 hover:bg-slate-800/60"><p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-400">{card.eyebrow}</p><h3 className="mb-3 text-2xl font-extrabold text-white">{card.title}</h3><p className="mb-6 text-sm leading-relaxed text-slate-300">{card.desc}</p><ul className="mt-auto space-y-3 border-t border-slate-800 pt-5">{card.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />{bullet}</li>)}</ul></article>)}</div>;
}
