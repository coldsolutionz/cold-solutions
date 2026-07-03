"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { AnimatedText } from "./AnimatedText";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";
import { SnowParticles } from "./SnowParticles";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  return <section className="hero" id="top" ref={ref}><SnowParticles /><div className="hero-grid" aria-hidden="true" /><motion.div className="hero-orbit" style={{ y }} aria-hidden="true"><div className="orbit-ring orbit-ring--one" /><div className="orbit-ring orbit-ring--two" /><Logo /></motion.div><div className="hero-copy"><div className="hero-index">Cold / digital systems studio <span>©26</span></div><h1><AnimatedText>Websites. Automations. Systems.</AnimatedText></h1><motion.div className="hero-bottom" initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35, duration: .8 }}><p>Cold Solutions builds clean digital systems for businesses that want a sharper online presence, better lead capture, and smoother operations.</p><div className="hero-actions"><MagneticButton href="#contact">Start a project</MagneticButton><MagneticButton href="#work" secondary>View work</MagneticButton></div></motion.div></div><a href="#services" className="scroll-cue"><span>Scroll to explore</span><i /></a></section>;
}
