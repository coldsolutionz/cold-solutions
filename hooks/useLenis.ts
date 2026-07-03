"use client";
import { useEffect } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useLenis() {
  const reduced = useReducedMotion();
  useEffect(() => {
    const desktopPointer = matchMedia("(pointer: fine) and (hover: hover) and (min-width: 901px)");
    if (reduced || !desktopPointer.matches) return;
    let active = true;
    let lenis: import("lenis").default | undefined;
    import("lenis").then(({ default: Lenis }) => {
      if (active) lenis = new Lenis({ lerp: 0.09, smoothWheel: true, autoRaf: true });
    });
    return () => { active = false; lenis?.destroy(); };
  }, [reduced]);
}
