/**
 * "Alternative" pages. Competitor statements describe only how each vendor positions itself on its own public website;
 * every concrete capability claim is about Vetanly. Re-check before `checked` is a year old.
 */
export type Comparison = {
  slug: string;
  competitor: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  /** How the competitor describes itself, in neutral terms. */
  theirFocus: string[];
  /** When the competitor is likely the better pick: keeps the page honest and useful. */
  chooseThemIf: string[];
  chooseVetanlyIf: string[];
  faqs: { q: string; a: string }[];
  checked: string;
};

const sharedVetanly = [
  "You want face-recognition kiosks with a liveness check and attendance feeding straight into payroll",
  "You need full Indian payroll in the same tool: PF with ECR export, ESI, state professional tax, TDS under both regimes and Form 16 Part B",
  "You run branches and want branch managers to see only their own people",
  "You want bonus, gratuity and full and final settlements calculated for you",
  "You want one price per employee with every feature included",
];

export const COMPARISONS: Comparison[] = [
  {
    slug: "truein-alternative",
    competitor: "Truein",
    seoTitle: "Truein Alternative: Face Attendance + Payroll",
    seoDescription: "Looking for a Truein alternative? Vetanly pairs face-recognition attendance kiosks with full Indian payroll, PF, ESI, PT and TDS, at one price per employee.",
    headline: "Face attendance and payroll, in one place.",
    intro: "Truein is known for face-recognition attendance. If you want that same touch-free check-in plus Indian payroll, compliance and HR in the same system, here is how Vetanly fits.",
    theirFocus: [
      "Face-recognition attendance on phones and tablets",
      "Positioned for contract and multi-site workforces",
      "Location verification and offline punches that sync later",
    ],
    chooseThemIf: [
      "You only need attendance and already have payroll software you are happy with",
      "Your workforce is mainly contract labour across many short-lived sites",
    ],
    chooseVetanlyIf: sharedVetanly,
    faqs: [
      { q: "Is Vetanly a Truein alternative?", a: "Yes, for businesses that want face-recognition attendance and Indian payroll in one product. Vetanly kiosks verify each face (with optional liveness) and the attendance flows directly into payroll, PF, ESI, PT and TDS." },
      { q: "Do I need special hardware for Vetanly's face attendance?", a: "No. A tablet running the Vetanly kiosk app at each entrance is enough, and field staff can use GPS check-in from their phones." },
      { q: "Can I move my employee data to Vetanly?", a: "Yes. Employees can be added in bulk from an Excel sheet, and we help with imports for larger teams." },
    ],
    checked: "October 2026",
  },
  {
    slug: "pagarbook-alternative",
    competitor: "PagarBook",
    seoTitle: "PagarBook Alternative for Growing Businesses",
    seoDescription: "Outgrowing PagarBook? Vetanly adds face kiosks with liveness, branch-wise access, TDS and Form 16, settlements and accounting export to attendance and payroll.",
    headline: "For when the staff register has grown up.",
    intro: "PagarBook is popular with shops and small businesses moving off paper registers. When you add branches, shifts and full statutory payroll, Vetanly is built for that next stage.",
    theirFocus: [
      "Simple staff attendance and salary for very small businesses",
      "Selfie, face and location-based attendance from the phone",
      "Basic payroll with overtime, advances and deductions",
    ],
    chooseThemIf: [
      "You have a handful of staff and need the simplest possible daily register",
      "You do not deduct TDS or need Form 16 for your employees",
    ],
    chooseVetanlyIf: [...sharedVetanly, "You want payroll journals exported to Tally, Zoho Books or QuickBooks"],
    faqs: [
      { q: "Is Vetanly a PagarBook alternative?", a: "Yes. Vetanly covers daily attendance and salary like PagarBook, and adds face kiosks with liveness, multi-branch access, rotating shifts, TDS with tax declarations, Form 16 Part B, settlements and accounting export." },
      { q: "Does Vetanly work for small teams?", a: "Yes. Pricing is per active employee with every feature included, so a small team pays only for its own headcount." },
      { q: "Can employees see their payslips?", a: "Yes. Employees sign in on their phone to see attendance, leave, payslips, loans and claims, and payslips can also be sent on WhatsApp or email." },
    ],
    checked: "October 2026",
  },
  {
    slug: "salarybox-alternative",
    competitor: "Salarybox",
    seoTitle: "Salarybox Alternative: Attendance & Payroll",
    seoDescription: "Comparing Salarybox alternatives? Vetanly combines face-recognition kiosks, GPS check-in, shifts and Indian payroll with PF, ESI, PT, TDS and Form 16.",
    headline: "Verified attendance, compliant payroll.",
    intro: "Salarybox positions itself as attendance and payroll for small and growing businesses. Vetanly covers the same ground with face-recognition kiosks, deeper compliance and settlements built in.",
    theirFocus: [
      "Attendance and payroll for small and medium businesses",
      "Mobile, geofenced and biometric-device attendance",
      "PF, ESI and PT on payroll, with payslips",
    ],
    chooseThemIf: [
      "You already use fingerprint biometric devices and want to keep them",
      "You prefer their mobile app and are happy with its payroll coverage",
    ],
    chooseVetanlyIf: sharedVetanly,
    faqs: [
      { q: "Is Vetanly a Salarybox alternative?", a: "Yes. Vetanly covers attendance, shifts, leave and payroll, adds touch-free face kiosks with liveness, and includes TDS under both regimes, Form 16 Part B, bonus, gratuity and full and final settlements." },
      { q: "Does Vetanly support GPS attendance?", a: "Yes. Employees without a kiosk can check in from their phone, and the punch is accepted only inside the branch's geofence." },
      { q: "How much does Vetanly cost?", a: "One price per active employee per month with every feature included and a free trial. See the pricing page for current rates." },
    ],
    checked: "October 2026",
  },
];

export const comparisonBySlug = (slug: string) => COMPARISONS.find((comparison) => comparison.slug === slug);
