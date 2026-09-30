"use client";

import SolutionDetailPage from "@/components/solutions/SolutionDetailPage";
import { solutionPageContent } from "@/lib/solution-page-content";

export default function SalesTeamsPage() {
  return <SolutionDetailPage config={solutionPageContent["sales-teams"]} />;
}