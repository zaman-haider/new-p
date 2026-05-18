import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import heroExec from "@/assets/hero-exec.jpg";
import problemDesk from "@/assets/problem-desk.jpg";
import solutionRoom from "@/assets/solution-room.jpg";
import roiMoney from "@/assets/roi-money.jpg";
import ctaWarehouse from "@/assets/cta-warehouse.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CutPayroll — You hired seven people to do the work of two" },
      { name: "description", content: "We replace bloated back-office departments with one quiet system. Faster, cheaper, no drama." },
    ],
  }),
  component: Home,
});

const roles = [
  { role: "Bookkeeper", output: "Reconciles last month, by next month", cost: 72000, ours: 4800 },
  { role: "Payroll Clerk", output: "Same 14 spreadsheets, every Friday", cost: 65000, ours: 3600 },
  { role: "Compliance Officer", output: "Files 3 reports, panics about audits", cost: 95000, ours: 6000 },
  { role: "Marketing Coordinator", output: "2 Instagram posts, 1 newsletter", cost: 68000, ours: 5400 },
  { role: "Admin Assistant", output: "Forwards emails, schedules meetings", cost: 54000, ours: 2400 },
  { role: "Investor Relations", output: "Quarterly deck. That's it.", cost: 110000, ours: 7200 },
];

const replacements = [
  { num: "01", title: "Bookkeeping", body: "Daily reconciliation, expense categorization, monthly closes — done overnight." },
  { num: "02", title: "Payroll", body: "Direct deposit, tax filings, garnishments, benefits sync — every cycle, on time." },
  { num: "03", title: "Compliance", body: "State filings, license renewals, audit prep — flagged before deadlines hit." },
  { num: "04", title: "Marketing", body: "Email campaigns, social posts, SEO content, ad copy — published on schedule." },
  { num: "05", title: "Admin", body: "Inbox triage, scheduling, document prep, vendor follow-up — handled silently." },
  { num: "06", title: "IR & Reporting", body: "Investor decks, monthly KPIs, board memos — generated from your live data." },
];

const team = [
  { img: team1, name: "Brent Franklin", role: "Founder & Chief Executive Officer, Rise Capital Group", bio: "Founder and CEO of Rise Capital Group, a privately held investment firm focused on oil and gas acquisition and development. Brent has built and scaled multiple seven and eight-figure companies while overseeing significant investor capital across active energy ventures. With a blue-collar, hands-on background and experience in real estate, drilling, and oilfield operations, Brent brings a disciplined and operationally driven approach to business. A Texas native and former Military Police officer, he is known for leadership, execution, and building ventures centered around long-term growth and responsible domestic energy development." },
  
  { img: team2, name: "Daniel Lehotsky", role: "CO FOUNDER, GROWTH & MARKETING STRATEGY", bio: "Co Founder and growth strategist with a background in digital marketing, paid advertising, lead generation, automation, and brand positioning. Daniel has built his experience around helping businesses increase visibility, improve customer acquisition, and create marketing systems designed to drive measurable revenue. With a focus on performance, strategy, and digital infrastructure, Daniel brings a strong understanding of how to connect attention with business growth. His work spans campaign strategy, advertising funnels, CRM workflows, audience targeting, and conversion focused marketing." },
  { img: team3, name: "Lyth Elkour", role: "Co-Founder, Sales & Operations", bio: "Lyth ne high-performance sales se apna career shuru kiya, Uplink Ads co-found kiya, aur fir CutPayroll ke operations ko expand kiya. Woh direct client acquisition, revenue growth, aur pressure mein efficiently scale karne wale AI systems banane ke liye jaane jaate hain. Unka focus execution, relationships, aur long-term business growth par hai. Unka sales, operations, aur execution ko bridge karne ka tarika multiple ventures ke expansion mein madadgar raha hai. Woh client relationships aur strategy mein actively involved rehte hain , aur unka approach accountability aur sustainable growth par emphasize karta hai." },
];

const faqs = [
  { q: "Are you saying I should fire my whole team?", a: "No. We're saying most back-office roles produce outputs that a system can deliver overnight. Keep the people who think; replace the work that doesn't need a heartbeat." },
  { q: "How is this different from just hiring better people?", a: "Better people still take PTO, get sick, and quit. The system doesn't. It also costs less than a single junior salary." },
  { q: "What about the 'human touch'?", a: "There is no human touch in copy-pasting a spreadsheet. Save the human touch for clients and decisions, not data entry." },
  { q: "How long does it take to deploy?", a: "14 days from kickoff to running in production. We plug into the tools you already use — no migration project required." },
  { q: "What does it cost?", a: "Less than a single junior salary, with annual savings averaging $400K+ per mid-market deployment. Exact numbers in your audit." },
  { q: "What if it breaks?", a: "It doesn't, often. When it does, we have a 24/7 ops team that triages within minutes. SLAs are written into every contract." },
];

