"use client";

import ServiceDetailPage from "@/components/services/ServiceDetailPage";
import { servicePageContent } from "@/lib/service-page-content";

export default function ContentMarketingPage() {
  return <ServiceDetailPage config={servicePageContent["content-marketing"]} />;
}
