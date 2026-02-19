const useCases = [
  "Life sciences knowledge integration",
  "Supply-chain decision intelligence",
  "Regulatory and compliance data governance",
  "Cross-domain analytics for public sector systems"
];

export default function UseCasesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-[var(--font-heading)] text-4xl font-semibold md:text-5xl">
        Use Cases
      </h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Practical semantic architecture patterns deployed across data-intensive
        industries.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {useCases.map((item) => (
          <article key={item} className="glass rounded-xl p-5">
            <h2 className="text-lg font-medium text-slate-100">{item}</h2>
          </article>
        ))}
      </div>
    </section>
  );
}
