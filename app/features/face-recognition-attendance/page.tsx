import type { Metadata } from "next";

import { ArrowRight, Check, Icon } from "@/components/icons";
import { DashboardMockup, FaceKioskMockup } from "@/components/mockups";
import { Checklist, Container, CtaBand, Eyebrow, Faqs, PrimaryButton, RelatedFeatures, SecondaryButton, SectionHeading } from "@/components/ui";
import { featureBySlug } from "@/content/features";

export const metadata: Metadata = {
  title: "Face Recognition Attendance System",
  description:
    "Touch-free face recognition attendance kiosks with liveness detection, per-kiosk match thresholds and shift-aware attendance that flows straight into Indian payroll.",
  alternates: { canonical: "/features/face-recognition-attendance" },
};

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
    <span className="inline-grid size-6 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="size-3.5" /></span>
  ) : mark === "partly" ? (
    <span className="text-xs font-medium text-amber-600">Depends</span>
  ) : (
    <span className="text-slate-300">—</span>
  );

export default function FaceRecognitionPage() {
  const feature = featureBySlug("face-recognition-attendance")!;
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="dark-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow light>Face recognition attendance</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">The face is the punch card.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{feature.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton>Start free trial <ArrowRight /></PrimaryButton>
              <SecondaryButton href="/contact" light>Plan a kiosk rollout</SecondaryButton>
            </div>
            <ul className="mt-9 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
              {["Liveness check", "Match score on every punch", "Kiosk per gate or branch", "Revocable face data"].map((item) => (
                <li key={item} className="flex items-center gap-2"><Check className="size-4 text-emerald-400" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="float-y"><FaceKioskMockup /></div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading center eyebrow="How it works" title="Live in an afternoon." intro="No special hardware rollout: a tablet at each entrance and a few minutes of enrolment per employee." />
          <ol className="mt-14 grid gap-5 md:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.title} className="relative rounded-2xl border border-slate-200 p-5">
                <span className="grid size-9 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-4 font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Built against fraud" title="Controls that keep every punch honest." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((control) => (
              <div key={control.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-slate-950 text-white"><Icon name={control.icon} className="size-5" /></span>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{control.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{control.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Beyond the kiosk"
              title="Punches become payroll-ready days."
              intro="A punch alone is not attendance. Vetanly matches it to the employee's shift for that date, including rotations and night shifts, and works out late minutes, early leaving, half days and overtime."
            />
            <ul className="mt-8 space-y-3 text-slate-700">
              {[
                "Late and early-leave minutes against each day's shift",
                "Night shifts that end after midnight",
                "Approved leave and holidays by branch",
                "Overtime approval before it is paid",
                "Attendance corrections with a manager's approval",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3"><Check className="mt-1 size-4 shrink-0 text-emerald-600" /> {item}</li>
              ))}
            </ul>
          </div>
          <DashboardMockup />
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Compared" title="Why face recognition?" intro="How common attendance methods typically compare." />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="px-5 py-4 font-medium" scope="col"><span className="sr-only">Capability</span></th>
                  <th className="bg-brand-50 px-5 py-4 text-center font-semibold text-brand-700" scope="col">Vetanly face kiosk</th>
                  <th className="px-5 py-4 text-center font-medium" scope="col">Fingerprint</th>
                  <th className="px-5 py-4 text-center font-medium" scope="col">RFID card</th>
                  <th className="px-5 py-4 text-center font-medium" scope="col">Paper register</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100 last:border-0">
                    <th className="px-5 py-3.5 text-left font-medium text-slate-800" scope="row">{row.label}</th>
                    <td className="bg-brand-50/50 px-5 py-3.5 text-center">{markCell(row.face)}</td>
                    <td className="px-5 py-3.5 text-center">{markCell(row.finger)}</td>
                    <td className="px-5 py-3.5 text-center">{markCell(row.card)}</td>
                    <td className="px-5 py-3.5 text-center">{markCell(row.paper)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow="Privacy" title="Face data, handled with care." />
            <p className="mt-4 text-slate-600">
              Vetanly stores mathematical face templates for matching, keeps a bounded number per employee by retiring old ones, and lets an
              admin revoke an employee&apos;s face data at any time. Ask employees for their consent before enrolment, as good practice and
              as India&apos;s data protection law expects.
            </p>
          </div>
          <Checklist items={feature.details} columns={2} />
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Questions" title="Face attendance, answered." />
          <Faqs faqs={feature.faqs} />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-slate-950">Works with</h2>
          <RelatedFeatures slugs={feature.related} />
        </Container>
      </section>

      <CtaBand title="Put a face kiosk at your gate this week." />
    </>
  );
}
