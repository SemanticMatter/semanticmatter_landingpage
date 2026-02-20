"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Database, ShieldCheck, Workflow } from "lucide-react";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/ui/FeatureCard";

const HeroGraph = dynamic(() => import("@/components/visualizations/HeroGraph"), {
  ssr: false
});

export default function OverviewPage() {
  return (
    <div className="relative isolate w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
        <HeroGraph />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32 text-center md:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-[var(--font-heading)] text-5xl font-bold tracking-tight md:text-7xl"
        >
          Semantic Infrastructure for
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Complex Data Ecosystems
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-3xl text-lg text-slate-300 md:text-xl"
        >
          We build enterprise-grade knowledge graphs and metadata-driven systems.
          Unify your data, enforce interoperability, and unlock intelligent
          federation across your entire technical stack.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="primary">Explore the Platform</Button>
          <Button variant="ghost">Read the Whitepaper</Button>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Database className="h-6 w-6 text-teal-300" />}
            title="Intelligent Data Federation"
            description="Query across decentralized silos as if they were a single, coherent database using semantic metadata."
          />
          <FeatureCard
            icon={<Workflow className="h-6 w-6 text-violet-300" />}
            title="Developer Extensibility"
            description="Built on open standards and FAIR principles. Extend functionality through plugins and graph APIs."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-6 w-6 text-cyan-300" />}
            title="Enterprise Architecture"
            description="Highly scalable, secure infrastructure designed for mission-critical compliance and decision intelligence."
          />
        </div>
      </section>

      <section id="contact-information" className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="glass rounded-2xl p-8">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold">Contact Information</h2>
          <address className="mt-4 not-italic text-slate-300">
            <p>SINTEF Ocean AS</p>
            <p>SemanticMatter</p>
            <p>Att: Sarah Schmidt</p>
            <p>PoBox 4762 Torgard</p>
            <p>N-7465 Trondheim</p>
            <p>Norway</p>
          </address>
        </div>
      </section>
    </div>
  );
}
