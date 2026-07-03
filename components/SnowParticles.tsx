"use client";
import { useMemo } from "react";

export function SnowParticles() {
  const particles = useMemo(() => Array.from({ length: 28 }, (_, i) => ({ left: `${(i * 37) % 100}%`, top: `${(i * 61) % 100}%`, delay: `${(i % 9) * -.7}s`, size: 1 + (i % 3) })), []);
  return <div className="particles" aria-hidden="true">{particles.map((p, i) => <i key={i} style={{ left: p.left, top: p.top, animationDelay: p.delay, width: p.size, height: p.size }} />)}</div>;
}
