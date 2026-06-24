import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  BrainCircuit,
  FileSearch,
  FileText,
  Gauge,
  Handshake,
  Network,
  ServerCog,
  SearchCheck,
  Sparkles,
  Waypoints,
  Workflow
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sculpin | Knowledge-aware AI agents for THiNK",
  description:
    "Sculpin brings grounded, graph-aware AI agents to THiNK, helping teams use semantic knowledge bases, provenance, tools, and organizational documentation through trusted conversational workflows."
};

const heroCards = [
  {
    icon: SearchCheck,
    title: "Grounded answers",
    description:
      "Ask questions over THiNK-managed knowledge bases and get answers supported by retrieved evidence, graph context, and provenance."
  },
  {
    icon: Waypoints,
    title: "Graph-aware reasoning",
    description:
      "Let agents follow semantic relationships across datasets, documents, concepts, procedures, and resources."
  },
  {
    icon: Workflow,
    title: "Action-ready intelligence",
    description:
      "Connect agents to tools, workflows, and APIs so knowledge can move from explanation to execution."
  }
];

const capabilities = [
  {
    icon: BookOpen,
    title: "Knowledge-base aware assistants",
    description:
      "Create agents that answer from selected THiNK knowledge bases and documentation collections, scoped to the right domain, team, or operational context."
  },
  {
    icon: FileSearch,
    title: "Evidence-first responses",
    description:
      "Agents ground answers in retrieved content and graph evidence, so users see not only the answer, but where it came from."
  },
  {
    icon: Network,
    title: "Graph-guided discovery",
    description:
      "Move beyond keyword search by following links between concepts, datasets, procedures, software, people, projects, and provenance records."
  },
  {
    icon: ServerCog,
    title: "Tool-connected workflows",
    description:
      "Connect agents to external tools and services—domain APIs, document processors, diagram and chemistry tools, and graph query engines."
  },
  {
    icon: Handshake,
    title: "Human-reviewed automation",
    description:
      "Agents propose summaries, metadata, mappings, or next actions while experts stay in control of validation and publication."
  },
  {
    icon: Boxes,
    title: "Open integration model",
    description:
      "Expose agents through an OpenAI-compatible API pattern to fit existing applications, portals, enterprise chat, and developer tooling."
  }
];

const workflow = [
  {
    icon: Sparkles,
    step: "Ask",
    description:
      "A user asks a question in natural language, scoped to a selected agent and knowledge base."
  },
  {
    icon: FileSearch,
    step: "Retrieve",
    description:
      "The agent retrieves relevant documents, metadata, ontology terms, graph relationships, and provenance."
  },
  {
    icon: BrainCircuit,
    step: "Reason",
    description:
      "Retrieved evidence is combined with the semantic structure of THiNK to produce a focused response."
  },
  {
    icon: FileText,
    step: "Cite",
    description:
      "The answer includes evidence, references, or provenance so users can inspect the basis for it."
  },
  {
    icon: Workflow,
    step: "Act",
    description:
      "When relevant, the agent calls tools, generates artifacts, queries the graph, or supports the next step."
  },
  {
    icon: Gauge,
    step: "Improve",
    description:
      "Validated outputs and user feedback strengthen the underlying knowledge base over time."
  }
];

const useCases = [
  {
    title: "Enterprise knowledge assistants",
    description:
      "Give teams a trusted assistant for internal documentation, procedures, reports, and domain knowledge."
  },
  {
    title: "Semantic search and discovery",
    description:
      "Help users find relevant datasets, documents, concepts, and relationships without knowing exact terminology."
  },
  {
    title: "Data documentation support",
    description:
      "Assist data stewards and researchers with metadata extraction, provenance capture, and FAIR-aligned documentation."
  },
  {
    title: "Procedure and compliance support",
    description:
      "Answer questions from controlled procedures and governing documents while preserving traceability to the source."
  },
  {
    title: "Knowledge graph investigation",
    description:
      "Explore how datasets, methods, software, instruments, projects, and people connect across the graph."
  },
  {
    title: "AI-enabled technical workflows",
    description:
      "Connect THiNK knowledge to external services so users can generate diagrams, summaries, mappings, and structured outputs."
  }
];

