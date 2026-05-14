import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import energy from "@/assets/industry-energy.jpg";
import construction from "@/assets/industry-construction.jpg";
import law from "@/assets/industry-law.jpg";
import warehouse from "@/assets/cta-warehouse.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — CutPayroll" },
      { name: "description", content: "Where we deploy: oil & gas, construction, law, manufacturing, healthcare, logistics, and more." },
    ],
  }),
  component: IndustriesPage,
});

const featured = [
  { img: energy, t: "Oil & Gas", b: "Lease operators, royalty calc, JIB statements, regulatory filings — automated against the data your ERP already holds.", saves: "$612K avg/yr" },
  { img: construction, t: "Construction", b: "AIA billing, certified payroll, subcontractor compliance, lien waivers — generated nightly, signed by morning.", saves: "$480K avg/yr" },
  { img: law, t: "Law Firms", b: "Time entry reconciliation, trust accounting, conflict checks, billing narratives — back-office work that bills $0/hr.", saves: "$340K avg/yr" },
];

const others = [
  "Manufacturing", "Healthcare", "Restaurants & Hospitality",
  "Real Estate", "Logistics & Freight", "Professional Services",
  "Retail & E-commerce", "Agriculture", "Financial Services",
];

function IndustriesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="06 — Industries"
        title={<>The chairs are <em className="text-primary">expensive</em> in every industry.</>}
        subtitle="We deploy across mid-market sectors where back-office work is heavy, repetitive, and quietly eating margin. Here's where we run today."
        image={warehouse}
      />

      <section className="container-x py-24 md:py-32 border-b border-border">
        <div className="space-y-24">
          {featured.map((f, i) => (
            <div key={f.t} className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="lg:col-span-7 [direction:ltr]">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl">
                  <img src={f.img} alt={f.t} className="h-full w-full object-cover hover:scale-105 transition-transform duration-[2s]" loading="lazy" />
                </div>
              </div>
              <div className="lg:col-span-5 [direction:ltr]">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Sector 0{i + 1}</p>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">{f.t}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{f.b}</p>
                <p className="mt-6 font-serif text-3xl text-primary">{f.saves}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Also deployed in</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">Nine more sectors. <em className="text-primary">Same playbook.</em></h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {others.map((o, i) => (
            <div key={o} className="bg-background p-8 hover:bg-card transition-colors flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-2xl">{o}</h3>
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">From the field</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">What operators tell us <em className="text-primary">after week two.</em></h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { q: "Royalty calc used to take six people and three weeks. Now it lands at 6am on the first.", n: "VP Finance, Permian E&P operator" },
            { q: "Certified payroll on 14 active jobsites used to be a Friday war. Now it's a non-event.", n: "Controller, GC — Dallas/Fort Worth" },
            { q: "Trust accounting reconciliation went from a 3-day month-end to a 9-minute review.", n: "Managing Partner, plaintiff firm" },
          ].map((t) => (
            <blockquote key={t.n} className="rounded-2xl border border-border bg-card p-8">
              <p className="font-serif text-xl leading-snug">"{t.q}"</p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">— {t.n}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Sector-specific workflows</p>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">Not generic automation. <em className="text-primary">Industry-native.</em></h2>
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { t: "Oil & Gas", b: "JIB statements · Division order maintenance · Severance tax filings · LOE coding · AFE tracking" },
            { t: "Construction", b: "AIA G702/G703 · Certified payroll (Davis-Bacon) · Lien waivers · COI tracking · Retainage release" },
            { t: "Law", b: "IOLTA reconciliation · Conflict checks · Time entry chasing · Pre-bill scrub · Disbursement coding" },
            { t: "Healthcare", b: "Insurance verification · Claim scrubbing · Denial appeals · 835/837 reconciliation · Credentialing" },
            { t: "Manufacturing", b: "BOM costing · WIP rollforward · Vendor 3-way match · Inventory true-up · Sales-tax nexus tracking" },
            { t: "Logistics", b: "Carrier rate audit · BOL/POD reconciliation · Detention claims · Driver settlements · IFTA filings" },
          ].map((s) => (
            <div key={s.t} className="bg-background p-8">
              <h3 className="font-serif text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="rounded-3xl bg-card border border-border p-10 md:p-16">
          <h2 className="font-serif text-3xl md:text-5xl max-w-3xl">Don't see your industry? <em className="text-primary">Good news — we still deploy.</em></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">If your back office runs on email, spreadsheets, and SaaS, we run there too.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover-lift">
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
