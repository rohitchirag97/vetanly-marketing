/**
 * Everything the website says about the product, in one place. Each entry describes something the
 * Vetanly app actually does today; keep it that way when editing.
 */

export type IconName =
  | "face"
  | "clock"
  | "calendar"
  | "wallet"
  | "shield"
  | "coins"
  | "receipt"
  | "gift"
  | "users"
  | "box"
  | "chart"
  | "book"
  | "message"
  | "phone"
  | "pin"
  | "lock"
  | "building"
  | "spark";

export type FeatureCategory = "Attendance" | "People" | "Payroll" | "Insights";

export type Feature = {
  slug: string;
  name: string;
  /** Search-result title, keyword first; at most 51 characters so " | Vetanly" still fits in 60. */
  seoTitle: string;
  /** Meta description, at most 155 characters. */
  seoDescription: string;
  icon: IconName;
  category: FeatureCategory;
  /** One line for cards and menus. */
  short: string;
  headline: string;
  intro: string;
  highlights: { title: string; body: string }[];
  /** "Everything included" checklist. */
  details: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const FEATURES: Feature[] = [
  {
    slug: "face-recognition-attendance",
    name: "Face recognition attendance",
    seoTitle: "Face Recognition Attendance System",
    seoDescription: "Touch-free face recognition attendance kiosks with liveness detection and shift-aware attendance that flows straight into Indian payroll.",
    icon: "face",
    category: "Attendance",
    short: "Touch-free check-in on a kiosk. No cards, no buddy punching.",
    headline: "Attendance that knows who actually showed up.",
    intro:
      "Turn any supported tablet into a face-recognition kiosk at the entrance. Employees look at the screen and they are checked in, verified against their own enrolled face, with an optional liveness check so a photo cannot stand in for a person.",
    highlights: [
      { title: "Verified, not just recorded", body: "Every kiosk punch is matched against the employee's enrolled face templates and stored with its match score, so you can see how confident each check-in was." },
      { title: "Liveness check", body: "Turn on liveness for a kiosk and a printed photo or a phone screen held up to the camera is refused." },
      { title: "Your threshold, per device", body: "Set how close a match must be on each kiosk: stricter at a high-security gate, more forgiving at a busy shop-floor entrance." },
      { title: "Many kiosks, one register", body: "Register a kiosk for every gate or branch. Each has its own device key you can rotate or switch off at any time." },
      { title: "Safe retries", body: "Every punch carries its own id, so a kiosk that retries after a network hiccup never creates a duplicate check-in." },
      { title: "Face data under control", body: "Enrolment happens at the kiosk, older templates are retired automatically, and an admin can revoke an employee's face data in one click." },
    ],
    details: [
      "Check-in and check-out from the same kiosk",
      "Face templates synced to each kiosk",
      "Match score stored with every punch",
      "Optional liveness detection per kiosk",
      "Adjustable match threshold per kiosk",
      "Kiosks assigned to branches",
      "Device keys you can rotate or disable",
      "Last-seen status for every kiosk",
      "Duplicate-safe punches",
      "Revoke an employee's face data at any time",
      "Works alongside GPS and manual attendance",
      "Shift-aware late and early-leave detection",
    ],
    faqs: [
      { q: "What hardware do we need?", a: "A tablet running the Vetanly kiosk app at each entrance. You register it in Vetanly, which gives the device its own key." },
      { q: "Can someone check in with a photo?", a: "Not when liveness is turned on for that kiosk: the punch is refused unless the liveness check passes." },
      { q: "What if the face does not match well enough?", a: "The punch is refused. You set the match threshold for each kiosk, and employees can still raise an attendance correction for review." },
      { q: "Can we remove an employee's face data?", a: "Yes. An admin can revoke an employee's face templates from their profile; they would need to enrol again to use the kiosk." },
    ],
    related: ["attendance-shifts", "gps-attendance", "payroll"],
  },
  {
    slug: "gps-attendance",
    name: "GPS check-in",
    seoTitle: "GPS Attendance App with Geofencing",
    seoDescription: "Mobile GPS attendance app for field staff and multi-site teams. Employees check in from their phone only inside the branch geofence, with location logged.",
    icon: "pin",
    category: "Attendance",
    short: "Check in from the phone, only inside the branch's geofence.",
    headline: "Check in from the phone, only where it counts.",
    intro:
      "For branches without a kiosk, or teams that move between sites, employees check in from their phone. Vetanly accepts the punch only inside the branch's geofence and records exactly where it came from.",
    highlights: [
      { title: "Geofence per branch", body: "Pin each branch on the map and choose a radius. Outside it, the check-in is refused with the distance shown." },
      { title: "Precision checked", body: "If the phone's location is too imprecise, Vetanly asks the employee to try again rather than guessing." },
      { title: "Every punch located", body: "Each GPS punch stores the position, its reported accuracy and the distance from the branch, for later review." },
      { title: "Switch on where you need it", body: "Turn GPS check-in on for some branches and keep kiosk-only attendance at others." },
    ],
    details: [
      "Geofence radius per branch",
      "Location accuracy check",
      "Position and distance stored with each punch",
      "One-tap check-in and check-out on the dashboard",
      "Night shifts across midnight",
      "Works with face kiosks and manual entries",
    ],
    faqs: [
      { q: "Can GPS be faked?", a: "On a rooted phone or with fake-location apps it can be. GPS check-in suits trusted, mobile staff; for the strongest proof of presence use face-recognition kiosks." },
      { q: "Do employees need an app?", a: "No. They check in from Vetanly in their phone's browser and allow location access." },
    ],
    related: ["face-recognition-attendance", "attendance-shifts", "employee-management"],
  },
  {
    slug: "attendance-shifts",
    name: "Attendance & shifts",
    seoTitle: "Attendance Management & Shift Scheduling Software",
    seoDescription: "Attendance management software with shift rotations, rosters, overtime approval, late marks and corrections, all in one register that payroll reads.",
    icon: "clock",
    category: "Attendance",
    short: "Shifts, rotations, rosters, overtime and corrections in one view.",
    headline: "Every shift, every punch, every exception.",
    intro:
      "Vetanly turns punches into days: present, half day, absent, late, early leave or on leave, based on each employee's shift for that date. Rotations, roster changes, swaps, overtime approvals and corrections all feed the same register that payroll reads.",
    highlights: [
      { title: "Shifts and rotations", body: "Define shifts, then rotate people through patterns like two weeks of mornings and two of nights. Everyone else simply keeps their default shift." },
      { title: "Roster and swaps", body: "Change one person's shift for one day on the roster, and let colleagues request swaps that a manager approves." },
      { title: "Night shifts that make sense", body: "A check-out after midnight belongs to the shift that started the evening before, not to a new day." },
      { title: "Corrections with approval", body: "Missed a punch? Employees request a correction with a reason; a manager approves it and the day is fixed." },
      { title: "Overtime you approve", body: "Optionally require approval before overtime is paid, and review it day by day." },
      { title: "Daily register", body: "Mark a whole team present, half day, on leave or absent for a date in one go, using the shift times of that day." },
    ],
    details: [
      "Multiple shifts with breaks",
      "Rotation patterns with offsets",
      "Per-day roster overrides",
      "Employee shift-swap requests",
      "Late and early-leave minutes",
      "Half-day and full-day thresholds",
      "Weekly offs and holidays",
      "Overtime approval (optional)",
      "Attendance corrections",
      "Bulk daily register",
      "Late fines (optional, with a cap)",
      "Branch and department filters",
    ],
    faqs: [
      { q: "Do we have to assign shifts every week?", a: "No. Everyone has a default shift that applies automatically. Rotations are only for teams that change shifts." },
      { q: "How are night shifts handled?", a: "A check-out within a few hours after a night shift's end is counted towards that shift, even when it falls on the next date." },
    ],
    related: ["face-recognition-attendance", "leave-holidays", "payroll"],
  },
  {
    slug: "leave-holidays",
    name: "Leave & holidays",
    seoTitle: "Leave Management System & Holiday Calendar",
    seoDescription: "Online leave management with custom leave types, balances, half-day leave, apply and approve on the phone, and branch-wise holidays synced with payroll.",
    icon: "calendar",
    category: "Attendance",
    short: "Leave types, balances, approvals and branch-wise holidays.",
    headline: "Leave that payroll already knows about.",
    intro:
      "Create your own leave types with yearly allowances, let employees apply from their phone and approve in a tap. Approved leave flows straight into attendance and payroll, so nothing is entered twice.",
    highlights: [
      { title: "Your leave policy", body: "Paid or unpaid leave types with yearly allowances; balances update as leave is approved." },
      { title: "Full and half days", body: "Employees apply for full or half days with a reason; managers approve or reject with a note." },
      { title: "Holidays by branch", body: "Company-wide holidays plus state or local holidays for one branch only, so each office gets the right days off." },
      { title: "Straight into payroll", body: "Approved paid leave is paid; unpaid leave is deducted. No separate spreadsheet at month end." },
    ],
    details: [
      "Custom leave types",
      "Yearly allowances and balances",
      "Half-day leave",
      "Approval workflow",
      "Company-wide and branch-only holidays",
      "Multi-day holiday ranges",
      "Leave encashment in full & final settlement",
      "Leave reports",
    ],
    faqs: [
      { q: "Can different branches have different holidays?", a: "Yes. Add a holiday for every branch or for one branch only; payroll and absence marking use the right ones for each employee." },
    ],
    related: ["attendance-shifts", "payroll", "employee-self-service"],
  },
  {
    slug: "payroll",
    name: "Payroll",
    seoTitle: "Payroll Software India with PF, ESI, PT & TDS",
    seoDescription: "Payroll software for Indian businesses: salary from attendance, leave and overtime, loan recovery, PF, ESI, PT and TDS, then salary slip PDFs.",
    icon: "wallet",
    category: "Payroll",
    short: "Draft, review and finalize payroll straight from attendance.",
    headline: "Payroll you can check before you close it.",
    intro:
      "Generate a draft payroll for any period and Vetanly works out each employee's pay from attendance, approved leave, shifts, overtime, salary components and deductions. Review it, fix anything, then finalize and share salary slips.",
    highlights: [
      { title: "From attendance, automatically", body: "Present days, half days, paid and unpaid leave, holidays and weekly offs are counted for you, shift by shift." },
      { title: "Salary components", body: "Fixed or percentage-of-basic earnings and deductions per employee, on monthly, daily or hourly pay." },
      { title: "Overtime and fines", body: "Overtime at a multiplier or fixed hourly rate, and optional late fines with a monthly cap." },
      { title: "Loans and claims built in", body: "Loan instalments are deducted and approved expense claims reimbursed in the same run." },
      { title: "Draft first, then final", body: "Regenerate a draft as many times as you need. Finalizing locks it and records every repayment and reimbursement." },
      { title: "Salary slips", body: "Employees see their finalized slips in Vetanly; you can print them or send them by email or WhatsApp." },
    ],
    details: [
      "Monthly, daily and hourly pay",
      "Earnings and deductions per employee",
      "Overtime rules",
      "Late fines with cap",
      "Paid and unpaid leave",
      "Loan and advance recovery",
      "Expense reimbursement",
      "Bonus paid with salary",
      "Draft and finalize",
      "Branch and department views",
      "Salary slip PDFs",
      "Payroll reports in Excel and PDF",
    ],
    faqs: [
      { q: "Can we fix a mistake after generating payroll?", a: "Yes, while it is a draft: correct the attendance or settings and regenerate. A finalized run is locked." },
      { q: "Does it handle PF, ESI, PT and TDS?", a: "Yes. Turn on the statutory deductions you need; see Statutory compliance." },
    ],
    related: ["statutory-compliance", "loans-expenses", "accounting-export"],
  },
  {
    slug: "statutory-compliance",
    name: "Statutory compliance",
    seoTitle: "PF, ESI, Professional Tax & TDS Compliance",
    seoDescription: "Automatic PF, ESI, state professional tax and TDS (old and new regime) every payroll, with PF ECR export, Form 16 Part B, Form 12BB and tax declarations.",
    icon: "shield",
    category: "Payroll",
    short: "PF, ESI, professional tax, TDS, Form 16 and tax declarations.",
    headline: "Indian payroll rules, worked out for you.",
    intro:
      "Switch on PF, ESI, professional tax and TDS for your organization and Vetanly calculates them every payroll, including employer contributions, then gives you the reports you file from.",
    highlights: [
      { title: "PF and ESI", body: "Employee and employer shares, EPS, admin and EDLI charges, wage ceilings and per-employee opt-outs." },
      { title: "Professional tax by state", body: "State slabs, including different slabs for women where the state has them, and a branch-wise state for multi-state companies." },
      { title: "TDS on salary", body: "Old and new regime, projected over the year, with one-off payments like bonus taxed in the month they are paid." },
      { title: "Tax declarations", body: "Employees declare 80C, 80D, HRA and more, upload proofs, and you verify them. Form 12BB is generated for you." },
      { title: "Returns-ready reports", body: "PF ECR file, ESI and PT registers, TDS reports and Form 16 Part B, straight from finalized payroll." },
    ],
    details: [
      "PF with wage ceiling",
      "EPS, admin and EDLI",
      "ESI employee and employer",
      "Professional tax slabs by state",
      "Branch-wise PT state",
      "TDS old and new regime",
      "Employee tax declarations",
      "Proof upload and verification",
      "Form 12BB",
      "PF ECR export",
      "Form 16 Part B",
      "Previous-employer income",
    ],
    faqs: [
      { q: "Should we still check the figures with our accountant?", a: "Yes. Vetanly follows current rules for FY 2025-26 onwards, but please review the figures with your payroll or tax adviser before filing." },
    ],
    related: ["payroll", "accounting-export", "employee-self-service"],
  },
  {
    slug: "loans-expenses",
    name: "Loans & expense claims",
    seoTitle: "Salary Advance, Loan & Expense Claim Software",
    seoDescription: "Manage salary advances, employee loans and expense claims with receipts. Approve on the phone, recover EMIs and reimburse claims in the next payroll.",
    icon: "coins",
    category: "Payroll",
    short: "Salary advances, loan EMIs and reimbursements with receipts.",
    headline: "Advances, loans and claims without the paperwork.",
    intro:
      "Employees request salary advances and loans or submit expense claims with a photo of the receipt. Managers approve, and Vetanly recovers instalments and reimburses claims in the next payroll.",
    highlights: [
      { title: "Loans and advances", body: "Requests, approval, disbursement and instalments, with a running balance for every employee." },
      { title: "Automatic recovery", body: "Instalments are deducted in payroll, or recorded as manual repayments when paid back directly." },
      { title: "NOC on closure", body: "When a loan is repaid, a no-objection certificate is ready to download or send." },
      { title: "Expense claims", body: "Travel, food, fuel, phone and more, with optional receipt photos so reviewers can see what they approve." },
    ],
    details: [
      "Loan and salary-advance requests",
      "Approval and disbursement",
      "Instalment schedule",
      "Payroll recovery",
      "Manual repayments",
      "Loan NOC",
      "Expense claims by category",
      "Receipt upload (optional)",
      "Claim approval",
      "Reimbursed with salary",
    ],
    faqs: [
      { q: "Is a receipt required for every claim?", a: "No. Receipts are optional, so cash expenses without a bill are not blocked; reviewers can still ask for one." },
    ],
    related: ["payroll", "employee-self-service", "bonus-gratuity-settlements"],
  },
  {
    slug: "bonus-gratuity-settlements",
    name: "Bonus, gratuity & full and final",
    seoTitle: "Bonus, Gratuity & Full and Final Settlement",
    seoDescription: "Calculate statutory bonus, track gratuity liability and run full and final settlement with leave encashment, notice recovery and a settlement PDF.",
    icon: "gift",
    category: "Payroll",
    short: "Statutory bonus, gratuity liability and exit settlements.",
    headline: "The money moments, handled properly.",
    intro:
      "Calculate the statutory bonus for the year, see the gratuity you owe today, and settle everything with a leaver in one statement: final salary, leave encashment, gratuity, notice and recoveries.",
    highlights: [
      { title: "Statutory bonus", body: "Payment of Bonus Act rules: eligibility, 8.33% to 20%, monthly wage caps, leavers included. Adjust, approve and pay with payroll or directly." },
      { title: "Gratuity liability", body: "Accrued gratuity for every employee on any date, who is payable now and who becomes eligible soon, with an Excel export." },
      { title: "Full & final settlement", body: "Final salary after PF, ESI, PT and TDS, leave encashment, gratuity, notice-period recovery, loans and pending claims in one statement." },
      { title: "Nothing left behind", body: "The settlement warns you about company assets the leaver still holds, and payroll stops paying them from the settlement date." },
    ],
    details: [
      "Bonus eligibility and calculation",
      "Bonus paid with payroll or directly",
      "Gratuity accrual report",
      "Gratuity in settlement",
      "Leave encashment",
      "Notice-period recovery",
      "Loan recovery",
      "Settlement statement PDF",
    ],
    faqs: [
      { q: "Is the bonus taxed correctly when paid with salary?", a: "Yes. It counts towards TDS in the month it is paid, but not towards PF, ESI or professional tax wages." },
    ],
    related: ["payroll", "statutory-compliance", "employee-management"],
  },
  {
    slug: "employee-management",
    name: "Employee management",
    seoTitle: "Employee Management Software for Indian SMEs",
    seoDescription: "Employee records, documents, onboarding and exit checklists, branches, departments and role-based access in one HRMS, with Excel bulk upload.",
    icon: "users",
    category: "People",
    short: "Records, documents, onboarding, exits, branches and roles.",
    headline: "Every employee, from joining day to last day.",
    intro:
      "Keep job details, pay, personal and bank details, documents and onboarding or exit checklists in one profile. Organize people into branches and departments, and give HR and branch managers exactly the access they need.",
    highlights: [
      { title: "Complete profiles", body: "Job, pay, personal and emergency details, blood group, statutory IDs and encrypted bank details." },
      { title: "Documents", body: "Upload offer letters, ID and address proofs and certificates to each employee's profile." },
      { title: "Onboarding and exits", body: "Checklists for joining and leaving, resignations with notice periods, and a clean hand-off to the final settlement." },
      { title: "Branches and departments", body: "Group people by office or site and by team; filter attendance, payroll and reports by either." },
      { title: "Roles that fit", body: "Owner, admin, HR and employee roles, and branch managers who only see their own branches." },
      { title: "Bulk upload", body: "Add hundreds of employees from an Excel template; Vetanly checks for people already in your organization first." },
    ],
    details: [
      "Employee profiles",
      "Encrypted bank and PAN details",
      "Document storage",
      "Onboarding checklists",
      "Resignation and notice period",
      "Exit checklists",
      "Branches and departments",
      "Branch managers",
      "Role-based access",
      "Excel bulk upload",
      "Employee codes",
      "Announcements",
    ],
    faqs: [
      { q: "Can a branch manager see other branches?", a: "No. A branch manager sees and manages only the people in their branches, and does not see payroll or organization settings." },
    ],
    related: ["asset-tracking", "employee-self-service", "hr-insights"],
  },
  {
    slug: "asset-tracking",
    name: "Asset tracking",
    seoTitle: "Employee Asset Tracking & Handover Register",
    seoDescription: "Track company laptops, phones, SIMs and ID cards issued to employees, note their condition at handover, and take every asset back at exit.",
    icon: "box",
    category: "People",
    short: "Laptops, phones, SIMs and ID cards: who has what.",
    headline: "Know who has every laptop, phone and card.",
    intro:
      "Keep a register of company property, hand it to employees with its condition noted, and take it back when they leave. Employees confirm what they received, and nothing slips through an exit.",
    highlights: [
      { title: "Asset register", body: "Tags, serial numbers, purchase cost, warranty dates, branch and condition for every item." },
      { title: "Handover and return", body: "Record who got what, when and in what condition, and how it came back." },
      { title: "Employee acknowledgement", body: "Employees confirm receipt from their own account, so there is no dispute later." },
      { title: "Exit-safe", body: "Full & final settlements list any asset a leaver still holds." },
    ],
    details: ["Asset categories", "Unique asset tags", "Warranty reminders", "Handover history", "Lost and retired assets", "Excel export"],
    faqs: [],
    related: ["employee-management", "bonus-gratuity-settlements"],
  },
  {
    slug: "employee-self-service",
    name: "Employee self-service",
    seoTitle: "Employee Self-Service App: Payslips & Leave",
    seoDescription: "Employee self-service portal and app: staff see their attendance, shifts, leave balances, payslips, loans, claims and tax declarations on any phone.",
    icon: "phone",
    category: "People",
    short: "Payslips, leave, claims and tax declarations on any phone.",
    headline: "Give employees answers without asking HR.",
    intro:
      "Employees sign in with their phone number or Google account and see their own attendance, schedule, leave balances, payslips, loans, claims and tax declarations, on any phone or computer.",
    highlights: [
      { title: "Their attendance and schedule", body: "Daily status, punches, corrections and the shifts coming up, including swap requests." },
      { title: "Leave and claims", body: "Apply for leave and submit expense claims with receipt photos in a minute." },
      { title: "Payslips and documents", body: "Every finalized salary slip, loan NOC and settlement in one place." },
      { title: "Tax declarations", body: "Declare investments, upload proofs and choose a tax regime." },
    ],
    details: ["OTP or Google sign-in", "My attendance", "My schedule and swaps", "Leave applications", "Expense claims", "Loan requests", "Salary slips", "Tax declarations", "My assets", "GPS check-in"],
    faqs: [{ q: "Do employees need to install anything?", a: "No. Vetanly works in the phone's browser." }],
    related: ["leave-holidays", "loans-expenses", "statutory-compliance"],
  },
  {
    slug: "hr-insights",
    name: "HR insights & reports",
    seoTitle: "HR Analytics & Attendance Reports",
    seoDescription: "HR analytics dashboard: headcount, attrition, attendance and late-arrival patterns, leave usage and payroll cost by department and branch.",
    icon: "chart",
    category: "Insights",
    short: "Headcount, attrition, attendance patterns and payroll cost.",
    headline: "See your workforce, not just your spreadsheets.",
    intro:
      "Headcount and attrition over the year, attendance and late-arrival patterns, leave usage, upcoming birthdays and anniversaries, and payroll cost by department and branch, all from data already in Vetanly.",
    highlights: [
      { title: "Workforce", body: "Headcount, joiners and leavers by month, 12-month attrition, tenure, and breakdowns by department, branch and gender." },
      { title: "Attendance patterns", body: "Attendance rate, late arrivals, Monday and Friday absences, and who is most often late or absent." },
      { title: "What's coming up", body: "Birthdays, work anniversaries, notice periods ending and gratuity coming due, plus approvals waiting for you." },
      { title: "Payroll cost", body: "Monthly cost with employer PF and ESI, cost per employee and overtime, by department and branch." },
      { title: "Reports", body: "Attendance, leave, payroll, loans and statutory reports in Excel or PDF, for any branch." },
    ],
    details: ["Headcount trend", "Attrition rate", "Tenure bands", "Attendance rate", "Late arrivals", "Weekday patterns", "Leave by type", "Upcoming events", "Payroll cost trend", "Excel and PDF reports"],
    faqs: [{ q: "Who can see payroll cost?", a: "Only owners and admins of the whole organization. HR and branch managers see people and attendance insights for those they manage." }],
    related: ["employee-management", "payroll", "accounting-export"],
  },
  {
    slug: "accounting-export",
    name: "Accounting export",
    seoTitle: "Payroll to Tally, Zoho Books & QuickBooks",
    seoDescription: "Export finalized payroll, settlements and bonuses as balanced journal vouchers with your own ledger names for Tally, Zoho Books or QuickBooks.",
    icon: "book",
    category: "Insights",
    short: "Payroll journals for Tally, Zoho Books and QuickBooks.",
    headline: "Payroll in your books, without retyping it.",
    intro:
      "Turn finalized payroll, settlements and bonuses into balanced journal vouchers with your own ledger names, and import them into Tally, Zoho Books, QuickBooks or any accounting software.",
    highlights: [
      { title: "Balanced to the paisa", body: "Salaries, PF, ESI, PT, TDS, loans, fines and reimbursements each booked to the right ledger." },
      { title: "Your ledger names", body: "Map each item to your chart of accounts once; Vetanly uses it every month." },
      { title: "Tally, CSV and Excel", body: "Tally import XML (with optional ledger creation), CSV for Zoho Books and QuickBooks, or a readable Excel journal." },
      { title: "Cost centres", body: "Split vouchers by branch or department as cost centres." },
    ],
    details: ["Tally XML", "Zoho Books / QuickBooks CSV", "Excel journal", "Custom ledger names", "Cost centres", "Export history"],
    faqs: [],
    related: ["payroll", "statutory-compliance"],
  },
  {
    slug: "whatsapp-email-delivery",
    name: "WhatsApp & email delivery",
    seoTitle: "Send Payslips on WhatsApp & Email",
    seoDescription: "Send salary slips and certificates to employees on WhatsApp or email, with a delivery log for every message. Use Vetanly's number or your own provider.",
    icon: "message",
    category: "Insights",
    short: "Send payslips and certificates on WhatsApp or email.",
    headline: "Payslips where your people actually look.",
    intro:
      "Send salary slips and certificates straight to employees on WhatsApp or by email, with a log of every message and its delivery status. Use Vetanly's WhatsApp number, or keep your own through your existing provider.",
    highlights: [
      { title: "WhatsApp or email", body: "Send to the employee's verified phone or Google email, one at a time or as a team." },
      { title: "Your number or ours", body: "Use Vetanly's WhatsApp, or connect AiSensy, Meta's Cloud API or any provider you already use." },
      { title: "Delivery you can see", body: "Sent, delivered, read or failed for every message; failed messages are refunded." },
      { title: "Pay as you send", body: "A prepaid balance with low-balance alerts. No monthly bundles." },
    ],
    details: ["WhatsApp delivery", "Email delivery", "Bring your own provider", "Template mapping", "Delivery log", "Prepaid balance"],
    faqs: [{ q: "Is this included in the plan?", a: "It is an add-on with a prepaid balance. Without it, employees can still view and download everything in Vetanly." }],
    related: ["payroll", "employee-self-service"],
  },
];

export const featureBySlug = (slug: string) => FEATURES.find((feature) => feature.slug === slug);

export const CATEGORIES: { name: FeatureCategory; blurb: string }[] = [
  { name: "Attendance", blurb: "Know who is in, on every shift" },
  { name: "Payroll", blurb: "Pay correctly and stay compliant" },
  { name: "People", blurb: "Run HR from one profile" },
  { name: "Insights", blurb: "See, share and account for it" },
];

export type Solution = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  icon: IconName;
  headline: string;
  intro: string;
  challenges: string[];
  answers: { feature: string; text: string }[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "manufacturing",
    name: "Factories & manufacturing",
    seoTitle: "Attendance & Payroll Software for Factories",
    seoDescription: "Face attendance at the factory gate, rotating and night shifts, verified overtime and PF, ESI and PT payroll for every worker, in one system.",
    icon: "building",
    headline: "Shift work, verified at the gate.",
    intro: "Rotating shifts, night work, contract-heavy floors and statutory payroll: Vetanly was built for exactly this.",
    challenges: ["Buddy punching and proxy attendance", "Rotating and night shifts", "Overtime that is hard to verify", "PF, ESI and PT for every worker"],
    answers: [
      { feature: "face-recognition-attendance", text: "Face kiosks with liveness at every gate end proxy punching." },
      { feature: "attendance-shifts", text: "Rotations, rosters and night shifts that cross midnight." },
      { feature: "payroll", text: "Overtime approval before it is paid, at your multiplier." },
      { feature: "statutory-compliance", text: "PF ECR, ESI and PT registers from every payroll." },
    ],
  },
  {
    slug: "retail-chains",
    name: "Retail & multi-branch",
    seoTitle: "Multi-Branch Retail Attendance & Payroll",
    seoDescription: "Attendance and payroll for retail chains: stores across cities and states, branch managers who see only their staff, branch-wise holidays and PT.",
    icon: "pin",
    headline: "Every store, one payroll.",
    intro: "Stores in different cities and states, managers who should only see their own people, and holidays that differ by location.",
    challenges: ["Branches in different states", "Store managers need limited access", "Local holidays", "Staff moving between stores"],
    answers: [
      { feature: "employee-management", text: "Branch managers who only see their own stores." },
      { feature: "leave-holidays", text: "Branch-only holidays alongside company-wide ones." },
      { feature: "statutory-compliance", text: "Professional tax by each branch's state." },
      { feature: "gps-attendance", text: "Geofenced phone check-in where there is no kiosk." },
    ],
  },
  {
    slug: "offices",
    name: "Offices & services",
    seoTitle: "HR & Payroll Software for Small Offices",
    seoDescription: "HR and payroll for growing offices: employee self-service, leave, attendance and payroll that exports straight to your accounting software.",
    icon: "users",
    headline: "Less admin for a growing team.",
    intro: "Fixed hours, flexible people. Give employees self-service and keep HR, payroll and accounting in sync.",
    challenges: ["Leave and claims over email", "Payslip and tax-proof requests", "Laptops and phones to track", "Month-end entries in Tally"],
    answers: [
      { feature: "employee-self-service", text: "Leave, claims, payslips and tax declarations on any phone." },
      { feature: "asset-tracking", text: "A register of every laptop and phone, acknowledged by employees." },
      { feature: "accounting-export", text: "Payroll journals straight into Tally or Zoho Books." },
      { feature: "hr-insights", text: "Attrition, attendance patterns and cost at a glance." },
    ],
  },
  {
    slug: "field-teams",
    name: "Field & on-site teams",
    seoTitle: "Field Staff Attendance App & Payroll",
    seoDescription: "GPS attendance for field staff at sites, outlets and client locations: geofenced check-in from the phone and payroll that still closes on time.",
    icon: "phone",
    headline: "Attendance for people who aren't at a desk.",
    intro: "Sites, outlets and client locations: check in where the work is, and still close payroll on time.",
    challenges: ["No fixed office", "Proving presence on site", "Travel and fuel claims", "Advances against salary"],
    answers: [
      { feature: "gps-attendance", text: "Check-in only within each site's geofence, with the location recorded." },
      { feature: "loans-expenses", text: "Fuel and travel claims with receipt photos, reimbursed in payroll." },
      { feature: "loans-expenses", text: "Salary advances recovered automatically in instalments." },
      { feature: "whatsapp-email-delivery", text: "Payslips delivered on WhatsApp." },
    ],
  },
];

export const solutionBySlug = (slug: string) => SOLUTIONS.find((solution) => solution.slug === slug);

/** Public plans, as configured in the platform. Update these when prices change. */
export const PRICING = {
  currency: "₹",
  monthly: 59,
  annual: 590,
  trialDays: 14,
  volumeThreshold: 100,
};
