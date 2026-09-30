import {
  Bot,
  Briefcase,
  Cpu,
  GraduationCap,
  LayoutDashboard,
} from "lucide-react";
import type { SolutionPageContent } from "@/components/solutions/SolutionDetailPage";
import type { SolutionId } from "@/lib/solutions";

export const solutionPageContent: Record<SolutionId, SolutionPageContent> = {
  "educational-consultants": {
    id: "educational-consultants",
    title: "Educational Consultants",
    icon: GraduationCap,
    heroLead: "Research like a counselor.",
    heroHighlight: "At the speed of AI.",
    intro: "Your expertise is what students pay for — not the hours you lose digging through university websites, rankings, and visa rules. The platform handles that research the way a professional counselor would, so you qualify enquiries faster, deliver better recommendations, and close more students.",
    primaryCta: "See it on your enquiries",
    secondaryCta: "How it works",
    panel: { title: "Counselor workspace · live", badge: "per student", rows: [{ label: "Profile captured", value: "guided" }, { label: "Best-fit universities", value: "matched" }, { label: "Fees & scholarships", value: "pulled" }, { label: "Visa & eligibility", value: "checked" }, { label: "Report ready", value: "minutes" }] },
    stats: [{ value: "2–3d → min", label: "Turnaround on a personalised university shortlist" }, { value: "1", label: "Place for fees, scholarships, deadlines & visa rules" }, { value: "More", label: "Enquiries handled without adding counselors" }, { value: "Higher", label: "Conversion from first enquiry to signed student" }],
    challenge: {
      eyebrow: "Lead generation, re-engineered",
      title: "Students don't need more information. They need the right information — fast.",
      desc: "Each enquiry can take days of manual research before a real conversation starts. Prospects cool off, and your best counselors spend time on Google instead of closing. The research should happen up front, so the first reply is already valuable.",
      oldLabel: "Traditional consulting",
      oldBullets: ["Every enquiry means days of manual university research", "Counselors search Google, rankings, and visa sites by hand", "Students wait days for a first shortlist", "Slow replies let hot leads go cold or shop around", "Quality depends on which counselor picks up the file", "Capacity is limited by how many students you can research"],
      newLabel: "Consultant + platform",
      newBullets: ["A guided profile captures budget, country, and course up front", "Automated research compiles best-fit universities in minutes", "Fees, scholarships, deadlines, and visa rules land in one report", "Useful first replies keep enquiries warm", "Senior-level quality stays consistent for every student", "More enquiries served without adding headcount"],
    },
    flow: { eyebrow: "The counselor workflow", title: "From raw enquiry to a report you'd be proud to send.", desc: "The platform does the first-pass legwork. You stay in control to review, refine, and add the judgment only an experienced advisor brings.", steps: [{ num: "01", title: "Capture", desc: "A guided conversation builds the student's profile — country, budget, course, and goals." }, { num: "02", title: "Research", desc: "The tool researches universities the way a counselor would, not with one generic answer." }, { num: "03", title: "Match", desc: "Best-fit universities surface against the student's profile and preferences." }, { num: "04", title: "Compile", desc: "Fees, scholarships, eligibility, deadlines, and visa guidance arrive in one report." }, { num: "05", title: "Refine", desc: "Review and adjust the shortlist with your own experience and relationships." }, { num: "06", title: "Convert", desc: "Send a personalised report within minutes and move the student to a decision." }] },
    cards: { eyebrow: "Quality of service", title: "The same expert judgment — just delivered faster.", desc: "This does not replace the counselor. It removes the manual research that slows the counselor down so every student gets a senior-level experience.", items: [{ eyebrow: "Personalised research", title: "Built around each student", desc: "Every recommendation follows the student's academic background, preferred country, budget, and career aspirations — never a generic list.", bullets: ["Profile-based matching", "Course, country & budget filters", "Career-goal alignment"] }, { eyebrow: "Guided conversations", title: "Asks before it answers", desc: "The tool asks the right questions before making recommendations, just like an experienced education counselor would.", bullets: ["Structured intake", "Preference memory", "Counselor-ready context"] }, { eyebrow: "Everything together", title: "The full picture, together", desc: "Compare universities, tuition fees, scholarships, eligibility, deadlines, visa requirements, and career outcomes side by side.", bullets: ["University comparisons", "Admission & visa checks", "Ready-to-send reports"] }] },
    comparison: { eyebrow: "Why not just use ChatGPT", title: "A chatbot answers questions. This researches for you.", desc: "Generic AI gives a student a paragraph and forgets them. A consultant needs a system that learns the profile, compares real options, and produces a report worth charging for.", primaryLabel: "The platform", secondaryLabel: "Generic AI chatbot", rows: [{ label: "Recommendations", primary: "Personalised to the profile", secondary: "Generic answers" }, { label: "Approach", primary: "Multi-step guided conversation", secondary: "One prompt at a time" }, { label: "Knows the student", primary: "Learns their goals", secondary: "Doesn't know the profile" }, { label: "University comparison", primary: "Detailed and side by side", secondary: "None" }, { label: "Memory", primary: "Remembers preferences", secondary: "No long-term memory" }, { label: "Output", primary: "Complete research report", secondary: "Basic information" }] },
    fit: { eyebrow: "Built for you if", title: "This fits your consultancy when…", items: [{ title: "Enquiries pile up faster than you can research them.", desc: "Clear the backlog without new hires." }, { title: "Your first reply takes days.", desc: "Speed to a useful shortlist is the difference between signed and lost." }, { title: "Quality swings by counselor.", desc: "Every student gets your senior-level standard, consistently." }] },
    faqs: [{ q: "Does this replace my counselors?", a: "No — it makes them faster. The platform handles manual first-pass research; counselors bring the judgment, relationships, and final recommendations students pay for." }, { q: "How is the research personalised?", a: "It is built from each student's academic background, preferred country, budget, and career goals, gathered through a guided conversation before a recommendation is made." }, { q: "What's in the student report?", a: "Best-fit universities, tuition fees, scholarships, eligibility, admission requirements, deadlines, visa guidance, living costs, and career outcomes — compared in one place for you to refine and send." }, { q: "How does this help convert more students?", a: "A useful, personalised report within minutes keeps a hot enquiry warm and positions you as the expert immediately instead of letting students wait days." }],
    final: { title: "See it run on your own enquiries.", desc: "Bring a real student profile. We'll show you the research report it produces in minutes — and what that speed can do to your conversion rate.", cta: "Book a walkthrough" },
  },
  "consultancy-businesses": {
    id: "consultancy-businesses",
    title: "Consultancy Businesses",
    icon: Briefcase,
    heroLead: "Less time chasing inquiries.",
    heroHighlight: "More time closing clients.",
    intro: "Whatever you consult on, the bottleneck is the same: inquiries arrive faster than you can research, qualify, and reply — so hot leads cool off and closing drags on. The tool captures every inquiry, qualifies it automatically, and hands you a prioritised list of clients ready to sign.",
    primaryCta: "See it on your pipeline",
    secondaryCta: "How it works",
    panel: { title: "Inquiry desk · live", badge: "today", rows: [{ label: "New inquiries", value: "auto-captured" }, { label: "Qualified & scored", value: "instant" }, { label: "Hot leads flagged", value: "priority" }, { label: "First response", value: "minutes" }, { label: "Follow-ups", value: "automated" }] },
    stats: [{ value: "0", label: "Inquiries lost to a slow or missed response" }, { value: "Min", label: "First-response time, not hours or days" }, { value: "Hrs", label: "Manual qualification handed back each week" }, { value: "More", label: "Clients closed from the same inquiry volume" }],
    challenge: { eyebrow: "The inquiry problem", title: "Your best clients are lost in the follow-up gap.", desc: "Consultants sell judgment and time — both are scarce. Yet most of the day goes to triaging inquiries, researching each one, and chasing follow-ups by hand. The tool closes that gap.", oldLabel: "Managing inquiries by hand", oldBullets: ["Inquiries scattered across email, forms, DMs, and calls", "Every lead researched and qualified manually", "No idea which inquiry is worth your time first", "Slow first replies let hot prospects go cold", "Follow-ups are forgotten in a busy week", "Closing drags because context lives in your head"], newLabel: "With the lead generation tool", newBullets: ["Every inquiry captured into one place automatically", "Auto-qualified and scored against your ideal client", "A prioritised list so you work the best lead first", "Instant first responses keep prospects engaged", "Automated follow-ups never drop a thread", "Full context on every lead so you close faster"] },
    flow: { eyebrow: "How it works", title: "From inquiry to signed client, on rails.", desc: "Six stages run in the background, turning a messy inbox into a clean, prioritised pipeline you can actually close.", steps: [{ num: "01", title: "Capture", desc: "Pull every inquiry from forms, email, chat, and social into one place." }, { num: "02", title: "Qualify", desc: "Auto-research and score each lead against your ideal-client criteria." }, { num: "03", title: "Prioritise", desc: "Rank inquiries so the highest-value clients surface at the top." }, { num: "04", title: "Respond", desc: "Send an instant, relevant first reply while intent is still high." }, { num: "05", title: "Nurture", desc: "Automated follow-up sequences keep warm leads moving forward." }, { num: "06", title: "Close", desc: "Step in with full context on the clients most ready to sign." }] },
    cards: { eyebrow: "What it does for you", title: "Built to save hours and win more clients.", desc: "A dependable inquiry engine that recovers the admin time your team needs to do its best work.", items: [{ eyebrow: "Efficiency", title: "Reclaim your week", desc: "Manual triage and research are handled automatically, giving your team back the hours that used to disappear into admin.", bullets: ["Auto-capture across channels", "Hands-off qualification", "No more copy-paste into a CRM"] }, { eyebrow: "Inquiry management", title: "Nothing falls through", desc: "Every inquiry is logged, scored, and tracked, so no lead is forgotten and no follow-up is missed.", bullets: ["One inbox for all inquiries", "Priority scoring", "Automated follow-up cadence"] }, { eyebrow: "Faster closing", title: "Close in less time", desc: "Instant responses and full lead context shorten the path from first inquiry to signed client.", bullets: ["Minutes-fast first replies", "Context on every prospect", "Focus on ready-to-sign leads"] }] },
    comparison: { eyebrow: "Manual vs. tool-assisted", title: "The same inquiries. A very different outcome.", desc: "A capture and follow-up system makes every inquiry visible, prioritised, and ready for the right next move.", primaryLabel: "With the tool", secondaryLabel: "Doing it manually", rows: [{ label: "Inquiry capture", primary: "All channels, one place", secondary: "Scattered and missed" }, { label: "Qualification", primary: "Automatic and scored", secondary: "Slow, manual, inconsistent" }, { label: "First-response time", primary: "Minutes", secondary: "Hours to days" }, { label: "Follow-up", primary: "Automated, never dropped", secondary: "Forgotten when busy" }, { label: "Prioritisation", primary: "Best leads first", secondary: "Whoever shouts loudest" }, { label: "Time to close", primary: "Shorter", secondary: "Dragged out" }] },
    fit: { eyebrow: "Works for any consultant", title: "Built for consultancies of every kind.", items: [{ title: "You get more inquiries than you can chase.", desc: "The tool captures and qualifies them automatically." }, { title: "Your time is your product.", desc: "Every hour saved on admin is an hour back on billable work." }, { title: "Deals stall in follow-up.", desc: "Automated nurture keeps prospects warm until they are ready to sign." }] },
    faqs: [{ q: "What kind of consultancy is this for?", a: "Any of them. Strategy, finance, immigration, marketing, HR, or a niche of your own all share the same mechanics: inquiries need qualifying and slow follow-up costs clients." }, { q: "Will it work with the tools I already use?", a: "Yes. It captures inquiries from forms, inboxes, chat, and social, and syncs into your CRM so it fits around the way you work." }, { q: "Does it replace the personal touch clients expect?", a: "No — it protects it by handling capture, qualification, and follow-up so your attention goes to conversations that actually close." }, { q: "How quickly will I see time savings?", a: "Almost immediately. Inquiries are captured and qualified automatically and first responses go out in minutes from day one." }],
    final: { title: "Turn your inquiries into signed clients.", desc: "Show us how leads reach you today. We'll map how the tool would capture, qualify, and close them — and how many hours it hands back each week.", cta: "Book a walkthrough" },
  },
  "gtm-intelligence": {
    id: "gtm-intelligence",
    title: "GTM Intelligence",
    icon: Cpu,
    heroLead: "One platform.",
    heroHighlight: "Intelligence tuned to every role.",
    intro: "A CMO, an SDR manager, and a content lead do not need the same dashboard — they need different answers from the same data. GTM Intelligence gives each role its own view: the signals they act on, the benchmarks they are measured by, and the next decision they should make.",
    primaryCta: "See your role's view",
    secondaryCta: "Explore the roles",
    panel: { title: "Role-wise intelligence · live", badge: "live data layer", rows: [{ label: "CMO · revenue & efficiency", value: "exec" }, { label: "Senior manager · team ops", value: "ops" }, { label: "GTM strategist · market", value: "signals" }, { label: "Content manager · impact", value: "content" }, { label: "SDR manager · pipeline", value: "outbound" }] },
    stats: [{ value: "5", label: "Role-specific intelligence views, one shared data layer" }, { value: "1", label: "Source of truth across the GTM team" }, { value: "Live", label: "Signals and alerts, not static reports" }, { value: "Next", label: "Every view ends in a recommended action" }],
    challenge: { eyebrow: "Why role-wise", title: "A shared dashboard tells everyone a little. It tells no one what to do.", desc: "Generic dashboards put every metric on every screen, so each person hunts for the numbers that matter and guesses at the rest. Role-wise intelligence starts from the decision each role owns.", oldLabel: "Generic dashboards", oldBullets: ["Every metric on every screen, relevant to no one", "Each role exports to a spreadsheet to find their numbers", "Data shows what happened, never what to do next", "Executives and reps argue over different versions of truth", "Insights arrive in a monthly deck, too late to act", "No benchmarks, so good is anyone's guess"], newLabel: "Role-wise GTM Intelligence", newBullets: ["Each role sees only the signals it acts on", "One shared data layer — no exports or reconciliation", "Every view ends in a recommended next move", "One source of truth from CMO down to SDR", "Live alerts when something needs attention", "Built-in benchmarks show what good looks like"] },
    showcase: { eyebrow: "Five roles, five lenses", title: "The same GTM data, answered for each seat.", desc: "Every role gets a view built around the decisions it owns — with the signals, benchmarks, and recommendations that matter to that seat.", items: [{ eyebrow: "Executive", title: "CMO", desc: "The revenue-and-efficiency view.", bullets: ["Pipeline and revenue contribution by channel", "Blended CAC and marketing efficiency", "Funnel health and budget-to-pipeline ROI", "Forecast-to-target gap alerts"] }, { eyebrow: "Operations", title: "Senior Manager", desc: "The team-performance view.", bullets: ["Performance by team, rep, and segment", "Capacity and workload balance", "Stage conversion and bottleneck detection", "Coaching flags on weak motions"] }, { eyebrow: "Strategy", title: "GTM Strategist", desc: "The market-signal view.", bullets: ["ICP and segment performance signals", "Market, competitor, and intent trends", "Channel and motion experiment results", "Scenario modelling for new motions"] }, { eyebrow: "Content", title: "Content Manager", desc: "The content-impact view.", bullets: ["Content-sourced and influenced pipeline", "Asset usage by sales in live deals", "Search and AI-answer visibility", "What to produce next, ranked by impact"] }, { eyebrow: "Outbound", title: "SDR Manager", desc: "The pipeline-generation view.", bullets: ["Meetings booked and cost per meeting", "Sequence, channel, and rep performance", "Reply, positive-reply, and show rates", "Where each rep should focus next"] }] },
    flow: { eyebrow: "How it comes together", title: "From raw GTM data to a decision, per role.", desc: "A shared intelligence layer turns operational data into live, relevant decisions for every seat.", steps: [{ num: "01", title: "Connect", desc: "Plug in CRM, outreach, analytics, and content sources." }, { num: "02", title: "Unify", desc: "Create one clean data layer every role reads from." }, { num: "03", title: "Model", desc: "Map metrics to the decisions each role owns." }, { num: "04", title: "Benchmark", desc: "Frame every number against what good looks like." }, { num: "05", title: "Surface", desc: "Give each seat its own live, filtered view." }, { num: "06", title: "Recommend", desc: "End every view in the next best action." }] },
    cards: { eyebrow: "Under every role view", title: "The engine that powers all five.", desc: "Different lenses, one intelligence layer. These capabilities keep the numbers reconciled and the recommendations aligned.", items: [{ eyebrow: "Signals", title: "Live, not lagging", desc: "Intent, engagement, and performance signals update in real time so a view reflects this morning, not last month.", bullets: ["Live intent signals", "Performance updates", "Fresh decision context"] }, { eyebrow: "Benchmarks", title: "Know what good is", desc: "Every metric is framed against a benchmark, so a number arrives with enough context to judge it.", bullets: ["Role-specific targets", "Comparative context", "Clear performance cues"] }, { eyebrow: "Recommendations", title: "Ends in an action", desc: "Each view closes with a recommended next move and the reasoning behind it — analysis your team can act on.", bullets: ["Action recommendations", "Decision rationale", "Prioritised next steps"] }, { eyebrow: "Alerts", title: "Told, not searching", desc: "The platform pushes an alert the moment something needs attention instead of waiting for someone to notice.", bullets: ["Exceptions surfaced", "Timely notifications", "Attention routing"] }, { eyebrow: "One data layer", title: "No more reconciling", desc: "All five roles read from the same source of truth, so numbers never disagree across the team.", bullets: ["Connected systems", "Shared definitions", "Trusted reporting"] }, { eyebrow: "Shareable", title: "Roll up or drill down", desc: "Any view rolls up for an executive or drills into a single rep, keeping the whole team aligned on reality.", bullets: ["Executive rollups", "Rep-level detail", "Aligned conversations"] }] },
    fit: { eyebrow: "Built for GTM teams", title: "Everyone sees the same truth — at the right altitude.", items: [{ title: "Leaders need the revenue picture.", desc: "See efficiency, pipeline, and forecast risk without paging through reports." }, { title: "Managers need action-ready operational context.", desc: "Find bottlenecks, capacity issues, and coaching opportunities before they grow." }, { title: "Specialists need relevant signals, not dashboard noise.", desc: "Each role gets a focused view tied to its actual decisions." }] },
    faqs: [{ q: "How is this different from our BI dashboard?", a: "A BI dashboard shows metrics and leaves interpretation to you. GTM Intelligence begins with each role's decision, then surfaces only the signals, benchmarks, and recommended actions that move it." }, { q: "Do all five roles see the same numbers?", a: "They read from the same data layer, so the numbers reconcile. Each role sees them through a different lens: same truth, different altitude." }, { q: "Can we start with one or two roles?", a: "Yes. Teams often start with the seat flying blindest — frequently the SDR or content manager — then add role views once the data layer is connected." }, { q: "What does each role get out of it?", a: "A faster, better-informed decision. The live view explains what is happening, whether it is good, and what to do next." }],
    final: { title: "See the view built for your seat.", desc: "Tell us your role and stack. We'll show you the signals, benchmarks, and recommendations your GTM Intelligence view would surface.", cta: "Book a walkthrough" },
  },
  "workflow-dashboard": {
    id: "workflow-dashboard",
    title: "Workflow Dashboard",
    icon: LayoutDashboard,
    heroLead: "Your research-to-publish workflow,",
    heroHighlight: "on autopilot.",
    intro: "Finding events and resources, deciding what is worth sharing, and posting to your community, website, and social channels is a full-time job done by hand. This dashboard automates the loop: AI web search finds what matters, you approve it, and it ships everywhere in your voice, on schedule.",
    primaryCta: "Automate my workflow",
    secondaryCta: "See the loop",
    panel: { title: "Workflow · running", badge: "today", rows: [{ label: "Events discovered", value: "web search" }, { label: "Resources curated", value: "ranked" }, { label: "Community post", value: "shared" }, { label: "Website & social", value: "scheduled" }, { label: "Content calendar", value: "synced" }] },
    stats: [{ value: "1", label: "Dashboard for discovery, curation, and publishing" }, { value: "Auto", label: "Web search for events and resources, on a schedule" }, { value: "All", label: "Community, website, and social channels in one place" }, { value: "Hrs", label: "Manual research and posting handed back each week" }],
    challenge: { eyebrow: "The manual loop", title: "Discovery, curation, and posting shouldn't eat your whole week.", desc: "Someone has to search for relevant resources, judge what is worth sharing, rewrite it per platform, and publish everywhere on time. Automated, the loop runs quietly in the background and never misses a beat.", oldLabel: "Doing it manually", oldBullets: ["Hours lost trawling the web for events and resources", "No consistent way to decide what is worth sharing", "The same update rewritten for each platform", "Posting to community, website, and social one by one", "Cadence collapses when the week gets busy", "No record of what was shared where or how it did"], newLabel: "With the dashboard", newBullets: ["AI web search surfaces relevant events and resources", "Ranked and curated so only the best makes the cut", "Reformatted per platform from one approved item", "Published to community, website, and social at once", "A steady cadence survives busy weeks", "One log of what shipped where with performance tracked"] },
    flow: { eyebrow: "The automated loop", title: "Discover, curate, publish — without you in the weeds.", desc: "Six stages turn open-web noise into a steady stream of on-brand posts. You control the approval step; the rest is automated.", steps: [{ num: "01", title: "Discover", desc: "Scheduled AI web search finds relevant events and resources in your niche." }, { num: "02", title: "Curate", desc: "Results are ranked and filtered so only what is worth sharing surfaces." }, { num: "03", title: "Approve", desc: "Review the shortlist and approve what goes out — the one human step." }, { num: "04", title: "Adapt", desc: "Each item is reformatted for community, website, and each social platform." }, { num: "05", title: "Publish", desc: "Posts ship directly to every channel on schedule, in your voice." }, { num: "06", title: "Track", desc: "Everything is logged in one calendar with performance fed back in." }] },
    cards: { eyebrow: "What it automates", title: "The whole research-and-content operation, in one place.", desc: "The dashboard brings discovery, curation, approval, publishing, and management into one dependable loop.", items: [{ eyebrow: "Discovery", title: "Event & resource research", desc: "Automated web search continuously surfaces events, articles, tools, and resources worth sharing with your audience.", bullets: ["Scheduled AI web search", "Niche and keyword targeting", "Relevance ranking and dedup", "Ready-to-review shortlists"] }, { eyebrow: "Community sharing", title: "Straight into your community", desc: "Approved finds are shared directly into community spaces, keeping members engaged with a steady flow of useful content.", bullets: ["Auto-post to community channels", "On-brand framing", "Scheduled at the right times", "Engagement tracked per post"] }, { eyebrow: "Website & social", title: "Publish everywhere at once", desc: "The same item is reshaped and pushed directly to your website and every social platform — no copy-paste required.", bullets: ["Direct website publishing", "Cross-posting to social", "Per-platform formatting", "One-click or fully automated"] }, { eyebrow: "Content management", title: "One calendar, every platform", desc: "All discovered, curated, and created content is managed from one calendar across every channel you run.", bullets: ["Unified content calendar", "Multi-platform scheduling", "Approval and status tracking", "Performance in one view"] }] },
    comparison: { eyebrow: "Why teams run it", title: "Built to keep the pipeline of content full.", desc: "Automation should protect your standards and your voice while removing the repetitive research and publishing work.", primaryLabel: "With the dashboard", secondaryLabel: "Without the dashboard", rows: [{ label: "Discovery", primary: "Scheduled AI search and ranking", secondary: "Manual, ad hoc searching" }, { label: "Curation", primary: "A short, reviewable list", secondary: "Scattered tabs and bookmarks" }, { label: "Approval", primary: "One focused human check", secondary: "Manual coordination throughout" }, { label: "Publishing", primary: "Adapted across every channel", secondary: "Copy-paste and reformatting" }, { label: "Brand voice", primary: "Framed by your rules", secondary: "Varies by time and person" }, { label: "Tracking", primary: "One calendar and feedback loop", secondary: "No shared operating record" }] },
    fit: { eyebrow: "Why teams run it", title: "Built to keep the pipeline of content full.", items: [{ title: "Always on", desc: "The discovery-to-publish loop keeps channels active even in your busiest weeks." }, { title: "In your voice", desc: "Every post is framed in your tone and formatted for its platform, so automation never reads as automated." }, { title: "You approve", desc: "Discovery and posting are automated, but you control the human step that matters." }] },
    faqs: [{ q: "Does it post without me checking anything?", a: "Only if you want it to. By default, there is one approval step: the dashboard discovers and drafts everything, then waits for your yes before publishing." }, { q: "Which channels can it publish to?", a: "Your community spaces, website, and social platforms from one place. The same approved item is reshaped for each channel automatically." }, { q: "How does it find events and resources?", a: "Scheduled AI web search targeted to your niche and keywords continuously finds relevant events, articles, tools, and resources, then ranks and de-duplicates them into a shortlist." }, { q: "Will the content still sound like us?", a: "Yes. It is framed in your brand voice and formatted per platform, using the tone and rules you set." }],
    final: { title: "Put your content workflow on autopilot.", desc: "Show us how you research and publish today. We'll map the loop the dashboard would automate — and the hours it hands back every week.", cta: "Book a walkthrough" },
  },
  "ai-employees-enterprise": {
    id: "ai-employees-enterprise",
    title: "AI Employees for Enterprise",
    icon: Bot,
    heroLead: "Hire AI employees.",
    heroHighlight: "Not another tool.",
    intro: "Software makes your team faster. An AI employee does the job. We build marketing AI employees that own real functions end to end — content, RevOps, strategy, lead management, data analysis, and more — trained on your context and wired directly into the systems you already run.",
    primaryCta: "Build your AI team",
    secondaryCta: "Meet the roster",
    panel: { title: "AI team · on shift", badge: "enterprise", rows: [{ label: "Content employee", value: "shipping" }, { label: "RevOps employee", value: "syncing" }, { label: "Strategy employee", value: "analysing" }, { label: "Lead-management employee", value: "qualifying" }, { label: "Data-analysis employee", value: "reporting" }] },
    stats: [{ value: "24/7", label: "On shift — no leave, no ramp time, zero context lost" }, { value: "1", label: "Shared context across the entire AI team" }, { value: "Your stack", label: "Direct integration with CRM, CMS, and data warehouse" }, { value: "End-to-end", label: "Outcome ownership, not isolated tasks" }],
    challenge: { eyebrow: "Tool vs. employee", title: "You don't need one more thing to log into.", desc: "Most SaaS tools wait for a person to open, configure, and click. An AI employee is the opposite: give it an outcome, and it owns the workflow behind that outcome and returns with the work done.", oldLabel: "Another SaaS tool", oldBullets: ["Waits for a person to do the work manually", "Owns one narrow feature, not the whole job", "Adds another login, seat cost, and learning curve", "Hands you outputs you still have to execute", "Lives in its own silo", "Scales only with more human headcount"], newLabel: "A Leadnius AI employee", newBullets: ["Owns an outcome and runs the end-to-end workflow", "Handles the whole function, not one isolated step", "Works inside your existing stack", "Delivers finished work with approval for high-stakes decisions", "Shares context across the AI team roster", "Adds capacity without inflating human headcount"] },
    showcase: { eyebrow: "The roster", title: "Your marketing team, staffed with AI employees.", desc: "Each employee owns a function the way a specialist hire would, with human judgment kept where it matters. Start with one or stand up a whole team on shared context.", items: [{ eyebrow: "Content", title: "Content Employee", desc: "Runs your content engine — research-led, on-brand, and built for both search and AI answer engines.", bullets: ["Briefs, drafts, and edits at volume", "Repurposes across every channel", "SEO + AEO optimisation", "Consistent brand voice"] }, { eyebrow: "RevOps", title: "RevOps Employee", desc: "Keeps the revenue engine clean with data hygiene, routing, and reporting that never fall behind.", bullets: ["CRM hygiene and deduplication", "Lead routing and stage automation", "Pipeline and funnel reporting", "Tool-to-tool data sync"] }, { eyebrow: "Strategy", title: "Strategy Employee", desc: "Builds and pressure-tests GTM strategy from real signals and revisits it as the market moves.", bullets: ["Market and competitor analysis", "ICP and segment modelling", "Channel and motion planning", "Scenario and forecast modelling"] }, { eyebrow: "Lead management", title: "Lead-Management Employee", desc: "Owns every inbound and sourced lead from capture to hand-off — researched, scored, and never dropped.", bullets: ["Capture across all channels", "Enrichment and qualification", "Scoring and prioritisation", "Automated timely follow-up"] }, { eyebrow: "Data & analytics", title: "Data-Analysis Employee", desc: "Turns scattered data into answers, pulling, cleaning, and analysing so decisions rest on evidence.", bullets: ["Cross-source data pulls", "Cleaning and normalisation", "Analysis and anomaly detection", "Plain-language reporting"] }, { eyebrow: "Research", title: "Research Employee", desc: "Runs continuous market, account, and topic research across the web and your data so every team works from current intelligence.", bullets: ["Market, competitor & account research", "Web search for events and sources", "Synthesised briefs", "Feeds the rest of the AI team"] }, { eyebrow: "Custom", title: "...and more, built to spec", desc: "If a function eats your team's time and runs on repeatable judgment and data, we can staff an AI employee for it.", bullets: ["Campaign operations", "Competitive intelligence", "Outreach and SDR support", "Whatever your team keeps redoing"] }] },
    flow: { eyebrow: "How we onboard an AI employee", title: "Hired, trained, and working — in weeks, not quarters.", desc: "We onboard an AI employee the way you would a great hire: understand the role, teach it context, wire it into tools, prove it on real work, then let it run.", steps: [{ num: "01", title: "Scope", desc: "Define the function, the outcomes it owns, and where humans stay in the loop." }, { num: "02", title: "Train", desc: "Ground it in your positioning, data model, voice, and rules." }, { num: "03", title: "Integrate", desc: "Wire it into CRM, warehouse, content, and comms systems." }, { num: "04", title: "Pilot", desc: "Run beside your team on live work until the output is trusted." }, { num: "05", title: "Deploy", desc: "Put it on shift with approval gates and monitoring in place." }, { num: "06", title: "Expand", desc: "Add the next employee once the first is paying for itself." }] },
    cards: { eyebrow: "Where an AI employee fits", title: "Between the hire you can't afford and the tool that doesn't act.", desc: "AI employees combine outcome ownership with an always-on operating model that works inside your systems.", items: [{ eyebrow: "More headcount", title: "The Human Hire", desc: "Brings judgment and ownership, but takes months to hire and ramp, works one shift, and takes knowledge out the door when they leave.", bullets: ["Slow and expensive to scale", "Limited hours and capacity", "Knowledge leaves when they quit"] }, { eyebrow: "Another SaaS tool", title: "The Software Seat", desc: "Always on, but only assists. It waits for a person to drive it and owns a feature rather than the whole job.", bullets: ["Assists, never acts alone", "One narrow capability", "Still needs a human driver"] }, { eyebrow: "Leadnius AI employee", title: "The Best of Both", desc: "Owns the outcome like a hire and runs always-on like software, trained on your business and wired into your stack.", bullets: ["Owns the function end to end", "24/7 and instant to scale", "Keeps context and never quits"] }] },
    layers: { eyebrow: "Wired into your world", title: "They work inside your systems, not beside them.", desc: "Each employee needs access to the tools where the work lives. We connect employees directly to your operating stack with control and traceability.", items: [{ number: "Layer 1", title: "Context", subtitle: "Trained on your business", desc: "Every employee is grounded in your positioning, ICP, brand voice, data model, and rules, so its work is yours — not generic.", chips: ["Positioning & ICP", "Brand voice", "Data model", "Playbooks & SOPs", "Approval rules"] }, { number: "Layer 2", title: "Integration", subtitle: "Connected to your stack", desc: "Each employee reads and writes across the systems your team already uses, so it acts where work happens.", chips: ["CRM", "Data warehouse", "Marketing automation", "CMS & social", "Slack / email", "Analytics"] }, { number: "Layer 3", title: "Governance", subtitle: "Human control where it counts", desc: "High-stakes actions route for approval and every action is logged: automation with a clear audit trail.", chips: ["Approval gates", "Full audit log", "Permissions & scopes", "Guardrails"] }] },
    metrics: [{ label: "Work shipped", value: "Output owned", desc: "Finished work delivered: content published, leads processed, reports produced." }, { label: "Cycle time", value: "Faster throughput", desc: "How quickly the function turns around compared with before." }, { label: "Hours reclaimed", value: "Team freed", desc: "Manual load lifted from your people and redirected to human judgment." }, { label: "Quality & approval", value: "Trust rate", desc: "Share of work approved as-is — evidence that it owns the job." }],
    fit: { eyebrow: "Right for you if", title: "Enterprises bring us in when…", items: [{ title: "Headcount can't keep up with the work.", desc: "AI employees add capacity without adding a requisition." }, { title: "Your best people do repetitive work.", desc: "Move repeatable functions to AI so humans focus on judgment." }, { title: "Tools pile up but work still lags.", desc: "You need something that does the job, not another seat." }, { title: "Your stack is complex.", desc: "Employees integrate into it rather than forcing a rebuild." }, { title: "Governance matters.", desc: "Approval gates and audit logs keep AI accountable to your standards." }, { title: "You want to start small.", desc: "Stand up one employee, prove it, then grow the team." }] },
    faqs: [{ q: "How is an AI employee different from an AI tool or agent?", a: "A tool assists a person; an AI employee owns an outcome. It runs the workflow across your systems and comes back with the job done, managed through outcomes and approvals." }, { q: "Will it integrate with our existing systems?", a: "Yes. Each employee is wired into the CRM, data warehouse, marketing automation, CMS, social, comms, and analytics systems you already run." }, { q: "How do we keep control of what it does?", a: "High-stakes actions route to human approval, permissions are tightly scoped, and every action is logged for a full audit trail." }, { q: "Do we own it, or is it locked to you?", a: "You own the context, workflows, and integrations. We build, train, and maintain employees, but you are never trapped in a black box." }, { q: "Can we start with a single AI employee?", a: "Most enterprises do. We stand up the function hurting most, prove it on live work, then expand once it is earning its keep." }, { q: "How long until one is working?", a: "Weeks, not quarters. We scope the role, train it on your context, integrate it, and pilot on real work before full deployment." }],
    final: { title: "Staff your marketing org with AI employees.", desc: "Tell us the function stretching your team thinnest. We'll show you the AI employee that would own it — trained on your business and wired into your systems.", cta: "Build your AI team" },
  },
    "sales-teams": {
    id: "sales-teams",
    title: "Sales Teams",
    icon: Briefcase,

    heroLead: "Build a smarter sales team with",
    heroHighlight: "AI-powered execution.",

    intro:
      "Leadnius helps sales teams identify the right prospects, understand their accounts, personalize outreach, and automate follow-ups across the sales workflow. Your team spends less time researching and managing repetitive tasks—and more time building relationships, running conversations, and closing opportunities.",

    primaryCta: "Start for free",
    secondaryCta: "See how it works",

    panel: {
      title: "AI sales engine · live",
      badge: "sales workflow",
      rows: [
        { label: "Prospects discovered", value: "targeted" },
        { label: "Accounts researched", value: "enriched" },
        { label: "Leads prioritised", value: "scored" },
        { label: "Outreach", value: "personalised" },
        { label: "Follow-ups", value: "automated" },
      ],
    },

    stats: [
      {
        value: "1",
        label: "Connected workflow from prospect discovery to outreach",
      },
      {
        value: "AI",
        label: "Research and qualification support for every prospect",
      },
      {
        value: "Auto",
        label: "Follow-ups that keep opportunities moving",
      },
      {
        value: "More",
        label: "Selling time for reps instead of repetitive admin",
      },
    ],

    challenge: {
      eyebrow: "The sales productivity gap",
      title: "Your sales team should spend more time selling, not researching.",
      desc:
        "Sales reps spend a large part of their day finding prospects, researching accounts, preparing messages, updating systems, and remembering follow-ups. Leadnius brings these repetitive steps into an AI-assisted workflow so reps can focus more on conversations and closing opportunities.",

      oldLabel: "Traditional sales workflow",

      oldBullets: [
        "Prospect research takes hours across different sources",
        "Sales reps manually qualify and prioritise leads",
        "Every outreach message needs to be researched and written",
        "Follow-ups depend on reps remembering to send them",
        "CRM updates and sales admin take time away from selling",
        "Managers have limited visibility into where reps should focus",
      ],

      newLabel: "AI-assisted sales workflow",

      newBullets: [
        "Relevant prospects are discovered against your ICP",
        "Account and contact information is researched automatically",
        "Leads are enriched and prioritised before reps engage",
        "Personalised outreach can be prepared at scale",
        "Automated follow-ups keep prospects moving",
        "Reps receive context and focus on the conversations that matter",
      ],
    },

    flow: {
      eyebrow: "Your AI-powered sales workflow",
      title: "From ideal customer profile to qualified conversation.",
      desc:
        "Leadnius connects the repetitive parts of the sales process into one workflow while keeping your sales team in control of the conversations that matter.",

      steps: [
        {
          num: "01",
          title: "Define",
          desc:
            "Set your ideal customer profile, target industries, roles, company characteristics, and sales criteria.",
        },
        {
          num: "02",
          title: "Discover",
          desc:
            "Find prospects and accounts that match your target profile instead of searching manually.",
        },
        {
          num: "03",
          title: "Enrich",
          desc:
            "Research companies and contacts to build useful context around every prospect.",
        },
        {
          num: "04",
          title: "Score",
          desc:
            "Prioritise prospects based on fit, relevance, and the signals that matter to your sales motion.",
        },
        {
          num: "05",
          title: "Reach",
          desc:
            "Create personalised outreach based on the prospect, company, role, and available context.",
        },
        {
          num: "06",
          title: "Follow Up",
          desc:
            "Keep conversations moving with automated follow-ups instead of relying on manual reminders.",
        },
        {
          num: "07",
          title: "Hand Off",
          desc:
            "Bring qualified and interested prospects to sales reps with the context they need for the conversation.",
        },
        {
          num: "08",
          title: "Optimise",
          desc:
            "Use sales activity and response signals to improve targeting, messaging, and prioritisation over time.",
        },
      ],
    },

    cards: {
      eyebrow: "An AI-powered sales layer",
      title: "Give every sales rep an AI assistant for the repetitive work.",
      desc:
        "Leadnius supports the research, prospecting, outreach, and follow-up work around your sales team so reps can spend more time building relationships and closing deals.",

      items: [
        {
          eyebrow: "Research",
          title: "Research Assistant",
          desc:
            "Give reps fast access to company and prospect context before they start a conversation.",
          bullets: [
            "Account research",
            "Contact research",
            "Company context",
            "Relevant sales signals",
          ],
        },
        {
          eyebrow: "Prospecting",
          title: "Prospecting Engine",
          desc:
            "Find and organise prospects that match your ideal customer profile.",
          bullets: [
            "ICP-based targeting",
            "Prospect discovery",
            "Account identification",
            "Lead prioritisation",
          ],
        },
        {
          eyebrow: "Outreach",
          title: "Outreach Assistant",
          desc:
            "Help reps create relevant messages without starting every email from a blank page.",
          bullets: [
            "Personalised messaging",
            "Prospect-specific context",
            "Multi-step sequences",
            "Consistent sales messaging",
          ],
        },
        {
          eyebrow: "Follow-up",
          title: "Follow-Up Engine",
          desc:
            "Keep prospects engaged with timely follow-ups while reducing manual sales admin.",
          bullets: [
            "Automated reminders",
            "Follow-up sequences",
            "Conversation tracking",
            "Opportunity re-engagement",
          ],
        },
        {
          eyebrow: "Intelligence",
          title: "Pipeline Intelligence",
          desc:
            "Give sales leaders and reps better visibility into prospects, activity, and opportunities.",
          bullets: [
            "Lead activity signals",
            "Pipeline visibility",
            "Prospect prioritisation",
            "Sales performance context",
          ],
        },
        {
          eyebrow: "Operations",
          title: "Sales Operations Layer",
          desc:
            "Reduce repetitive administrative work around the sales process and keep information organised.",
          bullets: [
            "CRM-ready information",
            "Lead organisation",
            "Activity tracking",
            "Workflow automation",
          ],
        },
      ],
    },

    comparison: {
      eyebrow: "Manual vs. AI-assisted",
      title: "Let AI handle the repetitive work around selling.",
      desc:
        "The goal is not to remove the salesperson. It is to remove the repetitive work that prevents salespeople from spending more time with prospects.",

      primaryLabel: "AI-assisted sales",
      secondaryLabel: "Manual sales workflow",

      rows: [
        {
          label: "Prospecting",
          primary: "ICP-based discovery",
          secondary: "Manual searching",
        },
        {
          label: "Research",
          primary: "AI-assisted account research",
          secondary: "Research across multiple sources",
        },
        {
          label: "Qualification",
          primary: "Scored and prioritised",
          secondary: "Manual evaluation",
        },
        {
          label: "Outreach",
          primary: "Personalised at scale",
          secondary: "Written individually",
        },
        {
          label: "Follow-up",
          primary: "Automated sequences",
          secondary: "Manual reminders",
        },
        {
          label: "Rep focus",
          primary: "More time for conversations",
          secondary: "More time on admin",
        },
      ],
    },

    fit: {
      eyebrow: "Built for sales teams",
      title: "Leadnius fits teams that want to spend more time selling.",

      items: [
        {
          title: "SDRs and BDRs need more qualified prospects.",
          desc:
            "Automate repetitive prospecting and research so reps can focus on starting relevant conversations.",
        },
        {
          title: "Account executives need better context.",
          desc:
            "Give reps the research and prospect information they need before important sales conversations.",
        },
        {
          title: "Sales leaders need better visibility.",
          desc:
            "Create a more connected view of prospecting, outreach, follow-up, and pipeline activity.",
        },
        {
          title: "RevOps teams need fewer repetitive workflows.",
          desc:
            "Automate the operational work that surrounds prospecting and sales execution.",
        },
      ],
    },

    faqs: [
      {
        q: "Does Leadnius replace sales reps?",
        a:
          "No. Leadnius is designed to support sales teams by handling repetitive research, prospecting, outreach, and follow-up work so salespeople can focus on conversations, relationships, and closing.",
      },
      {
        q: "What kind of sales teams can use Leadnius?",
        a:
          "Leadnius can support SDR and BDR teams, account executives, sales leaders, RevOps teams, and growing sales organisations that want to automate repetitive sales workflows.",
      },
      {
        q: "Can Leadnius help with prospect research?",
        a:
          "Yes. The workflow can help discover relevant prospects, research accounts and contacts, enrich information, and organise the context sales reps need before outreach.",
      },
      {
        q: "Can outreach be personalised?",
        a:
          "Yes. Prospect and account context can be used to create more relevant outreach instead of relying on the same generic message for every prospect.",
      },
      {
        q: "Does it automate follow-ups?",
        a:
          "Leadnius can support automated follow-up workflows so sales teams do not have to rely entirely on manual reminders to keep prospects moving.",
      },
      {
        q: "Will sales reps still control the process?",
        a:
          "Yes. The purpose is to automate repetitive parts of the workflow while keeping sales reps involved in the conversations, decisions, and relationships that require human judgment.",
      },
    ],

    final: {
      title: "Give your sales team an AI-powered sales layer.",
      desc:
        "Show us how your team currently finds, researches, contacts, and follows up with prospects. We'll map the repetitive work Leadnius can help automate.",
      cta: "Book a walkthrough",
    },
  },
    "founders-startups": {
    id: "founders-startups",
    title: "Founders & Startups",
    icon: Briefcase,

    heroLead: "Turn founder-led sales into",
    heroHighlight: "an AI-powered growth engine.",

    intro:
      "Leadnius helps founders and startup teams find the right prospects, research accounts, personalise outreach, and automate follow-ups. Instead of spending hours on repetitive sales work, founders can focus on building the product, talking to customers, and growing the business.",

    primaryCta: "Start for free",
    secondaryCta: "See how it works",

    panel: {
      title: "AI founder sales engine · live",
      badge: "growth workflow",
      rows: [
        { label: "Target accounts", value: "identified" },
        { label: "Prospects", value: "researched" },
        { label: "Leads", value: "prioritised" },
        { label: "Outreach", value: "personalised" },
        { label: "Follow-ups", value: "automated" },
      ],
    },

    stats: [
      { value: "1", label: "Connected workflow from prospect discovery to outreach" },
      { value: "AI", label: "Research and qualification support for every prospect" },
      { value: "Auto", label: "Follow-ups that keep opportunities moving" },
      { value: "More", label: "Founder time for product, customers, and growth" },
    ],

    challenge: {
      eyebrow: "The founder sales problem",
      title: "Your startup needs customers. Your time should not disappear into sales admin.",
      desc:
        "Early-stage founders often handle prospecting, research, outreach, follow-ups, and sales operations themselves. Leadnius brings these repetitive activities into an AI-assisted workflow so founders can spend more time with customers and focus on building the business.",
      oldLabel: "Traditional founder-led sales",
      oldBullets: [
        "Finding the right prospects takes hours",
        "Researching every company and contact is repetitive",
        "Outreach has to be written one prospect at a time",
        "Follow-ups are easy to miss when founders are busy",
        "Sales information becomes scattered across different tools",
        "Growing the pipeline takes time away from product and customers",
      ],
      newLabel: "AI-assisted founder sales",
      newBullets: [
        "Discover prospects that match your ideal customer profile",
        "Research companies and contacts automatically",
        "Prioritise prospects before spending time on outreach",
        "Create personalised messages using prospect context",
        "Automate follow-ups to keep conversations moving",
        "Give founders more time for customers, product, and growth",
      ],
    },

    flow: {
      eyebrow: "Your AI-powered founder sales workflow",
      title: "From ideal customer to qualified conversation.",
      desc:
        "Leadnius connects the repetitive parts of founder-led sales into one workflow while keeping the founder in control of important customer conversations.",
      steps: [
        {
          num: "01",
          title: "Define",
          desc: "Set your ideal customer profile, target industries, roles, company characteristics, and buying criteria.",
        },
        {
          num: "02",
          title: "Discover",
          desc: "Find companies and prospects that match the customers your startup wants to reach.",
        },
        {
          num: "03",
          title: "Research",
          desc: "Build useful context around accounts and contacts before starting a conversation.",
        },
        {
          num: "04",
          title: "Prioritise",
          desc: "Focus your time on prospects that show the strongest fit with your startup's offering.",
        },
        {
          num: "05",
          title: "Reach",
          desc: "Create personalised outreach based on the prospect, company, role, and available context.",
        },
        {
          num: "06",
          title: "Follow Up",
          desc: "Keep prospects engaged with automated follow-ups instead of relying on manual reminders.",
        },
        {
          num: "07",
          title: "Connect",
          desc: "Bring qualified and interested prospects into conversations where the founder can build the relationship.",
        },
        {
          num: "08",
          title: "Optimise",
          desc: "Use response and activity signals to improve targeting, messaging, and sales workflows over time.",
        },
      ],
    },

    cards: {
      eyebrow: "An AI growth layer for founders",
      title: "Give yourself an AI assistant for the repetitive parts of sales.",
      desc:
        "Leadnius supports the prospecting, research, outreach, and follow-up work around your startup so you can spend more time building relationships and growing the company.",
      items: [
        {
          eyebrow: "Research",
          title: "Founder Research Assistant",
          desc: "Get useful company and prospect context before starting an important customer conversation.",
          bullets: [
            "Account research",
            "Contact research",
            "Company context",
            "Relevant sales signals",
          ],
        },
        {
          eyebrow: "Prospecting",
          title: "Prospecting Engine",
          desc: "Find potential customers that match your startup's ideal customer profile.",
          bullets: [
            "ICP-based targeting",
            "Prospect discovery",
            "Account identification",
            "Lead prioritisation",
          ],
        },
        {
          eyebrow: "Outreach",
          title: "Personalised Outreach",
          desc: "Create relevant sales messages without manually researching and writing every first touch.",
          bullets: [
            "Personalised messaging",
            "Prospect-specific context",
            "Multi-step sequences",
            "Consistent messaging",
          ],
        },
        {
          eyebrow: "Follow-up",
          title: "Follow-Up Engine",
          desc: "Keep potential customers moving through the sales process without relying on memory.",
          bullets: [
            "Automated reminders",
            "Follow-up sequences",
            "Conversation tracking",
            "Opportunity re-engagement",
          ],
        },
        {
          eyebrow: "Pipeline",
          title: "Growth Pipeline Intelligence",
          desc: "Keep a clearer view of prospects, conversations, and opportunities as your startup grows.",
          bullets: [
            "Lead activity signals",
            "Pipeline visibility",
            "Prospect prioritisation",
            "Opportunity context",
          ],
        },
        {
          eyebrow: "Operations",
          title: "Startup Sales Operations",
          desc: "Reduce repetitive administrative work around your sales process and keep information organised.",
          bullets: [
            "Lead organisation",
            "Activity tracking",
            "CRM-ready information",
            "Workflow automation",
          ],
        },
      ],
    },

    comparison: {
      eyebrow: "Manual vs. AI-assisted",
      title: "Let AI handle the repetitive work around founder-led sales.",
      desc:
        "The goal is not to replace the founder. It is to reduce the repetitive work that takes founders away from customers, product, and growth.",
      primaryLabel: "AI-assisted founder sales",
      secondaryLabel: "Manual founder sales",
      rows: [
        {
          label: "Prospecting",
          primary: "ICP-based discovery",
          secondary: "Manual searching",
        },
        {
          label: "Research",
          primary: "AI-assisted account research",
          secondary: "Research across multiple sources",
        },
        {
          label: "Qualification",
          primary: "Prioritised prospects",
          secondary: "Manual evaluation",
        },
        {
          label: "Outreach",
          primary: "Personalised at scale",
          secondary: "Written individually",
        },
        {
          label: "Follow-up",
          primary: "Automated sequences",
          secondary: "Manual reminders",
        },
        {
          label: "Founder focus",
          primary: "More time for customers and product",
          secondary: "More time on sales administration",
        },
      ],
    },

    fit: {
      eyebrow: "Built for founders & startups",
      title: "Leadnius helps lean teams build a repeatable sales workflow.",
      items: [
        {
          title: "Founders are doing their own sales.",
          desc: "Automate repetitive prospecting and research while keeping founders involved in the conversations that matter.",
        },
        {
          title: "Startups need their first repeatable pipeline.",
          desc: "Create a connected workflow for finding, researching, contacting, and following up with potential customers.",
        },
        {
          title: "Small teams need to do more with less.",
          desc: "Use AI to reduce repetitive sales work without needing a large sales operations team.",
        },
        {
          title: "Growing startups need better sales visibility.",
          desc: "Keep prospect and activity information organised as outreach and customer conversations increase.",
        },
      ],
    },

    faqs: [
      {
        q: "Is Leadnius useful for early-stage startups?",
        a: "Yes. Leadnius is designed to support lean teams that need to find prospects, research accounts, run outreach, and manage follow-ups without building a large sales operations process.",
      },
      {
        q: "Does Leadnius replace the founder in sales?",
        a: "No. Leadnius supports the repetitive parts of the sales workflow so founders can spend more time on customer conversations, relationships, product, and growth.",
      },
      {
        q: "Can Leadnius help me find potential customers?",
        a: "Yes. The workflow can help discover prospects and accounts based on your ideal customer profile and organise them for further research and outreach.",
      },
      {
        q: "Can I personalise outreach?",
        a: "Yes. Prospect and company context can be used to create more relevant outreach instead of sending the same generic message to every potential customer.",
      },
      {
        q: "Can follow-ups be automated?",
        a: "Leadnius can support automated follow-up workflows so founders do not have to manually remember every follow-up.",
      },
      {
        q: "Can Leadnius work as my startup grows?",
        a: "Yes. The workflow can support prospecting, research, outreach, and sales operations as your customer pipeline and team become more structured.",
      },
    ],

    final: {
      title: "Give your startup an AI-powered growth engine.",
      desc:
        "Show us how you currently find, research, contact, and follow up with potential customers. We'll map the repetitive work Leadnius can help automate.",
      cta: "Book a walkthrough",
    },
  },
    "agencies": {
    id: "agencies",
    title: "Agencies",
    icon: Briefcase,

    heroLead: "Scale your agency with",
    heroHighlight: "an AI-powered growth engine.",

    intro:
      "Leadnius helps agencies manage prospecting, research, outreach, and follow-ups across multiple client campaigns. Build repeatable sales workflows for your clients while reducing the repetitive work your team handles manually.",

    primaryCta: "Start for free",
    secondaryCta: "See how it works",

    panel: {
      title: "AI agency growth engine · live",
      badge: "agency workflow",
      rows: [
        { label: "Client campaigns", value: "organised" },
        { label: "Prospects", value: "researched" },
        { label: "Leads", value: "enriched" },
        { label: "Outreach", value: "personalised" },
        { label: "Follow-ups", value: "automated" },
      ],
    },

    stats: [
      {
        value: "1",
        label: "Connected workflow from client targeting to outreach",
      },
      {
        value: "AI",
        label: "Research and qualification support across campaigns",
      },
      {
        value: "Auto",
        label: "Follow-ups that keep client campaigns moving",
      },
      {
        value: "More",
        label: "Agency capacity for strategy and client relationships",
      },
    ],

    challenge: {
      eyebrow: "The agency growth problem",
      title: "Your agency should scale clients, not repetitive work.",
      desc:
        "Running outreach for multiple clients means managing different audiences, campaigns, prospects, messages, follow-ups, and reports. As client volume grows, manual operations can become difficult to manage. Leadnius helps agencies bring these workflows into a connected AI-assisted system.",

      oldLabel: "Traditional agency workflow",

      oldBullets: [
        "Each client requires separate prospect research",
        "Campaign setup and management takes significant time",
        "Teams repeatedly create similar outreach workflows",
        "Follow-ups are difficult to manage across multiple campaigns",
        "Client reporting requires manual effort",
        "Adding more clients increases operational workload",
      ],

      newLabel: "AI-assisted agency workflow",

      newBullets: [
        "Create repeatable workflows for different clients",
        "Research prospects and accounts automatically",
        "Personalise outreach using client-specific context",
        "Automate follow-ups across campaigns",
        "Keep client activity and results organised",
        "Scale campaign operations with less manual work",
      ],
    },

    flow: {
      eyebrow: "Your AI-powered agency workflow",
      title: "From client onboarding to qualified conversations.",
      desc:
        "Leadnius connects the repetitive parts of agency campaign operations into one workflow while keeping your team focused on strategy, optimisation, and client relationships.",

      steps: [
        {
          num: "01",
          title: "Onboard",
          desc:
            "Understand the client's ICP, target market, offer, and sales objectives.",
        },
        {
          num: "02",
          title: "Define",
          desc:
            "Configure the audience, industries, roles, geography, and qualification criteria.",
        },
        {
          num: "03",
          title: "Discover",
          desc:
            "Find prospects and accounts matching the client's target profile.",
        },
        {
          num: "04",
          title: "Research",
          desc:
            "Build useful company and contact context for outreach.",
        },
        {
          num: "05",
          title: "Launch",
          desc:
            "Create personalised campaigns based on each client's goals and audience.",
        },
        {
          num: "06",
          title: "Follow Up",
          desc:
            "Keep prospects engaged with automated follow-up workflows.",
        },
        {
          num: "07",
          title: "Report",
          desc:
            "Organise campaign activity, responses, and opportunities for client visibility.",
        },
        {
          num: "08",
          title: "Optimise",
          desc:
            "Use campaign signals to improve targeting, messaging, and performance.",
        },
      ],
    },

    cards: {
      eyebrow: "An AI growth layer for agencies",
      title: "Give your agency an AI-powered execution layer.",
      desc:
        "Leadnius supports the prospecting, research, outreach, and follow-up work around your client campaigns so your team can spend more time on strategy and client relationships.",

      items: [
        {
          eyebrow: "Research",
          title: "Client Research Assistant",
          desc:
            "Research companies and prospects quickly so your team can prepare campaigns with better context.",
          bullets: [
            "Account research",
            "Contact research",
            "Company context",
            "Relevant sales signals",
          ],
        },
        {
          eyebrow: "Prospecting",
          title: "Multi-Client Prospecting Engine",
          desc:
            "Build prospect lists for different clients based on their individual ICPs and targeting criteria.",
          bullets: [
            "Client-specific targeting",
            "Prospect discovery",
            "Account identification",
            "Lead prioritisation",
          ],
        },
        {
          eyebrow: "Outreach",
          title: "Campaign Outreach Assistant",
          desc:
            "Create personalised outreach for each client without starting every campaign from scratch.",
          bullets: [
            "Personalised messaging",
            "Client-specific context",
            "Campaign sequences",
            "Consistent messaging",
          ],
        },
        {
          eyebrow: "Follow-up",
          title: "Follow-Up Engine",
          desc:
            "Automate follow-ups across client campaigns so opportunities do not get forgotten.",
          bullets: [
            "Automated reminders",
            "Follow-up sequences",
            "Conversation tracking",
            "Opportunity re-engagement",
          ],
        },
        {
          eyebrow: "Intelligence",
          title: "Client Intelligence",
          desc:
            "Keep prospect, campaign, and activity information organised for better visibility.",
          bullets: [
            "Campaign activity signals",
            "Pipeline visibility",
            "Prospect prioritisation",
            "Client performance context",
          ],
        },
        {
          eyebrow: "Operations",
          title: "Agency Operations Layer",
          desc:
            "Reduce repetitive campaign management and administrative work as your client base grows.",
          bullets: [
            "Lead organisation",
            "Activity tracking",
            "Campaign management",
            "Workflow automation",
          ],
        },
      ],
    },

    comparison: {
      eyebrow: "Manual vs. AI-assisted",
      title: "Let AI handle the repetitive work around agency campaigns.",
      desc:
        "The goal is to reduce repetitive campaign operations so agency teams can spend more time on strategy, optimisation, and client relationships.",

      primaryLabel: "AI-assisted agency",
      secondaryLabel: "Manual agency workflow",

      rows: [
        {
          label: "Client onboarding",
          primary: "Repeatable workflows",
          secondary: "Manual setup",
        },
        {
          label: "Prospecting",
          primary: "ICP-based discovery",
          secondary: "Manual research",
        },
        {
          label: "Research",
          primary: "AI-assisted enrichment",
          secondary: "Research across sources",
        },
        {
          label: "Outreach",
          primary: "Personalised campaigns",
          secondary: "Repetitive campaign creation",
        },
        {
          label: "Follow-up",
          primary: "Automated sequences",
          secondary: "Manual reminders",
        },
        {
          label: "Reporting",
          primary: "Organised campaign insights",
          secondary: "Manual reporting",
        },
      ],
    },

    fit: {
      eyebrow: "Built for agencies",
      title: "Leadnius helps agencies build repeatable growth operations.",

      items: [
        {
          title: "Agencies managing multiple clients",
          desc:
            "Keep different client campaigns and workflows organised.",
        },
        {
          title: "Lead generation agencies",
          desc:
            "Automate repetitive prospecting, research, outreach, and follow-ups.",
        },
        {
          title: "Marketing agencies adding outbound services",
          desc:
            "Add AI-assisted sales workflows without building a large sales team.",
        },
        {
          title: "Growing agencies",
          desc:
            "Handle more campaign operations while keeping the team focused on strategy and client relationships.",
        },
      ],
    },

    faqs: [
      {
        q: "Can Leadnius support multiple clients?",
        a:
          "Leadnius can support agency workflows where different client campaigns require different targeting, research, outreach, and follow-up processes.",
      },
      {
        q: "Can agencies create different workflows for different clients?",
        a:
          "Yes. Each client's ICP, audience, messaging, and campaign requirements can be handled as part of their own workflow.",
      },
      {
        q: "Can Leadnius help with client prospecting?",
        a:
          "Yes. Leadnius can help discover and research prospects based on the targeting criteria defined for each client.",
      },
      {
        q: "Can outreach be personalised for each client?",
        a:
          "Yes. Client-specific and prospect-specific context can be used to create more relevant outreach.",
      },
      {
        q: "Can follow-ups be automated?",
        a:
          "Yes. Agencies can use automated follow-up workflows to keep prospects moving across campaigns.",
      },
      {
        q: "Can Leadnius help reduce agency operations work?",
        a:
          "Leadnius is designed to automate repetitive prospecting, research, outreach, follow-up, and workflow tasks so agency teams can spend more time on strategy and client relationships.",
      },
    ],

    final: {
      title: "Build a more scalable AI-powered agency.",
      desc:
        "Show us how your agency currently manages client prospecting, outreach, and follow-ups. We'll map the repetitive work Leadnius can help automate.",
      cta: "Book a walkthrough",
    },
  },
};
