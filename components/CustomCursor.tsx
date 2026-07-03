"use client";
import { motion } from "motion/react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  return <motion.div className="custom-cursor" aria-hidden="true" animate={{ x: x - 8, y: y - 8 }} transition={{ type: "spring", stiffness: 500, damping: 35 }} />;
}
