/**
 * Indian payroll rules for the free calculators, FY 2025-26 onward. Amounts are in rupees.
 * Mirrors server/src/services/statutory-calc.ts and settlement-calc.ts (the marketing site builds on its own);
 * change both together when the law changes.
 */

export const PF_WAGE_CEILING = 15_000;
export const ESI_WAGE_CEILING = 21_000;
export const GRATUITY_CAP = 2_000_000;

const rupees = (value: number) => Math.round(value);

/** Gratuity Act: 15 days' wages on a 26-day month per completed year; a part-year over six months counts. Payable after 4 years 240 days. */
export const gratuity = (monthlyBasicPlusDa: number, years: number, months: number, days = 0) => {
  const totalDays = years * 365 + months * 30 + days;
  const countedYears = years + (months >= 6 ? 1 : 0);
  const amount = monthlyBasicPlusDa > 0 ? Math.min(rupees(((monthlyBasicPlusDa * 15) / 26) * countedYears), GRATUITY_CAP) : 0;
  return { eligible: totalDays >= 4 * 365 + 240, countedYears, amount, capped: amount === GRATUITY_CAP };
};

/** EPF on monthly PF wages (basic + DA). `capWages` limits contributions to the ₹15,000 ceiling, as most employers do. */
export const pf = (pfWages: number, capWages = true) => {
  const wages = capWages ? Math.min(pfWages, PF_WAGE_CEILING) : pfWages;
  const epsWages = Math.min(pfWages, PF_WAGE_CEILING);
  const employee = rupees(wages * 0.12);
  const employerShare = rupees(wages * 0.12);
  const eps = Math.min(rupees(epsWages * 0.0833), employerShare);
  const admin = rupees(wages * 0.005);
  const edli = rupees(epsWages * 0.005);
  return { wages: rupees(wages), employee, eps, epf: employerShare - eps, admin, edli, employerCost: employerShare + admin + edli };
};

/** ESI applies while monthly gross is within ₹21,000: 0.75% employee, 3.25% employer, rounded up. */
export const esi = (monthlyGross: number) =>
  monthlyGross > 0 && monthlyGross <= ESI_WAGE_CEILING
    ? { employee: Math.ceil(monthlyGross * 0.0075 - 1e-9), employer: Math.ceil(monthlyGross * 0.0325 - 1e-9) }
    : { employee: 0, employer: 0 };

type PtSlab = { upTo: number; amount: number; februaryAmount?: number };

export const PT_STATES = [
  { code: "MH", name: "Maharashtra" },
  { code: "KA", name: "Karnataka" },
  { code: "WB", name: "West Bengal" },
  { code: "GJ", name: "Gujarat" },
  { code: "TG", name: "Telangana" },
  { code: "AP", name: "Andhra Pradesh" },
] as const;

export type PtState = (typeof PT_STATES)[number]["code"];

export const ptSlabs = (state: PtState, female = false): PtSlab[] => {
  switch (state) {
    case "MH":
      return female
        ? [{ upTo: 25_000, amount: 0 }, { upTo: Infinity, amount: 200, februaryAmount: 300 }]
        : [{ upTo: 7_500, amount: 0 }, { upTo: 10_000, amount: 175 }, { upTo: Infinity, amount: 200, februaryAmount: 300 }];
    case "KA":
      return [{ upTo: 24_999, amount: 0 }, { upTo: Infinity, amount: 200 }];
    case "WB":
      return [{ upTo: 10_000, amount: 0 }, { upTo: 15_000, amount: 110 }, { upTo: 25_000, amount: 130 }, { upTo: 40_000, amount: 150 }, { upTo: Infinity, amount: 200 }];
    case "GJ":
      return [{ upTo: 12_000, amount: 0 }, { upTo: Infinity, amount: 200 }];
    case "TG":
    case "AP":
      return [{ upTo: 15_000, amount: 0 }, { upTo: 20_000, amount: 150 }, { upTo: Infinity, amount: 200 }];
  }
};

