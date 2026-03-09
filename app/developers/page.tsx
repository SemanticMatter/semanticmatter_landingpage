import React from "react";
import { 
  Terminal, Database, Network, FileCode2, ShieldCheck, 
  Cpu, BookOpen, Layers, Workflow, ArrowRight, Server, Key
} from "lucide-react";

// --- Reusable UI Components ---

const Endpoint = ({ path, method }: { path: string; method?: string }) => {
  // Highlights path parameters like {target_name} in a different color
  const formattedPath = path.split(/(\{.*?\})/).map((part, i) =>
    part.startsWith("{") ? (
      <span key={i} className="text-orange-400/90">{part}</span>
    ) : (
      <span key={i} className="text-slate-300">{part}</span>
    )
  );

  return (
    <div className="flex min-w-0 items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/50 px-3 py-2 font-mono text-sm shadow-sm transition-colors hover:border-slate-700">
      {method && (
        <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0 ${
          method === 'GET' ? 'bg-blue-500/20 text-blue-400' : 
          method === 'POST' ? 'bg-green-500/20 text-green-400' : 
          method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' : 
          method === 'DELETE' ? 'bg-red-500/20 text-red-400' : 
          'bg-slate-500/20 text-slate-400'
        }`}>
          {method}
        </span>
      )}
      <span className="whitespace-nowrap">{formattedPath}</span>
    </div>
  );
};

const Card = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => (
  <div className="flex min-w-0 flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg backdrop-blur-sm">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
        <Icon size={20} />
      </div>
      <h3 className="font-[var(--font-heading)] text-lg font-semibold text-white">
        {title}
      </h3>
    </div>
    <div className="flex-1 space-y-3 text-slate-400">{children}</div>
  </div>
);

// --- Main Page Component ---

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 selection:bg-blue-500/30">
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        
        {/* HERO SECTION */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
            <Terminal size={14} />
            <span>Developer Portal</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">THiNK</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-400">
            Integrate semantic documentation and catalog operations directly into your stack. 
            Manage the complete lifecycle of source catalogs and target graphs, tracing how your 
            data maps to computed results.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://api-dev.semanticmatter.com/docs" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200"
            >
              <BookOpen size={18} />
              Middle Layer API Spec
            </a>
          </div>
        </div>

        {/* API SURFACE (MIDDLE LAYER & BACKEND) */}
        <div className="mt-24">
          <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-white md:text-3xl">
            API Surface
          </h2>
          <p className="mt-2 text-slate-400">Core endpoints available for integration today.</p>

          <div className="mt-8 grid grid-cols-1 gap-6">
            <Card title="Catalog & Documentation" icon={Database}>
              <p className="text-sm">Manage source (Groups, Packages, Resources) and target (Projects, Targets) models.</p>
              <div className="mt-4 space-y-2">
                <Endpoint path="/documentation/groups/{group_name}" method="API" />
                <Endpoint path="/documentation/packages/{package_name}" method="API" />
                <Endpoint path="/documentation/resources/{resource_name}/datasets/{dataset_id}" method="API" />
                <Endpoint path="/documentation/projects/{project_name}" method="API" />
                <Endpoint path="/documentation/targets/{target_name}" method="API" />
              </div>
            </Card>

            <Card title="Composer Reads" icon={Layers}>
              <p className="text-sm">Read computed target outputs, individual properties, and graph traversal paths.</p>
              <div className="mt-4 space-y-2">
                <Endpoint path="/composer/{target_name}" method="GET" />
                <Endpoint path="/composer/{target_name}/properties/{target_property}" method="GET" />
                <Endpoint path="/composer/{target_name}/paths" method="GET" />
              </div>
            </Card>

            <Card title="Semantic Concepts & Files" icon={FileCode2}>
              <p className="text-sm">Exchange object, entity, or ontology files and retrieve URI-based semantic concepts.</p>
              <div className="mt-4 space-y-2">
                <Endpoint path="/resources/concepts" method="GET" />
                <Endpoint path="/files/upload" method="POST" />
                <Endpoint path="/files/download/{file_id}" method="GET" />
              </div>
              <div className="mt-2 rounded bg-slate-950/50 p-3 text-xs border border-slate-800/50">
                <span className="font-semibold text-slate-300">Required Header:</span> <code className="text-blue-400">X-DataSpaces-FileType</code> (object, entity, ontology)
              </div>
            </Card>

            <Card title="Workflow Management" icon={Workflow}>
              <p className="text-sm">Backend routes to register workflows, replace definitions, and manage trigger lifecycles.</p>
              <div className="mt-4 space-y-2">
                <Endpoint path="/workflow/workflows/{workflow_name}" method="API" />
                <Endpoint path="/workflow/{workflow_name}/triggers" method="API" />
                <Endpoint path="/workflow/{workflow_name}/routes" method="API" />
                <Endpoint path="/routing/workflows/{workflow_name}" method="API" />
              </div>
            </Card>
          </div>
        </div>

        {/* CAPABILITIES & PERFORMANCE TIPS */}
        <div className="mt-24 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-white md:text-3xl">
              Performance & Discovery
            </h2>
            <p className="text-slate-400">
              Optimize your integration using built-in query parameters and traversal controls to fetch exactly what you need.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {[
                "Use shallow listings with ?only_names=true on packages and targets to drastically reduce payload sizes during discovery.",
                "Control concept neighborhood expansion by passing depth (0-5) to /resources/concepts.",
                "Trace how documented source data maps to graph results via /composer/{target_name}/paths.",
                "Retrieve singular target properties directly rather than pulling massive composer results."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg border border-slate-800/60 bg-slate-900/20 p-4">
                  <Cpu className="mt-0.5 shrink-0 text-indigo-400" size={18} />
                  <span className="text-sm leading-relaxed text-slate-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        

        {/* INTEGRATION PATTERNS */}
        <div className="mt-24">
          <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-white md:text-3xl">
            Ecosystem Integration
          </h2>
          <p className="mt-2 text-slate-400">THiNK acts as a semantic control layer next to your existing systems, not a replacement.</p>
          
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Catalogs & Data Lakes", desc: "Keep existing storage; register semantic metadata and lineage in THiNK." },
              { title: "Historians & Time-series", desc: "Model source resources and map outputs to targets for queryable context." },
              { title: "LIMS / ELN", desc: "Attach structured dataset series to resources, maintaining provenance." },
              { title: "Digital Twins", desc: "Use projects/targets to organize entities and read graph paths." },
              { title: "Enterprise Workflows", desc: "Trigger metadata refresh or mapping updates via backend workflow routes." }
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-800/50 bg-slate-900/30 p-5 transition-colors hover:bg-slate-800/40">
                <Network className="mb-3 text-blue-400" size={20} />
                <h4 className="font-semibold text-slate-200">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WALKTHROUGH FLOWS */}
        <div className="mt-24">
          <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-white md:text-3xl">
            Integration Walkthroughs
          </h2>
          
          <div className="mt-10 space-y-16">
            {/* Flow 1 */}
            <div className="relative border-l border-slate-800 pl-8 md:pl-12">
              <div className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold text-sm">1</div>
              <h3 className="text-xl font-semibold text-white">Catalog Bootstrap & Model Retrieval</h3>
              <div className="mt-6 grid gap-3">
                <Endpoint path="POST /documentation/groups" />
                <Endpoint path="POST /documentation/packages" />
                <Endpoint path="POST /documentation/resources" />
                <Endpoint path="POST /documentation/projects" />
                <Endpoint path="POST /documentation/targets" />
              </div>
              <div className="mt-4 flex flex-col gap-2 rounded-lg bg-blue-950/20 p-4 border border-blue-900/30">
                <p className="text-sm text-slate-300">
                  <strong className="text-blue-400">Pro tip:</strong> Use <code className="text-slate-200">?group={"{"}group{"}"}&only_names=true</code> for fast discovery, 
                  then retrieve full objects with <code className="text-slate-200">/documentation/packages/{"{"}package_name{"}"}</code> when full metadata is needed.
                </p>
              </div>
            </div>

            {/* Flow 2 */}
            <div className="relative border-l border-slate-800 pl-8 md:pl-12">
              <div className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 font-bold text-sm">2</div>
              <h3 className="text-xl font-semibold text-white">File-Backed Semantic Enrichment</h3>
              <ol className="mt-6 space-y-4 text-sm text-slate-400 list-none">
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Upload via <code className="text-slate-300">/files/upload</code> with header <code className="text-slate-300">X-DataSpaces-FileType: ontology</code>.</li>
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Persist the returned file identifier in your resource metadata workflow.</li>
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Download later via <code className="text-slate-300">/files/download/{"{"}file_id{"}"}</code>.</li>
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Query <code className="text-slate-300">/resources/concepts?concept_uris=...&depth=1</code> for direct concept context.</li>
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Increase <code className="text-slate-300">depth (up to 5)</code> to fetch wider neighborhoods for complex validation.</li>
              </ol>
            </div>

            {/* Flow 3 */}
            <div className="relative border-l border-slate-800 pl-8 md:pl-12">
              <div className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 font-bold text-sm">3</div>
              <h3 className="text-xl font-semibold text-white">Read Target Outputs & Workflow Triggers</h3>
              <ol className="mt-6 space-y-4 text-sm text-slate-400 list-none">
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Fetch target results via <code className="text-slate-300">/composer/{"{"}target_name{"}"}</code>.</li>
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Read a single field lightly via <code className="text-slate-300">/composer/{"{"}target_name{"}"}/properties/{"{"}target_property{"}"}</code>.</li>
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Inspect provenance traversal with <code className="text-slate-300">/composer/{"{"}target_name{"}"}/paths</code>.</li>
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Register workflows via <code className="text-slate-300">/workflow</code>.</li>
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Add/replace triggers via <code className="text-slate-300">/workflow/{"{"}workflow_name{"}"}/triggers</code>.</li>
                <li className="flex gap-3"><ArrowRight size={16} className="mt-0.5 shrink-0 text-slate-600"/> Use trigger events to re-run your read path and refresh downstream consumers.</li>
              </ol>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
