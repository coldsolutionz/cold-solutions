"use client";
import { m } from "motion/react";

export function AnimatedText({ children, className = "" }: { children: string; className?: string }) {
  return <span className={`split-text ${className}`}>{children.split(" ").map((word, index) => <span className="word-mask" key={`${word}-${index}`}><m.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .9, delay: .35 + index * .08, ease: [.16, 1, .3, 1] }}>{word}</m.span></span>)}</span>;
}
