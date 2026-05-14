import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import roiMoney from "@/assets/roi-money.jpg";

export const Route = createFileRoute("/cost")({
  head: () => ({
    meta: [
      { title: "The Cost — CutPayroll" },
      { name: "description", content: "Per-role breakdown of what your back-office actually costs and what you keep when it stops." },
    ],
  }),
  component: CostPage,
});

const rows = [
  { role: "Bookkeeper", hours: "40 hrs/wk", output: "Reconciles last month, by next month", cost: 72000, ours: 4800 },
  { role: "Payroll Clerk", hours: "40 hrs/wk", output: "Same 14 spreadsheets, every Friday", cost: 65000, ours: 3600 },
  { role: "Compliance Officer", hours: "40 hrs/wk", output: "Files 3 reports, panics about audits", cost: 95000, ours: 6000 },
  { role: "Marketing Coordinator", hours: "40 hrs/wk", output: "2 Instagram posts, 1 newsletter", cost: 68000, ours: 5400 },
  { role: "Admin Assistant", hours: "40 hrs/wk", output: "Forwards emails, schedules meetings", cost: 54000, ours: 2400 },
  { role: "Investor Relations", hours: "40 hrs/wk", output: "Quarterly deck. That's it.", cost: 110000, ours: 7200 },
  { role: "HR Generalist", hours: "40 hrs/wk", output: "PTO requests, birthdays, exit interviews", cost: 78000, ours: 3000 },
  { role: "Office Manager", hours: "40 hrs/wk", output: "Orders snacks, books travel, watches Slack", cost: 62000, ours: 1800 },
];

const total = rows.reduce((a, r) => a + r.cost, 0);
const totalOurs = rows.reduce((a, r) => a + r.ours, 0);

const hidden = [
  { v: "+27%", l: "Loaded benefits & payroll tax on every salary above" },
  { v: "$11K", l: "Per-seat SaaS sprawl across the average back-office" },
  { v: "1.6×", l: "Manager overhead — every five hires triggers a sixth" },
  { v: "9 wks", l: "Average ramp before a new hire is actually useful" },
];

function CostPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="02 — The Cost"
        title={<>The math nobody on payroll <em className="text-primary">wants you to do.</em></>}
        subtitle="Salary is the small number. Add benefits, software, real estate, manager overhead, and the cost of doing the same task three times. Then compare to a system that does it once, overnight."
        image={roiMoney}
      />

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">The receipts</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-3xl">Eight chairs. <em className="text-primary">${(total - totalOurs).toLocaleString()} a year.</em></h2>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[860px]">
            <thead>
              <tr className="text-left font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-border">
                <th className="py-4">Role</th>
                <th className="py-4">Hours</th>
                <th className="py-4">Actual output</th>
                <th className="py-4 text-right">You pay</th>
                <th className="py-4 text-right">We charge</th>
                <th className="py-4 text-right text-primary">You keep</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.role} className="border-b border-border/60 hover:bg-card/40 transition-colors">
                  <td className="py-5 font-serif text-xl">{r.role}</td>
                  <td className="py-5 text-sm text-muted-foreground">{r.hours}</td>
                  <td className="py-5 text-sm text-muted-foreground max-w-xs">{r.output}</td>
                  <td className="py-5 text-right line-through decoration-destructive/60">${r.cost.toLocaleString()}</td>
                  <td className="py-5 text-right">${r.ours.toLocaleString()}</td>
                  <td className="py-5 text-right text-primary font-medium">${(r.cost - r.ours).toLocaleString()}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="pt-8 font-serif text-2xl">Total</td>
                <td className="pt-8 text-right line-through decoration-destructive/60">${total.toLocaleString()}</td>
                <td className="pt-8 text-right">${totalOurs.toLocaleString()}</td>
                <td className="pt-8 text-right">
                  <span className="font-serif text-3xl text-primary">${(total - totalOurs).toLocaleString()}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow">The hidden tax</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">What the salary line <em className="text-primary">doesn't</em> show.</h2>
            <p className="mt-6 text-muted-foreground">Comp shows up on a P&L. Everything that comes with it shows up on the bottom line — and it's the bigger number.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {hidden.map((h) => (
              <div key={h.l} className="rounded-2xl border border-border p-8 hover-lift">
                <p className="font-serif text-5xl text-primary">{h.v}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{h.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Five-year outlook</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">Compounding the wrong way <em className="text-primary">vs.</em> the right way.</h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border p-10">
            <p className="label-mono">Status quo</p>
            <p className="mt-4 font-serif text-6xl line-through decoration-destructive/60">$3.2M</p>
            <p className="mt-3 text-sm text-muted-foreground">5-year all-in cost of an 8-person back office, with 4% annual comp inflation, SaaS sprawl growth, and one re-hire cycle.</p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>• Avg 1.4 turnovers per role · ~9 wks ramp each</li>
              <li>• Manager hire #2 by year 3</li>
              <li>• 18% benefits drift over 5 yrs</li>
              <li>• Zero compounding output gain</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary p-10 bg-card">
            <p className="label-mono text-primary">With CutPayroll</p>
            <p className="mt-4 font-serif text-6xl text-primary">$214K</p>
            <p className="mt-3 text-sm text-muted-foreground">5-year fully-loaded fee. Locked-in pricing for 24 months, indexed to CPI thereafter. Includes 24/7 ops, SLAs, and quarterly reviews.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>• 0 turnover, 0 ramp, 0 PTO</li>
              <li>• Output scales without hires</li>
              <li>• Audit-ready logs included</li>
              <li>• <span className="text-primary font-medium">~$2.98M kept over 5 years</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Where the money actually goes</p>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">Salary is <em className="text-primary">38%</em> of the bill.</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { p: "38%", l: "Base salary" },
            { p: "21%", l: "Benefits, taxes, equity" },
            { p: "14%", l: "Real estate & equipment" },
            { p: "11%", l: "SaaS sprawl" },
            { p: "9%", l: "Manager-of-managers overhead" },
            { p: "4%", l: "Recruiting & onboarding" },
            { p: "2%", l: "Training & certifications" },
            { p: "1%", l: "Snacks, swag, offsites" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border p-6">
              <p className="font-serif text-4xl text-primary">{s.p}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="rounded-3xl bg-card border border-border p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="eyebrow">Next</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">See what replaces all of it.</h2>
          </div>
          <Link to="/fix" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover-lift">
            The Fix <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
