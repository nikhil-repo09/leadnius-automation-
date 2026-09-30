export const servicesOrder = [
  {
    id: "product-marketing",
    title: "Product Marketing",
    desc: "Positioning & Messaging",
  },
  {
    id: "gtm-engineering",
    title: "AI GTM Engineering",
    desc: "Autonomous SDR Agents",
  },
  {
    id: "automation-transformation",
    title: "AI Automation & Transformation",
    desc: "Process Automation & Workflows",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    desc: "Technical SEO & Leadership",
  },
  {
    id: "investor-outreach",
    title: "Investor Outreach",
    desc: "Fundraising Target Mining",
  },
] as const;

export type ServiceId = (typeof servicesOrder)[number]["id"];
