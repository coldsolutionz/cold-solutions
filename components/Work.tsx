"use client";
import { projects } from "@/lib/data";
import { m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "./SectionLabel";

export function Work() {
  return <section className="section work" id="work"><div className="work-heading"><SectionLabel>Selected proof</SectionLabel><h2>Proof before<br />promises.</h2><p>Three live builds, documented through real interfaces and observable design decisions.</p></div><div className="project-stack">{projects.map((project, i) => <article className={`project project--${i + 1}`} key={project.title} style={{ top: `${100 + i * 22}px` }}><div className="project-visual project-shot"><Image src={project.hero} alt={`${project.title} website interface`} fill sizes="(max-width: 900px) 100vw, 45vw" /></div><div className="project-copy"><span>{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(t => <i key={t}>{t}</i>)}</div><dl><div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>Solution</dt><dd>{project.solution}</dd></div><div><dt>Outcome</dt><dd>{project.outcome}</dd></div></dl><m.div className="project-link" whileHover={{ x: 8 }}><Link href={`/work/${project.slug}`}>View case study</Link></m.div></div></article>)}<div className="portfolio-link"><span>Want the complete index?</span><Link href="/work">View full portfolio</Link></div></div></section>;
}
