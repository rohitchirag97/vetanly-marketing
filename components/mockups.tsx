import { BrandMark, Check, Icon } from "@/components/icons";

/** A kiosk tablet recognising an employee. Sample data only. */
export function FaceKioskMockup({ compact }: { compact?: boolean }) {
  return (
    <div className={`relative mx-auto w-full ${compact ? "max-w-sm" : "max-w-md"}`} aria-label="Illustration of the Vetanly face recognition kiosk with sample data">
      <div className="rounded-[2.2rem] border border-slate-800 bg-slate-900 p-3 shadow-2xl shadow-brand-900/30">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-linear-to-b from-slate-800 to-slate-950 px-6 pb-6 pt-5">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5"><BrandMark className="size-4" /> Main gate kiosk</span>
            <span>09:02 AM</span>
          </div>
          <div className="relative mx-auto mt-6 aspect-square w-3/4">
            <div className="absolute inset-0 rounded-full bg-linear-to-b from-brand-500/20 to-brand-700/10" />
            <svg viewBox="0 0 200 200" className="absolute inset-0 size-full text-slate-300/80" aria-hidden="true">
              <circle cx="100" cy="82" r="38" fill="currentColor" opacity=".35" />
              <path d="M40 182c6-38 30-58 60-58s54 20 60 58" fill="currentColor" opacity=".35" />
            </svg>
            {/* Face landmarks */}
            <div className="absolute inset-[18%] rounded-[45%] border-2 border-brand-400/80 kiosk-pulse" />
            {["left-[30%] top-[38%]", "right-[30%] top-[38%]", "left-1/2 top-[52%] -translate-x-1/2", "left-[38%] top-[62%]", "right-[38%] top-[62%]"].map((pos) => (
              <span key={pos} className={`absolute size-1.5 rounded-full bg-brand-300 ${pos}`} />
            ))}
            <span className="kiosk-scan absolute inset-x-[12%] h-0.5 rounded-full bg-linear-to-r from-transparent via-brand-400 to-transparent shadow-[0_0_18px_4px_rgba(155,137,255,.6)]" />
            {["left-0 top-0 border-l-2 border-t-2 rounded-tl-2xl", "right-0 top-0 border-r-2 border-t-2 rounded-tr-2xl", "left-0 bottom-0 border-l-2 border-b-2 rounded-bl-2xl", "right-0 bottom-0 border-r-2 border-b-2 rounded-br-2xl"].map((corner) => (
              <span key={corner} className={`absolute size-8 border-brand-400 ${corner}`} />
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-emerald-500/15 p-4 ring-1 ring-emerald-400/30">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-emerald-500 text-white"><Check /></span>
              <div>
                <p className="text-sm font-semibold text-white">Welcome, Anaya Das</p>
                <p className="text-xs text-emerald-200">Checked in · Morning shift · on time</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
              <span className="rounded-lg bg-white/5 py-1.5 text-slate-300">Match <b className="block text-sm text-white">96%</b></span>
              <span className="rounded-lg bg-white/5 py-1.5 text-slate-300">Liveness <b className="block text-sm text-emerald-300">Passed</b></span>
              <span className="rounded-lg bg-white/5 py-1.5 text-slate-300">Shift <b className="block text-sm text-white">09:30</b></span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-slate-400">Illustration with sample data</p>
    </div>
  );
}

const rows = [
  { name: "Anaya Das", initials: "AD", time: "09:02", how: "Face kiosk", status: "Present", tone: "bg-emerald-100 text-emerald-700" },
  { name: "Samar Khanna", initials: "SK", time: "09:21", how: "Face kiosk", status: "Late 6m", tone: "bg-amber-100 text-amber-700" },
  { name: "Ritu Verma", initials: "RV", time: "09:05", how: "GPS · 42 m", status: "Present", tone: "bg-emerald-100 text-emerald-700" },
  { name: "Mita Ghosh", initials: "MG", time: "—", how: "—", status: "On leave", tone: "bg-violet-100 text-violet-800" },
];

/** The dashboard with today's attendance. Sample data only. */
export function DashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10" aria-label="Illustration of the Vetanly dashboard with sample data">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-red-300" /><span className="size-2.5 rounded-full bg-amber-300" /><span className="size-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 text-xs text-slate-400">app.vetanly · Dashboard</span>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-3">
        {[
          { label: "Present today", value: "128", sub: "of 142", icon: "users" as const },
          { label: "Late arrivals", value: "6", sub: "avg 9 min", icon: "clock" as const },
          { label: "Payroll draft", value: "₹6.84L", sub: "October", icon: "wallet" as const },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-slate-100 p-3">
            <div className="flex items-center justify-between text-xs text-slate-500">{stat.label}<Icon name={stat.icon} className="size-4 text-brand-500" /></div>
            <p className="mt-1 text-xl font-bold text-slate-900">{stat.value} <span className="text-xs font-normal text-slate-400">{stat.sub}</span></p>
          </div>
        ))}
      </div>
      <div className="px-5 pb-5">
        <div className="overflow-hidden rounded-xl border border-slate-100">
          {rows.map((row) => (
            <div key={row.name} className="flex items-center gap-3 border-b border-slate-100 px-3 py-2.5 text-sm last:border-0">
              <span className="grid size-8 place-items-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">{row.initials}</span>
              <span className="flex-1 font-medium text-slate-800">{row.name}</span>
              <span className="hidden w-24 text-xs text-slate-500 sm:block">{row.how}</span>
              <span className="w-12 text-xs text-slate-500">{row.time}</span>
              <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${row.tone}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** A salary slip. Sample data only. */
export function PayslipMockup() {
  const lines: [string, string][] = [["Basic", "30,000"], ["HRA", "12,000"], ["Overtime (6 h)", "1,730"], ["Bonus 2025-26", "7,000"]];
  const deductions: [string, string][] = [["Provident fund", "1,800"], ["ESI", "0"], ["Professional tax", "200"], ["Income tax (TDS)", "1,150"]];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-2xl shadow-slate-900/10" aria-label="Illustration of a salary slip with sample data">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div><p className="font-semibold text-slate-900">Salary slip · October</p><p className="text-xs text-slate-500">Anaya Das · EMP-014</p></div>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">Finalized</span>
      </div>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        <div>{lines.map(([k, v]) => <p key={k} className="flex justify-between py-1 text-slate-600"><span>{k}</span><span className="text-slate-900">₹{v}</span></p>)}</div>
        <div>{deductions.map(([k, v]) => <p key={k} className="flex justify-between py-1 text-slate-600"><span>{k}</span><span className="text-slate-900">₹{v}</span></p>)}</div>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-brand-600 px-4 py-3 text-white">
        <span className="font-medium">Net pay</span><span className="text-lg font-bold">₹47,580</span>
      </div>
      <div className="mt-3 flex gap-2 text-xs">
        <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700"><Icon name="message" className="size-3.5" /> Delivered on WhatsApp</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">PDF</span>
      </div>
    </div>
  );
}

/** Phone with GPS check-in. Sample data only. */
export function PhoneMockup() {
  return (
    <div className="mx-auto w-64 rounded-[2.5rem] border border-slate-800 bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/30" aria-label="Illustration of GPS check-in on a phone with sample data">
      <div className="overflow-hidden rounded-[2rem] bg-slate-50">
        <div className="bg-brand-600 px-5 pb-6 pt-8 text-white">
          <p className="text-xs text-brand-100">Good morning</p>
          <p className="text-lg font-semibold">Ritu</p>
        </div>
        <div className="-mt-4 space-y-3 px-4 pb-6">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900"><Icon name="pin" className="size-4 text-emerald-600" /> Andheri office</div>
            <p className="mt-1 text-xs text-slate-500">You are 42 m away · inside the 200 m area</p>
            <span className="mt-3 block rounded-xl bg-slate-900 py-2.5 text-center text-sm font-semibold text-white">Check in</span>
          </div>
          {[["Leave balance", "9.5 days"], ["Last payslip", "₹38,410"], ["Next shift", "Tue · 9:30"]].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-xs shadow-sm">
              <span className="text-slate-500">{k}</span><span className="font-semibold text-slate-900">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
