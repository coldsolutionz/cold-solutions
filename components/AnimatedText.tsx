"use client";
import { motion } from "motion/react";

export function AnimatedText({ children, className = "" }: { children: string; className?: string }) {
  return <span className={`split-text ${className}`} aria-label={children}>{children.split(" ").map((word, index) => <span className="word-mask" aria-hidden="true" key={`${word}-${index}`}><motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .9, delay: .75 + index * .1, ease: [.16, 1, .3, 1] }}>{word}</motion.span></span>)}</span>;
}
