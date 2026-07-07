"use client";

import { useState } from "react";

const email = "hello.coldsolutions@gmail.com";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return <button className="copy-email" type="button" onClick={copy} aria-live="polite">{copied ? "Email copied ✓" : "Copy email"}</button>;
}
