import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo } from "@/components/Logo";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} Case Study — Cold Solutions`, description: project.description } : {};
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <main className="case-study">
    <nav className="case-nav"><Link href="/" aria-label="Cold Solutions home"><Logo /></Link><Link href="/#work">All work</Link><a href={project.url} target="_blank" rel="noreferrer">Visit live site ↗</a></nav>
    <header className="case-hero"><div className="case-count">Project / {project.index}</div><h1>{project.title}</h1><div className="case-intro"><p>{project.description}</p><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></header>
    <figure className="case-image case-image--hero"><Image src={project.hero} alt={`${project.title} homepage after the interface fully loaded`} fill priority sizes="100vw" /></figure>
    <section className="case-brief"><div><span>Challenge</span><p>{project.challenge}</p></div><div><span>Approach</span><p>{project.approach}</p></div></section>
    <section className="case-features"><div className="case-feature-head"><span>What we built</span><h2>A digital system with a job to do.</h2></div><ol>{project.features.map((feature, index) => <li key={feature}><i>{String(index + 1).padStart(2, "0")}</i><span>{feature}</span></li>)}</ol></section>
    <figure className="case-image case-image--detail"><Image src={project.detail} alt={`${project.title} key content and feature presentation`} fill sizes="100vw" /></figure>
    <section className="case-outcome"><span>Outcome</span><h2>{project.outcome}</h2><p>This dossier documents observable interface decisions from the live build. It does not claim confidential performance data or metrics.</p><a href={project.url} target="_blank" rel="noreferrer">Experience the live site <b>↗</b></a></section>
    <footer className="case-footer"><Link href="/" className="brand"><Logo /></Link><Link href="/#work">← Back to selected work</Link><a href="mailto:hello@coldsolutions.vercel.app?subject=Project%20inquiry%20for%20Cold%20Solutions">Start a project ↗</a></footer>
  </main>;
}
