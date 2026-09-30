import Link from "next/link";
import LandingNavbar from "@/components/LandingNavbar";
import Footer from "@/components/Footer";
import resources from "@/data/automation-resources.json";

export default async function AutomationResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;

  const filteredResources = type
    ? resources.filter(
        (resource) => resource.type?.trim().toLowerCase() === type.toLowerCase()
      )
    : resources;

  const sortedResources = [...filteredResources].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const latest = sortedResources[0];
  const previous = sortedResources.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNavbar />

      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-500">
              ⚡ Automation Resources
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Latest Automated Resources
            </h1>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              Resources and case studies automatically published and updated
              through our content workflow.
            </p>
          </div>

          {latest && (
            <section className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-500">
                Latest Resource
              </p>

              <h2 className="text-2xl font-bold">{latest.title}</h2>

              <p className="mt-3 text-muted-foreground">
                {latest.description}
              </p>

              <div
                className="prose prose-invert mt-6 max-w-none"
                dangerouslySetInnerHTML={{ __html: latest.content }}
              />

              {latest.downloadUrl && (
                <Link
                  href={latest.downloadUrl}
                  target="_blank"
                  className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Download Original PDF
                </Link>
              )}
            </section>
          )}

          {previous.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-bold">Previous Resources</h2>

              <div className="mt-6 space-y-4">
                {previous.map((resource) => (
                  <Link
                    key={resource.id}
                    href={`/resources/automation/${resource.id}`}
                    className="block rounded-2xl border border-border p-5 transition-colors hover:border-blue-500/40 hover:bg-blue-500/5"
                  >
                    <h3 className="font-semibold">{resource.title}</h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {resource.description}
                    </p>

                    <p className="mt-2 text-xs text-muted-foreground">
                      {resource.date}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}