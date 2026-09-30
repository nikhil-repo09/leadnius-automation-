export const solutionsOrder = [
  { id: "educational-consultants", title: "Educational Consultants", desc: "AI Research Engine & Shortlisting for Counselors" },
  { id: "consultancy-businesses", title: "Consultancy Businesses", desc: "Inquiry Automation & Lead Gen Tool for Consultants" },
  { id: "sales-teams", title: "Sales Teams", desc: "AI Prospecting & Outreach Engine for Sales Teams" },
  { id: "founders-startups", title: "Founders & Startups", desc: "AI-Powered Growth & Sales Engine for Founders" },
  { id: "agencies", title: "Agencies", desc: "AI-Powered Lead Generation & Growth Engine for Agencies" },
  { id: "gtm-intelligence", title: "GTM Intelligence", desc: "Role-Wise GTM Intelligence & Engine for Teams" },
  { id: "workflow-dashboard", title: "Workflow Dashboard", desc: "Research-to-Publish Workflow Automation Engine" },
  { id: "ai-employees-enterprise", title: "AI Employees for Enterprise", desc: "Content, RevOps, Strategy & Analytics AI Roles" },
] as const;

export type SolutionId = (typeof solutionsOrder)[number]["id"];