/** Monthly professional tax and the year's total (February is higher in Maharashtra). */
export const professionalTax = (monthlyGross: number, state: PtState, female = false) => {
  const slab = ptSlabs(state, female).find((item) => monthlyGross <= item.upTo);
  const monthly = monthlyGross > 0 && slab ? slab.amount : 0;
  const february = monthlyGross > 0 && slab ? (slab.februaryAmount ?? slab.amount) : 0;
  return { monthly, february, yearly: monthly * 11 + february };
};

export type TaxRegime = "new" | "old";
type TaxSlab = { upTo: number; rate: number };

const NEW_SLABS: TaxSlab[] = [
  { upTo: 400_000, rate: 0 },
  { upTo: 800_000, rate: 5 },
  { upTo: 1_200_000, rate: 10 },
  { upTo: 1_600_000, rate: 15 },
  { upTo: 2_000_000, rate: 20 },
  { upTo: 2_400_000, rate: 25 },
  { upTo: Infinity, rate: 30 },
];
const OLD_SLABS: TaxSlab[] = [
  { upTo: 250_000, rate: 0 },
  { upTo: 500_000, rate: 5 },
  { upTo: 1_000_000, rate: 20 },
  { upTo: Infinity, rate: 30 },
];

const slabTax = (income: number, slabs: TaxSlab[]) => {
  let tax = 0;
  let lower = 0;
  for (const slab of slabs) {
    if (income > lower) tax += ((Math.min(income, slab.upTo) - lower) * slab.rate) / 100;
    lower = slab.upTo;
  }
  return tax;
};

export const STANDARD_DEDUCTION: Record<TaxRegime, number> = { new: 75_000, old: 50_000 };

/** Annual income tax on salary with the 87A rebate (marginal relief in the new regime) and 4% cess. No surcharge above ₹50 lakh. */
export const annualTax = (grossSalary: number, regime: TaxRegime, professionalTaxYear = 0, otherDeductions = 0) => {
  const deductions = regime === "old" ? STANDARD_DEDUCTION.old + professionalTaxYear + Math.max(otherDeductions, 0) : STANDARD_DEDUCTION.new;
  const taxable = Math.max(grossSalary - deductions, 0);
  let tax = slabTax(taxable, regime === "new" ? NEW_SLABS : OLD_SLABS);
  if (regime === "new") tax = taxable <= 1_200_000 ? 0 : Math.min(tax, taxable - 1_200_000);
  else if (taxable <= 500_000) tax = 0;
  return { taxable, tax: rupees(tax * 1.04) };
};

/**
 * Monthly in-hand pay from annual CTC. Basic is a share of CTC, employer PF is part of CTC, the rest is allowances.
 * shortcut: ignores HRA exemption, gratuity in CTC and variable pay; add inputs if visitors ask for them.
 */
export const inHandSalary = (input: { annualCtc: number; basicPercent: number; regime: TaxRegime; state: PtState | null; pfOn: boolean; otherDeductions?: number }) => {
  const monthlyCtc = input.annualCtc / 12;
  const basic = (monthlyCtc * input.basicPercent) / 100;
  const pfPart = input.pfOn ? pf(basic) : null;
  const employerPf = pfPart ? pfPart.employerCost : 0;
  const gross = monthlyCtc - employerPf;
  const esiPart = esi(gross);
  const grossAfterEsi = gross - esiPart.employer;
  const pt = input.state ? professionalTax(grossAfterEsi, input.state) : { monthly: 0, yearly: 0 };
  const tax = annualTax(grossAfterEsi * 12, input.regime, pt.yearly, input.otherDeductions ?? 0);
  const employeePf = pfPart ? pfPart.employee : 0;
  const tds = rupees(tax.tax / 12);
  return {
    gross: rupees(grossAfterEsi),
    employeePf,
    employerPf,
    esiEmployee: esiPart.employee,
    esiEmployer: esiPart.employer,
    professionalTax: pt.monthly,
    tds,
    annualTax: tax.tax,
    inHand: rupees(grossAfterEsi - employeePf - esiPart.employee - pt.monthly - tds),
  };
};
