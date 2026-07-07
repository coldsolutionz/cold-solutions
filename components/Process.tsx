"use client";
import { useEffect, useRef } from "react";
import { processSteps } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Process() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || innerWidth < 900 || !root.current || !track.current) return;
    if (location.hash === "#process") {
      const frame = requestAnimationFrame(() => root.current?.scrollIntoView());
      return () => cancelAnimationFrame(frame);
    }
    let active = true;
    let ctx: { revert: () => void } | undefined;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      if (!active) return;
      const gsap = gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => gsap.to(track.current, { x: () => -(track.current!.scrollWidth - innerWidth + 80), ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: () => `+=${track.current!.scrollWidth}`, scrub: 1, pin: true, invalidateOnRefresh: true } }), root);
      ScrollTrigger.refresh();
    });
    return () => { active = false; ctx?.revert(); };
  }, [reduced]);
  return <section className="process" id="process" ref={root}><div className="process-title"><SectionLabel>How Cold builds</SectionLabel><h2>From first idea<br />to working system.</h2></div><div className="process-track" ref={track}>{processSteps.map(([num, title, copy]) => <article key={num}><span>{num}</span><div className="process-step-copy"><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>;
}
