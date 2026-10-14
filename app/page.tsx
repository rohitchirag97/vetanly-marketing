import { APPLICATION_ORIGIN } from "./site-config";

const productDescription =
  "HazriPro brings employee attendance, leave, HR records and payroll into one clear workspace for growing teams.";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HazriPro",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: productDescription,
};

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="1" y="1" width="38" height="38" rx="13" fill="currentColor" />
        <path d="M11 20.5 17.1 26 29 14" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 10.5h14" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity=".55" />
      </svg>
    </span>
  );
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3.5 10h12m-4.5-4.5L15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

function FeatureIcon({ name }: { name: "attendance" | "leave" | "payroll" | "records" | "reports" | "slips" }) {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const drawings = {
    attendance: <><circle cx="12" cy="12" r="8.25" {...common} /><path d="M12 7.5v5l3.2 1.8" {...common} /></>,
    leave: <><rect x="4" y="5.5" width="16" height="15" rx="2.5" {...common} /><path d="M8 3.5v4m8-4v4M4 10h16m-10 4h4" {...common} /></>,
    payroll: <><rect x="3.5" y="5" width="17" height="14" rx="2.5" {...common} /><path d="M3.5 9.5h17M8 14h4m3.5 0h.5" {...common} /></>,
    records: <><path d="M6 3.75h8l4 4v12.5H6a2 2 0 0 1-2-2v-12.5a2 2 0 0 1 2-2Z" {...common} /><path d="M14 4v4h4m-9 4h5m-5 4h5" {...common} /></>,
    reports: <><path d="M4 19V5m0 14h16" {...common} /><path d="m7 14 3-3 2.5 2 4.5-5" {...common} /><path d="M17 8h2v2" {...common} /></>,
    slips: <><path d="M5 4.5h14v15l-3.5-2-3.5 2-3.5-2-3.5 2v-15Z" {...common} /><path d="M8.5 9h7m-7 4h7" {...common} /></>,
  };
  return <span className="feature-icon"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{drawings[name]}</svg></span>;
}

const features = [
  { icon: "attendance" as const, number: "01", title: "Attendance that tells the full story", copy: "Keep manual punches and optional face-verified kiosk attendance in one view. See daily status, late arrivals and incomplete shifts together." },
  { icon: "leave" as const, number: "02", title: "Leave and exceptions, in context", copy: "Bring leave requests, balances, attendance corrections and overtime approvals into the same month you use to prepare payroll." },
  { icon: "payroll" as const, number: "03", title: "Payroll you can review before closing", copy: "Calculate pay from attendance, approved leave, shifts, overtime, salary components and configured deductions. Review a draft before finalizing." },
  { icon: "records" as const, number: "04", title: "Employee records from day one", copy: "Keep job details, personal records, documents and onboarding or offboarding checklists connected to each employee." },
  { icon: "reports" as const, number: "05", title: "India-focused statutory workflows", copy: "Work with PF, ESI, professional tax and TDS calculations, plus exports that support your filing process." },
  { icon: "slips" as const, number: "06", title: "Payslips employees can find", copy: "Employees can view their finalized salary slips in the app. Admins can also send finalized slips through a configured WhatsApp connection." },
];

const steps = [
  { number: "01", title: "Bring the day into view", copy: "Record attendance by hand or through a kiosk, and see who is present, missing a punch or awaiting review." },
  { number: "02", title: "Resolve the open items", copy: "Review leave, corrections and overtime before they affect the payroll period." },
  { number: "03", title: "Prepare and close payroll", copy: "Generate a draft, review employee totals and deductions, then finalize and share salary slips." },
];

const faqs = [
  { question: "Can we use HazriPro without a kiosk?", answer: "Yes. Teams can record attendance manually. Kiosk attendance is an additional option for organizations that use compatible devices." },
  { question: "What goes into a payroll calculation?", answer: "HazriPro uses configured pay details together with attendance, approved leave, shift rules, overtime, salary components and eligible deductions. You can review the run before finalizing it." },
  { question: "Can employees use the app themselves?", answer: "Yes. Employees have self-service access for their own attendance, leave workflows, profile details and finalized salary slips. Organization roles control access to management screens." },
  { question: "Does it support Indian statutory payroll?", answer: "The product includes calculations and reporting workflows for PF, ESI, professional tax and TDS. Review generated figures with your payroll or tax adviser before filing." },
  { question: "How do we get started?", answer: "Open the HazriPro workspace to sign in or create your organization, then add employees and configure attendance and payroll settings." },
];

