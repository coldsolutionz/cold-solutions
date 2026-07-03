"use client";
import { projects } from "@/lib/data";
import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";

export function Work() {
  return <section className="section work" id="work"><div className="work-heading"><SectionLabel>Selected proof</SectionLabel><h2>Proof before<br />promises.</h2><p>Three focused builds. Each starts with friction and ends with a cleaner way to work.</p></div><div className="project-stack">{projects.map((project, i) => <article className={`project project--${i + 1}`} key={project.title} style={{ top: `${100 + i * 22}px` }}><div className="project-visual"><div className="mock-nav"><i /><i /><i /></div><div className="mock-title">{project.index}</div><div className="mock-window"><span>{project.type}</span><strong>{project.title}</strong><div className="mock-lines"><i /><i /><i /></div></div><div className="project-orb" /></div><div className="project-copy"><span>{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(t => <i key={t}>{t}</i>)}</div><dl><div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>Solution</dt><dd>{project.solution}</dd></div><div><dt>Outcome</dt><dd>{project.outcome}</dd></div></dl><motion.a href="#contact" whileHover={{ x: 8 }}>View case study <b>↗</b></motion.a></div></article>)}</div></section>;
}
