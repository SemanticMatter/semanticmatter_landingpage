import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  FileText,
  Network,
  ScanText,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

const interoperabilityChallenges = [
  {
    title: "Inconsistent Documentation",
    description:
      "Critical datasets are delivered with partial or missing context, limiting downstream reuse and trust."
  },
  {
    title: "Implicit Semantics",
    description:
      "Concepts, units, and relationships are often buried in team knowledge instead of formal models."
  },
  {
    title: "Hidden Analog Metadata",
    description:
      "Lab sheets, notebooks, and handwritten forms contain key evidence that never reaches digital systems."
  }
];

const coreCapabilities = [
  {
    icon: Network,
    title: "Ontology-Aligned Interoperability",
    description:
      "Model domain and application ontologies with RDF/OWL and controlled vocabularies for shared meaning across teams."
  },
  {
    icon: BrainCircuit,
    title: "AI-Assisted Documentation",
    description:
      "Convert free text and tabular snippets into formal metadata with guided human validation for scientific rigor."
  },
  {
    icon: Workflow,
    title: "Hybrid Human-in-the-Loop Workflows",
    description:
      "AI proposes data shapes, units, and relations while domain experts approve and refine each semantic decision."
  },
  {
    icon: Database,
    title: "Knowledge Graph Backbone",
    description:
      "Persist versioned semantic assets in a triple-store-ready architecture with reasoning and SPARQL access."
  },
  {
    icon: ShieldCheck,
    title: "Federated Governance",
    description:
      "Apply role-based access controls and resource-level policies across groups, packages, and resources."
  },
  {
    icon: FileText,
    title: "FAIR-Centric Data Operations",
    description:
      "Operationalize findability, accessibility, interoperability, and reusability through formal semantics and provenance."
  }
];

const architectureLayers = [
  "User Interface Layer",
  "AI-Assisted Documentation Engine",
  "Semantic Modeling Layer (Ontologies + SHACL Shapes)",
  "Knowledge Graph and Metadata Store",
  "Federated Catalog and Access Governance",
  "Integration and Interoperability APIs"
];

const analogPipeline = [
  "OCR extraction",
  "LLM semantic parsing",
  "Ontology mapping",
  "SHACL shape validation",
  "Knowledge graph enrichment"
];

const useCases = [
  {
    title: "Laboratory Data Reconstruction",
    description:
      "Transform handwritten, mixed-language, domain-heavy lab notes into standardized metadata with provenance capture."
  },
  {
    title: "FAIR Data Management",
    description:
      "Support FAIR plans with semantic indexing, role-based access, ontology alignment, and reuse-ready provenance."
  },
  {
    title: "Digital Twin Backbone",
    description:
      "Enable event-driven model updates and reusable simulation workflows on top of a knowledge graph core."
  }
];

const standards = ["RDF/OWL", "SHACL", "PROV-O", "DCAT", "SKOS", "FAIR principles"];

const roadmap = [
  "Feature freeze",
  "User documentation",
  "Real-world use cases",
  "Feedback loop",
  "Stabilization and testing"
];

const transformationalImpact = [
  "File storage -> Knowledge representation",
  "Manual metadata -> AI-assisted semantic documentation",
  "Static datasets -> Event-driven knowledge networks",
  "Hidden analog context -> Integrated semantic metadata",
  "Limited reuse -> Cross-domain interoperability"
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
                SemanticMatter THiNK Platform
              </p>
              <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-6xl">
                THiNK
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-teal-300 to-violet-300 bg-clip-text text-transparent">
                  Ontology-Aligned Semantic Interoperability Infrastructure
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                THiNK is a knowledge-centric platform that unifies federated data
                cataloging, formal semantic modeling, AI-assisted documentation,
                and FAIR-compliant knowledge exploitation in one web-based
                environment.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
                >
                  Read Whitepaper
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/use-cases"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  Explore Use Cases
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Catalog model
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Groups {"->"} Packages {"->"} Resources
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Federated hierarchy for organizational segmentation, governance,
                  and granular metadata discovery.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Governance
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Provenance + Policy Controls
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Resource-level documentation and auditable provenance aligned
                  with role-based access.
                </p>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2 md:col-span-1">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Technical stack
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  RDF/OWL, SHACL, PROV-O, DCAT, SKOS
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Standards-based semantic infrastructure for interoperability at
                  production scale.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          The Interoperability Crisis THiNK Solves
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {interoperabilityChallenges.map((item) => (
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
            Core Platform Capabilities
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Built to combine ontology rigor, AI assistance, and practical
            usability for scientific and industrial workflows.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {coreCapabilities.map((item) => {
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
              THiNK Reference Architecture
            </h2>
            <p className="mt-4 text-slate-300">
              THiNK operationalizes ontology-aligned semantic interoperability
              through a layered architecture that connects documentation,
              modeling, governance, and integration.
            </p>
          </div>
          <div className="space-y-4">
            {architectureLayers.map((layer, idx) => (
              <article
                key={layer}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-300/20 text-xs font-semibold text-teal-200">
                    0{idx + 1}
                  </span>
                  <h3 className="font-semibold text-slate-100">{layer}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="glass rounded-2xl p-6">
            <div className="inline-flex rounded-lg bg-white/10 p-2 text-teal-200">
              <ScanText className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-semibold">
              Analog-to-Semantic Pipeline
            </h3>
            <p className="mt-3 text-slate-300">
              THiNK unlocks dark metadata from scanned notebooks, photographed
              forms, and handwritten annotations.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {analogPipeline.map((step) => (
                <span
                  key={step}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {step}
                </span>
              ))}
            </div>
          </article>
          <article className="glass rounded-2xl p-6">
            <h3 className="font-[var(--font-heading)] text-2xl font-semibold">
              Standards and FAIR Alignment
            </h3>
            <p className="mt-3 text-slate-300">
              Semantic interoperability is implemented on open standards to
              ensure portability, machine-actionability, and long-term reuse.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {standards.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs text-teal-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Priority Use Cases
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {useCases.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-slate-100">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            Implementation Roadmap and Impact
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {roadmap.map((item) => (
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
              Transformational Shift
            </p>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {transformationalImpact.map((item) => (
                <p key={item} className="text-sm text-slate-100">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-5 max-w-3xl text-sm text-slate-100/90">
              THiNK bridges legacy undocumented datasets and future AI-driven
              reasoning ecosystems by combining formal ontology systems with
              agentic semantic assistance.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Start Integration
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
              >
                Read Technical Material
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
