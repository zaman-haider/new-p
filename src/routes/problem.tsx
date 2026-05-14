import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight, AlertTriangle } from "lucide-react";
import problemDesk from "@/assets/problem-desk.jpg";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "The Problem — CutPayroll" },
      { name: "description", content: "Why mid-market back offices are the most expensive theatre in business." },
    ],
  }),
  component: ProblemPage,
});

const symptoms = [
  { t: "Empty hours", b: "Walk the floor at 2pm Tuesday. Count the people producing something. The number will hurt." },
  { t: "Manager-of-managers", b: "You hired a manager because the team grew. The team grew because you hired a manager." },
  { t: "Software graveyard", b: "Eighteen SaaS tools. Six of them log in monthly. Three of them are on someone's expired card." },
  { t: "Friday-only output", b: "Reports go out Friday. Decisions get made Monday. Tuesday everyone forgets." },
  { t: "Loyalty as KPI", b: "Tenure gets confused with output. Promotions get given because nobody got fired." },
  { t: "Audit panic", b: "Three weeks of war-room every quarter to produce numbers a system could ship nightly." },
];

function ProblemPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="01 — The Problem"
        title={<>Your back office is <em className="text-primary">theatre.</em></>}
        subtitle="Open-floor, fluorescent-lit, $4M-per-year theatre. Everyone has a chair. Almost no one has an output. Here's what's actually happening between 9 and 5."
        image={problemDesk}
      />

      <section className="container-x py-24 md:py-32 border-b border-border">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow">The diagnosis</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">Six symptoms. <em className="text-primary">All terminal.</em></h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {symptoms.map((s, i) => (
              <div key={s.t} className="bg-background p-8 hover:bg-card transition-colors">
                <div className="flex items-center gap-3 text-primary">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Symptom 0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <div className="max-w-4xl">
          <p className="eyebrow">A day in the life</p>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight">Tuesday, 2:14 pm.</h2>
        </div>
        <ol className="mt-14 space-y-10 max-w-3xl">
          {[
            ["09:12", "Bookkeeper logs in. Opens the same eight tabs she opened yesterday."],
            ["10:30", "Team standup. Twelve minutes. Eleven of them are about who's on PTO."],
            ["11:45", "Compliance officer flags a deadline. Forwards it to a Slack channel nobody reads."],
            ["13:00", "Lunch. The only output of the morning."],
            ["14:14", "Marketing coordinator schedules an Instagram post. The same caption template since 2022."],
            ["15:40", "Investor relations exports a CSV. Pastes it into a deck. Fixes a typo. Ships."],
            ["17:00", "Everyone leaves on time. Tomorrow looks identical."],
          ].map(([t, b]) => (
            <li key={t} className="grid grid-cols-[80px_1fr] gap-6 border-l border-border pl-6 -ml-6">
              <span className="font-mono text-sm text-primary">{t}</span>
              <span className="font-serif text-xl md:text-2xl leading-snug">{b}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow">The cultural cost</p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">It's not just money. <em className="text-primary">It's morale.</em></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">Every operator we've audited tells us the same thing: the best people on the team know the work is performative. They watch the chairs fill, the meetings multiply, and the output flatten. Then they leave for a competitor that ships.</p>
          </div>
          <div className="lg:col-span-7 space-y-6">
            {[
              { v: "62%", l: "of A-players in mid-market ops cite 'busywork culture' as their top reason for leaving" },
              { v: "3.4×", l: "longer time-to-decision in companies where back-office headcount > 8 per $10M revenue" },
              { v: "11 mo", l: "average tenure of a back-office hire who realizes the work could be automated" },
            ].map((s) => (
              <div key={s.l} className="flex items-baseline gap-6 border-b border-border pb-6">
                <p className="font-serif text-5xl text-primary shrink-0 w-32">{s.v}</p>
                <p className="text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Operators on record</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">"The chairs were the <em className="text-primary">last thing</em> I saw."</h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {[
            { q: "I walked the floor on a Tuesday at 2pm. Eleven people. Three were on Reddit. Two were in a meeting about a meeting. I left and called Marcus that night.", n: "CEO, $48M industrial holding co." },
            { q: "Our quarterly close took eight weeks. Eight. We were a $30M company filing reports a $300M company would be embarrassed by.", n: "CFO, multi-state law firm" },
          ].map((t) => (
            <blockquote key={t.n} className="rounded-2xl border border-border bg-card p-10">
              <p className="font-serif text-2xl leading-snug">"{t.q}"</p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">— {t.n}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <div className="rounded-3xl border border-border p-10 md:p-16 bg-card">
          <p className="eyebrow">Now what?</p>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl">See exactly what each chair is costing you.</h2>
          <Link to="/cost" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover-lift">
            Read the cost <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
