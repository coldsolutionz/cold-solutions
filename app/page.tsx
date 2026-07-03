import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SiteShell } from "@/components/SiteShell";
import { SystemFlow } from "@/components/SystemFlow";
import { Work } from "@/components/Work";

export default function Home() {
  return <SiteShell><Navbar /><main><Hero /><Marquee /><Services /><Work /><SystemFlow /><Process /><About /><CTA /></main><Footer /></SiteShell>;
}
