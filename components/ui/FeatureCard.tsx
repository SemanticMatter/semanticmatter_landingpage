import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description
}: FeatureCardProps) {
  return (
    <article className="glass group rounded-2xl p-7 transition-colors hover:bg-white/10">
      <div className="mb-4 inline-flex rounded-lg bg-white/6 p-3 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="font-[var(--font-heading)] text-2xl font-semibold">{title}</h3>
      <p className="mt-3 leading-relaxed text-slate-300">{description}</p>
    </article>
  );
}
