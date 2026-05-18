import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

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
  { img: team1, name: "Brent Franklin", role: "Founder & Chief Executive Officer, Rise Capital Group", bio: "Founder and CEO of Rise Capital Group, a privately held investment firm focused on oil and gas acquisition and development. Brent has built and scaled multiple seven and eight-figure companies while overseeing significant investor capital across active energy ventures. With a blue-collar, hands-on background and experience in real estate, drilling, and oilfield operations, Brent brings a disciplined and operationally driven approach to business. A Texas native and former Military Police officer, he is known for leadership, execution, and building ventures centered around long-term growth and responsible domestic energy development." },
  
  { img: team2, name: "Daniel Lehotsky", role: "CO FOUNDER, GROWTH & MARKETING STRATEGY", bio: "Co Founder and growth strategist with a background in digital marketing, paid advertising, lead generation, automation, and brand positioning. Daniel has built his experience around helping businesses increase visibility, improve customer acquisition, and create marketing systems designed to drive measurable revenue. With a focus on performance, strategy, and digital infrastructure, Daniel brings a strong understanding of how to connect attention with business growth. His work spans campaign strategy, advertising funnels, CRM workflows, audience targeting, and conversion focused marketing." },
  { img: team3, name: "Lyth Elkour", role: "Co-Founder, Sales & Operations", bio: "Lyth ne high-performance sales se apna career shuru kiya, Uplink Ads co-found kiya, aur fir CutPayroll ke operations ko expand kiya. Woh direct client acquisition, revenue growth, aur pressure mein efficiently scale karne wale AI systems banane ke liye jaane jaate hain. Unka focus execution, relationships, aur long-term business growth par hai. Unka sales, operations, aur execution ko bridge karne ka tarika multiple ventures ke expansion mein madadgar raha hai. Woh client relationships aur strategy mein actively involved rehte hain , aur unka approach accountability aur sustainable growth par emphasize karta hai." },
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
            <p>CutPayroll started where most good companies start: with operators who got tired of watching the same back-office waste play out across every mid-market business they touched.</p>
            <p>Brent, Daniel, and Lyth had each spent years inside industrial, sales, and operations roles — signing real checks, sitting through real audits, and watching capable people pinned to work that systems should do overnight.</p>
            <p>So they built the system they wished they'd had. Quiet, always-on, plugged into the tools their teams already used. Other operators saw it, asked for it, and CutPayroll became a company.</p>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">The team</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">Three founders. <em className="text-primary">Zero MBAs.</em></h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
