"use client";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { servicePageContent } from "@/lib/service-page-content";

export default function AutomationTransformationPage() {
  return <ServiceDetailPage config={servicePageContent["automation-transformation"]} />;
}
