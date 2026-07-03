import { Logo } from "./Logo";

export function Footer() {
  return <footer><div className="footer-top"><a href="#top" className="brand" aria-label="Cold Solutions, back to top"><Logo /></a><p>Websites. Automations. Systems.</p><nav>{["Work", "Services", "Process", "About"].map(l => <a href={`#${l.toLowerCase()}`} key={l}>{l}</a>)}<a href="mailto:hello@coldsolutions.vercel.app?subject=Project%20inquiry%20for%20Cold%20Solutions">Contact</a></nav></div><div className="footer-bottom"><span>© 2026 Cold Solutions. Built clean.</span><div><a href="#">GitHub</a><a href="#">LinkedIn</a><a href="#">Facebook</a></div><a href="#top">Back to top ↑</a></div></footer>;
}
