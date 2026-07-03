"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";

export function MagneticButton({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 16 });
  return <motion.div className="button-wrap" style={{ x, y }} onPointerMove={(e) => { if (e.pointerType !== "mouse") return; const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * .18); y.set((e.clientY - r.top - r.height / 2) * .18); }} onPointerLeave={() => { x.set(0); y.set(0); }}><Link className={`button ${secondary ? "button--secondary" : ""}`} href={href}><span>{children}</span><span className="button-arrow">↗</span></Link></motion.div>;
}
