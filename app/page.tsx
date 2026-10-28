import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd, faqJsonLd } from "@/app/seo";
import { Check, Icon } from "@/components/icons";
import { FaceKioskMockup, GateEntry, PayslipMockup, PhoneMockup } from "@/components/mockups";
import { Container, CtaBand, Faqs, FeatureCard, PrimaryButton, SecondaryButton, SectionHeading } from "@/components/ui";
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

const modules = ["Face kiosks", "GPS check-in", "Shifts & rosters", "Leave", "Payroll", "PF, ESI, PT and TDS", "Loans & claims", "Assets", "HR insights", "Tally export"];

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
  { time: "09:02", text: "Anaya Das checked in at the main gate kiosk", tag: "Match 96%", tone: "chip--ok" },
  { time: "09:26", text: "Samar Khanna marked late, 16 min past the 10-min grace", tag: "Late", tone: "chip--warn" },
  { time: "13:40", text: "Warehouse kiosk back online, 3 saved punches synced", tag: "Offline sync", tone: "chip--brand" },
  { time: "18:55", text: "Ritu Verma checked out after her shift ended at 17:30", tag: "1h 25m OT", tone: "chip--brand" },
  { time: "01:30", text: "Night-shift check-out counted on the day the shift began", tag: "Night shift", tone: "" },
  { time: "28 Oct", text: "October payroll drafted for 142 people, statutory worked out", tag: "PF, ESI, PT, TDS", tone: "chip--ok" },
];

const industries = [
  "Factories", "Garment units", "Retail stores", "Restaurants & cafés", "Security agencies", "Schools & colleges",
  "Clinics & hospitals", "Construction sites", "Warehouses & logistics", "Hotels", "Petrol pumps", "Offices",
];

const flow = [
  { title: "Check in", body: "Employees look at the kiosk, or tap check-in on their phone inside the geofence." },
  { title: "Days take shape", body: "Each punch is matched to that day's shift: present, late, half day or on leave." },
  { title: "Exceptions resolved", body: "Corrections, leave, overtime and shift swaps are approved as they happen." },
  { title: "Payroll in minutes", body: "Draft payroll with PF, ESI, PT and TDS, review, finalize and send slips." },
];

