"use client";

import SolutionDetailPage from "@/components/solutions/SolutionDetailPage";
import { solutionPageContent } from "@/lib/solution-page-content";

export default function AiEmployeesEnterprisePage() {
  return <SolutionDetailPage config={solutionPageContent["ai-employees-enterprise"]} />;
}
