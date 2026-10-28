import type { Metadata } from "next";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, withSocial } from "@/app/seo";
import { SITE_ORIGIN } from "@/app/site-config";

import { Check, Icon } from "@/components/icons";
import { DashboardMockup, FaceKioskMockup } from "@/components/mockups";
import { Checklist, Container, CtaBand, Faqs, PrimaryButton, RelatedFeatures, SecondaryButton, SectionHeading } from "@/components/ui";
import { featureBySlug } from "@/content/features";

export const metadata: Metadata = withSocial({
  title: "Face Recognition Attendance System",
  description:
    "Touch-free face recognition attendance kiosks with liveness detection and shift-aware attendance that flows straight into Indian payroll.",
  alternates: { canonical: "/features/face-recognition-attendance" },
});

const steps = [
  { title: "Register a kiosk", body: "Add a tablet as a kiosk in Vetanly and assign it to a branch. It gets its own device key." },
  { title: "Enrol faces", body: "Each employee looks at the kiosk once to enrol. Templates sync to the kiosks." },
  { title: "Walk in", body: "Employees look at the screen to check in or out. No touching, no queue at a fingerprint reader." },
  { title: "Verified punch", body: "The face is matched against that employee's templates, liveness is checked, and the score is stored." },
  { title: "Ready for payroll", body: "Each punch is matched to that day's shift: present, late, half day or overtime." },
];

const controls = [
  { title: "Liveness detection", body: "Refuse punches that fail the liveness check, so photos and screens cannot stand in for a person.", icon: "shield" as const },
  { title: "Match threshold per kiosk", body: "Strict at the server room, more forgiving at a dusty factory gate.", icon: "spark" as const },
  { title: "Device keys", body: "Each kiosk authenticates with its own key, which you can rotate or switch off.", icon: "lock" as const },
  { title: "Kiosk health", body: "See when each kiosk last checked in and which branch it belongs to.", icon: "building" as const },
  { title: "Duplicate-safe", body: "Retries after a network drop never create a second punch.", icon: "clock" as const },
  { title: "Revoke face data", body: "Remove an employee's face templates from their profile at any time.", icon: "face" as const },
];

type Mark = "yes" | "partly" | "no";
const comparison: { label: string; face: Mark; finger: Mark; card: Mark; paper: Mark }[] = [
  { label: "Touch-free", face: "yes", finger: "no", card: "yes", paper: "no" },
  { label: "Stops proxy / buddy punching", face: "yes", finger: "yes", card: "no", paper: "no" },
  { label: "Nothing to lose or forget", face: "yes", finger: "yes", card: "no", paper: "yes" },
  { label: "Works with gloves or worn fingertips", face: "yes", finger: "no", card: "yes", paper: "yes" },
  { label: "Confidence recorded per punch", face: "yes", finger: "partly", card: "no", paper: "no" },
  { label: "Feeds shifts and payroll directly", face: "yes", finger: "partly", card: "partly", paper: "no" },
];

const markCell = (mark: Mark) =>
  mark === "yes" ? (
    <span className="inline-flex items-center gap-1.5 text-green"><Check className="size-4" /><span className="text-sm">Yes</span></span>
  ) : mark === "partly" ? (
    <span className="text-sm text-amber">Depends</span>
  ) : (
    <span className="text-sm text-muted">No</span>
  );

