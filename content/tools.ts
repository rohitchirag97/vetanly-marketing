import type { IconName } from "@/content/features";

export type Tool = {
  slug: string;
  name: string;
  /** At most 51 characters so " | Vetanly" fits in 60. */
  seoTitle: string;
  /** At most 155 characters. */
  seoDescription: string;
  icon: IconName;
  headline: string;
  intro: string;
  /** How the result is worked out, shown under the calculator. */
  method: string[];
  faqs: { q: string; a: string }[];
  /** The feature page that does this automatically. */
  feature: string;
};

export const TOOLS: Tool[] = [
  {
    slug: "in-hand-salary-calculator",
    name: "In-hand salary calculator",
    seoTitle: "In-Hand Salary Calculator India: CTC to Take-Home",
    seoDescription: "Free in-hand salary calculator for India. Enter CTC to see monthly take-home after PF, ESI, professional tax and TDS under the new or old tax regime.",
    icon: "wallet",
    headline: "What your CTC actually pays each month.",
    intro: "Enter an annual CTC and see the monthly take-home after PF, ESI, professional tax and income tax, under the new or old regime.",
    method: [
      "Monthly CTC is the annual CTC divided by 12. Basic pay is the share of CTC you choose (40–50% is common).",
      "Employer PF (12% of basic up to ₹15,000, plus 0.5% admin and 0.5% EDLI) is part of CTC, so it comes off before gross pay.",
      "ESI applies only when monthly gross is ₹21,000 or less: 0.75% from the employee, 3.25% from the employer.",
      "Professional tax uses the state's monthly slab. Income tax is the year's tax after the standard deduction (₹75,000 new, ₹50,000 old), the 87A rebate and 4% cess, spread over 12 months.",
      "HRA exemption, variable pay and gratuity inside CTC are not included, so treat the result as an estimate.",
    ],
    faqs: [
      { q: "How do I calculate in-hand salary from CTC?", a: "Take the monthly CTC, remove the employer's PF and ESI contributions to get gross pay, then subtract the employee's PF, ESI, professional tax and monthly income tax. What remains is the in-hand salary." },
      { q: "Is income tax nil up to ₹12 lakh in the new regime?", a: "Yes, from FY 2025-26 the section 87A rebate makes tax nil when taxable income is up to ₹12 lakh. With the ₹75,000 standard deduction, a salary of up to ₹12.75 lakh pays no tax under the new regime." },
      { q: "Why is my in-hand lower than CTC divided by 12?", a: "CTC includes the employer's PF and sometimes ESI and gratuity, which are never paid to you monthly. Your own PF, ESI, professional tax and TDS are then deducted from gross pay." },
      { q: "Which tax regime should I choose?", a: "The new regime has lower rates but few deductions. The old regime can work out better if you claim large deductions such as 80C, 80D, HRA and home-loan interest. Try both in the calculator with your deductions." },
    ],
    feature: "payroll",
  },
  {
    slug: "gratuity-calculator",
    name: "Gratuity calculator",
    seoTitle: "Gratuity Calculator India: Formula & Eligibility",
    seoDescription: "Free gratuity calculator under the Payment of Gratuity Act. Enter basic pay plus DA and years of service to see gratuity, eligibility and the ₹20 lakh cap.",
    icon: "gift",
    headline: "Gratuity in seconds, the way the Act works it out.",
    intro: "Enter the last drawn basic pay plus DA and the length of service to see the gratuity payable under the Payment of Gratuity Act, 1972.",
    method: [
      "Gratuity = last drawn (basic + DA) × 15 ÷ 26 × completed years of service.",
      "A part year of more than six months counts as a full year: 6 years 7 months counts as 7 years.",
      "It becomes payable after 5 years of continuous service. Courts have held that 4 years and 240 days counts as 5 years.",
      "The tax-free and statutory maximum is ₹20 lakh.",
    ],
    faqs: [
      { q: "What is the gratuity formula?", a: "For employers covered by the Act: last drawn basic + DA × 15/26 × years of service. The 26 is the working days in a month and 15 is the days of wages per year of service." },
      { q: "Am I eligible for gratuity before 5 years?", a: "Gratuity is payable after 5 years of continuous service. Several High Courts have held that 4 years and 240 days of service counts as 5 years. The 5-year condition does not apply on death or disablement." },
      { q: "How are months of service rounded?", a: "Service of more than six months in the final year is rounded up to a full year. Six months or less is ignored." },
      { q: "Is there a maximum gratuity?", a: "Yes. The ceiling under the Act is ₹20 lakh, which is also the limit for tax exemption." },
    ],
    feature: "bonus-gratuity-settlements",
  },
  {
    slug: "pf-calculator",
    name: "PF calculator",
    seoTitle: "PF Calculator: Employee & Employer EPF and EPS",
    seoDescription: "Free EPF calculator. See the employee's 12% PF, the employer's EPF and EPS split, admin charges and EDLI on any basic pay, with the ₹15,000 wage ceiling.",
    icon: "shield",
    headline: "See exactly where every PF rupee goes.",
    intro: "Enter monthly basic pay plus DA to see the employee's PF, how the employer's 12% splits between EPF and EPS, and the admin and EDLI charges.",
    method: [
      "Employee PF is 12% of PF wages (basic + DA).",
      "The employer also pays 12%: 8.33% of wages up to ₹15,000 goes to the pension scheme (EPS, at most ₹1,250 a month) and the rest to EPF.",
      "The employer pays 0.5% admin charges and 0.5% EDLI insurance on top.",
      "Most employers contribute on wages capped at ₹15,000. Untick the cap to contribute on full basic.",
    ],
    faqs: [
      { q: "How is PF calculated?", a: "12% of basic + DA is deducted from the employee and the employer adds another 12%. Of the employer's share, 8.33% (on wages up to ₹15,000) goes to EPS and the remainder to EPF." },
      { q: "What is the PF wage ceiling?", a: "₹15,000 a month. Contributions above it are optional for the employer, and EPS is always worked out on wages up to ₹15,000." },
      { q: "Is PF mandatory?", a: "PF is mandatory for establishments with 20 or more employees, and for employees earning up to ₹15,000 a month in basic + DA. Higher earners who were not members earlier can opt out." },
      { q: "What are admin charges and EDLI?", a: "The employer pays 0.5% of PF wages as EPF admin charges and 0.5% (on wages up to ₹15,000) for EDLI, the employees' deposit-linked insurance." },
    ],
    feature: "statutory-compliance",
  },
  {
    slug: "professional-tax-calculator",
    name: "Professional tax calculator",
    seoTitle: "Professional Tax Calculator & Slabs by State",
    seoDescription: "Free professional tax calculator with current PT slabs for Maharashtra, Karnataka, West Bengal, Gujarat, Telangana and Andhra Pradesh.",
    icon: "pin",
    headline: "Professional tax for your state, month by month.",
    intro: "Pick a state and enter monthly gross salary to see the professional tax to deduct each month and for the year.",
    method: [
      "Professional tax is set by each state as monthly slabs on gross salary.",
      "Maharashtra charges ₹300 in February instead of ₹200, so the year totals ₹2,500. Women earning up to ₹25,000 a month pay nothing there.",
      "No state can charge more than ₹2,500 a year.",
      "Slabs change from time to time; check your state's latest notification before filing.",
    ],
    faqs: [
      { q: "What is professional tax?", a: "A state tax on salaries and professions, deducted by the employer every month and paid to the state. The Constitution caps it at ₹2,500 a year." },
      { q: "Which states have no professional tax?", a: "Several states and union territories, including Delhi, Haryana, Rajasthan and Uttar Pradesh, do not levy it on salaries. Check your state's current rules." },
      { q: "Is professional tax deductible from income tax?", a: "Yes, under the old tax regime, professional tax paid is deductible from salary income. The new regime does not allow it." },
      { q: "Why is February's PT different in Maharashtra?", a: "Maharashtra charges ₹200 for eleven months and ₹300 in February, which brings the year's total to the ₹2,500 limit." },
    ],
    feature: "statutory-compliance",
  },
];

export const toolBySlug = (slug: string) => TOOLS.find((tool) => tool.slug === slug);
