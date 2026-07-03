"use client";
import { useLenis } from "@/hooks/useLenis";
import { CustomCursor } from "./CustomCursor";
import { Loader } from "./Loader";

export function SiteShell({ children }: { children: React.ReactNode }) {
  useLenis();
  return <><Loader /><CustomCursor />{children}</>;
}
