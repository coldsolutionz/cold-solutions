"use client";
import { m } from "motion/react";
import { SectionLabel } from "./SectionLabel";

const nodes = [["Visitor", "Attention"], ["Landing page", "Clarity"], ["Lead form", "Intent"], ["CRM", "Context"], ["Automation", "Speed"], ["Follow-up", "Trust"], ["Booked client", "Growth"]];
export function SystemFlow() {
  return <section className="section system"><div className="system-intro"><SectionLabel>Connected by design</SectionLabel><h2>Not just a website.<br /><span>A system.</span></h2><p>A website is only the front door. The real value is what happens after someone clicks, fills a form, or asks for help.</p></div><div className="flow" role="list" aria-label="Customer acquisition system flow"><m.div className="flow-line" aria-hidden="true" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: [.16, 1, .3, 1] }} />{nodes.map(([name, label], i) => <m.div className="flow-node" role="listitem" key={name} initial={{ opacity: 1, scale: .82 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><i aria-hidden="true">{String(i + 1).padStart(2, "0")}</i><strong>{name}</strong><span>{label}</span></m.div>)}</div></section>;
}
