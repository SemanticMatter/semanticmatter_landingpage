import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Layers,
  Network,
  ShieldCheck,
  TableProperties,
  Waypoints
} from "lucide-react";

const painPoints = [
  "Fragmented access across many source systems",
  "Governance inconsistency across domains",
  "Slow onboarding caused by bespoke integrations",
  "Limited trust without lineage and quality metadata"
];

const federationVsReplication = [
  {
    title: "Federation",
    subtitle: "Shared logical plane, distributed source ownership",
    bullets: [
      "Query across nodes without mandatory raw-data centralization",
      "Preserve domain ownership of operational source systems",
      "Reduce copy-heavy ETL burden for cross-domain access"
    ]
  },
  {
    title: "Replication",
    subtitle: "Copy-first operating model",
    bullets: [
      "Heavy data movement and freshness lag",
      "Duplicated governance and lineage management",
      "Higher integration friction per dataset"
    ]
  }
];

const capabilityStatus = [
  {
    capability: "Federated node registry UX",
    status: "Implemented",
    notes: "Node cards, health states, protocol fields, inspector behavior."
  },
  {
    capability: "Unified API contract documentation",
    status: "Implemented",
    notes: "REST, query options, and API examples are rendered in docs UX."
  },
  {
    capability: "Metadata and FAIR wizard workflow",
    status: "Implemented",
    notes: "Multi-step form logic, readiness checks, and scoring are present."
  },
  {
    capability: "Cross-node parallel orchestration",
    status: "Illustrated",
    notes: "Described in architecture flow; backend planner is not in this repo."
  },
  {
    capability: "Policy enforcement in gateway",
    status: "Illustrated",
    notes: "Concept shown in product flow text; no backend runtime evaluator here."
  },
  {
    capability: "Real connector execution",
    status: "Partial",
    notes: "Adapter contracts exist; several concrete adapters remain stubbed."
  }
];

const architecturePlanes = [
  {
    title: "Experience Layer",
    bullets: [
      "Node operations and source health",
      "Federated explorer and API guidance",
      "Metadata, semantics, and workflow UX"
    ],
    icon: Waypoints
  },
  {
    title: "Federation Management",
    bullets: [
      "Node registry and connector config",
      "Metadata catalog and semantic mapping",
      "Policy metadata and workflow orchestration"
    ],
    icon: Layers
  },
  {
    title: "Query & Delivery Layer",
    bullets: [
      "Unified API facade for federated queries",
      "Query planning across registered nodes",
      "Normalization and merge before response"
    ],
    icon: Network
  }
];

const requestSequence = [
  "Client sends a query with filters, selected fields, and paging",
  "Gateway validates auth and policy scope.",
  "Planner resolves eligible nodes from registry.",
  "Subqueries execute in parallel with pushdown strategy.",
  "Results are normalized, deduplicated, and merged.",
  "Response returns unified data plus lineage context."
];

const connectorPatterns = [
  "CatalogAdapter and WorkflowsAdapter abstraction for clean integration boundaries.",
  "API adapter contracts define endpoint mapping and payload translation.",
  "Mock and real backend modes support progressive adoption.",
  "Add or upgrade connectors without changing the UI."
];

const governanceAndOps = [
  "FAIR-guided metadata capture and readiness scoring.",
  "Node health indicators with degraded-state semantics.",
  "Workflow run lifecycle patterns: queued, running, failed, completed.",
  "Operational targets: 99.9% gateway uptime, P95 query latency under 2s, freshness lag under 5 minutes."
];

const roadmap = [
  "Implement production federation planner and executor service with pushdown optimization.",
  "Replace adapter stubs with contract-tested real connectors.",
  "Add policy engine runtime for RBAC and ABAC with decision logging.",
  "Operationalize tracing, metrics, and SLO-based alerting.",
  "Persist metadata wizard outputs in a versioned catalog service.",
  "Introduce tenant-scoped registries, credentials, and policy namespaces.",
  "Publish machine-readable API contracts (OpenAPI and SensorThings profiles).",
  "Harden security with OIDC flows and encrypted connector secret storage."
];

const apiExamples = {
  listQuery: `curl -H "Authorization: Bearer <token>" \\
  "https://<fdl-host>/api/v1/Entity?$filter=status eq 'active'&$select=id,name,updatedAt&$top=100&$skip=0"`,
  postObservation: `curl -X POST -H "Authorization: Bearer <token>" -H "Content-Type: application/json" \\
  "https://<fdl-host>/api/v1/Observations" \\
  -d '{"phenomenonTime":"2026-02-18T10:00:00Z","result":12.5,"Datastream":{"@iot.id":1}}'`
};

