import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import heroExec from "@/assets/hero-exec.jpg";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — CutPayroll" },
      { name: "description", content: "Operators, not engineers. Built by people who've signed the front of real checks." },
    ],
  }),
  component: WhoPage,
});

const team = [
  { img: team1, name: "Marcus Hale", role: "Co-founder, CEO", bio: "Ran ops for a $40M industrial holding co. Cut its back office in half — by accident." },
  { img: team2, name: "Elena Rivers", role: "Co-founder, COO", bio: "Ex–Big Four auditor who got tired of watching companies pay for the same mistake twice." },
  { img: team3, name: "Sam Okafor", role: "Co-founder, CTO", bio: "Built automation systems for three Fortune 500s before deciding mid-market needed it more." },
  { img: team4, name: "Diana Park", role: "Co-founder, Head of Deployment", bio: "20 years in finance ops. Has fired more useless software than most people have used." },
];

const principles = [
  { t: "Operators, not engineers.", b: "We've made payroll. We've signed the checks. We don't ship demos — we ship work." },
  { t: "Output over hours.", b: "Tenure is not a deliverable. We measure what got done, not who was at their desk." },
  { t: "No new portal.", b: "Your team doesn't learn another tool. We work inside the stack you already pay for." },
  { t: "Boring on purpose.", b: "Quiet systems run companies. Loud ones run pitch decks. We're the first kind." },
];

function WhoPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="05 — Who We Are"
        title={<>Built by people who've sat <em className="text-primary">in your chair.</em></>}
        subtitle="We're not Silicon Valley engineers shipping a demo. We're operators who've run real companies, made real payroll, and signed the front of real checks."
        image={heroExec}
      />

      <section className="container-x py-24 md:py-32 border-b border-border">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">A company started by accident.</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>In 2021, Marcus was running ops for an industrial holding company in Houston. Twelve back-office hires. Six software stacks. Quarterly close took eight weeks.</p>
            <p>He started writing scripts on weekends. By the third quarter, the team was three people. By the fourth, the close took two days. By the next year, three other CEOs asked how he did it.</p>
            <p>That's CutPayroll. We didn't set out to build a product. We built a thing that worked, and other operators wanted it.</p>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">The team</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">Four founders. <em className="text-primary">Zero MBAs.</em></h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <div key={t.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-card">
                <img src={t.img} alt={t.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">0{i + 1}</p>
              <h3 className="mt-2 font-serif text-2xl">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
              <p className="mt-3 text-sm leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Operating principles</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-3xl">Four rules. <em className="text-primary">No exceptions.</em></h2>
        <div className="mt-14 grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {principles.map((p, i) => (
            <div key={p.t} className="bg-background p-10 hover:bg-card transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Rule 0{i + 1}</p>
              <h3 className="mt-4 font-serif text-3xl">{p.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">By the numbers</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">Three years. <em className="text-primary">No layoffs caused.</em></h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { v: "47", l: "Mid-market deployments to date" },
            { v: "$38M+", l: "Aggregate annual savings delivered" },
            { v: "94%", l: "Avg back-office cost reduction" },
            { v: "0", l: "Forced layoffs caused — every replaced role was redeployed or attrited" },
          ].map((s) => (
            <div key={s.l} className="border-t border-border pt-6">
              <p className="font-serif text-5xl text-primary">{s.v}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Where we sit</p>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">Houston HQ. <em className="text-primary">Operators on three continents.</em></h2>
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { c: "Houston, TX", b: "HQ, deployment ops, customer success." },
            { c: "London, UK", b: "EMEA deployments and 24/7 ops handoff." },
            { c: "Singapore", b: "APAC coverage and overnight processing." },
          ].map((o) => (
            <div key={o.c} className="bg-background p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Office</p>
              <h3 className="mt-3 font-serif text-3xl">{o.c}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{o.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="rounded-3xl bg-card border border-border p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-5xl max-w-2xl">Talk to an operator, not a sales rep.</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover-lift">
            Book a 15-min call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
