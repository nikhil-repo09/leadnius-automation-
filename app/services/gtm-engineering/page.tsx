"use client";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { servicePageContent } from "@/lib/service-page-content";

export default function GtmEngineeringPage() {
  return <ServiceDetailPage config={servicePageContent["gtm-engineering"]} />;
}