function statusClasses(status: string) {
  if (status === "Implemented") {
    return "border-teal-300/40 bg-teal-300/15 text-teal-100";
  }
  if (status === "Illustrated") {
    return "border-amber-300/40 bg-amber-300/15 text-amber-100";
  }
  return "border-violet-300/40 bg-violet-300/15 text-violet-100";
}

export default function DataFederationPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-55" />
      <div className="pointer-events-none absolute -left-20 top-16 -z-10 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-6 -z-10 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl" />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pt-24">
        <div className="glass overflow-hidden rounded-3xl border-white/15">
          <div className="grid gap-10 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-300/40 bg-teal-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100">
                <TableProperties className="h-3.5 w-3.5" />
                Federated Data Layer (FDL)
              </p>
              <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-6xl">
                Data Federation
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-teal-300 to-violet-300 bg-clip-text text-transparent">
                  One Logical Layer Across Distributed Sources
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Query and govern distributed data systems through one shared interface, 
                without centralizing all raw data. FDL combines federation-first
                access, metadata and semantic workflows, and policy-aware
                mediation for cross-domain interoperability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/developers"
                  className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
                >
                  Request Technical Walkthrough
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  Download FDL Whitepaper
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Differentiator
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Federation-First Operating Model
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Register nodes, expose a unified API, and run queries across sources in parallel 
                  without relying on copy-first pipelines.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Standards
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  SensorThings, OData query semantics, and FAIR-aligned metadata
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Standards-led interoperability with metadata readiness and
                  semantic enrichment workflows.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Design principle
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Source Ownership Preserved
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Separate source ownership from shared logical access and
                  governance controls.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Problem Context
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {painPoints.map((point) => (
            <article
              key={point}
              className="rounded-2xl border border-red-300/20 bg-red-300/[0.06] p-5 text-slate-200"
            >
              <p className="text-sm">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Federation vs Replication
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {federationVsReplication.map((item) => (
            <article key={item.title} className="glass rounded-2xl p-6">
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{item.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Capability Maturity Snapshot
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            A clear view of what’s implemented today and what is still conceptual or in progress.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          {capabilityStatus.map((item) => (
            <article
              key={item.capability}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold">
                  {item.capability}
                </h3>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${statusClasses(item.status)}`}
                >
                  {item.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{item.notes}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Architecture Deep Dive
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {architecturePlanes.map((plane) => {
            const Icon = plane.icon;
            return (
              <article key={plane.title} className="glass rounded-2xl p-6">
                <div className="inline-flex rounded-lg bg-white/10 p-2 text-teal-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-xl font-semibold">
                  {plane.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {plane.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">
              Request and Query Sequence
            </h2>
            <ol className="mt-5 space-y-3 text-sm text-slate-300">
              {requestSequence.map((step, idx) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-300/20 text-xs font-semibold text-teal-100">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold md:text-3xl">
              Connectors and Adapters
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {connectorPatterns.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <GitBranch className="mt-0.5 h-4 w-4 text-violet-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          API Contract Examples
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Illustrative examples aligned to the FDL contract model and OData-style
          filtering and pagination semantics.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-[#05060e]/90 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Federated list query
            </p>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-xs text-slate-200">
              {apiExamples.listQuery}
            </pre>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[#05060e]/90 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Publish observation
            </p>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-xs text-slate-200">
              {apiExamples.postObservation}
            </pre>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Governance, Security, and Operations
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {governanceAndOps.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-teal-200" />
                <p className="text-sm text-slate-200">{item}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Product Roadmap Priorities
          </h2>
          <div className="mt-6 grid gap-3">
            {roadmap.map((item, idx) => (
              <article
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
              >
                <span className="mr-2 text-teal-200">{idx + 1}.</span>
                {item}
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-violet-300/30 bg-violet-300/[0.1] p-6">
            <h3 className="font-[var(--font-heading)] text-2xl font-semibold text-slate-100">
              Build a Production-Grade Federation Backbone
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-slate-200">
              FDL already demonstrates strong UX and operating-model clarity for
              federation, documentation, and standards-led governance. The next
              milestone is backend hardening: planner, policy runtime,
              persistent metadata services, and connector execution.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 rounded-full border border-violet-300 bg-violet-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-violet-200"
              >
                Start Integration Planning
              </Link>
              <Link
                href="/products/blobfish"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Explore Blobfish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
