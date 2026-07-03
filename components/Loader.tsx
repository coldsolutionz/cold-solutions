"use client";
import { m } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Loader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem("cold-intro-seen")) { setVisible(false); return; }
    sessionStorage.setItem("cold-intro-seen", "true");
    const timer = window.setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return <m.div className="loader" initial={{ y: 0 }} animate={{ y: "-100%" }} transition={{ duration: .65, delay: .85, ease: [.76, 0, .24, 1] }} role="status" aria-label="Loading Cold Solutions"><m.div initial={{ opacity: .65, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .4 }}><Logo className="loader-logo" /><div className="loader-name">Cold Solutions</div><div className="loader-line"><m.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .75, ease: "easeInOut" }} /></div><div className="loader-copy">Websites. Automations. Systems.</div></m.div><button type="button" onClick={() => setVisible(false)}>Skip intro</button></m.div>;
}