const transformationalImpact = [
  "Static knowledge bases → Interactive assistants",
  "Document search → Evidence-grounded answers",
  "Ontologies → Natural language exploration",
  "Metadata → Actionable guidance",
  "Provenance → Trustworthy AI responses",
  "Expert-only graph access → Usable knowledge for every team"
];

export default function SculpinPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-60" />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-24">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-teal-300/35 bg-teal-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
                <Sparkles className="h-3.5 w-3.5" />
                SemanticMatter Sculpin Agents
              </p>
              <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-6xl">
                Sculpin
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-teal-300 to-violet-300 bg-clip-text text-transparent">
                  Knowledge-aware AI agents for THiNK
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Sculpin connects AI agents to curated knowledge bases, semantic
                metadata, ontologies, tools, and graph evidence—so users can ask
                questions, explore relationships, and act on trusted information
                without losing provenance. It is built for teams that need AI
                grounded in their own documentation and data models, not generic
                answers detached from context.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/developers"
                  className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
                >
                  Start integration
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products/think"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  Explore THiNK
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              {heroCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 last:sm:col-span-2 last:md:col-span-1"
                  >
                    <div className="inline-flex rounded-lg bg-white/10 p-2 text-teal-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-lg font-semibold text-white">
                      {card.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
              From semantic documentation to intelligent assistance
            </h2>
            <p className="mt-5 max-w-2xl text-slate-300">
              THiNK provides the semantic foundation: structured metadata,
              ontology alignment, provenance, access control, and reusable
              knowledge models. Sculpin builds on that foundation by giving users
              a natural way to interact with it.
            </p>
            <p className="mt-4 max-w-2xl text-slate-300">
              Instead of searching across disconnected files, dashboards, and
              systems, users can ask an agent. The agent retrieves relevant
              knowledge, inspects relationships in the graph, cites its evidence,
              and guides the user toward the next step. Sculpin does not replace
              the knowledge graph—it makes the knowledge graph accessible.
            </p>
          </div>
          <div className="glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-teal-100">
              Core message
            </p>
            <p className="mt-4 font-[var(--font-heading)] text-2xl font-semibold leading-snug text-white md:text-3xl">
              THiNK turns data and documentation into shared semantic knowledge.
              <span className="bg-gradient-to-r from-cyan-200 via-teal-300 to-violet-300 bg-clip-text text-transparent">
                {" "}
                Sculpin turns that knowledge into action.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            What Sculpin adds to THiNK
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            Agents that stay scoped to your governed knowledge, ground their
            answers in evidence, and connect to the tools your teams already use.
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
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
            How Sculpin works
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 md:text-base">
            A grounded, provenance-aware, tool-capable workflow—from a question
            to a trusted, actionable response.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.step}
                className="glass relative rounded-2xl p-6"
              >
                <span className="absolute right-5 top-5 text-sm font-semibold text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="inline-flex rounded-lg bg-white/10 p-2 text-teal-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-xl font-semibold">
                  {item.step}
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
        <h2 className="font-[var(--font-heading)] text-3xl font-semibold md:text-4xl">
          Priority use cases
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
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
            THiNK and Sculpin together
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                THiNK
              </p>
              <h3 className="mt-2 font-[var(--font-heading)] text-xl font-semibold">
                The governed semantic layer
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                The catalog, metadata model, ontologies, mappings, provenance,
                and access structure that keep knowledge trustworthy and
                reusable.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Sculpin
              </p>
              <h3 className="mt-2 font-[var(--font-heading)] text-xl font-semibold">
                The agentic interaction layer
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                The agents, tools, retrieval strategies, and conversational
                workflows that make that knowledge usable in daily work.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-teal-300/30 bg-teal-300/[0.08] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-100">
              What changes in practice
            </p>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {transformationalImpact.map((item) => (
                <p key={item} className="text-sm text-slate-100">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-5 max-w-3xl text-sm text-slate-100/90">
              Together, THiNK and Sculpin let organizations document knowledge
              once, govern it properly, and reuse it through trusted AI
              assistance—turning a semantic knowledge base into grounded,
              domain-specific assistants for your teams.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/developers"
                className="inline-flex items-center gap-2 rounded-full border border-teal-300 bg-teal-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-200"
              >
                Start integration
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Explore use cases
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
