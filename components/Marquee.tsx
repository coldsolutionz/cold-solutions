export function Marquee() {
  const text = "WEB DEVELOPMENT ✦ GHL SETUP ✦ AUTOMATIONS ✦ CUSTOM SOFTWARE ✦ INTEGRATIONS ✦ MAINTENANCE ✦ ";
  return <div className="marquee" aria-label="Capabilities"><div>{text.repeat(3)}</div></div>;
}
