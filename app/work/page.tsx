import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Selected Work — Cold Solutions",
  description: "Explore the complete Cold Solutions portfolio and detailed project dossiers.",
};

export default function Portfolio() {
  return <main className="portfolio-page" id="main-content">
    <nav className="case-nav"><Link href="/" aria-label="Cold Solutions home"><Logo /></Link><span>Portfolio index</span><Link href="/#contact">Start a project</Link></nav>
    <header className="portfolio-hero"><div><span>Cold Solutions / Work</span><h1>Built systems.<br />Visible proof.</h1></div><p>A growing collection of websites, interfaces, and digital systems designed to make businesses clearer, faster, and easier to run.</p></header>
    <section className="portfolio-grid">{projects.map((project) => <article key={project.slug}><Link className="portfolio-image" href={`/work/${project.slug}`}><Image src={project.hero} alt={`${project.title} interface preview`} fill sizes="(max-width: 760px) 100vw, 50vw" /><span>Open dossier</span></Link><div className="portfolio-meta"><div><i>{project.index}</i><h2>{project.title}</h2></div><span>{project.type}</span><p>{project.description}</p><Link href={`/work/${project.slug}`}>View case study</Link></div></article>)}</section>
    <footer className="case-footer"><Link href="/" className="brand"><Logo /></Link><span>{projects.length} projects and counting.</span><Link href="/#contact">Let’s build the next one</Link></footer>
  </main>;
}
