"use client";

import { useState } from "react";

import { gratuity, inHandSalary, pf, professionalTax, PT_STATES, type PtState, type TaxRegime } from "@/lib/payroll-rules";

const inr = (value: number) => `₹${Math.round(value).toLocaleString("en-IN")}`;
const inputClass = "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-slate-950 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

function NumberField({ label, value, onChange, min = 0, max, suffix }: { label: string; value: number; onChange: (value: number) => void; min?: number; max?: number; suffix?: string }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      {suffix && <span className="font-normal text-slate-500"> ({suffix})</span>}
      <input type="number" inputMode="numeric" min={min} max={max} value={Number.isFinite(value) ? value : ""} onChange={(event) => onChange(Math.max(min, Number(event.target.value) || 0))} className={inputClass} />
    </label>
  );
}

function StateField({ value, onChange }: { value: PtState; onChange: (value: PtState) => void }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      State
      <select value={value} onChange={(event) => onChange(event.target.value as PtState)} className={inputClass}>
        {PT_STATES.map((state) => <option key={state.code} value={state.code}>{state.name}</option>)}
      </select>
    </label>
  );
}

function Shell({ inputs, children }: { inputs: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-900/5 sm:p-8 lg:grid-cols-2">
      <div className="space-y-5">{inputs}</div>
      <div className="rounded-2xl bg-slate-50 p-6" aria-live="polite">{children}</div>
    </div>
  );
}

