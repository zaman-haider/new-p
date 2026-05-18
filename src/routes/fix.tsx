import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight, Check } from "lucide-react";
import solutionRoom from "@/assets/solution-room.jpg";

export const Route = createFileRoute("/fix")({
  head: () => ({
    meta: [
      { title: "The Fix — CutPayroll" },
      { name: "description", content: "One always-on system replaces every back-office department in 14 days." },
    ],
  }),
  component: FixPage,
});

const replaces = [
  { n: "01", t: "Bookkeeping", b: "Daily reconciliation, expense categorization, monthly closes — done overnight." },
  { n: "02", t: "Payroll", b: "Direct deposit, tax filings, garnishments, benefits sync — every cycle, on time." },
  { n: "03", t: "Compliance", b: "State filings, license renewals, audit prep — flagged before deadlines hit." },
  { n: "04", t: "Marketing", b: "Email campaigns, social posts, SEO content, ad copy — published on schedule." },
  { n: "05", t: "Admin", b: "Inbox triage, scheduling, document prep, vendor follow-up — handled silently." },
  { n: "06", t: "IR & Reporting", b: "Investor decks, monthly KPIs, board memos — generated from your live data." },
];

const stack = ["QuickBooks", "Gusto", "Salesforce", "HubSpot", "NetSuite", "Xero", "Stripe", "Plaid", "Slack", "Notion", "Airtable", "Google Workspace"];

const timeline = [
  { d: "Day 1–2", t: "Audit", b: "We map every recurring task across your back office. We'll find work nobody admits exists." },
  { d: "Day 3–5", t: "Connect", b: "Read-only credentials into your existing stack. No migration. No new portal for your team." },
  { d: "Day 6–10", t: "Train", b: "We mirror your formats, your tone, your approval chains. The system learns your business, not the reverse." },
  { d: "Day 11–13", t: "Shadow", b: "We run the system in parallel. Every output is reviewed by your team and ours." },
  { d: "Day 14", t: "Live", b: "Cutover. The work happens. Your people stop pretending it was theirs." },
];

function FixPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="03 — The Fix"
        title={<>One quiet system. <em className="text-primary">Zero drama.</em></>}
        subtitle="We replace entire back-office departments with a single, always-on system that plugs into your existing tools. No new platforms. No retraining. No 'what about Carol?'"
        image={solutionRoom}
      />

      <section className="container-x py-24 md:py-32 border-b border-border">
        <div className="grid lg:grid-cols-2 gap-12">
          <ul className="space-y-4">
            {[
              "Deployed in 14 days, not 14 months",
              "Works inside your existing software",
              "Costs less than a single junior salary",
              "Never quits, never sleeps, never gossips",
              "Audit-ready logs on every action",
              "SLA-backed uptime, 24/7 ops support",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-lg">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
          <div>
            <p className="eyebrow">Plays nice with</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="rounded-full border border-border px-4 py-2 text-sm hover:border-primary transition-colors">{s}</span>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">…and a hundred others. If your team uses it, we plug into it.</p>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">What gets replaced</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">Six departments. <em className="text-primary">One system.</em></h2>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {replaces.map((r) => (
            <div key={r.n} className="bg-background p-8 hover:bg-card transition-all duration-500 hover:-translate-y-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{r.n} Replaced</p>
              <h3 className="mt-4 font-serif text-3xl">{r.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Deployment</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">14 days. <em className="text-primary">No project plan required.</em></h2>
        <div className="mt-16 grid md:grid-cols-5 gap-6">
          {timeline.map((s, i) => (
            <div key={s.d} className="relative">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{s.d}</p>
              <h3 className="mt-3 font-serif text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
              {i < timeline.length - 1 && <div className="hidden md:block absolute top-2 -right-3 h-px w-6 bg-border" />}
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="rounded-3xl bg-card border border-border p-10 md:p-16">
          <h2 className="font-serif text-3xl md:text-5xl max-w-3xl">See the savings on your numbers.</h2>
          <Link to="/numbers" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover-lift">
            The Numbers <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
