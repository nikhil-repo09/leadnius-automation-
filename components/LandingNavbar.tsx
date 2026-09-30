"use client";

import Link from "next/link";
import {
  Zap,
  Briefcase,
  PlayCircle,
  BookOpen,
  Rocket,
  ChevronDown,
  Handshake,
  // Factory,
  // Truck,
  // Shield,
  Users,
  Linkedin,
  Instagram,
  Target,
  Cpu,
  FileText,
  TrendingUp,
  ArrowUpRight,
  Bot,
  GraduationCap,
  Layers,
  LayoutDashboard,
} from "lucide-react";
import { SaasModal } from "./SaasModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { servicesOrder, type ServiceId } from "@/lib/services";

const serviceIcons: Record<ServiceId, React.ComponentType<{ className?: string }>> = {
  "product-marketing": Target,
  "gtm-engineering": Cpu,
  "automation-transformation": Zap,
  "content-marketing": FileText,
  "investor-outreach": TrendingUp,
};

const solutionsList = [
  {
    id: "educational-consultants",
    title: "Educational Consultants",
    tagline: "AI Research Engine & Shortlisting for Counselors",
    icon: GraduationCap,
    color: "text-blue-500 dark:text-blue-400",
    badge: "Admissions",
  },
  {
    id: "consultancy-businesses",
    title: "Coaches",
    tagline: "Inquiry Automation & Lead Gen Tool for Consultants",
    icon: Briefcase,
    color: "text-indigo-500 dark:text-indigo-400",
    badge: "Consultants",
  },
  {
    id: "sales-teams",
    title: "Sales Teams",
    tagline: "AI Prospecting & Outreach Engine for Sales Teams",
    icon: Users,
    color: "text-blue-500 dark:text-blue-400",
    badge: "Sales",
  },
  {
  id: "founders-startups",
  title: "Founders & Startups",
  tagline: "AI-Powered Growth & Sales Engine for Founders",
  icon: Briefcase,
  color: "text-purple-500 dark:text-purple-400",
  badge: "Startups",
  },
  {
  id: "agencies",
  title: "Agencies",
  tagline: "AI-Powered Lead Generation & Growth Engine for Agencies",
  icon: Briefcase,
  color: "text-pink-500 dark:text-pink-400",
  badge: "Agencies",
  },
  {
    id: "gtm-intelligence",
    title: "GTM Intelligence",
    tagline: "Role-Wise GTM Intelligence & Engine for Teams",
    icon: Cpu,
    color: "text-purple-500 dark:text-purple-400",
    badge: "Role-Wise",
  },
  {
    id: "workflow-dashboard",
    title: "Workflow Dashboard",
    tagline: "Research-to-Publish Workflow Automation Engine",
    icon: LayoutDashboard,
    color: "text-emerald-500 dark:text-emerald-400",
    badge: "Autopilot",
  },
  {
    id: "ai-employees-enterprise",
    title: "AI Employees for Enterprise",
    tagline: "Content, RevOps, Strategy & Analytics AI Roles",
    icon: Bot,
    color: "text-sky-500 dark:text-blue-400",
    badge: "Enterprise",
  },
] as const;

