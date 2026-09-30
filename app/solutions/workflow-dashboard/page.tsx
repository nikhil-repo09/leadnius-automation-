"use client";

import SolutionDetailPage from "@/components/solutions/SolutionDetailPage";
import { solutionPageContent } from "@/lib/solution-page-content";

export default function WorkflowDashboardPage() {
  return <SolutionDetailPage config={solutionPageContent["workflow-dashboard"]} />;
}
