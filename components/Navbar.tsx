"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const fn = () => setScrolled(scrollY > 40); fn(); addEventListener("scroll", fn, { passive: true }); return () => removeEventListener("scroll", fn); }, []);
  const links = ["Work", "Services", "Process", "About"];
  return <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}><a href="#top" className="brand" aria-label="Cold Solutions, home"><Logo /></a><nav className={open ? "nav-links nav-links--open" : "nav-links"} aria-label="Main navigation">{links.map(link => <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase()}`}>{link}</a>)}<a onClick={() => setOpen(false)} href="#contact">Contact</a></nav><div className="nav-cta"><MagneticButton href="mailto:hello@coldsolutions.vercel.app?subject=Project%20inquiry%20for%20Cold%20Solutions">Contact now</MagneticButton></div><button className="menu" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}><span /><span /></button></header>;
}
