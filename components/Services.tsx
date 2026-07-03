"use client";
import { m } from "motion/react";
import { services } from "@/lib/data";
import { reveal } from "@/lib/animations";
import { SectionLabel } from "./SectionLabel";

export function Services() {
  return <section className="section services" id="services"><div className="section-head"><SectionLabel>What we build</SectionLabel><m.h2 {...reveal}>One studio.<br /><span>Six connected capabilities.</span></m.h2><p>Everything connects back to one goal: helping businesses capture leads, organize work, and move faster.</p></div><div className="service-list">{services.map((service, i) => <m.article className="service-row" key={service.title} initial={{ opacity: 1, x: i % 2 ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-15%" }} transition={{ duration: .65 }}><span className="service-id">{service.id}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><span className="service-arrow" aria-hidden="true">↗</span></m.article>)}</div></section>;
}
