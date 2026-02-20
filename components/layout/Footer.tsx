import Link from "next/link";

const links = [
  { label: "Products", href: "/products" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Developers", href: "/developers" },
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/#contact-information" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03040a]/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>(c) {new Date().getFullYear()} Semantic Matter. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-200">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