export default function Home() {
  const loginUrl = APPLICATION_ORIGIN + "/login";
  const jsonLd = JSON.stringify(softwareSchema).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div id="top" className="site-shell">
        <div className="announcement-bar">
          <span className="announcement-dot" />
          <p>One connected workspace for attendance, people operations and payroll.</p>
          <a href="#product">See what’s inside <ArrowIcon /></a>
        </div>

        <header className="site-header">
          <a className="brand" href="#top" aria-label="HazriPro home">
            <BrandMark />
            <span className="brand-word">hazri<span>pro</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#product">Product</a>
            <a href="#workflow">How it works</a>
            <a href="#teams">For your team</a>
            <a href="#faq">FAQs</a>
          </nav>
          <div className="header-actions">
            <a className="sign-in-link" href={loginUrl}>Sign in</a>
            <a className="button button-dark button-small" href={loginUrl}>Open workspace <ArrowIcon diagonal /></a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation">
              <a href="#product">Product</a>
              <a href="#workflow">How it works</a>
              <a href="#teams">For your team</a>
              <a href="#faq">FAQs</a>
              <a href={loginUrl}>Sign in to HazriPro <ArrowIcon diagonal /></a>
            </nav>
          </details>
        </header>

        <main id="main">
          <section className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> PEOPLE OPERATIONS, IN RHYTHM</p>
              <h1>From clock-in to payslip, <em>keep everyone in step.</em></h1>
              <p className="hero-description">HazriPro brings attendance, leave, employee records and payroll into one clear workspace—so your team can spend less time piecing the month together.</p>
              <div className="hero-actions">
                <a className="button button-lime" href={loginUrl}>Open your workspace <ArrowIcon diagonal /></a>
                <a className="text-link" href="#product">Explore the platform <ArrowIcon /></a>
              </div>
              <div className="hero-caption">
                <div className="avatar-stack" aria-hidden="true"><span>HR</span><span>AD</span><span>MK</span></div>
                <p>One place for the daily work behind a smoother payday.</p>
              </div>
            </div>

            <div className="hero-art" aria-label="Illustrative HazriPro workspace preview with sample attendance and payroll data">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="orbit-spark">✳</div>
              <div className="workspace-window">
                <div className="window-topbar">
                  <div className="window-brand"><BrandMark /><span>hazri<span>pro</span></span></div>
                  <span className="preview-label"><i /> SAMPLE WORKSPACE</span>
                  <div className="profile-chip"><span>AM</span><b>Admin</b><span className="profile-chevron">⌄</span></div>
                </div>
                <div className="workspace-body">
                  <aside className="preview-sidebar">
                    <div className="side-brand-mini"><BrandMark /></div>
                    <span className="side-active"><i>◷</i></span>
                    <span><i>▦</i></span>
                    <span><i>♧</i></span>
                    <span><i>▤</i></span>
                    <span className="side-spacer" />
                    <span><i>⚙</i></span>
                  </aside>
                  <div className="preview-content">
                    <div className="preview-heading">
                      <div><small>MONDAY, 12 OCTOBER</small><h2>Your team at a glance</h2></div>
                      <span className="today-pill"><i /> Today</span>
                    </div>
                    <div className="metric-grid">
                      <div className="metric-card"><span>Present today</span><strong>128 <small>/ 142</small></strong><div className="metric-foot"><b className="trend-up">↗ 90%</b><span>of your team</span></div><div className="metric-progress"><i style={{ width: "90%" }} /></div></div>
                      <div className="metric-card metric-pay"><span>Payroll this period</span><strong>₹6,84,280</strong><div className="metric-foot"><b>October</b><span>draft preview</span></div><div className="pay-sparkline"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
                    </div>
                    <div className="preview-lower">
                      <div className="attendance-panel">
                        <div className="panel-heading"><div><strong>Attendance</strong><span>Today’s team status</span></div><span className="panel-more">•••</span></div>
                        <div className="attendance-head"><span>EMPLOYEE</span><span>CHECK IN</span><span>STATUS</span></div>
                        <div className="attendance-row"><span className="person"><i className="person-avatar avatar-coral">AD</i><b>Anaya Das</b></span><span>09:04 AM</span><span className="status status-present"><i /> Present</span></div>
                        <div className="attendance-row"><span className="person"><i className="person-avatar avatar-blue">SK</i><b>Samar Khanna</b></span><span>09:16 AM</span><span className="status status-present"><i /> Present</span></div>
                        <div className="attendance-row"><span className="person"><i className="person-avatar avatar-yellow">MG</i><b>Mita Ghosh</b></span><span>—</span><span className="status status-review"><i /> Incomplete</span></div>
                        <div className="attendance-footer"><span>Sample records</span><span>View attendance <ArrowIcon /></span></div>
                      </div>
                      <div className="mini-side-card">
                        <span className="mini-card-icon">✦</span>
                        <small>NEEDS A LOOK</small>
                        <strong>4 items</strong>
                        <p>Pending review in this sample workspace.</p>
                        <div className="mini-card-link">Review items <ArrowIcon /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-note"><span className="floating-check">✓</span><span><b>Month in view</b><small>Attendance · leave · payroll</small></span></div>
              <span className="art-caption">A workspace preview with sample data</span>
            </div>
          </section>

          <section className="capability-strip" aria-label="HazriPro capabilities">
            <span>ONE WORKSPACE, CONNECTED BY THE MONTH</span>
            <div><b>Attendance</b><i /> <b>Leave</b><i /> <b>Employee records</b><i /> <b>Payroll</b><i /> <b>Statutory reports</b></div>
          </section>

          <section className="section product-section" id="product">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-line" /> THE WORK, ALL CONNECTED</p>
                <h2>Less chasing.<br /><em>More clarity.</em></h2>
              </div>
              <p className="section-intro">Attendance is only one part of the month. HazriPro brings the people work around it into the same place, so your team can see what needs attention and what’s ready to move forward.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.number}>
                  <div className="feature-card-top"><FeatureIcon name={feature.icon} /><span>{feature.number}</span></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                  <span className="feature-line" />
                </article>
              ))}
            </div>
          </section>

          <section className="workflow-section" id="workflow">
            <div className="workflow-top">
              <div>
                <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A CLEARER MONTH-END</p>
                <h2>Good payroll starts<br />with a <em>good daily view.</em></h2>
              </div>
              <p>Resolve the small things as they happen. When payroll time comes around, the picture is already taking shape.</p>
            </div>
            <div className="workflow-steps">
              {steps.map((step) => (
                <article className="workflow-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div className="step-rule" />
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
            <div className="workflow-footer"><span><i /> Built around your organization’s roles and approvals</span><a href="#teams">See how teams use it <ArrowIcon /></a></div>
          </section>

          <section className="section teams-section" id="teams">
            <div className="teams-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> FOR THE WHOLE TEAM</p>
              <h2>Everyone gets<br />the view <em>they need.</em></h2>
              <p>Give managers, HR and employees a shared place to work—with organization roles that shape which tools and records each person can access.</p>
              <a className="text-link" href="#faq">Explore common questions <ArrowIcon /></a>
            </div>
            <div className="roles-card">
              <div className="role-row"><span className="role-icon role-owner">⌂</span><div><strong>Owners & admins</strong><p>Manage people, settings and payroll workflows.</p></div><span className="role-arrow"><ArrowIcon diagonal /></span></div>
              <div className="role-row"><span className="role-icon role-hr">✳</span><div><strong>HR teams</strong><p>Handle employee records and day-to-day people operations.</p></div><span className="role-arrow"><ArrowIcon diagonal /></span></div>
              <div className="role-row"><span className="role-icon role-employee">↗</span><div><strong>Employees</strong><p>Check personal attendance, requests and finalized payslips.</p></div><span className="role-arrow"><ArrowIcon diagonal /></span></div>
              <div className="roles-card-footer"><span className="roles-lock">⌑</span><span>Access follows your organization’s role setup.</span></div>
            </div>
          </section>

          <section className="faq-section" id="faq">
            <div className="faq-heading">
              <p className="eyebrow"><span className="eyebrow-line" /> GOOD TO KNOW</p>
              <h2>Questions,<br /><em>answered.</em></h2>
              <p>Want to see if HazriPro fits your team? Start with the workspace and explore the everyday flow.</p>
              <a className="text-link" href={loginUrl}>Go to sign in <ArrowIcon diagonal /></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary><span>{faq.question}</span><i /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="closing-section" id="contact">
            <div className="closing-orb closing-orb-one" /><div className="closing-orb closing-orb-two" />
            <div className="closing-content">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> MAKE THE MONTH EASIER TO SEE</p>
              <h2>Bring your people<br />work <em>into step.</em></h2>
              <p>Start with attendance. Keep the rest of the month connected.</p>
              <a className="button button-lime" href={loginUrl}>Open HazriPro <ArrowIcon diagonal /></a>
            </div>
            <div className="closing-stamp"><span>H</span><small>PEOPLE<br />IN RHYTHM</small></div>
          </section>
        </main>

        <footer className="site-footer">
          <a className="brand footer-brand" href="#top"><BrandMark /><span className="brand-word">hazri<span>pro</span></span></a>
          <p>People operations, in rhythm.</p>
          <div className="footer-links"><a href="#product">Product</a><a href="#workflow">How it works</a><a href="#faq">FAQs</a><a href={loginUrl}>Sign in <ArrowIcon diagonal /></a></div>
          <span className="copyright">© 2026 HazriPro</span>
        </footer>
      </div>
    </>
  );
}
