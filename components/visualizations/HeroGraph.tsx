"use client";

import { useEffect, useMemo, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";

type GraphNode = {
  id: string;
  group: number;
  val: number;
};

type GraphLink = {
  source: string;
  target: string;
};

function createData() {
  const nodes: GraphNode[] = Array.from({ length: 36 }, (_, i) => ({
    id: `node-${i}`,
    group: i % 3,
    val: (i % 5) + 1
  }));

  const links: GraphLink[] = [];
  for (let i = 0; i < 54; i += 1) {
    const source = nodes[Math.floor(Math.random() * nodes.length)]?.id;
    const target = nodes[Math.floor(Math.random() * nodes.length)]?.id;
    if (!source || !target || source === target) {
      continue;
    }
    links.push({ source, target });
  }

  return { nodes, links };
}

const palette = ["#11B8B8", "#8A2BE2", "#67E8F9"];

export default function HeroGraph() {
  const [size, setSize] = useState({ width: 1280, height: 620 });
  const graph = useMemo(() => createData(), []);

  useEffect(() => {
    const updateSize = () =>
      setSize({
        width: window.innerWidth,
        height: Math.max(540, Math.floor(window.innerHeight * 0.85))
      });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="h-full w-full">
      <ForceGraph2D
        graphData={graph}
        width={size.width}
        height={size.height}
        backgroundColor="rgba(0,0,0,0)"
        nodeRelSize={3.5}
        linkColor={() => "rgba(148, 163, 184, 0.22)"}
        nodeColor={(node) => palette[(node.group as number) % palette.length] ?? "#11B8B8"}
        cooldownTicks={80}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.2}
        enableNodeDrag={false}
        autoPauseRedraw={false}
      />
    </div>
  );
}
