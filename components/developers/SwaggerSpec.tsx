"use client";

import { useEffect, useRef } from "react";
import "swagger-ui-dist/swagger-ui.css";
import "./swagger-overrides.css";

/*
 * We use the prebuilt `swagger-ui-dist` bundle rather than `swagger-ui-react`.
 * The spec is OpenAPI 3.1, which Swagger UI dereferences with ApiDOM. When a
 * downstream bundler (Next/Turbopack) re-compiles swagger-ui-react's ES source,
 * those ApiDOM internals break ("ih.refract is not a function") and every
 * operation hangs on an infinite spinner. The dist bundle is Swagger's own
 * webpack build with ApiDOM correctly packaged, so 3.1 resolution works.
 *
 * It's still a local dependency (no CDN). The bundle touches browser globals at
 * load, so it's imported dynamically inside an effect — never during the static
 * export's server render.
 */
export default function SwaggerSpec({ specUrl }: { specUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const node = containerRef.current;

    (async () => {
      const { SwaggerUIBundle } = await import("swagger-ui-dist");
      if (cancelled || !node) return;
      SwaggerUIBundle({
        url: specUrl,
        domNode: node,
        docExpansion: "list",
        deepLinking: true,
        defaultModelsExpandDepth: 1
      });
    })();

    return () => {
      cancelled = true;
      // Clear on unmount / re-run (e.g. React strict mode) so the UI isn't
      // rendered twice into the same container.
      if (node) node.innerHTML = "";
    };
  }, [specUrl]);

  return (
    <div className="swagger-spec">
      <div ref={containerRef} />
    </div>
  );
}
