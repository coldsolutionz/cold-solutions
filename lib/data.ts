export const services = [
  { id: "01", title: "Web Solutions", text: "High-conviction websites and digital products that make the first impression count.", items: ["Business websites", "Landing pages", "E-commerce", "Web apps & dashboards"] },
  { id: "02", title: "Automations", text: "Quiet systems that follow up, route work, and keep opportunities moving.", items: ["Workflow automation", "Email & WhatsApp", "Lead nurturing", "Appointments & CRM"] },
  { id: "03", title: "GoHighLevel", text: "A clean command center for your pipeline, conversations, and growth.", items: ["CRM setup", "Funnels & forms", "Calendar booking", "Pipelines & snapshots"] },
  { id: "04", title: "Custom Software", text: "Purpose-built tools when off-the-shelf software starts getting in the way.", items: ["Internal tools", "Admin dashboards", "APIs & databases", "SaaS MVPs"] },
  { id: "05", title: "Integrations", text: "The connective tissue between the tools your business already depends on.", items: ["Stripe & Workspace", "WhatsApp & GHL", "Zapier / Make / n8n", "Composio & custom APIs"] },
  { id: "06", title: "Support", text: "A dependable technical partner after launch, not a disappearing act.", items: ["Maintenance", "Performance", "Security & fixes", "Feature enhancements"] },
];

export const projects = [
  {
    index: "01", slug: "on5", title: "On5 Solutions", type: "Digital agency platform", url: "https://on5.framer.website",
    description: "A broad service platform that turns a complex mix of managed IT, cybersecurity, software, and digital design into one approachable story.",
    tags: ["Web design", "Motion", "Service architecture"], problem: "A multidisciplinary offer needed a single, coherent front door.", solution: "A conversion-led narrative with kinetic messaging, clear service pathways, proof, and repeated discovery-call moments.", outcome: "A confident agency presence built to make technical capability easy to understand.",
    hero: "/work/on5-hero.jpg", detail: "/work/on5-detail.jpg",
    challenge: "On5 spans managed infrastructure, custom software, cybersecurity, web development, and creative delivery. The experience had to communicate range without reading like a catalogue.",
    approach: "The site leads with an adaptable promise, then moves from business benefits into service depth, selected work, social proof, FAQs, and a focused call to action. Persistent navigation keeps the long-form journey usable.",
    features: ["Animated rotating hero proposition", "Benefit-led service architecture", "Project portfolio with category filters", "Client proof and testimonial sequence", "Responsive long-form conversion journey", "Repeated discovery-call pathways"],
  },
  {
    index: "02", slug: "nopto", title: "Nopto", type: "AI automation agency", url: "https://nopto.framer.ai",
    description: "A dark, high-contrast agency experience that makes AI agents and workflow automation feel tangible, structured, and ready for business.",
    tags: ["AI positioning", "Web design", "Interaction"], problem: "An abstract AI service needed to feel concrete and commercially useful.", solution: "Product-like visual systems, workflow explanations, capability modules, and a clear discover–build–deliver journey.", outcome: "A focused digital presence that translates automation into understandable business value.",
    hero: "/work/nopto-hero.jpg", detail: "/work/nopto-detail.jpg",
    challenge: "AI automation can quickly become vague or over-technical. Nopto needed to establish a distinctive point of view while showing business owners what the engagement actually includes.",
    approach: "The experience pairs a restrained black-and-violet visual system with operational examples: automations, live intelligence, custom agents, integrations, onboarding, deployment, and support.",
    features: ["Cinematic AI-agent hero", "Interactive capability ecosystem", "Workflow and automation demonstrations", "Discover–build–deliver onboarding", "Custom-agent service storytelling", "Appointment-focused conversion flow"],
  },
  {
    index: "03", slug: "tavren", title: "Tavren Control Desk", type: "Secure portfolio dashboard", url: "https://portfolio.tavren.io",
    description: "A deliberately minimal, access-controlled entry point for Tavren’s private portfolio dashboard.",
    tags: ["Authentication", "Dashboard", "Brand UI"], problem: "Private portfolio material required a controlled, professional access point.", solution: "A focused split-screen sign-in experience with unmistakable brand ownership and zero navigational distraction.", outcome: "A clear, secure-feeling threshold into a private client environment.",
    hero: "/work/tavren-hero.jpg", detail: "/work/tavren-detail.jpg",
    challenge: "The public surface must establish trust and orientation without exposing protected portfolio content or overwhelming the authentication task.",
    approach: "The interface reduces the page to identity, credentials, and one action. Strong scale contrast and a deep green brand field make the utilitarian login feel owned rather than generic.",
    features: ["Access-controlled portfolio entry", "Focused username/password workflow", "Strong split-screen composition", "Distinct Tavren brand treatment", "Responsive single-task interface", "Protected content boundary"],
  },
];

export type Project = (typeof projects)[number];

export const processSteps = [
  ["01", "Discover", "We understand your offer, audience, and current workflow."],
  ["02", "Design", "We shape the structure, message, and user journey."],
  ["03", "Build", "We develop the site, CRM, integrations, or custom system."],
  ["04", "Automate", "We connect follow-ups, pipelines, bookings, and notifications."],
  ["05", "Launch", "We test, optimize, deploy, and make sure it works smoothly."],
  ["06", "Support", "We improve and expand the system as the business grows."],
];
