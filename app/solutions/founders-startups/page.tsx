"use client";

import SolutionDetailPage from "@/components/solutions/SolutionDetailPage";
import { solutionPageContent } from "@/lib/solution-page-content";

export default function FoundersStartupsPage() {
  return (<SolutionDetailPage config={solutionPageContent["founders-startups"]}/>);
}