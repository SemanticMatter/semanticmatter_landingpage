"use client";

import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";
import "./swagger-overrides.css";

// Swagger UI relies on browser-only APIs, so it must never be server-rendered.
// With `output: "export"` this keeps it out of the static prerender and lets it
// hydrate purely on the client.
const SwaggerUI = dynamic(() => import("swagger-ui-react"), {
  ssr: false,
  loading: () => (
    <div className="py-16 text-center text-sm text-slate-400">
      Loading API reference…
    </div>
  )
});

export default function SwaggerSpec({ specUrl }: { specUrl: string }) {
  return (
    <div className="swagger-spec">
      <SwaggerUI url={specUrl} docExpansion="list" />
    </div>
  );
}