export default function LandingNavbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
              <Zap className="h-4 w-4 text-white" fill="currentColor" />
            </div>
            <span className="text-lg font-bold tracking-tight">Leadnius</span>
          </div>

          {/* Links */}
          <div className="hidden items-center gap-6 md:flex">
            {/* Product Dropdown */}
            <div className="group relative order-1 flex h-full items-center">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none cursor-pointer py-4">
                Product
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute top-full left-0 pt-2 transition-all duration-300 ease-out z-60">
                <div className="w-[480px] overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-2xl shadow-blue-500/20 dark:bg-slate-950 ring-1 ring-black/5">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="http://automation.leadnius.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-linear-to-br hover:from-blue-50 hover:to-sky-50 dark:hover:from-blue-900/40 dark:hover:to-sky-900/40 transition-all duration-300 group/item border border-transparent hover:border-blue-100 dark:hover:border-blue-800"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover/item:bg-blue-600 group-hover/item:text-white dark:bg-blue-900/50 dark:text-blue-400">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground mb-0.5 flex items-center gap-1">
                          LinkedIn Extension
                        </div>
                        <p className="text-[10px] text-muted-foreground leading-snug">
                          Automate & extract LinkedIn leads
                        </p>
                      </div>
                    </a>

                    <div
                      onClick={() => toast.info("Instagram Extension is coming soon!")}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-linear-to-br hover:from-pink-50 hover:to-purple-50 dark:hover:from-pink-900/40 dark:hover:to-purple-900/40 transition-all duration-300 group/item border border-transparent hover:border-pink-100 dark:hover:border-pink-800 cursor-pointer"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100 text-pink-600 transition-colors group-hover/item:bg-pink-600 group-hover/item:text-white dark:bg-pink-900/50 dark:text-pink-400">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground mb-0.5 flex items-center gap-1.5 flex-wrap">
                          <span>Instagram Extension</span>
                          <span className="text-[10px] font-semibold text-black dark:text-white">
                            (Coming Soon)
                          </span>
                        </div>
                        <p className="text-[10px] text-muted-foreground leading-snug">
                          Instagram lead generation tool
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="group relative order-5 flex h-full items-center">
              <button className="flex items-center gap-1 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground outline-none cursor-pointer">
                Solutions
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="invisible absolute top-full left-1/2 z-[60] w-[480px] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-2xl shadow-blue-500/20 ring-1 ring-black/5 dark:bg-[#111a2d] dark:ring-white/5">
                  <div className="mb-2 flex items-center justify-between border-b border-border/70 px-2 pb-3 dark:border-slate-800">
                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-300">
                      <Layers className="h-3.5 w-3.5" />
                      Tailored solutions
                    </span>
                    <span className="text-[10px] font-medium text-muted-foreground">5 Solutions</span>
                  </div>

                  <div className="space-y-1">
                    {/* {solutionsList.map((solution) => { (to hide in solution dropdown)*/}
                    {solutionsList
                      .filter(
                        (solution) => 
                           solution.id !== "gtm-intelligence" &&
                           solution.id !== "workflow-dashboard" &&
                           solution.id !== "ai-employees-enterprise"
                      )
                      .map((solution) => {
                        const Icon = solution.icon;

                        return (
                        <Link
                          key={solution.id}
                          href={`/solutions/${solution.id}`}
                          className="group/item flex w-full items-center gap-3 rounded-2xl border border-transparent p-2.5 text-left transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 dark:hover:border-slate-700 dark:hover:bg-slate-900"
                        >
                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-transform group-hover/item:scale-105 dark:border-slate-800 dark:bg-slate-950 ${solution.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="mb-0.5 flex items-center gap-2">
                              <span className="text-sm font-bold text-foreground">{solution.title}</span>
                              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[9px] font-bold text-amber-700 dark:text-amber-300">{solution.badge}</span>
                            </div>
                            <p className="truncate text-[11px] leading-snug text-muted-foreground">{solution.tagline}</p>
                          </div>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-all group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-blue-500" />
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 border-t border-border/70 px-2 pt-3 text-[10px] font-semibold text-muted-foreground dark:border-slate-800">
                    <span className="text-blue-500">Education</span>
                    <span className="text-indigo-500">Consultancy</span>
                    <span className="text-purple-500">GTM</span>
                    <span className="text-emerald-500">Dashboard</span>
                    <span className="text-sky-500">AI Employees</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="group relative order-3 flex h-full items-center">
              <button className="flex items-center gap-1 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground outline-none cursor-pointer">
                Services
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="invisible absolute top-full left-1/2 z-[60] w-[300px] -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-2xl shadow-blue-500/20 ring-1 ring-black/5 dark:bg-slate-950">
                  <div className="flex flex-col gap-1">
                    {servicesOrder.map((service) => {
                      const Icon = serviceIcons[service.id];

                      return (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className="group/item flex items-center gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 dark:hover:border-blue-800 dark:hover:bg-blue-900/40"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover/item:bg-blue-600 group-hover/item:text-white dark:bg-blue-900/50 dark:text-blue-400">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-bold text-foreground">{service.title}</div>
                            <p className="text-[10px] leading-snug text-muted-foreground">{service.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="group relative order-2 flex h-full items-center">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
                Resources
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 fixed top-14 left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out z-60">
                <div className="w-[480px] overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-2xl shadow-purple-500/20 dark:bg-slate-950 ring-1 ring-black/5">
                  <div className="grid grid-cols-2 gap-2">
                    <Link href="/resources/case-studies" className="flex items-start gap-3 p-3 rounded-xl hover:bg-linear-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/40 dark:hover:to-indigo-900/40 transition-all duration-300 group/item border border-transparent hover:border-blue-100 dark:hover:border-blue-800">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover/item:bg-blue-600 group-hover/item:text-white dark:bg-blue-900/50 dark:text-blue-400">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground mb-0.5">Case Studies</div>
                        <p className="text-[10px] text-muted-foreground leading-snug">Success stories & results</p>
                      </div>
                    </Link>

                    <Link href="/resources/demo-videos" className="flex items-start gap-3 p-3 rounded-xl hover:bg-linear-to-br hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/40 dark:hover:to-pink-900/40 transition-all duration-300 group/item border border-transparent hover:border-purple-100 dark:hover:border-purple-800">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 transition-colors group-hover/item:bg-purple-600 group-hover/item:text-white dark:bg-purple-900/50 dark:text-purple-400">
                        <PlayCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground mb-0.5">Demo Videos</div>
                        <p className="text-[10px] text-muted-foreground leading-snug">Product walkthroughs</p>
                      </div>
                    </Link>

                    <Link href="/resources/latest-blogs" className="flex items-start gap-3 p-3 rounded-xl hover:bg-linear-to-br hover:from-pink-50 hover:to-rose-50 dark:hover:from-pink-900/40 dark:hover:to-rose-900/40 transition-all duration-300 group/item border border-transparent hover:border-pink-100 dark:hover:border-pink-800">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100 text-pink-600 transition-colors group-hover/item:bg-pink-600 group-hover/item:text-white dark:bg-pink-900/50 dark:text-pink-400">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground mb-0.5">Latest Blogs</div>
                        <p className="text-[10px] text-muted-foreground leading-snug">Insights & sales tips</p>
                      </div>
                    </Link>

                    <Link href="/resources/gtm-resources" className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50 dark:hover:from-orange-900/40 dark:hover:to-amber-900/40 transition-all duration-300 group/item border border-transparent hover:border-orange-100 dark:hover:border-orange-800">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600 transition-colors group-hover/item:bg-orange-600 group-hover/item:text-white dark:bg-orange-900/50 dark:text-orange-400">
                        <Rocket className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground mb-0.5">GTM Resources</div>
                        <p className="text-[10px] text-muted-foreground leading-snug">Guides & playbooks</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="order-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>

            {/* Enterprise Dropdown (temporarily hidden)
            <div className="group relative h-full flex items-center">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
                Enterprise
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out z-60">
                <div className="w-[180px] mt-2 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-2xl shadow-purple-500/20 dark:bg-slate-950 ring-1 ring-black/5">
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/enterprise/manufacturing"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-linear-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/40 dark:hover:to-indigo-900/40 transition-all duration-300 group/item border border-transparent hover:border-blue-100 dark:hover:border-blue-800"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover/item:bg-blue-600 group-hover/item:text-white dark:bg-blue-900/50 dark:text-blue-400">
                        <Factory className="h-4.5 w-4.5" />
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        Manufacturing
                      </div>
                    </Link>

                    <Link
                      href="/enterprise/logistics"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-linear-to-br hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/40 dark:hover:to-pink-900/40 transition-all duration-300 group/item border border-transparent hover:border-purple-100 dark:hover:border-purple-800"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 transition-colors group-hover/item:bg-purple-600 group-hover/item:text-white dark:bg-purple-900/50 dark:text-purple-400">
                        <Truck className="h-4.5 w-4.5" />
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        Logistics
                      </div>
                    </Link>

                    <Link
                      href="/enterprise/insurance"
                      className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-linear-to-br hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/40 dark:hover:to-blue-900/40 transition-all duration-300 group/item border border-transparent hover:border-cyan-100 dark:hover:border-cyan-800"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 transition-colors group-hover/item:bg-cyan-600 group-hover/item:text-white dark:bg-cyan-900/50 dark:text-cyan-400">
                        <Shield className="h-4.5 w-4.5" />
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        Insurance
                      </div>
                    </Link>


                  </div>
                </div>
              </div>
            </div>
            */}

            {/* Leadnius Community Dropdown */}
            <div className="group relative order-6 flex h-full items-center">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
                Leadnius Community
                <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute top-full right-0 pt-4 transition-all duration-300 ease-out z-[60]">
                <div className="w-[300px] overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-2xl shadow-purple-500/20 dark:bg-slate-950 ring-1 ring-black/5">
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => router.push("/community?showModal=true")}
                      className="flex w-full items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50 dark:hover:from-purple-900/40 dark:hover:to-indigo-900/40 transition-all duration-300 group/item border border-transparent hover:border-purple-100 dark:hover:border-blue-800"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 transition-colors group-hover/item:bg-purple-600 group-hover/item:text-white dark:bg-purple-900/50 dark:text-purple-400">
                        <Users className="h-5 w-5" />
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        Community
                      </div>
                    </button>

                    <Link
                      href="/affiliate-program"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/40 dark:hover:to-indigo-900/40 transition-all duration-300 group/item border border-transparent hover:border-blue-100 dark:hover:border-blue-800"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover/item:bg-blue-600 group-hover/item:text-white dark:bg-blue-900/50 dark:text-blue-400">
                        <Handshake className="h-5 w-5" />
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        Affiliate program
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </Link>
            <Link
              href="/login"
              className="rounded-full bg-foreground px-4 py-1.5 text-sm font-bold text-background transition-transform hover:scale-105 active:scale-95"
            >
              Start for free
            </Link>
          </div>
        </div>
      </nav>
      <SaasModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
