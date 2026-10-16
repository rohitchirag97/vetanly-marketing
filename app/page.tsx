import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRight, Check, Icon } from "@/components/icons";
import { DashboardMockup, FaceKioskMockup, PayslipMockup, PhoneMockup } from "@/components/mockups";
import { Container, CtaBand, Eyebrow, Faqs, FeatureCard, PrimaryButton, SecondaryButton, SectionHeading } from "@/components/ui";
import { CATEGORIES, FEATURES, PRICING, SOLUTIONS } from "@/content/features";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vetanly",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android tablet kiosk",
  description: "Face-recognition attendance, HR and Indian payroll software.",
  offers: { "@type": "Offer", price: String(PRICING.monthly), priceCurrency: "INR", description: "Per active employee per month, GST extra" },
};

const facePoints = [
  { title: "Proof of presence", body: "A face, not a card or a PIN. Proxy and buddy punching stop at the gate." },
  { title: "Liveness check", body: "Photos and phone screens held up to the camera are refused." },
  { title: "Confidence you can see", body: "Every punch is stored with its match score." },
  { title: "Kiosk at every gate", body: "Register a tablet per entrance or branch, each with its own key." },
  { title: "Keeps working offline", body: "Punches are saved on the tablet and sent the moment the network is back." },
  { title: "No photos stored", body: "Only a face template, a list of numbers, is kept. Never a picture of anyone." },
];

const beforeAfter = [
  { area: "Attendance", before: "Paper register or fingerprint exports, re-typed into Excel", after: "Face kiosks and phone check-ins fill the register as people arrive" },
  { area: "Proxy punching", before: "Colleagues sign each other in", after: "A live face at the gate; photos and screens are refused" },
  { area: "Late & overtime", before: "Worked out by hand at month-end", after: "Late marks, half days and overtime from each person's shift" },
  { area: "Leave", before: "Requests on WhatsApp, balances in someone's notebook", after: "Applied and approved in the app; balances update themselves" },
  { area: "Field staff", before: "Phone calls to ask who reached the site", after: "Check-in from their phone, only inside the site's geofence" },
  { area: "Payroll", before: "Excel formulas, PF, ESI and TDS done separately", after: "One draft run with PF, ESI, PT and TDS; review and finalize" },
  { area: "Payslips", before: "Printed, signed and handed out", after: "On every employee's phone, or sent by WhatsApp and email" },
];

const autoEvents = [
  { time: "09:02", text: "Anaya Das checked in at the main gate kiosk", tag: "Match 96%", tone: "bg-emerald-50 text-emerald-700" },
  { time: "09:26", text: "Samar Khanna marked late, 16 min past the 10-min grace", tag: "Late", tone: "bg-amber-50 text-amber-700" },
  { time: "13:40", text: "Warehouse kiosk back online, 3 saved punches synced", tag: "Offline sync", tone: "bg-brand-50 text-brand-700" },
  { time: "18:55", text: "Ritu Verma checked out after her shift ended at 17:30", tag: "1h 25m OT", tone: "bg-brand-50 text-brand-700" },
  { time: "01:30", text: "Night-shift check-out counted on the day the shift began", tag: "Night shift", tone: "bg-slate-100 text-slate-700" },
  { time: "28 Oct", text: "October payroll drafted for 142 people, statutory worked out", tag: "PF · ESI · PT · TDS", tone: "bg-emerald-50 text-emerald-700" },
];

const industries = [
  "Factories", "Garment units", "Retail stores", "Restaurants & cafés", "Security agencies", "Schools & colleges",
  "Clinics & hospitals", "Construction sites", "Warehouses & logistics", "Hotels", "Petrol pumps", "Offices",
];

