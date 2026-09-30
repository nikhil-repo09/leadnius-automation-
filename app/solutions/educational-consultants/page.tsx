"use client";

import SolutionDetailPage from "@/components/solutions/SolutionDetailPage";
import { solutionPageContent } from "@/lib/solution-page-content";

export default function EducationalConsultantsPage() {
  return <SolutionDetailPage config={solutionPageContent["educational-consultants"]} />;
}
