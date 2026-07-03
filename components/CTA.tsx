import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";

export function CTA() {
  const email = "mailto:hello@coldsolutions.vercel.app?subject=Project%20inquiry%20for%20Cold%20Solutions";
  return <section className="cta" id="contact"><Logo className="cta-logo" /><div className="cta-inner"><p>Have a project in mind?</p><h2>Ready to build<br />something cold?</h2><p>Need a website, automation, GHL setup, or custom system? Let’s turn your business into a cleaner digital machine.</p><div className="cta-actions"><MagneticButton href={email}>Contact now</MagneticButton><MagneticButton href={email} secondary>Send email</MagneticButton></div><a className="email" href={email}>hello@coldsolutions.vercel.app</a></div></section>;
}
