"use client";
import { useLenis } from "@/hooks/useLenis";
import { domAnimation, LazyMotion } from "motion/react";
import { CustomCursor } from "./CustomCursor";
import { Loader } from "./Loader";

export function SiteShell({ children }: { children: React.ReactNode }) {
  useLenis();
  return <LazyMotion features={domAnimation} strict><Loader /><CustomCursor />{children}</LazyMotion>;
}
