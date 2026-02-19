import Link from "next/link";
import {
  ArrowRight,
  Binary,
  BrainCircuit,
  Database,
  Gauge,
  GitBranch,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

const painPoints = [
  {
    title: "Fragmented Context",
    description:
      "Critical entities and relationships are distributed across systems, making high-confidence analysis slow and error-prone."
  },
  {
    title: "Opaque Reasoning",
    description:
      "Conventional pipelines return outputs without showing why a decision was made or which evidence informed it."
  },
  {
    title: "Governance Drift",
    description:
      "Rules, policies, and taxonomy changes are difficult to operationalize consistently across teams and tooling."
  }
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Inference Engine",
    description:
      "Combine symbolic and metadata-driven reasoning to surface explainable decisions in real time."
  },
  {
    icon: Network,
    title: "Ontology-Native Modeling",
    description:
      "Represent domains as interoperable graph structures with governed entity semantics and versioning."
  },
  {
    icon: Workflow,
    title: "Decision Workflows",
    description:
      "Compose reusable reasoning workflows that align domain rules, confidence thresholds, and escalation paths."
  },
  {
    icon: Gauge,
    title: "Operational Telemetry",
    description:
      "Track reasoning quality, rule performance, and drift metrics through a single operational view."
  },
  {
    icon: ShieldCheck,
    title: "Policy Enforcement",
    description:
      "Apply role-aware controls and auditable policy gates before insights reach downstream systems."
  },
  {
    icon: Database,
    title: "Federated Connectors",
    description:
      "Integrate heterogeneous enterprise data without centralizing all sources into one storage layer."
  }
];

const workflow = [
  {
    title: "Model the domain",
    description:
      "Define entities, taxonomies, and relationship rules from the business language your teams already use."
  },
  {
    title: "Connect distributed systems",
    description:
      "Map structured and unstructured inputs into semantic representations with lineage preserved."
  },
  {
    title: "Execute explainable reasoning",
    description:
      "Run composable inference pipelines with transparent evidence chains and confidence scoring."
  },
  {
    title: "Operationalize decisions",
    description:
      "Deliver trusted recommendations to products, analysts, and automation systems with governance controls."
  }
];

const outcomes = [
  "Reduce cross-system decision latency by standardizing semantic context.",
  "Increase analyst trust with fully explainable inference traces.",
  "Strengthen compliance posture through policy-aware reasoning outputs.",
  "Accelerate delivery with reusable, domain-specific decision workflows."
];

export default function ThinkPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-60" />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-24">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-300/35 bg-teal-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                Product Spotlight
              </p>
              <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-6xl">
                THiNK
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-teal-300 to-violet-300 bg-clip-text text-transparent">
                  The Enterprise Reasoning Plane
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                THiNK transforms disconnected enterprise knowledge into
                explainable, policy-aware intelligence. Model domain truth,
                orchestrate reasoning workflows, and operationalize decisions
                with confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/developers"
                  className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
                >
                  View Developer Docs
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  Read THiNK Whitepaper
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Throughput
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">10x</p>
                <p className="mt-2 text-sm text-slate-300">
                  Faster evidence-backed recommendations in complex workflows.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Traceability
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">100%</p>
                <p className="mt-2 text-sm text-slate-300">
                  Decision lineage available for audits and stakeholder review.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2 md:col-span-1">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Deployment model
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Cloud, Hybrid, or Air-Gapped
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Fit THiNK to your environment without rewriting core domain
                  models.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          What THiNK Solves
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {painPoints.map((item) => (
            <article key={item.title} className="glass rounded-2xl p-6">
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Core Capabilities
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Built for enterprise teams that need transparent decision systems,
            not black-box outputs.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[0.08]"
              >
                <div className="inline-flex rounded-lg bg-white/10 p-2 text-teal-200 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
              From Domain Model to Production Decisions
            </h2>
            <p className="mt-4 text-slate-300">
              THiNK introduces a predictable, auditable workflow for turning
              business logic into machine-operational reasoning.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm text-slate-300">
              <Radar className="h-4 w-4 text-teal-300" />
              Real-time observability for reasoning confidence and drift
            </div>
          </div>
          <div className="space-y-4">
            {workflow.map((item, idx) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-300/20 text-xs font-semibold text-teal-200">
                    0{idx + 1}
                  </span>
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Reference Architecture
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Semantic layer
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-100">
              Ontology + Entity Graph
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Canonical domain representation used by teams, services, and
              policies.
            </p>
            <div className="mt-4 inline-flex rounded-lg bg-white/10 p-2 text-violet-200">
              <Binary className="h-5 w-5" />
            </div>
          </article>
          <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Reasoning layer
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-100">
              Rules + Inference Pipelines
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Pluggable logic chains with confidence, evidence, and override
              semantics.
            </p>
            <div className="mt-4 inline-flex rounded-lg bg-white/10 p-2 text-teal-200">
              <GitBranch className="h-5 w-5" />
            </div>
          </article>
          <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Governance layer
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-100">
              Policy Controls + Audit Trails
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Runtime policy enforcement with immutable traces for regulatory
              and internal review.
            </p>
            <div className="mt-4 inline-flex rounded-lg bg-white/10 p-2 text-cyan-200">
              <ShieldCheck className="h-5 w-5" />
            </div>
          </article>
          <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Delivery layer
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-100">
              APIs + Operational Integrations
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Route trusted recommendations to apps, dashboards, and automated
              workflows.
            </p>
            <div className="mt-4 inline-flex rounded-lg bg-white/10 p-2 text-teal-200">
              <ArrowRight className="h-5 w-5" />
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Enterprise Outcomes
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-teal-300/30 bg-teal-300/[0.08] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-100">
              Next Step
            </p>
            <p className="mt-2 max-w-2xl text-lg text-slate-100">
              Run a guided THiNK architecture session to map one high-impact
              decision workflow from domain model to governed production output.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Explore Use Cases
              </Link>
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
              >
                Start Integration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
