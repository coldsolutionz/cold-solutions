"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const finePointer = matchMedia("(pointer: fine) and (hover: hover)");
    if (!finePointer.matches) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!cursor.current) return;
        cursor.current.style.transform = `translate3d(${event.clientX - 8}px, ${event.clientY - 8}px, 0)`;
        cursor.current.classList.add("custom-cursor--visible");
        cursor.current.classList.toggle("custom-cursor--active", Boolean((event.target as Element)?.closest("a, button")));
      });
    };
    addEventListener("pointermove", move, { passive: true });
    return () => { cancelAnimationFrame(frame); removeEventListener("pointermove", move); };
  }, []);
  return <div ref={cursor} className="custom-cursor" aria-hidden="true" />;
}