const flow = [
  { step: "01", title: "Check in", body: "Employees look at the kiosk, or tap check-in on their phone inside the geofence.", icon: "face" as const },
  { step: "02", title: "Days take shape", body: "Each punch is matched to that day's shift: present, late, half day or on leave.", icon: "clock" as const },
  { step: "03", title: "Exceptions resolved", body: "Corrections, leave, overtime and shift swaps are approved as they happen.", icon: "calendar" as const },
  { step: "04", title: "Payroll in minutes", body: "Draft payroll with PF, ESI, PT and TDS, review, finalize and send slips.", icon: "wallet" as const },
];

const homeFaqs = [
  { q: "What do we need for face-recognition attendance?", a: "A tablet running the Vetanly kiosk app at each entrance. Register it in Vetanly, enrol employees' faces at the kiosk, and you're done." },
  { q: "Can we use Vetanly without kiosks?", a: "Yes. Use GPS check-in from phones inside each branch's geofence, record attendance manually, or mix all three." },
  { q: "Is Indian statutory payroll supported?", a: "Yes: PF with EPS and EDLI, ESI, professional tax by state, TDS under both regimes, tax declarations, Form 12BB, PF ECR and Form 16 Part B." },
  { q: "How much does it cost?", a: `₹${PRICING.monthly} per active employee per month, or ₹${PRICING.annual} per employee per year (two months free). GST extra. Every feature is included, and there is a ${PRICING.trialDays}-day free trial.` },
  { q: "What if the internet goes down?", a: "The kiosk keeps recognising people. Punches are saved on the tablet with their real time and sent automatically when the connection returns, so nobody is marked absent." },
  { q: "Do you store photos of our employees?", a: "No. Enrolment turns a face into a template, a list of numbers that cannot be turned back into a picture. Only that template is stored, and only for marking attendance." },
  { q: "Does it handle night shifts and late working?", a: "Yes. A check-out after midnight stays on the day the shift started, so night shifts and late overtime are paid on the right day and nobody is marked absent because the date changed." },
  { q: "Can employees use it on their phones?", a: "Yes. Employees sign in with their phone number or Google account in any browser to see attendance, apply for leave, submit claims and download payslips." },
];

