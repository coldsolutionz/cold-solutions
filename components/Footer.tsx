import { Logo } from "./Logo";

export function Footer() {
  return <footer><div className="footer-top"><a href="#top" className="brand" aria-label="Cold Solutions, back to top"><Logo /></a><p>Websites. Automations. Systems.</p><nav aria-label="Footer navigation">{["Work", "Services", "Process", "About", "Contact"].map(l => <a href={`#${l.toLowerCase()}`} key={l}>{l}</a>)}</nav></div><div className="footer-bottom"><span>© 2026 Cold Solutions. Built clean.</span><div><a href="https://github.com/coldsolutionz/cold-solutions" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:hello@coldsolutions.vercel.app">Email</a></div><a href="#top">Back to top ↑</a></div></footer>;
}
