"use client";
import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";

const nodes = [["Visitor", "Attention"], ["Landing page", "Clarity"], ["Lead form", "Intent"], ["CRM", "Context"], ["Automation", "Speed"], ["Follow-up", "Trust"], ["Booked client", "Growth"]];
export function SystemFlow() {
  return <section className="section system"><div className="system-intro"><SectionLabel>Connected by design</SectionLabel><h2>Not just a website.<br /><span>A system.</span></h2><p>A website is only the front door. The real value is what happens after someone clicks, fills a form, or asks for help.</p></div><div className="flow" aria-label="Customer acquisition system flow"><motion.div className="flow-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: [.16, 1, .3, 1] }} />{nodes.map(([name, label], i) => <motion.div className="flow-node" key={name} initial={{ opacity: .2, scale: .7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .12 }}><i>{String(i + 1).padStart(2, "0")}</i><strong>{name}</strong><span>{label}</span></motion.div>)}</div></section>;
}
