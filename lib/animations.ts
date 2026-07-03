export const ease = [0.16, 1, 0.3, 1] as const;
export const reveal = {
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.85, ease },
};
