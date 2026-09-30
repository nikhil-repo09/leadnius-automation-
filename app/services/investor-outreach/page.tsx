"use client";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { servicePageContent } from "@/lib/service-page-content";

export default function InvestorOutreachPage() {
  return <ServiceDetailPage config={servicePageContent["investor-outreach"]} />;
}
