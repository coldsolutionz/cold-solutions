export function Marquee() {
  const text = "WEB DEVELOPMENT  /  GHL SETUP  /  AUTOMATIONS  /  CUSTOM SOFTWARE  /  INTEGRATIONS  /  MAINTENANCE  /  ";
  return <div className="marquee"><span className="sr-only">Capabilities: web development, GoHighLevel setup, automations, custom software, integrations, and maintenance.</span><div aria-hidden="true">{text.repeat(3)}</div></div>;
}