export default function FaceRecognitionPage() {
  const feature = featureBySlug("face-recognition-attendance")!;
  return (
    <>
      <JsonLd data={faqJsonLd(feature.faqs)} />
      {SITE_ORIGIN && <JsonLd data={breadcrumbJsonLd(SITE_ORIGIN, [{ name: "Home", path: "/" }, { name: "Features", path: "/features" }, { name: feature.name, path: "/features/face-recognition-attendance" }])} />}
      {/* Stage hero: the kiosk screen beside the head. */}
      <section className="border-b border-ink">
        <Container className="grid min-h-[calc(100svh-4rem)] items-center gap-x-(--gap-columns) gap-y-14 py-(--space-2xl) lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="max-w-[13ch] text-ink">Face recognition attendance system</h1>
            <p className="lead mt-6 text-ink-2">The face is the punch card.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryButton>Start free trial</PrimaryButton>
              <SecondaryButton href="/contact">Plan a kiosk rollout</SecondaryButton>
            </div>
          </div>
          <div className="flex justify-center lg:col-span-6 lg:col-start-7 lg:justify-start">
            <FaceKioskMockup />
          </div>
        </Container>
      </section>

      <section className="py-(--section-gap)">
        <Container>
          <div className="mb-(--space-3xl) grid gap-x-(--gap-columns) gap-y-10 border-b border-ink pb-(--space-3xl) lg:grid-cols-12">
            <p className="lead text-ink lg:col-span-6">{feature.intro}</p>
            <ul className="grid self-end border-t border-ink sm:grid-cols-2 sm:gap-x-(--gap-columns) lg:col-span-5 lg:col-start-8">
              {["Liveness check", "Match score on every punch", "Kiosk per gate or branch", "Revocable face data"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 border-b border-rule py-3 text-ink-2"><Check className="size-4 shrink-0 text-green" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-x-(--gap-columns) gap-y-6 lg:grid-cols-12 lg:items-end">
            <h2 className="text-ink lg:col-span-6">Live in an afternoon.</h2>
            <p className="lead text-muted lg:col-span-5 lg:col-start-8">No special hardware rollout: a tablet at each entrance and a few minutes of enrolment per employee.</p>
          </div>
          <ol className="mt-16 grid gap-x-(--gap-columns) gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t-2 border-ink pt-5">
                <span className="num text-3xl text-accent" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-ink">{step.title}</h3>
                <p className="mt-3 text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-ink bg-paper-2 py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading title="Controls that keep every punch honest." />
          </div>
          <dl className="grid gap-x-(--gap-columns) sm:grid-cols-2 lg:col-span-8">
            {controls.map((control) => (
              <div key={control.title} className="border-t border-ink py-6">
                <dt className="flex items-center gap-2.5 font-display text-xl text-ink"><Icon name={control.icon} className="size-5 shrink-0 text-accent" />{control.title}</dt>
                <dd className="mt-2 text-muted">{control.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-(--section-gap)">
        <Container className="grid items-center gap-x-(--gap-columns) gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              title="Punches become payroll-ready days."
              intro="A punch alone is not attendance. Vetanly matches it to the employee's shift for that date, including rotations and night shifts, and works out late minutes, early leaving, half days and overtime."
            />
            <ul className="ruled mt-10 text-ink-2">
              {[
                "Late and early-leave minutes against each day's shift",
                "Night shifts that end after midnight",
                "Approved leave and holidays by branch",
                "Overtime approval before it is paid",
                "Attendance corrections with a manager's approval",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 py-3"><Check className="mt-1 size-4 shrink-0 text-green" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7"><DashboardMockup /></div>
        </Container>
      </section>

      <section className="bg-paper-3 py-(--section-gap-s)">
        <Container>
          <SectionHeading title="Why face recognition?" intro="How common attendance methods typically compare." />
          <div className="mt-12">
            <table className="w-full text-left max-md:block">
              <thead className="max-md:hidden">
                <tr className="border-b border-ink text-sm text-muted">
                  <th className="py-3 pr-4 font-normal" scope="col"><span className="sr-only">Capability</span></th>
                  <th className="py-3 pr-4 font-medium text-accent" scope="col">Vetanly face kiosk</th>
                  <th className="py-3 pr-4 font-normal" scope="col">Fingerprint</th>
                  <th className="py-3 pr-4 font-normal" scope="col">RFID card</th>
                  <th className="py-3 font-normal" scope="col">Paper register</th>
                </tr>
              </thead>
              <tbody className="max-md:block max-md:border-t max-md:border-ink">
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-grid-strong max-md:grid max-md:grid-cols-2 max-md:gap-x-4 max-md:gap-y-2 max-md:py-5">
                    <th className="py-4 pr-4 font-medium text-ink max-md:col-span-2 max-md:py-0" scope="row">{row.label}</th>
                    {([["Vetanly face kiosk", row.face], ["Fingerprint", row.finger], ["RFID card", row.card], ["Paper register", row.paper]] as const).map(([method, mark]) => (
                      <td key={method} className="py-4 pr-4 max-md:flex max-md:justify-between max-md:py-0">
                        <span className="text-sm text-muted md:hidden">{method}</span>{markCell(mark)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading title="Face data, handled with care." />
            <p className="mt-5 text-muted">
              Vetanly stores mathematical face templates for matching, keeps a bounded number per employee by retiring old ones, and lets an
              admin revoke an employee&apos;s face data at any time. Ask employees for their consent before enrolment, as good practice and
              as India&apos;s data protection law expects.
            </p>
          </div>
          <div className="lg:col-span-8"><Checklist items={feature.details} columns={2} /></div>
        </Container>
      </section>

      <section className="border-t border-ink bg-paper-2 py-(--section-gap)">
        <Container className="grid gap-x-(--gap-columns) gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading title="Face attendance, answered." /></div>
          <div className="lg:col-span-8"><Faqs faqs={feature.faqs} /></div>
        </Container>
      </section>

      <section className="py-(--section-gap-s)">
        <Container>
          <h2 className="mb-6 text-ink">Works with</h2>
          <RelatedFeatures slugs={feature.related} />
        </Container>
      </section>

      <CtaBand title="Put a face kiosk at your gate this week." />
    </>
  );
}
