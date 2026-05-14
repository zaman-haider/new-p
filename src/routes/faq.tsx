import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — CutPayroll" },
      { name: "description", content: "Honest answers to the objections you'd raise over coffee." },
    ],
  }),
  component: FaqPage,
});

const groups = [
  {
    title: "The basics",
    items: [
      { q: "Are you saying I should fire my whole team?", a: "No. We're saying most back-office roles produce outputs that a system can deliver overnight. Keep the people who think; replace the work that doesn't need a heartbeat." },
      { q: "How is this different from just hiring better people?", a: "Better people still take PTO, get sick, and quit. The system doesn't. It also costs less than a single junior salary and never asks for a raise." },
      { q: "What about the 'human touch'?", a: "There is no human touch in copy-pasting a spreadsheet. Save the human touch for clients and decisions, not data entry." },
    ],
  },
  {
    title: "Deployment",
    items: [
      { q: "How long does it take to deploy?", a: "14 days from kickoff to running in production. We plug into the tools you already use — no migration project, no new portal for your team." },
      { q: "Do my people need to learn a new tool?", a: "No. We work inside QuickBooks, Gusto, Salesforce, HubSpot — whatever you've already paid for. Your team sees the same screens they always did." },
      { q: "What's required from us during deployment?", a: "About 4 hours of one operator's time across the 14 days. We do the rest, including talking to your IT and security teams." },
    ],
  },
  {
    title: "Cost & contracts",
    items: [
      { q: "What does it cost?", a: "Less than a single junior salary, with annual savings averaging $400K+ per mid-market deployment. Exact numbers come back in your free 48-hour audit." },
      { q: "What's the contract length?", a: "12 months, month-to-month after that. We don't lock people into long deals. Quiet systems retain themselves." },
      { q: "Is there a setup fee?", a: "No. The 14-day deployment is included." },
    ],
  },
  {
    title: "Trust & risk",
    items: [
      { q: "What if it breaks?", a: "It doesn't, often. When it does, we have a 24/7 ops team that triages within minutes. SLAs are written into every contract." },
      { q: "What about security?", a: "SOC 2 Type II. Read-only access by default. Every action is logged, attributable, and reviewable in real time." },
      { q: "What if I want to bring it back in-house?", a: "Then you do. We hand over documentation, runbooks, and the people who built it. No vendor lock-in. No drama." },
    ],
  },
  {
    title: "People & culture",
    items: [
      { q: "What happens to the team we replace?", a: "In 47 deployments we've never caused a forced layoff. Most clients redeploy people into revenue-facing roles, attrite naturally, or use the savings to fund a higher-skill hire." },
      { q: "Will my remaining team resent the system?", a: "The opposite. The people who stay are the ones who've been quietly frustrated by the busywork. They get to do real work for the first time." },
      { q: "Can I keep one human in the loop?", a: "Yes. Most clients keep one 'reviewer' role on critical workflows like payroll and compliance. The system drafts, the human approves." },
    ],
  },
  {
    title: "Integrations",
    items: [
      { q: "What if my stack isn't on your list?", a: "If it has an API, a CSV export, or a login screen, we can work with it. We've built connectors for ~140 systems and counting." },
      { q: "Do you support on-prem ERPs?", a: "Yes. We've deployed against on-prem NetSuite, SAP B1, Microsoft Dynamics, and a handful of industry-specific systems via secure tunnel." },
      { q: "Can the system write back to our books?", a: "Yes — but only with explicit, logged approval chains you control. Read-only is the default for the first 30 days of every deployment." },
    ],
  },
];

function FaqPage() {
  const [open, setOpen] = useState<string | null>("0-0");
  return (
    <Layout>
      <PageHero
        eyebrow="07 — FAQ"
        title={<>The objections you'd raise <em className="text-primary">over coffee.</em></>}
        subtitle="We've heard them all. Here are the honest answers — not the sales-deck versions."
      />

      <section className="container-x py-20 md:py-28">
        <div className="space-y-20">
          {groups.map((g, gi) => (
            <div key={g.title} className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Section 0{gi + 1}</p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl">{g.title}</h2>
              </div>
              <div className="lg:col-span-8 divide-y divide-border border-y border-border">
                {g.items.map((f, i) => {
                  const id = `${gi}-${i}`;
                  const isOpen = open === id;
                  return (
                    <button key={id} onClick={() => setOpen(isOpen ? null : id)} className="w-full text-left py-6 grid grid-cols-[1fr_auto] gap-6 items-start group">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl group-hover:text-primary transition-colors">{f.q}</h3>
                        <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                          <p className="overflow-hidden text-muted-foreground leading-relaxed">{f.a}</p>
                        </div>
                      </div>
                      <span className={`text-3xl font-serif text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24">
        <div className="rounded-3xl bg-card border border-border p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-5xl max-w-2xl">Still have questions? <em className="text-primary">Ask an operator.</em></h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover-lift">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