const roles = [
  { title: "Owners & admins", body: "Payroll, settings, billing, accounting export and the full audit log.", icon: "building" as const },
  { title: "HR teams", body: "Employees, attendance, leave, claims and tax proofs, without payroll access.", icon: "users" as const },
  { title: "Branch managers", body: "Only their own branches' people, attendance and approvals.", icon: "pin" as const },
  { title: "Employees", body: "Attendance, schedule, leave, claims, payslips and tax declarations on their phone.", icon: "phone" as const },
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
  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqJsonLd(homeFaqs)} />

      {/* Hero, Counter posture: the offer and the gate punch are the visual. */}
      <section className="border-b border-ink">
        <Container className="grid min-h-[calc(100svh-4rem)] items-center gap-x-(--gap-columns) gap-y-16 py-(--space-2xl) lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="max-w-[14ch] text-ink">Face recognition attendance &amp; payroll software</h1>
            <p className="lead mt-6 text-ink-2">Attendance that sees who actually showed up.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryButton>Start {PRICING.trialDays}-day free trial</PrimaryButton>
              <SecondaryButton href="/features/face-recognition-attendance">See face attendance</SecondaryButton>
            </div>
          </div>

          <div className="relative lg:col-span-6 lg:col-start-7">
            <div className="sheet p-8 pb-20 sm:p-10 sm:pb-20">
              <div className="flex items-baseline justify-between border-b border-ink pb-3">
                <p className="font-medium text-ink">Standard</p>
                <Link href="/pricing" className="link text-sm">See pricing details</Link>
              </div>
              <p className="mt-6 flex items-start font-display text-ink">
                <span className="mt-3 text-3xl">₹</span>
                <span className="text-[clamp(5rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.04em]">{PRICING.monthly}</span>
              </p>
              <p className="mt-3 text-ink-2">per employee / month, or <span className="num">₹{PRICING.annual}</span> per employee per year. GST extra.</p>
              <h2 className="mt-8 max-w-none text-xl text-ink">One price per employee. Everything included.</h2>
              <ul className="ruled mt-4 text-ink-2">
                {["Every feature in every plan", "Built for Indian payroll", "Face kiosks, payroll, compliance and insights"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 py-2.5 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-green" /> {item}</li>
                ))}
              </ul>
            </div>
            <GateEntry className="relative -mt-12 max-sm:mx-auto sm:ml-8 lg:-ml-10" />
          </div>
        </Container>
      </section>

      {/* What the product is, beside every module it covers. */}
      <section className="bg-paper-3 py-(--space-3xl)">
        <Container className="grid gap-x-(--gap-columns) gap-y-10 lg:grid-cols-12">
          <p className="lead text-ink lg:col-span-5">
            Touch-free face-recognition kiosks with liveness checks, GPS check-in for field teams, and shifts, leave and Indian payroll that
            run on the same data. From the gate to the payslip, in one place.
          </p>
          <ul className="grid grid-cols-2 gap-x-(--gap-columns) self-end border-t border-ink lg:col-span-6 lg:col-start-7" aria-label="Modules">
            {modules.map((label) => (
              <li key={label} className="border-b border-grid-strong py-3 font-medium text-ink-2">{label}</li>
            ))}
          </ul>
        </Container>
      </section>

      {/* The kiosk at work. */}
      <section className="py-(--section-gap)">
        <Container className="grid items-center gap-x-(--gap-columns) gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              title="No cards. No PINs. No proxies."
              intro="A tablet at the entrance becomes a kiosk that recognises each employee as they walk in. It checks that a real person is in front of the camera, and records how sure it is."
            />
            <dl className="mt-12 grid gap-x-(--gap-columns) border-t border-ink sm:grid-cols-2">
              {facePoints.map((point) => (
                <div key={point.title} className="border-b border-rule py-5">
                  <dt className="font-medium text-ink">{point.title}</dt>
                  <dd className="mt-1 text-muted">{point.body}</dd>
                </div>
              ))}
            </dl>
            <Link href="/features/face-recognition-attendance" className="link mt-8 inline-block">How face attendance works</Link>
          </div>
          <div className="grid items-end gap-6 sm:grid-cols-[minmax(0,1fr)_auto] lg:col-span-6">
            <FaceKioskMockup compact />
            <div className="hidden sm:block"><PhoneMockup /></div>
          </div>
        </Container>
      </section>

      {/* From the gate to the payslip. */}
      <section className="border-t border-ink bg-paper-2 py-(--section-gap)">
        <Container>
          <div className="grid gap-x-(--gap-columns) gap-y-6 lg:grid-cols-12 lg:items-end">
            <h2 className="text-ink lg:col-span-7">From the gate to the payslip, without re-typing anything.</h2>
            <p className="lead text-muted lg:col-span-4 lg:col-start-9">Attendance, leave and payroll share the same data, so month-end is a review, not a rebuild.</p>
          </div>
          <ol className="mt-16 grid gap-x-(--gap-columns) gap-y-10 [counter-reset:step] md:grid-cols-2 lg:grid-cols-4">
            {flow.map((item) => (
              <li key={item.title} className="border-t-2 border-ink pt-5 [counter-increment:step]">
                <span className="num text-3xl text-accent before:content-[counter(step,decimal-leading-zero)]" aria-hidden="true" />
                <h3 className="mt-8 text-ink">{item.title}</h3>
                <p className="mt-3 text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Before and after, as a table. */}
      <section className="py-(--section-gap)">
        <Container>
          <SectionHeading title="Month-end, without the spreadsheets." intro="The same work every business does, with the re-typing, chasing and recalculating taken out." />
          <table className="mt-14 w-full text-left max-md:block">
            <thead className="max-md:hidden">
              <tr className="border-b border-ink text-sm text-muted">
                <th scope="col" className="w-[20%] py-3 font-normal"><span className="sr-only">Area</span></th>
                <th scope="col" className="w-[40%] py-3 pr-6 font-normal">The usual way</th>
                <th scope="col" className="w-[40%] py-3 font-medium text-accent">With Vetanly</th>
              </tr>
            </thead>
            <tbody className="max-md:block max-md:border-t max-md:border-ink">
              {beforeAfter.map((row) => (
                <tr key={row.area} className="border-b border-rule max-md:grid max-md:gap-2 max-md:py-5">
                  <th scope="row" className="py-5 pr-6 align-top text-lg font-medium text-ink max-md:py-0">{row.area}</th>
                  <td className="py-5 pr-6 align-top text-muted max-md:py-0">
                    <span className="sr-only md:hidden">The usual way: </span><span className="md:hidden" aria-hidden="true">Usual: </span>{row.before}
                  </td>
                  <td className="py-5 align-top text-ink max-md:py-0">
                    <span className="flex items-start gap-2.5"><Check className="mt-1 size-4 shrink-0 text-green" /><span><span className="sr-only">With Vetanly: </span>{row.after}</span></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>

      {/* The day by the hour, on ink. */}
      <section className="bg-ink py-(--section-gap) text-paper-2">
        <Container className="grid items-center gap-x-(--gap-columns) gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              light
              title="Set the rules once. The day sorts itself out."
              intro="Shifts, grace periods, overtime and statutory rules are set up once. From then on every punch is sorted the moment it happens, including the awkward ones."
            />
            <ul className="mt-10 grid gap-x-(--gap-columns) border-t border-paper-2 sm:grid-cols-2">
              {["Late and early marks with grace", "Half day and absent from shift hours", "Overtime, with optional approval", "Offline punches synced later", "Night shifts kept on the right day", "Payroll drafted from it all"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 border-b border-ink-rule py-3 text-ink-muted"><Check className="size-4 shrink-0 text-mint" /> {item}</li>
              ))}
            </ul>
          </div>
          <figure className="m-0 lg:col-span-6 lg:col-start-7">
            <div data-slot="today" data-kind="product" data-alt="The Vetanly activity feed for one day" className="sheet bg-sheet p-6 text-ink" aria-label="Today in Vetanly, sample data">
              <p className="border-b border-ink pb-3 font-display text-xl">Today in Vetanly</p>
              <ul>
                {autoEvents.map((event) => (
                  <li key={event.time + event.tag} className="grid grid-cols-[4rem_minmax(0,1fr)] items-start gap-x-4 gap-y-2 border-b border-rule py-3.5 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:items-center">
                    <span className="num text-sm text-muted">{event.time}</span>
                    <span className="text-sm text-ink-2">{event.text}</span>
                    <span className={`chip ${event.tone} col-start-2 justify-self-start sm:col-start-3`}>{event.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figcaption className="mt-3 text-sm text-ink-muted">An example day, with sample data.</figcaption>
          </figure>
        </Container>
      </section>

      {/* Payroll. */}
      <section className="py-(--section-gap-l)">
        <Container className="grid items-center gap-x-(--gap-columns) gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <PayslipMockup />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <SectionHeading
              title="Indian payroll, worked out from real attendance."
              intro="Salary components, overtime, leave, loan EMIs and expense reimbursements in one run, with PF, ESI, professional tax and TDS calculated for you. Review the draft, then finalize."
            />
            <ul className="mt-10 grid grid-cols-2 gap-x-(--gap-columns) border-t border-ink">
              {["PF, EPS & EDLI", "ESI employee & employer", "PT slabs by state", "TDS old & new regime", "Bonus & gratuity", "Full & final settlement", "PF ECR & Form 16", "Tally journal export"].map((item) => (
                <li key={item} className="border-b border-rule py-3 text-ink-2">{item}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-6">
              <Link href="/features/payroll" className="link">Payroll</Link>
              <Link href="/features/statutory-compliance" className="link">Statutory compliance</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Every module, as an index. */}
      <section className="border-t border-ink bg-paper-2 py-(--section-gap)" id="features">
        <Container>
          <SectionHeading title="One workspace for your whole people operation." intro="Every module below is in every plan. No add-on modules, no surprise upgrades." />
          <div className="mt-16 space-y-14">
            {CATEGORIES.map((category) => (
              <div key={category.name} className="grid gap-x-(--gap-columns) gap-y-4 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <h3 className="text-ink">{category.name}</h3>
                  <p className="mt-2 text-muted">{category.blurb}</p>
                </div>
                <div className={`grid gap-x-(--gap-columns) sm:grid-cols-2 lg:col-span-9 ${FEATURES.filter((f) => f.category === category.name).length === 3 ? "lg:grid-cols-3" : ""}`}>
                  {FEATURES.filter((f) => f.category === category.name).map((feature) => <FeatureCard key={feature.slug} feature={feature} />)}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Teams. */}
      <section className="py-(--section-gap)">
        <Container>
          <SectionHeading title="Shop floors, store chains, offices and field teams." />
          <ul className="mt-14 border-t border-ink">
            {SOLUTIONS.map((solution) => (
              <li key={solution.slug}>
                <Link href={`/solutions/${solution.slug}`} className="group grid items-center gap-x-(--gap-columns) gap-y-2 border-b border-rule py-7 transition-colors duration-(--dur-short) hover:bg-paper-2 focus-visible:outline-2 focus-visible:outline-focus lg:grid-cols-12">
                  <span className="flex items-center gap-3 lg:col-span-5">
                    <Icon name={solution.icon} className="size-6 shrink-0 text-accent" />
                    <span className="font-display text-xl text-ink group-hover:text-accent">{solution.name}</span>
                  </span>
                  <span className="text-lg text-muted lg:col-span-7">{solution.headline}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-x-(--gap-columns) gap-y-4 lg:grid-cols-12">
            <p className="text-muted lg:col-span-4">Made for businesses with shifts, gates and payrolls, like</p>
            <ul className="flex flex-wrap gap-2 lg:col-span-8">
              {industries.map((industry) => (
                <li key={industry} className="chip min-h-9 bg-paper-2 px-3 text-sm ring-1 ring-rule">{industry}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Roles. */}
      <section className="bg-paper-3 py-(--section-gap-s)">
        <Container className="grid gap-x-(--gap-columns) gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading title="The right view for every role." intro="Owners see the whole business. HR and branch managers see the people they manage. Employees see their own." />
          </div>
          <dl className="grid gap-x-(--gap-columns) sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {roles.map((role) => (
              <div key={role.title} className="border-t border-ink py-6">
                <dt className="flex items-center gap-2.5 font-display text-xl text-ink"><Icon name={role.icon} className="size-5 text-accent" />{role.title}</dt>
                <dd className="mt-2 text-muted">{role.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading title="Questions" />
          </div>
          <div className="lg:col-span-8"><Faqs faqs={homeFaqs} /></div>
        </Container>
      </section>

      <CtaBand title="Make month-end a review, not a rebuild." />
    </>
  );
}
