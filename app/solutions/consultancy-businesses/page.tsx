"use client";

import SolutionDetailPage from "@/components/solutions/SolutionDetailPage";
import { solutionPageContent } from "@/lib/solution-page-content";

export default function ConsultancyBusinessesPage() {
  return <SolutionDetailPage config={solutionPageContent["consultancy-businesses"]} />;
}
