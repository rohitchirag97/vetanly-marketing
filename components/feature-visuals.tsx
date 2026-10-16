import { BrandMark, Check, Icon } from "@/components/icons";
import { PhoneMockup } from "@/components/mockups";

/* One illustration per feature page, shown under its hero. Sample data only; names match the other mockups. */

const tones = {
  green: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  brand: "bg-brand-50 text-brand-700",
  slate: "bg-slate-100 text-slate-700",
  red: "bg-red-50 text-red-700",
} as const;

function Pill({ tone = "slate", children }: { tone?: keyof typeof tones; children: React.ReactNode }) {
  return <span className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${tones[tone]}`}>{children}</span>;
}

function Avatar({ initials }: { initials: string }) {
  return <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">{initials}</span>;
}

/** A dashboard window with a title bar, like the homepage mockup. */
function Window({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 ${className}`}>
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-300" /><span className="size-2.5 rounded-full bg-amber-300" /><span className="size-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 truncate text-xs text-slate-500">app.vetanly · {title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

/** A small floating card that sits beside a window. */
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 ${className}`}>{children}</div>;
}

const money = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function GeofenceVisual() {
  return (
    <div className="grid items-center gap-8 md:grid-cols-[1.4fr_auto]">
      <Window title="Branches · Andheri office">
        <div className="relative h-64 overflow-hidden rounded-xl bg-[linear-gradient(90deg,#f1f5f9_1px,transparent_1px),linear-gradient(#f1f5f9_1px,transparent_1px)] bg-size-[32px_32px] bg-emerald-50/40">
          <span className="absolute inset-x-0 top-1/3 h-3 bg-white" /><span className="absolute inset-y-0 left-1/2 w-3 bg-white" />
          <span className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-brand-400 bg-brand-500/10" />
          <span className="absolute left-1/2 top-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand-600 text-white shadow-lg"><Icon name="building" className="size-4" /></span>
          <span className="absolute left-[60%] top-[36%] size-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/25" />
          <span className="absolute left-[18%] top-[78%] size-3.5 rounded-full bg-red-400 ring-4 ring-red-400/25" />
          <span className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-2 py-1 text-[11px] font-medium text-slate-700">Geofence radius · 200 m</span>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-3"><Avatar initials="RV" /><span className="flex-1 font-medium text-slate-800">Ritu Verma</span><span className="text-xs text-slate-500">42 m · ±8 m</span><Pill tone="green">Checked in</Pill></div>
          <div className="flex items-center gap-3"><Avatar initials="AM" /><span className="flex-1 font-medium text-slate-800">Arjun Mehta</span><span className="text-xs text-slate-500">640 m</span><Pill tone="red">Outside area</Pill></div>
        </div>
      </Window>
      <div className="hidden md:block"><PhoneMockup /></div>
    </div>
  );
}

const ROSTER = [
  { name: "Anaya Das", initials: "AD", days: ["M", "M", "M", "M", "M", "Off", "Off"] },
  { name: "Samar Khanna", initials: "SK", days: ["E", "E", "Off", "E", "E", "E", "Off"] },
  { name: "Ritu Verma", initials: "RV", days: ["N", "N", "N", "Off", "Off", "N", "N"] },
  { name: "Mita Ghosh", initials: "MG", days: ["M", "Off", "M", "M", "Leave", "M", "M"] },
];
const SHIFT_TONE: Record<string, string> = { M: "bg-brand-50 text-brand-700", E: "bg-amber-50 text-amber-700", N: "bg-slate-800 text-white", Off: "bg-slate-50 text-slate-500", Leave: "bg-emerald-50 text-emerald-700" };

function RosterVisual() {
  return (
    <div className="relative">
      <Window title="Roster · Week of 3 Nov">
        <div className="grid grid-cols-[minmax(0,1.6fr)_repeat(7,minmax(0,1fr))] gap-1.5 text-center text-[11px]">
          <span />
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <span key={d} className="pb-1 font-medium text-slate-500">{d}</span>)}
          {ROSTER.map((row) => [
            <span key={row.name} className="flex items-center gap-2 text-left text-xs font-medium text-slate-800"><Avatar initials={row.initials} /><span className="hidden truncate sm:inline">{row.name}</span></span>,
            ...row.days.map((d, i) => <span key={`${row.name}-${i}`} className={`grid place-items-center rounded-lg py-2 font-semibold ${SHIFT_TONE[d]}`}>{d}</span>),
          ])}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-600">
          <Pill tone="brand">M · Morning 9:30</Pill><Pill tone="amber">E · Evening 14:00</Pill><span className="rounded-full bg-slate-800 px-2 py-0.5 font-semibold text-white">N · Night 22:00</span>
        </div>
      </Window>
      <Card className="mt-4 sm:absolute sm:-bottom-16 sm:-right-4 sm:mt-0 sm:w-72">
        <p className="text-sm font-semibold text-slate-900">Shift swap request</p>
        <p className="mt-1 text-xs text-slate-500">Samar ⇄ Ritu · Thu 6 Nov, Evening ↔ Night</p>
        <div className="mt-3 flex gap-2"><span className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white">Approve</span><span className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700">Decline</span></div>
      </Card>
    </div>
  );
}

function LeaveVisual() {
  return (
    <div className="grid items-start gap-6 md:grid-cols-[1.3fr_1fr]">
      <Window title="Leave · Requests">
        <div className="flex items-center gap-3"><Avatar initials="MG" /><div className="flex-1"><p className="text-sm font-semibold text-slate-900">Mita Ghosh · Casual leave</p><p className="text-xs text-slate-500">Fri 7 Nov – Mon 10 Nov · 2.5 days (half day Monday)</p></div><Pill tone="amber">Pending</Pill></div>
        <p className="mt-3 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">“Family function in Kolkata.”</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[["Casual", "4.5 of 8"], ["Sick", "6 of 7"], ["Earned", "11 of 15"]].map(([k, v]) => <div key={k} className="rounded-xl border border-slate-100 p-2"><p className="text-[11px] text-slate-500">{k}</p><p className="text-sm font-bold text-slate-900">{v}</p></div>)}
        </div>
        <div className="mt-4 flex gap-2"><span className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white">Approve</span><span className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700">Reject</span></div>
      </Window>
      <Card>
        <p className="flex items-center gap-2 text-sm font-semibold text-slate-900"><Icon name="calendar" className="size-4 text-brand-600" /> Upcoming holidays</p>
        <ul className="mt-3 space-y-2.5 text-sm">
          {[["Diwali", "Mon 10 Nov", "All branches"], ["Guru Nanak Jayanti", "Wed 5 Nov", "Pune only"], ["Christmas", "Thu 25 Dec", "All branches"]].map(([name, date, scope]) => (
            <li key={name} className="flex items-center justify-between gap-3"><span><span className="font-medium text-slate-800">{name}</span><span className="block text-xs text-slate-500">{date}</span></span><Pill tone={scope === "All branches" ? "slate" : "brand"}>{scope}</Pill></li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

const PAYROLL = [
  { name: "Anaya Das", initials: "AD", days: "26", gross: 52000, ded: 4420 },
  { name: "Samar Khanna", initials: "SK", days: "24.5", gross: 41250, ded: 3610 },
  { name: "Ritu Verma", initials: "RV", days: "26", gross: 38900, ded: 2860 },
  { name: "Mita Ghosh", initials: "MG", days: "25", gross: 33400, ded: 2410 },
];

function PayrollVisual() {
  return (
    <Window title="Payroll · October 2026">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="font-semibold text-slate-900">October payroll · 142 employees</p><p className="text-xs text-slate-500">From attendance, leave, overtime, loans and claims</p></div>
        <div className="flex items-center gap-2"><Pill tone="amber">Draft</Pill><span className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white">Finalize</span></div>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-100 text-sm">
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-500 sm:grid-cols-[1fr_4rem_6rem_6rem_6rem]"><span>Employee</span><span className="hidden sm:block">Paid days</span><span className="hidden text-right sm:block">Gross</span><span className="hidden text-right sm:block">Deductions</span><span className="text-right">Net pay</span></div>
        {PAYROLL.map((p) => (
          <div key={p.name} className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-slate-100 px-3 py-2.5 sm:grid-cols-[1fr_4rem_6rem_6rem_6rem]">
            <span className="flex items-center gap-2 font-medium text-slate-800"><Avatar initials={p.initials} />{p.name}</span>
            <span className="hidden text-slate-600 sm:block">{p.days}</span>
            <span className="hidden text-right text-slate-600 sm:block">{money(p.gross)}</span>
            <span className="hidden text-right text-slate-600 sm:block">−{money(p.ded)}</span>
            <span className="text-right font-semibold text-slate-900">{money(p.gross - p.ded)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[["Gross pay", "₹7,42,600"], ["Deductions", "₹58,400"], ["Net payable", "₹6,84,200"]].map(([k, v], i) => <div key={k} className={`rounded-xl p-3 ${i === 2 ? "bg-brand-600 text-white" : "border border-slate-100"}`}><p className={`text-xs ${i === 2 ? "text-brand-100" : "text-slate-500"}`}>{k}</p><p className="text-lg font-bold">{v}</p></div>)}
      </div>
    </Window>
  );
}

function StatutoryVisual() {
  const items = [
    { label: "Provident fund", value: "₹1,12,840", sub: "Employee 12% + employer 12% (EPS 8.33%)", icon: "shield" as const },
    { label: "ESI", value: "₹18,265", sub: "0.75% + 3.25% on 61 eligible staff", icon: "users" as const },
    { label: "Professional tax", value: "₹21,400", sub: "Maharashtra and Karnataka slabs", icon: "building" as const },
    { label: "TDS on salary", value: "₹64,930", sub: "Old and new regime, after declarations", icon: "receipt" as const },
  ];
  return (
    <div>
      <Window title="Statutory · October 2026">
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-100 p-4">
              <div className="flex items-center justify-between text-xs text-slate-500">{item.label}<Icon name={item.icon} className="size-4 text-brand-500" /></div>
              <p className="mt-1 text-xl font-bold text-slate-900">{item.value}</p>
              <p className="text-[11px] text-slate-500">{item.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl bg-emerald-50/60 px-3 py-2.5 text-xs">
          <span className="font-semibold text-slate-900">Ready to file:</span>
          {["PF ECR file · October", "ESI contribution sheet", "Form 16 Part B · FY 2025-26"].map((f) => <span key={f} className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-slate-700 shadow-sm"><Check className="size-3.5 text-emerald-600" />{f}</span>)}
        </div>
      </Window>
    </div>
  );
}

function LoansVisual() {
  return (
    <div className="grid items-start gap-6 md:grid-cols-2">
      <Window title="Loans · Samar Khanna">
        <div className="flex items-center justify-between"><div><p className="font-semibold text-slate-900">Salary advance</p><p className="text-xs text-slate-500">₹30,000 · 6 monthly instalments</p></div><Pill tone="brand">Recovering</Pill></div>
        <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-1/2 rounded-full bg-brand-600" /></div>
        <p className="mt-2 text-xs text-slate-500">₹15,000 recovered · ₹15,000 left</p>
        <ul className="mt-4 space-y-2 text-sm">
          {[["Aug", "Recovered"], ["Sep", "Recovered"], ["Oct", "Recovered"], ["Nov", "From payroll"]].map(([m, s]) => <li key={m} className="flex items-center justify-between"><span className="text-slate-700">{m} instalment · ₹5,000</span><Pill tone={s === "Recovered" ? "green" : "amber"}>{s}</Pill></li>)}
        </ul>
      </Window>
      <Window title="Expense claims">
        {[
          { who: "RV", name: "Ritu Verma", what: "Client visit · cab", amount: "₹1,240", tone: "amber" as const, status: "Pending" },
          { who: "AD", name: "Anaya Das", what: "Team lunch · food", amount: "₹3,800", tone: "green" as const, status: "Approved" },
          { who: "AM", name: "Arjun Mehta", what: "Site travel · fuel", amount: "₹2,150", tone: "brand" as const, status: "Paid in Oct" },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-3 border-b border-slate-100 py-2.5 text-sm last:border-0">
            <Avatar initials={c.who} />
            <div className="flex-1"><p className="font-medium text-slate-800">{c.name}</p><p className="flex items-center gap-1 text-xs text-slate-500"><Icon name="receipt" className="size-3.5" />{c.what}</p></div>
            <span className="font-semibold text-slate-900">{c.amount}</span><Pill tone={c.tone}>{c.status}</Pill>
          </div>
        ))}
      </Window>
    </div>
  );
}

function SettlementVisual() {
  const lines: [string, string, boolean?][] = [
    ["Salary for 1–14 Nov", "₹18,200"],
    ["Leave encashment · 9 days", "₹11,700"],
    ["Gratuity · 6 years 4 months", "₹69,230"],
    ["Bonus 2025-26 (pro rata)", "₹4,670"],
    ["Notice-period recovery · 16 days", "−₹20,800", true],
    ["Loan balance recovered", "−₹6,000", true],
  ];
  return (
    <div className="mx-auto max-w-2xl">
      <Window title="Full & final · Arjun Mehta">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div><p className="font-semibold text-slate-900">Settlement statement</p><p className="text-xs text-slate-500">Last working day 14 Nov 2026 · Resigned</p></div>
          <Pill tone="green">Ready to pay</Pill>
        </div>
        <div className="mt-3 text-sm">
          {lines.map(([label, value, negative]) => <p key={label} className="flex justify-between py-1.5 text-slate-600"><span>{label}</span><span className={negative ? "text-red-600" : "text-slate-900"}>{value}</span></p>)}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-brand-600 px-4 py-3 text-white"><span className="font-medium">Net settlement</span><span className="text-lg font-bold">₹77,000</span></div>
        <div className="mt-3 flex flex-wrap gap-2 text-xs"><Pill tone="green">Laptop returned</Pill><Pill tone="green">Exit checklist done</Pill><Pill>PDF statement</Pill></div>
      </Window>
    </div>
  );
}

function ProfileVisual() {
  return (
    <Window title="Employees · Anaya Das">
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-700 text-lg font-semibold text-white">AD</span>
            <div><p className="text-lg font-semibold text-slate-900">Anaya Das</p><p className="text-sm text-slate-500">Senior accountant · Finance</p><p className="text-xs text-slate-500">EMP-014 · Andheri office</p></div>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {[["Joined", "12 Jun 2021"], ["Manager", "Samar Khanna"], ["Bank", "HDFC ••••4821"], ["PAN", "•••••1234F"]].map(([k, v]) => <div key={k} className="rounded-xl border border-slate-100 p-3"><dt className="text-[11px] text-slate-500">{k}</dt><dd className="font-medium text-slate-900">{v}</dd></div>)}
          </dl>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">Documents</p>
          <ul className="mt-2 space-y-2 text-sm">
            {[["Offer letter.pdf", "Signed"], ["Aadhaar card.pdf", "Verified"], ["Degree certificate.pdf", "Verified"]].map(([f, s]) => <li key={f} className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-2"><span className="flex items-center gap-2 text-slate-700"><Icon name="book" className="size-4 text-slate-500" />{f}</span><Pill tone="green">{s}</Pill></li>)}
          </ul>
          <p className="mt-4 text-sm font-semibold text-slate-900">Onboarding</p>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-full rounded-full bg-emerald-500" /></div>
          <p className="mt-1 text-xs text-slate-500">8 of 8 steps done</p>
        </div>
      </div>
    </Window>
  );
}

function AssetsVisual() {
  const assets = [
    { tag: "VT-LAP-0042", name: "Dell Latitude 5440", who: "Anaya Das", status: "Assigned", tone: "brand" as const, note: "Warranty till Mar 2027" },
    { tag: "VT-PHN-0017", name: "Samsung Galaxy A35", who: "Ritu Verma", status: "Assigned", tone: "brand" as const, note: "Acknowledged 2 Sep" },
    { tag: "VT-TAB-0005", name: "Kiosk tablet · Main gate", who: "Andheri office", status: "In use", tone: "green" as const, note: "Kiosk K-01" },
    { tag: "VT-LAP-0031", name: "HP ProBook 440", who: "Arjun Mehta", status: "Return due", tone: "amber" as const, note: "Exit on 14 Nov" },
  ];
  return (
    <Window title="Assets · Register">
      <div className="space-y-2">
        {assets.map((a) => (
          <div key={a.tag} className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5 text-sm">
            <span className="grid size-9 place-items-center rounded-lg bg-slate-100 text-slate-600"><Icon name="box" className="size-4" /></span>
            <div className="min-w-0 flex-1"><p className="font-medium text-slate-900">{a.name}</p><p className="text-xs text-slate-500">{a.tag} · {a.note}</p></div>
            <span className="hidden text-xs text-slate-600 sm:block">{a.who}</span>
            <Pill tone={a.tone}>{a.status}</Pill>
          </div>
        ))}
      </div>
    </Window>
  );
}

function InsightsVisual() {
  const attendance = [94, 96, 91, 95, 97, 89, 93, 96, 95, 98, 94, 92];
  return (
    <Window title="Insights · Last 12 weeks">
      <div className="grid gap-3 sm:grid-cols-4">
        {[["Headcount", "142", "+6 this quarter"], ["Attendance rate", "94.8%", "+1.2 pts"], ["Attrition", "2.1%", "monthly avg"], ["Payroll cost", "₹6.84L", "October"]].map(([k, v, s]) => <div key={k} className="rounded-xl border border-slate-100 p-3"><p className="text-xs text-slate-500">{k}</p><p className="text-xl font-bold text-slate-900">{v}</p><p className="text-[11px] text-slate-500">{s}</p></div>)}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-[1.6fr_1fr]">
        <div className="rounded-xl border border-slate-100 p-4">
          <p className="text-sm font-semibold text-slate-900">Weekly attendance</p>
          <div className="mt-4 flex h-32 items-end gap-1.5" aria-hidden="true">
            {attendance.map((v, i) => <span key={i} className={`flex-1 rounded-t-md ${i === attendance.length - 1 ? "bg-brand-600" : "bg-brand-200"}`} style={{ height: `${(v - 80) * 5}%` }} />)}
          </div>
        </div>
        <div className="rounded-xl border border-slate-100 p-4">
          <p className="text-sm font-semibold text-slate-900">Late arrivals by weekday</p>
          <ul className="mt-3 space-y-2 text-xs">
            {[["Mon", 80], ["Tue", 35], ["Wed", 30], ["Thu", 40], ["Fri", 55]].map(([d, w]) => <li key={d} className="flex items-center gap-2"><span className="w-8 text-slate-500">{d}</span><span className="h-2 rounded-full bg-amber-400" style={{ width: `${w}%` }} /></li>)}
          </ul>
        </div>
      </div>
    </Window>
  );
}

function AccountingVisual() {
  const entries: [string, string, string][] = [
    ["Salaries & Wages", "7,42,600.00", ""],
    ["Employer PF Contribution", "56,420.00", ""],
    ["PF Payable", "", "1,12,840.00"],
    ["ESI Payable", "", "18,265.00"],
    ["TDS Payable (Salary)", "", "64,930.00"],
    ["Salary Payable", "", "6,02,985.00"],
  ];
  return (
    <div className="relative">
      <Window title="Accounting export · October 2026">
        <div className="flex flex-wrap items-center justify-between gap-2"><p className="font-semibold text-slate-900">Payroll journal voucher</p><Pill tone="green">Balanced</Pill></div>
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-100 text-sm">
          <div className="grid grid-cols-[1fr_6rem_6rem] gap-3 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-500 sm:grid-cols-[1fr_8rem_8rem]"><span>Ledger</span><span className="text-right">Debit</span><span className="text-right">Credit</span></div>
          {entries.map(([ledger, dr, cr]) => <div key={ledger} className="grid grid-cols-[1fr_6rem_6rem] gap-3 border-t border-slate-100 px-3 py-2 tabular-nums sm:grid-cols-[1fr_8rem_8rem]"><span className="truncate text-slate-800">{ledger}</span><span className="text-right text-slate-700">{dr}</span><span className="text-right text-slate-700">{cr}</span></div>)}
          <div className="grid grid-cols-[1fr_6rem_6rem] gap-3 border-t border-slate-200 bg-slate-50 px-3 py-2 font-semibold tabular-nums text-slate-900 sm:grid-cols-[1fr_8rem_8rem]"><span>Total</span><span className="text-right">7,99,020.00</span><span className="text-right">7,99,020.00</span></div>
        </div>
      </Window>
      <Card className="mt-4 sm:absolute sm:-right-4 sm:-top-8 sm:mt-0 sm:w-60">
        <p className="text-sm font-semibold text-slate-900">Export as</p>
        <div className="mt-2 flex flex-wrap gap-2 text-xs">{["Tally XML", "Zoho Books", "QuickBooks CSV", "Excel"].map((f) => <span key={f} className="rounded-lg border border-slate-200 px-2.5 py-1 font-medium text-slate-700">{f}</span>)}</div>
      </Card>
    </div>
  );
}

function DeliveryVisual() {
  return (
    <div className="grid items-center gap-8 md:grid-cols-[auto_1.2fr]">
      <div className="mx-auto w-64 rounded-[2.5rem] border border-slate-800 bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/30">
        <div className="overflow-hidden rounded-[2rem] bg-[#efeae2]">
          <div className="flex items-center gap-2 bg-[#075e54] px-4 pb-3 pt-7 text-white"><BrandMark className="size-7" /><div><p className="text-sm font-semibold">Vetanly · Acme Textiles</p><p className="text-[10px] text-emerald-100">Business account</p></div></div>
          <div className="space-y-3 p-3 pb-6">
            <div className="max-w-[90%] rounded-xl rounded-tl-none bg-white p-3 text-xs text-slate-800 shadow-sm">
              Hi Anaya, your salary slip for October 2026 is ready. Net pay: <b>₹47,580</b>.
              <div className="mt-2 flex items-center gap-2 rounded-lg bg-slate-50 p-2"><span className="grid size-8 place-items-center rounded bg-red-500 text-[9px] font-bold text-white">PDF</span><span className="text-[11px]">Payslip-Oct-2026.pdf</span></div>
              <p className="mt-1 text-right text-[10px] text-slate-500">10:02 ✓✓</p>
            </div>
          </div>
        </div>
      </div>
      <Window title="Messaging · Delivery log">
        <div className="mb-3 flex items-center justify-between rounded-xl bg-brand-50 px-3 py-2 text-sm"><span className="flex items-center gap-2 font-medium text-brand-800"><Icon name="wallet" className="size-4" />Prepaid balance</span><span className="font-bold text-brand-800">₹1,860.40</span></div>
        {[
          { name: "Anaya Das", what: "Payslip · WhatsApp", status: "Read", tone: "green" as const },
          { name: "Samar Khanna", what: "Payslip · Email", status: "Delivered", tone: "green" as const },
          { name: "Ritu Verma", what: "Leave approved · WhatsApp", status: "Delivered", tone: "green" as const },
          { name: "Mita Ghosh", what: "Payslip · WhatsApp", status: "Failed · refunded", tone: "red" as const },
        ].map((m) => <div key={m.name + m.what} className="flex items-center gap-3 border-b border-slate-100 py-2 text-sm last:border-0"><span className="flex-1"><span className="font-medium text-slate-800">{m.name}</span><span className="block text-xs text-slate-500">{m.what}</span></span><Pill tone={m.tone}>{m.status}</Pill></div>)}
      </Window>
    </div>
  );
}

function SelfServiceVisual() {
  const tiles: { icon: "calendar" | "clock" | "wallet" | "receipt" | "shield"; label: string; value: string; sub: string }[] = [
    { icon: "clock", label: "Attendance", value: "22 of 23", sub: "days this month" },
    { icon: "calendar", label: "Leave", value: "9.5 days", sub: "Apply" },
    { icon: "receipt", label: "Claims", value: "₹1,240", sub: "1 pending" },
    { icon: "shield", label: "Tax", value: "80C · 80D", sub: "Declared" },
  ];
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="mx-auto w-72 rounded-[2.5rem] border border-slate-800 bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/30">
        <div className="overflow-hidden rounded-[2rem] bg-slate-50">
          <div className="bg-brand-600 px-5 pb-6 pt-8 text-white"><p className="text-xs text-brand-100">Good morning</p><p className="text-lg font-semibold">Ritu Verma</p><p className="text-[11px] text-brand-100">Next shift · Tue 9:30, Andheri office</p></div>
          <div className="-mt-4 space-y-3 px-4 pb-6">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between"><span className="text-sm font-semibold text-slate-900">October payslip</span><Pill tone="green">Paid</Pill></div>
              <p className="mt-1 text-2xl font-bold text-slate-900">₹38,410</p>
              <span className="mt-3 block rounded-xl bg-slate-900 py-2 text-center text-xs font-semibold text-white">Download PDF</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {tiles.map((t) => (
                <div key={t.label} className="rounded-xl bg-white p-3 shadow-sm">
                  <Icon name={t.icon} className="size-4 text-brand-600" />
                  <p className="mt-1.5 text-[11px] text-slate-500">{t.label}</p>
                  <p className="text-sm font-semibold text-slate-900">{t.value}</p>
                  <p className="text-[10px] text-slate-500">{t.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Card className="mt-4 md:absolute md:right-0 md:top-20 md:mt-0 md:w-56">
        <p className="flex items-center gap-2 text-sm font-semibold text-slate-900"><span className="grid size-6 place-items-center rounded-full bg-emerald-500 text-white"><Check className="size-3.5" /></span>Leave approved</p>
        <p className="mt-1 text-xs text-slate-500">Casual leave · Fri 14 Nov · approved by Samar Khanna</p>
      </Card>
      <Card className="mt-3 md:absolute md:bottom-24 md:left-0 md:mt-0 md:w-56">
        <p className="text-sm font-semibold text-slate-900">Shift swap sent</p>
        <p className="mt-1 text-xs text-slate-500">Thu 20 Nov · Morning ⇄ Evening with Mita</p>
      </Card>
    </div>
  );
}

const VISUALS: Record<string, () => React.ReactElement> = {
  "gps-attendance": GeofenceVisual,
  "attendance-shifts": RosterVisual,
  "leave-holidays": LeaveVisual,
  payroll: PayrollVisual,
  "statutory-compliance": StatutoryVisual,
  "loans-expenses": LoansVisual,
  "bonus-gratuity-settlements": SettlementVisual,
  "employee-management": ProfileVisual,
  "asset-tracking": AssetsVisual,
  "employee-self-service": SelfServiceVisual,
  "hr-insights": InsightsVisual,
  "accounting-export": AccountingVisual,
  "whatsapp-email-delivery": DeliveryVisual,
};

/** The feature's illustration, or null for a feature without one. */
export function FeatureVisual({ slug, name }: { slug: string; name: string }) {
  const Visual = VISUALS[slug];
  if (!Visual) return null;
  return (
    <figure className="m-0" aria-label={`Illustration of ${name} in Vetanly with sample data`}>
      <Visual />
      <figcaption className="mt-12 text-center text-xs text-slate-500">Illustration with sample data</figcaption>
    </figure>
  );
}