function Rows({ total, rows }: { total: { label: string; value: string }; rows: { label: string; value: string }[] }) {
  return (
    <>
      <p className="text-sm font-medium text-slate-600">{total.label}</p>
      <p className="mt-1 text-4xl font-bold tracking-tight text-brand-700">{total.value}</p>
      <dl className="mt-6 divide-y divide-slate-200 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between gap-4 py-2.5">
            <dt className="text-slate-600">{row.label}</dt>
            <dd className="font-semibold text-slate-900">{row.value}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}

export function InHandSalaryCalculator() {
  const [ctc, setCtc] = useState(600_000);
  const [basicPercent, setBasicPercent] = useState(50);
  const [regime, setRegime] = useState<TaxRegime>("new");
  const [state, setState] = useState<PtState>("MH");
  const [pfOn, setPfOn] = useState(true);
  const [deductions, setDeductions] = useState(150_000);
  const pay = inHandSalary({ annualCtc: ctc, basicPercent, regime, state, pfOn, otherDeductions: deductions });
  return (
    <Shell
      inputs={
        <>
          <NumberField label="Annual CTC" suffix="₹" value={ctc} onChange={setCtc} />
          <NumberField label="Basic pay" suffix="% of CTC" value={basicPercent} onChange={(v) => setBasicPercent(Math.min(v, 100))} max={100} />
          <StateField value={state} onChange={setState} />
          <fieldset>
            <legend className="text-sm font-medium text-slate-700">Tax regime</legend>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              {(["new", "old"] as const).map((option) => (
                <button key={option} type="button" aria-pressed={regime === option} onClick={() => setRegime(option)} className={`rounded-xl border px-3 py-2.5 text-sm font-semibold ${regime === option ? "border-brand-600 bg-brand-50 text-brand-700" : "border-slate-300 text-slate-700"}`}>
                  {option === "new" ? "New regime" : "Old regime"}
                </button>
              ))}
            </div>
          </fieldset>
          {regime === "old" && <NumberField label="Deductions such as 80C, 80D, HRA" suffix="₹ a year" value={deductions} onChange={setDeductions} />}
          <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
            <input type="checkbox" checked={pfOn} onChange={(event) => setPfOn(event.target.checked)} className="size-4 accent-brand-600" />
            PF deducted
          </label>
        </>
      }
    >
      <Rows
        total={{ label: "Monthly in-hand salary", value: inr(pay.inHand) }}
        rows={[
          { label: "Gross monthly pay", value: inr(pay.gross) },
          { label: "Employee PF", value: `− ${inr(pay.employeePf)}` },
          { label: "Employee ESI", value: `− ${inr(pay.esiEmployee)}` },
          { label: "Professional tax", value: `− ${inr(pay.professionalTax)}` },
          { label: "Income tax (TDS)", value: `− ${inr(pay.tds)}` },
          { label: "Employer PF (in CTC)", value: inr(pay.employerPf) },
          { label: "Income tax for the year", value: inr(pay.annualTax) },
        ]}
      />
    </Shell>
  );
}

export function GratuityCalculator() {
  const [basic, setBasic] = useState(30_000);
  const [years, setYears] = useState(6);
  const [months, setMonths] = useState(7);
  const result = gratuity(basic, years, months);
  return (
    <Shell
      inputs={
        <>
          <NumberField label="Last drawn basic + DA" suffix="₹ a month" value={basic} onChange={setBasic} />
          <div className="grid grid-cols-2 gap-4">
            <NumberField label="Years of service" value={years} onChange={setYears} />
            <NumberField label="Extra months" value={months} onChange={(v) => setMonths(Math.min(v, 11))} max={11} />
          </div>
        </>
      }
    >
      <Rows
        total={{ label: result.eligible ? "Gratuity payable" : "Gratuity earned so far (not yet payable)", value: inr(result.amount) }}
        rows={[
          { label: "Years counted", value: String(result.countedYears) },
          { label: "Formula", value: `${inr(basic)} × 15 ÷ 26 × ${result.countedYears}` },
          { label: "Eligible (5 years' service)", value: result.eligible ? "Yes" : "Not yet" },
          ...(result.capped ? [{ label: "Limited to the cap", value: "₹20,00,000" }] : []),
        ]}
      />
    </Shell>
  );
}

export function PfCalculator() {
  const [wages, setWages] = useState(25_000);
  const [capped, setCapped] = useState(true);
  const result = pf(wages, capped);
  return (
    <Shell
      inputs={
        <>
          <NumberField label="Basic + DA" suffix="₹ a month" value={wages} onChange={setWages} />
          <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
            <input type="checkbox" checked={capped} onChange={(event) => setCapped(event.target.checked)} className="size-4 accent-brand-600" />
            Limit contributions to the ₹15,000 wage ceiling
          </label>
        </>
      }
    >
      <Rows
        total={{ label: "Total into PF each month", value: inr(result.employee + result.eps + result.epf) }}
        rows={[
          { label: "PF wages", value: inr(result.wages) },
          { label: "Employee PF (12%)", value: inr(result.employee) },
          { label: "Employer EPF", value: inr(result.epf) },
          { label: "Employer EPS (8.33%)", value: inr(result.eps) },
          { label: "Admin charges (0.5%)", value: inr(result.admin) },
          { label: "EDLI (0.5%)", value: inr(result.edli) },
          { label: "Employer's total cost", value: inr(result.employerCost) },
        ]}
      />
    </Shell>
  );
}

export function ProfessionalTaxCalculator() {
  const [gross, setGross] = useState(30_000);
  const [state, setState] = useState<PtState>("MH");
  const [female, setFemale] = useState(false);
  const result = professionalTax(gross, state, female);
  return (
    <Shell
      inputs={
        <>
          <StateField value={state} onChange={setState} />
          <NumberField label="Monthly gross salary" suffix="₹" value={gross} onChange={setGross} />
          {state === "MH" && (
            <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
              <input type="checkbox" checked={female} onChange={(event) => setFemale(event.target.checked)} className="size-4 accent-brand-600" />
              Woman employee
            </label>
          )}
        </>
      }
    >
      <Rows
        total={{ label: "Professional tax each month", value: inr(result.monthly) }}
        rows={[
          { label: "February", value: inr(result.february) },
          { label: "For the year", value: inr(result.yearly) },
        ]}
      />
    </Shell>
  );
}
