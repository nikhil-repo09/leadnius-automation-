import { notFound } from "next/navigation";
import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import Footer from "@/components/Footer";
import resources from "@/data/automation-resources.json";

export default async function AutomationResourcePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const resource = resources.find((item) => item.id === id);

  if (!resource) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNavbar />

      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/resources/automation"
            className="text-sm text-blue-500 hover:underline"
          >
            ← Back to Automation Resources
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-wider text-blue-500">
            ⚡ Automated Resource
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {resource.title}
          </h1>

          <p className="mt-4 text-muted-foreground">
            {resource.description}
          </p>

          <p className="mt-2 text-xs text-muted-foreground">
            {resource.date}
          </p>

          <article
            className="prose prose-invert mt-10 max-w-none"
            dangerouslySetInnerHTML={{ __html: resource.content }}
          />

          {resource.downloadUrl && (
            <Link
              href={resource.downloadUrl}
              target="_blank"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Download Original PDF
            </Link>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}