import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight, ArrowUpRight, Building2, TrendingUp, ShieldCheck, Handshake, LineChart, Target, Briefcase, Network } from "lucide-react";
import partnersHero from "@/assets/partners-boardroom.jpg";
import roiMoney from "@/assets/roi-money.jpg";
import ctaWarehouse from "@/assets/cta-warehouse.jpg";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Enterprise — CutPayroll" },
      { name: "description", content: "Investor relations, enterprise partnerships, and the operator-led thesis behind CutPayroll. Quiet infrastructure for the next decade of mid-market back offices." },
      { property: "og:title", content: "Partners & Enterprise — CutPayroll" },
      { property: "og:description", content: "The investment thesis, traction, and partnership pathways for funds and enterprise operators." },
    ],
  }),
  component: PartnersPage,
});

const thesis = [
  {
    icon: Target,
    t: "A $400B back office that hasn't been re-priced.",
    b: "Mid-market payroll, HR, and admin overhead in the US alone is a multi-hundred-billion-dollar annual spend. It's been digitized, but never automated end-to-end. We're the layer that finally collapses it.",
  },
  {
    icon: TrendingUp,
    t: "Operator-led, not engineer-led.",
    b: "Most back-office SaaS is built by engineers who have never made payroll. We were operators first. Every workflow we automate is one we previously ran by hand — that's an unfair distribution advantage.",
  },
  {
    icon: Network,
    t: "Distribution through industry, not ads.",
    b: "Our pipeline comes from oil & gas, construction, and legal networks where founders trust founders. CAC is materially below SaaS benchmarks because the buyer is the operator, not a department head.",
  },
  {
    icon: ShieldCheck,
    t: "Sticky by design.",
    b: "Once we replace a back-office function, the workflow lives inside our system. Churn is structurally low — you don't rip out plumbing the week after you install it.",
  },
];

const traction = [
  { k: "Avg. annual savings per client", v: "$340K" },
  { k: "Median deploy time", v: "14 days" },
  { k: "Workflows automated to date", v: "1,200+" },
  { k: "Gross retention (LTM)", v: "97%" },
];

const partnerTracks = [
  {
    icon: Briefcase,
    title: "Capital Partners",
    desc: "Funds, family offices, and strategic operators looking at the next chapter of back-office infrastructure. We share quarterly operating letters, KPIs, and direct access to the founding team.",
    cta: "Request the data room",
  },
  {
    icon: Building2,
    title: "Enterprise Clients",
    desc: "200–5,000 headcount organizations consolidating HR, payroll, and admin across multiple entities. Dedicated deployment pod, SLA-backed uptime, and a senior partner as your single point of contact.",
    cta: "Talk to an enterprise lead",
  },
  {
    icon: Handshake,
    title: "Channel & Referral",
    desc: "Accounting firms, PEOs, MSPs, and industry consultants who place CutPayroll inside their book of business. Tiered revenue share, co-branded audits, and a dedicated partner manager.",
    cta: "Become a referral partner",
  },
];

const milestones = [
  { y: "2023", t: "Founded in Houston", b: "Three operators leave oil & gas, construction, and growth-stage SaaS to rebuild the back office from scratch." },
  { y: "2024", t: "First $100K savings deployment", b: "Production rollout inside a 280-person industrial services firm. Eliminated 4 back-office FTE in 11 days." },
  { y: "2025", t: "Cross-vertical expansion", b: "Live deployments across energy, construction, and law. Multi-entity workflows shipped at enterprise scale." },
  { y: "2026", t: "Infrastructure-grade rollout", b: "SOC 2 Type II in progress. Capital partners engaged for the next phase of category expansion." },
];

function PartnersPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="08 — Partners & Enterprise"
        title={<>Quiet infrastructure for the <em className="text-primary">next decade</em> of back offices.</>}
        subtitle="For capital partners, enterprise operators, and channel firms who want to back — or build on — the layer that's re-pricing mid-market overhead."
        image={partnersHero}
      />

      {/* Thesis */}
      <section className="border-b border-border">
        <div className="container-x py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="eyebrow">The thesis</p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05]">
                Four reasons this <em className="text-primary">compounds.</em>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We're not pitching another SaaS tool. We're replacing the org chart that runs underneath one. Here's why the math works.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              {thesis.map((x) => (
                <div key={x.t} className="rounded-2xl border border-border p-6 bg-card hover-lift">
                  <x.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-5 font-serif text-2xl leading-tight">{x.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{x.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Traction strip */}
      <section className="relative border-b border-border overflow-hidden">
        <img src={roiMoney} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/95" />
        <div className="container-x relative py-24 md:py-32">
          <p className="eyebrow">Traction · LTM</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl max-w-3xl leading-[1.05]">
            Numbers we'll <em className="text-primary">defend</em> in a data room.
          </h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {traction.map((m) => (
              <div key={m.k} className="rounded-2xl border border-border bg-background/60 backdrop-blur p-8">
                <p className="font-serif text-5xl md:text-6xl text-primary leading-none">{m.v}</p>
                <p className="mt-4 label-mono text-muted-foreground">{m.k}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            Detailed cohort retention, gross margin, payback period, and pipeline coverage are shared under NDA with qualified capital partners.
          </p>
        </div>
      </section>

      {/* Partner tracks */}
      <section className="border-b border-border">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow">How we partner</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl max-w-3xl leading-[1.05]">
            Three doors. <em className="text-primary">Pick yours.</em>
          </h2>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {partnerTracks.map((p) => (
              <div key={p.title} className="group rounded-2xl border border-border p-8 bg-card flex flex-col hover-lift">
                <p.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-6 font-serif text-3xl leading-tight">{p.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary group-hover:gap-3 transition-all"
                >
                  {p.cta} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="border-b border-border">
        <div className="container-x py-24 md:py-32">
          <p className="eyebrow">Operating timeline</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl max-w-3xl leading-[1.05]">
            Built one <em className="text-primary">deployment</em> at a time.
          </h2>

          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.y} className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                  <div className="md:[direction:ltr] pl-12 md:pl-0 md:pr-12 md:text-right">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{m.y}</p>
                    <h3 className="mt-2 font-serif text-3xl leading-tight">{m.t}</h3>
                  </div>
                  <div className="md:[direction:ltr] pl-12 md:pl-12">
                    <p className="text-muted-foreground leading-relaxed">{m.b}</p>
                  </div>
                  <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 grid h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance / trust strip */}
      <section className="border-b border-border bg-card/40">
        <div className="container-x py-20 grid lg:grid-cols-3 gap-10">
          <div>
            <LineChart className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-serif text-2xl">Quarterly investor letters</h3>
            <p className="mt-3 text-sm text-muted-foreground">Operating KPIs, deployments, and capital efficiency — sent every quarter to capital partners under NDA.</p>
          </div>
          <div>
            <ShieldCheck className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-serif text-2xl">SOC 2 Type II — in progress</h3>
            <p className="mt-3 text-sm text-muted-foreground">Audit underway with a Big-Four-adjacent firm. Interim controls documentation available to enterprise prospects on request.</p>
          </div>
          <div>
            <Handshake className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-serif text-2xl">Direct founder access</h3>
            <p className="mt-3 text-sm text-muted-foreground">No BDR layer, no gatekeeper. Partner conversations happen with Brent, Daniel, or Lyth — the people accountable for the number.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={ctaWarehouse} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/70" />
        <div className="container-x relative py-28 md:py-40 text-center">
          <p className="eyebrow">Next step</p>
          <h2 className="mt-6 font-serif text-5xl md:text-7xl leading-[0.95] max-w-4xl mx-auto text-balance">
            Open the <em className="text-primary">data room.</em>
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Capital partners, enterprise buyers, and channel firms — start with a 20-minute call. We'll send the relevant materials within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover-lift"
          >
            Request partner access <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
