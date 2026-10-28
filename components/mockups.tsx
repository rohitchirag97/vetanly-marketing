import { BrandMark, Check, Icon } from "@/components/icons";

/*
 * The product, built at full size with sample data until real screenshots replace it. Each sits in a
 * data-slot (data-kind="product"): drop an <img> into the slot and the built sample steps aside.
 */

/** The signature: one gate punch as a notebook entry. Sample data. */
export function GateEntry({ className = "" }: { className?: string }) {
  return (
    <div className={`entry w-full max-w-[340px] ${className}`} aria-label="A kiosk check-in recorded in Vetanly, sample data">
      <div className="flex items-center justify-between bg-ink px-5 py-3 text-paper-2">
        <span className="flex items-center gap-2 text-sm font-medium"><BrandMark className="size-4" /> Main gate kiosk</span>
        <span className="num text-sm text-ink-muted">Tue 28 Oct</span>
      </div>
      <div className="notebook">
        <div className="flex items-end justify-between border-b border-ink px-5 py-4">
          <p className="num text-[2.75rem] leading-none text-ink">09:02</p>
          <span className="chip chip--ok">On time</span>
        </div>
        <dl className="grid grid-cols-2 text-sm">
          {[
            ["Employee", "Anaya Das"],
            ["Shift", "Morning, 09:30"],
            ["Match", "96%"],
            ["Liveness", "Passed"],
          ].map(([k, v], i) => (
            <div key={k} className={`border-ink px-5 py-3 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}>
              <dt className="text-xs text-muted">{k}</dt>
              <dd className={`mt-0.5 font-medium text-ink ${k === "Match" ? "num" : ""}`}>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

/** A kiosk tablet's screen recognising an employee. Sample data. */
export function FaceKioskMockup({ compact }: { compact?: boolean }) {
  return (
    <figure className={`m-0 w-full ${compact ? "max-w-sm" : "max-w-md"}`}>
      <div data-slot="kiosk" data-kind="product" data-alt="The Vetanly kiosk app on a tablet at the gate, showing a check-in" className="rounded-entry bg-ink px-6 pb-6 pt-5 text-paper-2" aria-label="The Vetanly face recognition kiosk, sample data">
        <div className="flex items-center justify-between text-sm text-ink-muted">
          <span className="flex items-center gap-1.5"><BrandMark className="size-4" /> Main gate kiosk</span>
          <span className="num">09:02</span>
        </div>
        <div className="relative mx-auto mt-6 aspect-square w-3/4">
          <div className="absolute inset-0 rounded-full border border-ink-rule" />
          <FaceMesh />
          <span className="kiosk-scan absolute inset-x-[12%] top-[14%] h-[70%]" aria-hidden="true">
            <span className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-mint" />
          </span>
          {["left-0 top-0 border-l-2 border-t-2 rounded-tl-xl", "right-0 top-0 border-r-2 border-t-2 rounded-tr-xl", "left-0 bottom-0 border-l-2 border-b-2 rounded-bl-xl", "right-0 bottom-0 border-r-2 border-b-2 rounded-br-xl"].map((corner) => (
            <span key={corner} className={`absolute size-8 border-mint ${corner}`} aria-hidden="true" />
          ))}
        </div>
        <div className="mt-6 rounded-card border border-ink-rule p-4">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-mint text-ink"><Check /></span>
            <div>
              <p className="font-medium text-paper-2">Welcome, Anaya Das</p>
              <p className="text-sm text-ink-muted">Checked in for the morning shift, on time</p>
            </div>
          </div>
          <dl className="mt-4 grid grid-cols-3 border-t border-ink-rule pt-3 text-sm">
            <div><dt className="text-ink-muted">Match</dt><dd className="num text-paper-2">96%</dd></div>
            <div><dt className="text-ink-muted">Liveness</dt><dd className="text-mint">Passed</dd></div>
            <div><dt className="text-ink-muted">Shift</dt><dd className="num text-paper-2">09:30</dd></div>
          </dl>
        </div>
      </div>
    </figure>
  );
}

const CONTOUR = Array.from({ length: 20 }, (_, i) => {
  const angle = (i / 20) * Math.PI * 2 - Math.PI / 2;
  return [Math.round(100 + 46 * Math.cos(angle)), Math.round(100 + 58 * Math.sin(angle))] as const;
});
const LANDMARKS = [
  [76, 80], [88, 76], [112, 76], [124, 80], // brows
  [82, 90], [94, 90], [106, 90], [118, 90], // eyes
  [100, 96], [100, 110], [91, 116], [109, 116], // nose
  [86, 132], [100, 128], [114, 132], [100, 138], // mouth
  [66, 108], [134, 108], [100, 64], // cheeks, forehead
] as const;
const near = (p: readonly [number, number], count: number) =>
  [...LANDMARKS].sort((a, b) => Math.hypot(a[0] - p[0], a[1] - p[1]) - Math.hypot(b[0] - p[0], b[1] - p[1])).slice(0, count);

/** The landmark mesh the kiosk draws over a face while matching: a diagram of the system, not a portrait. */
function FaceMesh() {
  const lines: [readonly [number, number], readonly [number, number]][] = [];
  CONTOUR.forEach((point, i) => {
    lines.push([point, CONTOUR[(i + 1) % CONTOUR.length]]);
    near(point, 2).forEach((landmark) => lines.push([point, landmark]));
  });
  LANDMARKS.forEach((point) => near(point, 3).slice(1).forEach((other) => lines.push([point, other])));
  return (
    <svg viewBox="0 0 200 200" className="face-landmark-diagram absolute inset-0 size-full text-mint" aria-hidden="true">
      <g stroke="currentColor" strokeWidth=".6" opacity=".45">
        {lines.map(([a, b], i) => <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />)}
      </g>
      <g fill="currentColor">
        {LANDMARKS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.6" />)}
      </g>
    </svg>
  );
}

const rows = [
  { name: "Anaya Das", how: "Face kiosk", time: "09:02", status: "Present", tone: "chip--ok" },
  { name: "Samar Khanna", how: "Face kiosk", time: "09:21", status: "Late 6 min", tone: "chip--warn" },
  { name: "Ritu Verma", how: "GPS, 42 m", time: "09:05", status: "Present", tone: "chip--ok" },
  { name: "Mita Ghosh", how: "", time: "", status: "On leave", tone: "chip--brand" },
];

/** Today's register in the dashboard. Sample data. */
export function DashboardMockup() {
  return (
    <div data-slot="dashboard" data-kind="product" data-alt="The Vetanly dashboard, today's attendance register" className="sheet bg-sheet p-6" aria-label="The Vetanly dashboard, sample data">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-xl text-ink">Today</p>
        <p className="num text-sm text-muted">Tue 28 Oct</p>
      </div>
      <dl className="mt-5 grid grid-cols-3 border-t border-ink">
        {[
          { label: "Present today", value: "128", sub: "of 142" },
          { label: "Late arrivals", value: "6", sub: "avg 9 min" },
          { label: "Payroll draft", value: "₹6.84L", sub: "October" },
        ].map((stat, i) => (
          <div key={stat.label} className={`py-4 ${i > 0 ? "border-l border-rule pl-4" : ""}`}>
            <dt className="text-sm text-muted">{stat.label}</dt>
            <dd className="mt-1 text-ink"><span className="num text-2xl">{stat.value}</span> <span className="text-sm text-muted">{stat.sub}</span></dd>
          </div>
        ))}
      </dl>
      <table className="mt-2 w-full text-sm">
        <thead>
          <tr className="border-y border-ink text-left text-muted">
            <th scope="col" className="py-2 font-normal">Employee</th>
            <th scope="col" className="hidden py-2 font-normal sm:table-cell">How</th>
            <th scope="col" className="py-2 font-normal">In</th>
            <th scope="col" className="py-2 text-right font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-b border-rule">
              <th scope="row" className="py-3 text-left font-medium text-ink">{row.name}</th>
              <td className="hidden py-3 text-muted sm:table-cell">{row.how}</td>
              <td className="num py-3 text-ink-2">{row.time}</td>
              <td className="py-3 text-right"><span className={`chip ${row.tone}`}>{row.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** A salary slip, opened flat. Sample data. */
export function PayslipMockup() {
  const lines: [string, string][] = [["Basic", "30,000"], ["HRA", "12,000"], ["Overtime (6 h)", "1,730"], ["Bonus 2025-26", "7,000"]];
  const deductions: [string, string][] = [["Provident fund", "1,800"], ["ESI", "0"], ["Professional tax", "200"], ["Income tax (TDS)", "1,150"]];
  const column = (title: string, items: [string, string][]) => (
    <div>
      <p className="border-b border-ink pb-2 text-sm text-muted">{title}</p>
      {items.map(([k, v]) => (
        <p key={k} className="flex justify-between border-b border-rule py-2.5 text-ink-2"><span>{k}</span><span className="num text-ink">₹{v}</span></p>
      ))}
    </div>
  );
  return (
    <div data-slot="payslip" data-kind="product" data-alt="A finalized Vetanly salary slip" className="sheet bg-sheet p-6 sm:p-8" aria-label="A salary slip in Vetanly, sample data">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-xl text-ink">Salary slip, October</p>
          <p className="mt-1 text-sm text-muted">Anaya Das, <span className="num">EMP-014</span></p>
        </div>
        <span className="chip chip--ok">Finalized</span>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {column("Earnings", lines)}
        {column("Deductions", deductions)}
      </div>
      <div className="mt-6 flex items-baseline justify-between border-t-2 border-ink pt-4">
        <span className="font-medium text-ink">Net pay</span>
        <span className="num text-3xl text-ink">₹47,580</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="chip chip--ok gap-1"><Icon name="message" className="size-3.5" /> Delivered on WhatsApp</span>
        <span className="chip">PDF</span>
      </div>
    </div>
  );
}

/** The employee app's GPS check-in screen. Sample data. */
export function PhoneMockup() {
  return (
    <div data-slot="phone" data-kind="product" data-alt="The Vetanly employee app on a phone, GPS check-in" className="mx-auto w-64 rounded-entry bg-paper-2 ring-1 ring-ink" aria-label="GPS check-in in the Vetanly employee app, sample data">
      <div className="bg-accent px-5 pb-6 pt-7 text-accent-ink">
        <p className="text-sm">Good morning</p>
        <p className="font-display text-xl">Ritu</p>
      </div>
      <div className="space-y-3 p-4">
        <div className="rounded-card border border-rule p-4">
          <p className="flex items-center gap-2 font-medium text-ink"><Icon name="pin" className="size-4 text-green" /> Andheri office</p>
          <p className="mt-1 text-sm text-muted">42 m away, inside the 200 m area</p>
          <span className="mt-3 flex min-h-11 items-center justify-center rounded-pill bg-ink text-sm font-medium text-paper-2">Check in</span>
        </div>
        <dl className="text-sm">
          {[["Leave balance", "9.5 days"], ["Last payslip", "₹38,410"], ["Next shift", "Tue 9:30"]].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between border-b border-rule py-2.5 last:border-0">
              <dt className="text-muted">{k}</dt><dd className="num text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
