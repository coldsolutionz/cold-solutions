"use client";
import { motion } from "motion/react";
import { Logo } from "./Logo";

export function Loader() {
  return <motion.div className="loader" initial={{ y: 0 }} animate={{ y: "-100%" }} transition={{ duration: .9, delay: 1.65, ease: [.76, 0, .24, 1] }} aria-hidden="true"><motion.div initial={{ opacity: 0, scale: .82 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .6 }}><Logo className="loader-logo" /><div className="loader-name">Cold Solutions</div><div className="loader-line"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: "easeInOut" }} /></div><div className="loader-copy">Websites. Automations. Systems.</div></motion.div></motion.div>;
}
