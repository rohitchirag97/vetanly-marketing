export type Guide = {
  slug: string;
  title: string;
  /** At most 51 characters. */
  seoTitle: string;
  /** At most 155 characters. */
  seoDescription: string;
  summary: string;
  published: string;
  updated: string;
  sections: { heading: string; paragraphs: string[]; link?: { href: string; label: string } }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "how-to-stop-buddy-punching",
    title: "How to stop buddy punching and proxy attendance",
    seoTitle: "How to Stop Buddy Punching & Proxy Attendance",
    seoDescription: "Buddy punching quietly inflates payroll. Learn why registers, cards and PINs fail, and how face recognition with liveness and geofencing stops proxy attendance.",
    summary: "Why registers, cards and PINs let proxy attendance through, and the checks that actually stop it.",
    published: "2026-10-21",
    updated: "2026-10-21",
    sections: [
      {
        heading: "What buddy punching is and why it matters",
        paragraphs: [
          "Buddy punching is when one employee marks attendance for another who is late or absent. In Indian workplaces it is often called proxy attendance. It is rarely dramatic: a friend signs the register, swipes a second card or types a colleague's PIN.",
          "Because payroll is worked out from attendance, every proxy punch becomes a day's wage, overtime or a missed late-mark fine paid for time nobody worked. Across a shift floor of a few hundred people, small daily gaps add up to a real share of the wage bill, and they also hide who is actually on site in an emergency.",
        ],
      },
      {
        heading: "Why registers, cards and PINs do not stop it",
        paragraphs: [
          "Paper registers and Excel sheets record what someone writes, not who was there. Swipe cards and PINs prove that a card or a code was used, which anyone holding it can do.",
          "Fingerprint devices are better, but they need contact, slow down queues at shift change and can be fooled by worn or moulded prints. The common thread is that the method checks something the employee has or knows, not the employee.",
        ],
      },
      {
        heading: "Verify the person, not the token",
        paragraphs: [
          "Face recognition checks the person standing at the kiosk against their own enrolled face. A good system stores the match score with each punch so you can see how confident every check-in was, and lets you set a stricter match threshold at a high-security gate.",
          "The weak point of basic face matching is a photo held up to the camera. A liveness check closes that gap by refusing a printed photo or a phone screen. Turn it on at every kiosk where proxy attendance has been a problem.",
        ],
        link: { href: "/features/face-recognition-attendance", label: "See how Vetanly's face kiosks work" },
      },
      {
        heading: "Cover people who are not at the gate",
        paragraphs: [
          "Field staff and small branches without a kiosk still need honest attendance. Phone check-in with a geofence accepts a punch only inside the branch's radius and records the location and distance with it, so a check-in from home is refused.",
        ],
        link: { href: "/features/gps-attendance", label: "GPS check-in with geofencing" },
      },
      {
        heading: "Close the loop in payroll",
        paragraphs: [
          "Verification matters most when it feeds pay directly. When kiosk and GPS punches flow straight into the attendance register and payroll, there is no retyping step where a day can be added by hand. Keep a correction workflow for genuine misses, with a manager's approval, so exceptions are visible rather than quietly edited.",
          "Finally, review the patterns: repeated late arrivals, punches at unusual times or one kiosk with many low match scores are worth a look.",
        ],
      },
    ],
  },
  {
    slug: "gratuity-calculation-formula",
    title: "Gratuity calculation in India: formula, eligibility and examples",
    seoTitle: "Gratuity Calculation Formula with Examples",
    seoDescription: "How gratuity is calculated under the Payment of Gratuity Act: the 15/26 formula, 5-year eligibility, rounding of months, the ₹20 lakh cap and worked examples.",
    summary: "The 15/26 formula, who is eligible, how months are rounded and worked examples.",
    published: "2026-10-21",
    updated: "2026-10-21",
    sections: [
      {
        heading: "Who has to pay gratuity",
        paragraphs: [
          "The Payment of Gratuity Act, 1972 applies to factories, mines, plantations, shops and establishments that have employed ten or more people on any day in the last twelve months. Once covered, an establishment stays covered even if headcount later falls.",
          "Gratuity is paid when an employee leaves after at least five years of continuous service, whether by resignation, retirement or termination. The five-year condition does not apply on death or disablement.",
        ],
      },
      {
        heading: "The formula",
        paragraphs: [
          "Gratuity = last drawn monthly basic pay + dearness allowance × 15 ÷ 26 × completed years of service.",
          "The 26 represents working days in a month, and 15 is the number of days' wages paid for each year of service. Allowances other than DA, bonuses and overtime are not included.",
        ],
      },
      {
        heading: "How years of service are counted",
        paragraphs: [
          "Service of more than six months in the final year counts as a full year. Six years and seven months counts as seven years; six years and six months counts as six.",
          "Several High Courts have held that four years and 240 days of service satisfies the five-year condition, because 240 working days make a year of continuous service under the Act.",
        ],
      },
      {
        heading: "Worked examples",
        paragraphs: [
          "An employee with basic + DA of ₹30,000 and 6 years 7 months of service: ₹30,000 × 15 ÷ 26 × 7 = ₹1,21,154.",
          "An employee with basic + DA of ₹45,000 and 10 years 3 months: the three months are dropped, so ₹45,000 × 15 ÷ 26 × 10 = ₹2,59,615.",
          "Whatever the result, gratuity under the Act is capped at ₹20 lakh, which is also the limit of the income-tax exemption for private-sector employees.",
        ],
        link: { href: "/tools/gratuity-calculator", label: "Try the free gratuity calculator" },
      },
      {
        heading: "Planning for gratuity as an employer",
        paragraphs: [
          "Gratuity is a liability that builds every month an employee stays. Tracking it per employee, rather than discovering it at exit, keeps settlements predictable and helps you fund it. Include it in the full and final settlement along with leave encashment, notice-period recovery and outstanding loans.",
        ],
        link: { href: "/features/bonus-gratuity-settlements", label: "Gratuity and full and final settlements in Vetanly" },
      },
    ],
  },
  {
    slug: "ctc-vs-in-hand-salary",
    title: "CTC vs in-hand salary: what gets deducted and why",
    seoTitle: "CTC vs In-Hand Salary: Deductions Explained",
    seoDescription: "Why in-hand salary is lower than CTC: employer PF, ESI, professional tax and TDS explained with a worked example under the new tax regime.",
    summary: "Employer PF, ESI, professional tax and TDS, explained with a worked example.",
    published: "2026-10-21",
    updated: "2026-10-21",
    sections: [
      {
        heading: "What CTC includes",
        paragraphs: [
          "Cost to company is everything an employer spends on an employee in a year: salary, the employer's PF and ESI contributions, and sometimes gratuity provision, insurance and variable pay. Some of that never reaches the employee's bank account each month.",
        ],
      },
      {
        heading: "From CTC to gross pay",
        paragraphs: [
          "First remove what the employer pays on the employee's behalf. Employer PF is 12% of basic + DA (usually on wages capped at ₹15,000), plus 0.5% admin charges and 0.5% EDLI. Where monthly gross is ₹21,000 or less, the employer also pays 3.25% ESI. What is left is the gross monthly salary.",
        ],
      },
      {
        heading: "From gross pay to in-hand",
        paragraphs: [
          "Four deductions usually come off gross pay: the employee's 12% PF, 0.75% ESI where it applies, state professional tax (up to ₹2,500 a year) and income tax deducted at source.",
          "TDS is the year's estimated tax spread over the months. Under the new regime from FY 2025-26, the standard deduction is ₹75,000 and the section 87A rebate makes tax nil on taxable income up to ₹12 lakh, so salaries up to ₹12.75 lakh pay no income tax.",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Take a ₹6 lakh CTC in Maharashtra with basic at 50% and PF capped at ₹15,000. Monthly CTC is ₹50,000. Employer PF and charges come to ₹1,950, leaving gross pay of ₹48,050.",
          "From that, the employee's PF is ₹1,800 and professional tax is ₹200 (₹300 in February). Gross is above the ESI limit, and annual income is well under the ₹12.75 lakh nil-tax line, so there is no TDS. In-hand pay is ₹46,050 a month.",
        ],
        link: { href: "/tools/in-hand-salary-calculator", label: "Work out your own in-hand salary" },
      },
      {
        heading: "Getting it right every month",
        paragraphs: [
          "For employers, the hard part is not the formula but applying it to everyone, every month, with attendance, leave, overtime and mid-year tax declarations changing the numbers. Payroll software that reads attendance and applies PF, ESI, PT and TDS automatically removes the spreadsheet step where mistakes creep in.",
        ],
        link: { href: "/features/payroll", label: "Indian payroll in Vetanly" },
      },
    ],
  },
];

export const guideBySlug = (slug: string) => GUIDES.find((guide) => guide.slug === slug);
