import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SwaggerSpec from "@/components/developers/SwaggerSpec";

// Mirror the basePath logic used in the root layout / next.config so the spec
// resolves correctly when the static export is served under a GitHub Pages
// project subpath.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesSite = repoName.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS === "true" && !isUserOrOrgPagesSite && repoName
    ? `/${repoName}`
    : "";

const specUrl = `${basePath}/developers/think-user-api-openapi.json`;

export const metadata: Metadata = {
  title: "THiNK User API Reference | Semantic Matter",
  description:
    "Interactive OpenAPI reference for the THiNK User API, rendered with Swagger UI."
};

export default function ApiReferencePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 selection:bg-blue-500/30">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <Link
          href="/developers"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-teal-300"
        >
          <ArrowLeft size={16} />
          Back to Developers
        </Link>

        <h1 className="mt-6 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          THiNK User API Reference
        </h1>
        <p className="mt-3 max-w-2xl text-slate-400">
          Browse the full OpenAPI specification below. Every endpoint, schema,
          and example is generated directly from the live API definition.
        </p>

        <div className="mt-10">
          <SwaggerSpec specUrl={specUrl} />
        </div>
      </section>
    </main>
  );
}
