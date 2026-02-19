import Link from "next/link";

const products = [
  {
    title: "THiNK",
    href: "/products/think",
    description:
      "Semantic intelligence workspace for reasoning over enterprise knowledge at scale."
  },
  {
    title: "Blobfish",
    href: "/products/blobfish",
    description:
      "Adaptive metadata ingestion layer that normalizes fragmented pipelines."
  },
  {
    title: "Data Federation",
    href: "/products/data-federation",
    description:
      "Unified query and governance across decentralized data platforms."
  },
  {
    title: "Graph Explorer",
    href: "/products/graph-explorer",
    description:
      "Visual graph analytics for real-time relationship discovery and decision support."
  }
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="font-[var(--font-heading)] text-4xl font-semibold md:text-5xl">
        Products
      </h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Composable products for designing, operating, and extending semantic data
        systems in enterprise environments.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <Link
            key={product.href}
            href={product.href}
            className="glass rounded-2xl p-6 transition-colors hover:bg-white/10"
          >
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold">
              {product.title}
            </h2>
            <p className="mt-3 text-slate-300">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
