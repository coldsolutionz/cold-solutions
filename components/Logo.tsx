export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 6v88M12 28l76 44M12 72l76-44" />
        <path d="m50 18-9-8m9 8 9-8M50 82l-9 8m9-8 9 8M22 34l-12 3m12-3-3-12M78 66l12-3m-12 3 3 12M22 66l-12-3m12 3-3 12M78 34l12 3m-12-3 3-12" />
      </g>
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
  );
}
