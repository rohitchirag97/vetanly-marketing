import type { IconName } from "@/content/features";

const paths: Record<IconName, React.ReactNode> = {
  face: (
    <>
      <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
      <path d="M9 10v1M15 10v1M9.5 15.5a3.5 3.5 0 0 0 5 0M12 10v3" />
    </>
  ),
  clock: (<><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>),
  calendar: (<><rect x="4" y="5.5" width="16" height="14.5" rx="2.5" /><path d="M8 3.5v4M16 3.5v4M4 10h16M9 14h2M13 14h2M9 17h2" /></>),
  wallet: (<><rect x="3.5" y="6" width="17" height="13" rx="2.5" /><path d="M3.5 10h17M15.5 14.5h1.5" /><path d="M6 6l9-2.5 1 2.5" /></>),
  shield: (<><path d="M12 3.5 5 6v5.5c0 4.2 2.9 7.4 7 9 4.1-1.6 7-4.8 7-9V6l-7-2.5Z" /><path d="m9 12 2 2 4-4" /></>),
  coins: (<><ellipse cx="9" cy="7" rx="5" ry="2.5" /><path d="M4 7v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7" /><path d="M10 15.5c.9 1.2 2.8 2 5 2 2.8 0 5-1.1 5-2.5v-4c0-1.3-2-2.4-4.6-2.5" /></>),
  receipt: (<><path d="M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8v-17Z" /><path d="M9 8h6M9 12h6M9 16h3" /></>),
  gift: (<><rect x="4" y="9" width="16" height="11" rx="1.5" /><path d="M3 9h18M12 9v11M12 9S10.5 4 8 5s-.5 4 4 4Zm0 0s1.5-5 4-4 .5 4-4 4Z" /></>),
  users: (<><circle cx="9" cy="8.5" r="3.2" /><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" /><circle cx="16.5" cy="9.5" r="2.5" /><path d="M16 14c2.4 0 4 1.5 4.5 4" /></>),
  box: (<><path d="m12 3.5 8 4v9l-8 4-8-4v-9l8-4Z" /><path d="m4 7.5 8 4 8-4M12 11.5v9" /></>),
  chart: (<><path d="M4 19.5V5M4 19.5h16" /><path d="m7.5 15 3.5-4 3 2.5 4.5-6" /></>),
  book: (<><path d="M5 4.5h10.5A3.5 3.5 0 0 1 19 8v11.5H8.5A3.5 3.5 0 0 1 5 16V4.5Z" /><path d="M5 16a3.5 3.5 0 0 1 3.5-3.5H19M9 8h6" /></>),
  message: (<><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4A8 8 0 1 1 20 11.5Z" /><path d="M9 10.5h6M9 13.5h4" /></>),
  phone: (<><rect x="7" y="3" width="10" height="18" rx="2.5" /><path d="M11 17.5h2" /></>),
  pin: (<><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.4" /></>),
  lock: (<><rect x="5" y="10.5" width="14" height="10" rx="2.5" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5M12 14.5v2" /></>),
  building: (<><path d="M4 20.5h16M6 20.5V9l6-4 6 4v11.5" /><path d="M10 20.5v-4h4v4M9.5 11h1M13.5 11h1M9.5 14h1M13.5 14h1" /></>),
  spark: (<><path d="M12 3.5v4M12 16.5v4M3.5 12h4M16.5 12h4M6 6l2.6 2.6M15.4 15.4 18 18M6 18l2.6-2.6M15.4 8.6 18 6" /></>),
};

export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function ArrowRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 10h12m-4.5-4.5L15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="m4.5 10.5 3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BrandMark({ className = "size-8" }: { className?: string }) {
  return (
    // Same artwork as brand/vetanly-icon.svg: a face-scan frame around an attendance tick.
    <svg viewBox="0 0 128 128" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="vetanly-mark-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6D4BF2" />
          <stop offset="1" stopColor="#4A2FC9" />
        </linearGradient>
      </defs>
      <rect width="128" height="128" rx="34" fill="url(#vetanly-mark-bg)" />
      <g stroke="#FFFFFF" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M29 49 V36 a7 7 0 0 1 7 -7 H49" />
        <path d="M79 29 H92 a7 7 0 0 1 7 7 V49" />
        <path d="M99 79 V92 a7 7 0 0 1 -7 7 H79" />
        <path d="M49 99 H36 a7 7 0 0 1 -7 -7 V79" />
      </g>
      <path d="M44 65 L58 79 L85 49" stroke="#B9F5D0" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