export default function Home() {
  const jsonLd = JSON.stringify(softwareSchema).replace(/</g, "\\u003c");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* Hero: face recognition first */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="dark-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow light>Face recognition attendance · HR · Payroll</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Attendance that sees <span className="bg-linear-to-r from-brand-400 to-emerald-300 bg-clip-text text-transparent">who actually showed up.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Touch-free face-recognition kiosks with liveness checks, GPS check-in for field teams, and shifts, leave and Indian payroll that
              run on the same data. From the gate to the payslip, in one place.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton>Start {PRICING.trialDays}-day free trial <ArrowRight /></PrimaryButton>
              <SecondaryButton href="/features/face-recognition-attendance" light>See face attendance</SecondaryButton>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              {["Every feature in every plan", `₹${PRICING.monthly} per employee / month`, "Built for Indian payroll"].map((item) => (
                <li key={item} className="flex items-center gap-2"><Check className="size-4 text-emerald-400" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="float-y">
            <FaceKioskMockup />
          </div>
        </Container>
      </section>

      {/* Module strip */}
      <section className="border-b border-slate-200 bg-white">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 text-sm font-medium text-slate-500">
          {["Face kiosks", "GPS check-in", "Shifts & rosters", "Leave", "Payroll", "PF · ESI · PT · TDS", "Loans & claims", "Assets", "HR insights", "Tally export"].map((label) => (
            <span key={label} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-brand-500" />{label}</span>
          ))}
        </Container>
      </section>

      {/* Face recognition deep dive */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Face recognition attendance"
              title="No cards. No PINs. No proxies."
              intro="A tablet at the entrance becomes a kiosk that recognises each employee as they walk in. It checks that a real person is in front of the camera, and records how sure it is."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {facePoints.map((point) => (
                <div key={point.title} className="rounded-2xl border border-slate-200 p-5">
                  <span className="grid size-9 place-items-center rounded-lg bg-brand-50 text-brand-600"><Icon name="face" className="size-4" /></span>
                  <h3 className="mt-4 font-semibold text-slate-950">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{point.body}</p>
                </div>
              ))}
            </div>
            <Link href="/features/face-recognition-attendance" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-brand-600">
              How face attendance works <ArrowRight />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-brand-100 to-brand-50" aria-hidden="true" />
            <div className="relative grid items-end gap-6 p-4 sm:grid-cols-[1fr_auto]">
              <DashboardMockup />
              <div className="hidden sm:block"><PhoneMockup /></div>
            </div>
          </div>
        </Container>
      </section>

      {/* How it flows */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading center eyebrow="How it works" title="From the gate to the payslip, without re-typing anything." intro="Attendance, leave and payroll share the same data, so month-end is a review, not a rebuild." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {flow.map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-sm font-bold text-brand-600">{item.step}</span>
                <span className="absolute right-6 top-6 text-slate-300"><Icon name={item.icon} className="size-6" /></span>
                <h3 className="mt-6 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Before / after */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading center eyebrow="Before and after" title="Month-end, without the spreadsheets." intro="The same work every business does, with the re-typing, chasing and recalculating taken out." />
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200">
            <div className="hidden grid-cols-[180px_1fr_1fr] bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500 md:grid">
              <span className="px-6 py-4" />
              <span className="px-6 py-4">The usual way</span>
              <span className="px-6 py-4 text-brand-700">With Vetanly</span>
            </div>
            <ul className="divide-y divide-slate-200">
              {beforeAfter.map((row) => (
                <li key={row.area} className="grid gap-3 px-6 py-5 md:grid-cols-[180px_1fr_1fr] md:gap-0 md:px-0 md:py-0">
                  <span className="font-semibold text-slate-950 md:px-6 md:py-5">{row.area}</span>
                  <span className="flex items-start gap-2.5 text-sm leading-6 text-slate-500 md:px-6 md:py-5">
                    <span aria-hidden="true" className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-slate-100 text-xs text-slate-400">✕</span>
                    <span><span className="sr-only">The usual way: </span>{row.before}</span>
                  </span>
                  <span className="flex items-start gap-2.5 text-sm leading-6 text-slate-800 md:bg-brand-50/40 md:px-6 md:py-5">
                    <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                    <span><span className="sr-only">With Vetanly: </span>{row.after}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* What runs on its own */}
      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              light
              eyebrow="Runs on its own"
              title="Set the rules once. The day sorts itself out."
              intro="Shifts, grace periods, overtime and statutory rules are set up once. From then on every punch is sorted the moment it happens, including the awkward ones."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Late and early marks with grace", "Half day and absent from shift hours", "Overtime, with optional approval", "Offline punches synced later", "Night shifts kept on the right day", "Payroll drafted from it all"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300"><Check className="size-4 shrink-0 text-emerald-400" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white p-2 text-slate-900 shadow-2xl shadow-brand-950/40">
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-sm font-semibold">Today in Vetanly</p>
              <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600"><span className="size-1.5 animate-pulse rounded-full bg-emerald-500" /> Live</span>
            </div>
            <ul className="divide-y divide-slate-100 rounded-2xl bg-slate-50/70">
              {autoEvents.map((event) => (
                <li key={event.time + event.tag} className="flex items-center gap-4 px-4 py-3.5">
                  <span className="w-12 shrink-0 text-xs font-semibold tabular-nums text-slate-400">{event.time}</span>
                  <span className="min-w-0 flex-1 text-sm leading-5 text-slate-700">{event.text}</span>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${event.tone}`}>{event.tag}</span>
                </li>
              ))}
            </ul>
            <p className="px-4 py-3 text-center text-xs text-slate-400">Illustration with sample data</p>
          </div>
        </Container>
      </section>

      {/* Payroll */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <PayslipMockup />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Payroll & compliance"
              title="Indian payroll, worked out from real attendance."
              intro="Salary components, overtime, leave, loan EMIs and expense reimbursements in one run, with PF, ESI, professional tax and TDS calculated for you. Review the draft, then finalize."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["PF, EPS & EDLI", "ESI employee & employer", "PT slabs by state", "TDS old & new regime", "Bonus & gratuity", "Full & final settlement", "PF ECR & Form 16", "Tally journal export"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700"><Check className="size-4 text-emerald-600" /> {item}</li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4 text-sm font-semibold">
              <Link href="/features/payroll" className="inline-flex items-center gap-1 text-brand-600">Payroll <ArrowRight /></Link>
              <Link href="/features/statutory-compliance" className="inline-flex items-center gap-1 text-brand-600">Statutory compliance <ArrowRight /></Link>
            </div>
          </div>
        </Container>
      </section>

      {/* All features */}
      <section className="bg-slate-50 py-20 sm:py-28" id="features">
        <Container>
          <SectionHeading center eyebrow="Everything included" title="One workspace for your whole people operation." intro="Every module below is in every plan. No add-on modules, no surprise upgrades." />
          {CATEGORIES.map((category) => (
            <div key={category.name} className="mt-14">
              <div className="mb-5 flex items-baseline gap-3">
                <h3 className="text-xl font-semibold text-slate-950">{category.name}</h3>
                <span className="text-sm text-slate-500">{category.blurb}</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {FEATURES.filter((f) => f.category === category.name).map((feature) => <FeatureCard key={feature.slug} feature={feature} />)}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Solutions */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Built for how you work" title="Shop floors, store chains, offices and field teams." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((solution) => (
              <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group rounded-2xl border border-slate-200 p-6 transition hover:border-brand-200 hover:shadow-lg">
                <span className="grid size-11 place-items-center rounded-xl bg-slate-950 text-white"><Icon name={solution.icon} /></span>
                <h3 className="mt-5 font-semibold text-slate-950">{solution.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{solution.headline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">Read more <ArrowRight /></span>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-sm font-semibold text-slate-500">Made for businesses with shifts, gates and payrolls, like</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {industries.map((industry) => (
                <li key={industry} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">{industry}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Roles */}
      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading light eyebrow="For everyone" title="The right view for every role." intro="Owners see the whole business. HR and branch managers see the people they manage. Employees see their own." />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Owners & admins", body: "Payroll, settings, billing, accounting export and the full audit log.", icon: "building" as const },
              { title: "HR teams", body: "Employees, attendance, leave, claims and tax proofs, without payroll access.", icon: "users" as const },
              { title: "Branch managers", body: "Only their own branches' people, attendance and approvals.", icon: "pin" as const },
              { title: "Employees", body: "Attendance, schedule, leave, claims, payslips and tax declarations on their phone.", icon: "phone" as const },
            ].map((role) => (
              <div key={role.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Icon name={role.icon} className="size-6 text-brand-300" />
                <h3 className="mt-4 font-semibold">{role.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{role.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-linear-to-br from-brand-50 to-white p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow>Simple pricing</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">One price per employee. Everything included.</h2>
            <p className="mt-4 text-lg text-slate-600">Face kiosks, payroll, compliance and insights, for one per-employee price.</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl shadow-brand-900/5 ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Standard</p>
            <p className="mt-2 text-4xl font-bold text-slate-950">₹{PRICING.monthly}<span className="text-base font-medium text-slate-500"> / employee / month</span></p>
            <p className="mt-1 text-sm text-slate-500">or ₹{PRICING.annual} per employee per year · GST extra</p>
            <div className="mt-6 flex flex-col gap-2">
              <PrimaryButton>Start free trial <ArrowRight /></PrimaryButton>
              <Link href="/pricing" className="text-center text-sm font-semibold text-brand-600">See pricing details</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Questions" title="Good to know." />
          <Faqs faqs={homeFaqs} />
        </Container>
      </section>

      <CtaBand title="Make month-end a review, not a rebuild." />
    </>
  );
}