function useCount(target: number, on = true) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!on) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, on]);
  return v;
}

function Calculator() {
  const [headcount, setHeadcount] = useState(7);
  const [salary, setSalary] = useState(72);
  const spend = headcount * salary * 1000;
  const withUs = Math.round(spend * 0.15);
  const keep = spend - withUs;
  const reduction = Math.round(((spend - withUs) / spend) * 100);
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-10">
        <div>
          <div className="flex items-baseline justify-between">
            <label className="label-mono">Back-office headcount</label>
            <span className="font-serif text-3xl">{headcount} <span className="text-muted-foreground text-base">people</span></span>
          </div>
          <input
            type="range" min={1} max={30} value={headcount}
            onChange={(e) => setHeadcount(+e.target.value)}
            className="mt-3 w-full accent-primary"
          />
        </div>
        <div>
          <div className="flex items-baseline justify-between">
            <label className="label-mono">Average loaded salary</label>
            <span className="font-serif text-3xl">${salary}K <span className="text-muted-foreground text-base">/ yr</span></span>
          </div>
          <input
            type="range" min={40} max={180} value={salary}
            onChange={(e) => setSalary(+e.target.value)}
            className="mt-3 w-full accent-primary"
          />
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="label-mono">You spend now</p>
            <p className="mt-2 font-serif text-3xl md:text-4xl line-through decoration-destructive/60">${spend.toLocaleString()}</p>
          </div>
          <div>
            <p className="label-mono">With CutPayroll</p>
            <p className="mt-2 font-serif text-3xl md:text-4xl">${withUs.toLocaleString()}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border">
          <p className="label-mono">You keep, every year</p>
          <p className="mt-3 font-serif text-5xl md:text-6xl text-primary">${keep.toLocaleString()}</p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">Reduction · {reduction}%</p>
        </div>
      </div>
    </div>
  );
}

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setOn(true), { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const v = useCount(to, on);
  return <span ref={ref}>{prefix}{v.toLocaleString()}{suffix}</span>;
}

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end overflow-hidden">
        <img src={heroExec} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grain" />
        <div className="container-x relative pb-24 pt-40">
          <div className="flex items-center gap-2 reveal">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              You are bleeding money. Right now.
            </p>
          </div>
          <h1 className="reveal reveal-delay-1 mt-6 font-serif text-[44px] sm:text-6xl md:text-7xl lg:text-[112px] leading-[0.95] text-balance max-w-5xl">
            You hired seven people to do the work of <em className="text-primary">two.</em>
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            The bookkeeper who misses deadlines. The marketing coordinator who posts twice a month.
            The compliance officer who copy-pastes spreadsheets all day. You're paying salaries for
            output a single system could deliver — faster, cheaper, and without the drama.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover-lift">
              Show me what I'm overpaying <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/problem" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              Read the case <ArrowDown className="h-4 w-4" />
            </Link>
          </div>
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>Scroll</span>
            <span className="hidden md:inline">Houston, TX</span>
            <span>$427B wasted on bloated back-offices each year</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container-x py-28 md:py-40 border-b border-border">
        <p className="eyebrow">02 / The honest truth</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-balance max-w-4xl">
          Most of your staff aren't working. <em className="text-primary">They're existing.</em>
        </h2>
        <div className="mt-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Walk through your back office at 2pm on a Tuesday. Count how many people are actually
              producing something. Now count the salaries, benefits, PTO, software seats, healthcare,
              and the manager hired to manage them.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 font-serif italic text-2xl md:text-3xl leading-snug">
              "Loyalty is not an output. Tenure is not a deliverable."
            </blockquote>
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { v: <Counter to={68} suffix="%" />, l: "of admin time is repetitive" },
                { v: <Counter to={87} prefix="$" suffix="K" />, l: "avg loaded cost per hire" },
                { v: <><Counter to={3.2 as unknown as number} />x</>, l: "errors vs automated" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-serif text-3xl md:text-4xl text-primary">{s.v}</p>
                  <p className="mt-2 text-xs text-muted-foreground leading-snug">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={problemDesk} alt="Cluttered desk" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[2s]" loading="lazy" />
            </div>
            <p className="absolute -bottom-3 left-4 bg-background px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Exhibit A · Tuesday 2:14pm</p>
          </div>
        </div>
      </section>

      {/* RECEIPTS TABLE */}
      <section className="container-x py-28 md:py-40 border-b border-border">
        <p className="eyebrow">03 / The receipts</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-balance max-w-4xl">
          Here's what each chair in your office <em className="text-primary">actually costs.</em>
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Real numbers. Real roles. Real output. We're not shaming anyone — we're showing you the math
          you've been too busy to do.
        </p>
        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="text-left font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground border-b border-border">
                <th className="py-4">Role</th>
                <th className="py-4">What they actually produce</th>
                <th className="py-4 text-right">Annual cost</th>
                <th className="py-4 text-right">Our cost</th>
                <th className="py-4 text-right text-primary">You save</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((r) => (
                <tr key={r.role} className="border-b border-border/60 hover:bg-card/40 transition-colors">
                  <td className="py-6 font-serif text-xl">{r.role}</td>
                  <td className="py-6 text-sm text-muted-foreground max-w-xs">{r.output}</td>
                  <td className="py-6 text-right line-through decoration-destructive/60">${r.cost.toLocaleString()}</td>
                  <td className="py-6 text-right">${r.ours.toLocaleString()}</td>
                  <td className="py-6 text-right text-primary font-medium">${(r.cost - r.ours).toLocaleString()}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} className="pt-8 font-serif text-2xl">Total annual savings</td>
                <td className="pt-8 text-right line-through decoration-destructive/60">$464,000</td>
                <td className="pt-8 text-right">$29,400</td>
                <td className="pt-8 text-right">
                  <span className="font-serif text-3xl md:text-4xl text-primary">94%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-xs text-muted-foreground max-w-2xl">
          * Replacement costs based on average CutPayroll deployment for mid-market companies. Doesn't
          include the bonus of never having to do another performance review.
        </p>
      </section>

      {/* THE FIX */}
      <section className="relative border-b border-border">
        <div className="container-x py-28 md:py-40 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl sticky top-28">
              <img src={solutionRoom} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">04 / The replacement</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02] text-balance">
              One quiet system. <em className="text-primary">Zero drama.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We replace entire back-office departments with a single, always-on system that plugs into
              the tools you already use — QuickBooks, Gusto, Salesforce, HubSpot, your bank. No new
              platforms. No retraining. No "what about Carol from accounting?"
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Deployed in 14 days, not 14 months",
                "Works inside your existing software",
                "Costs less than a single junior salary",
                "Never quits, never sleeps, never gossips",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {replacements.map((r) => (
                <div key={r.num} className="bg-background p-7 hover:bg-card transition-colors">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{r.num} Replaced</p>
                  <h3 className="mt-3 font-serif text-2xl">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="container-x py-28 md:py-40 border-b border-border">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">05 / The math</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
              Move the sliders. <em className="text-primary">Watch the truth appear.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-muted-foreground">
              We're not asking you to take our word for it. Punch in your reality. The number that
              appears is what you keep.
            </p>
            <div className="mt-6 aspect-[16/9] overflow-hidden rounded-xl">
              <img src={roiMoney} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
        <Calculator />
        <p className="mt-10 text-xs text-muted-foreground max-w-2xl">
          Calculations based on average CutPayroll deployments. Includes salary, benefits, software,
          and management overhead. Doesn't include the time you'll get back to actually run your business.
        </p>
      </section>

      {/* OPERATORS */}
      <section className="container-x py-28 md:py-40 border-b border-border">
        <p className="eyebrow">06 / The operators</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02] text-balance max-w-4xl">
          Built by people who've sat <em className="text-primary">in your chair.</em>
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          We're not Silicon Valley engineers shipping a demo. We're operators who've run real
          companies, made real payroll, and signed the front of real checks.
        </p>
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

      {/* FAQ */}
      <section className="container-x py-28 md:py-40 border-b border-border">
        <p className="eyebrow">07 / Questions you're already asking</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.02] text-balance max-w-4xl">
          The objections you'd raise <em className="text-primary">over coffee.</em>
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          We've heard them all. Here are the honest answers — not the sales-deck versions.
        </p>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpenFaq(open ? null : i)}
                className="w-full text-left py-7 grid grid-cols-[auto_1fr_auto] gap-6 items-start group"
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Q.0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl group-hover:text-primary transition-colors">{f.q}</h3>
                  <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <p className="overflow-hidden text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
                <span className={`text-3xl font-serif text-primary transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-b border-border">
        <img src={ctaWarehouse} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="container-x relative py-28 md:py-40 max-w-3xl">
          <p className="eyebrow">08 / The next move</p>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Want the exact dollar figure you're <em className="text-primary">wasting?</em>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us a little about your operation. In 48 hours we'll send you a custom audit showing
            exactly where your money is going — and what you'd keep if it stopped.
          </p>
          <ul className="mt-8 space-y-2.5 text-sm">
            {[
              "We map every recurring task in your back office",
              "We tell you exactly which roles can be replaced",
              "You get a real dollar number — not a range",
              "Delivered in 48 hours. No call required to receive it.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-primary mt-1 shrink-0" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover-lift">
            Request your free audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
