import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import roiMoney from "@/assets/roi-money.jpg";

export const Route = createFileRoute("/numbers")({
  head: () => ({
    meta: [
      { title: "The Numbers — CutPayroll" },
      { name: "description", content: "Real ROI from real deployments. Move the sliders, see what you'd keep." },
    ],
  }),
  component: NumbersPage,
});

function useCount(target: number, on: boolean, dur = 1500) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!on) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, on, dur]);
  return v;
}

function Stat({ to, prefix = "", suffix = "", label, decimals = 0 }: { to: number; prefix?: string; suffix?: string; label: string; decimals?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setOn(true), { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const v = useCount(to, on);
  return (
    <div ref={ref} className="border-t border-border pt-8">
      <p className="font-serif text-5xl md:text-7xl text-primary">
        {prefix}{decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString()}{suffix}
      </p>
      <p className="mt-3 text-sm text-muted-foreground max-w-xs">{label}</p>
    </div>
  );
}

function Calculator() {
  const [headcount, setHeadcount] = useState(7);
  const [salary, setSalary] = useState(72);
  const [tools, setTools] = useState(11);
  const spend = headcount * salary * 1000 + tools * 11000;
  const withUs = Math.round(spend * 0.15);
  const keep = spend - withUs;
  const reduction = Math.round(((spend - withUs) / spend) * 100);

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="space-y-10">
        {[
          { label: "Back-office headcount", value: headcount, unit: "people", set: setHeadcount, min: 1, max: 40 },
          { label: "Avg loaded salary", value: salary, unit: "K/yr", prefix: "$", set: setSalary, min: 40, max: 200 },
          { label: "SaaS tools in use", value: tools, unit: "tools", set: setTools, min: 0, max: 40 },
        ].map((s) => (
          <div key={s.label}>
            <div className="flex items-baseline justify-between">
              <label className="label-mono">{s.label}</label>
              <span className="font-serif text-3xl">{s.prefix ?? ""}{s.value} <span className="text-base text-muted-foreground">{s.unit}</span></span>
            </div>
            <input
              type="range" min={s.min} max={s.max} value={s.value}
              onChange={(e) => s.set(+e.target.value)}
              className="mt-3 w-full accent-primary"
            />
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-border bg-card p-10">
        <p className="label-mono">You spend now</p>
        <p className="mt-2 font-serif text-4xl line-through decoration-destructive/60">${spend.toLocaleString()}</p>
        <p className="mt-8 label-mono">With CutPayroll</p>
        <p className="mt-2 font-serif text-4xl">${withUs.toLocaleString()}</p>
        <div className="mt-10 pt-8 border-t border-border">
          <p className="label-mono">You keep, every year</p>
          <p className="mt-3 font-serif text-6xl text-primary">${keep.toLocaleString()}</p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">Reduction · {reduction}%</p>
        </div>
      </div>
    </div>
  );
}

function NumbersPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="04 — The Numbers"
        title={<>Move the sliders. <em className="text-primary">Watch the truth appear.</em></>}
        subtitle="No fake demo data. Punch in your reality. The number that appears is what you keep."
        image={roiMoney}
      />

      <section className="container-x py-24 md:py-32 border-b border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Stat to={427} prefix="$" suffix="B" label="Wasted on bloated back-offices each year, US mid-market" />
          <Stat to={94} suffix="%" label="Average cost reduction across CutPayroll deployments" />
          <Stat to={14} suffix=" days" label="From signed contract to running in production" />
          <Stat to={3.2} decimals={1} suffix="×" label="Lower error rate vs. equivalent manual workflow" />
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Your math</p>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">The number that appears <em className="text-primary">is what you keep.</em></h2>
        <div className="mt-16">
          <Calculator />
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Field results</p>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">Anonymized, real, signed-off.</h2>
        <div className="mt-14 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { i: "Industrial holdings, Houston", h: 9, save: "$612K", red: "92%" },
            { i: "Multi-state law firm", h: 5, save: "$340K", red: "89%" },
            { i: "Specialty manufacturer", h: 12, save: "$870K", red: "94%" },
          ].map((c) => (
            <div key={c.i} className="bg-background p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.i}</p>
              <p className="mt-4 font-serif text-5xl text-primary">{c.save}</p>
              <p className="mt-2 text-sm text-muted-foreground">Annual savings · {c.h} chairs replaced · {c.red} reduction</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">Methodology</p>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">How we calculate <em className="text-primary">"what you keep."</em></h2>
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p><span className="text-foreground font-medium">Spend baseline.</span> Loaded comp = base × 1.27 (benefits, taxes, equity). SaaS sprawl = $11K/seat across the back-office stack. Real-estate allocation excluded for conservatism.</p>
            <p><span className="text-foreground font-medium">CutPayroll fee.</span> 15% of baseline, locked for 24 months. Includes deployment, 24/7 ops, SLAs, and quarterly reviews.</p>
            <p><span className="text-foreground font-medium">Reduction %.</span> (Baseline − Fee) ÷ Baseline. We do not include "soft" gains like faster decisions or lower error rates in this number — those show up as compounding upside.</p>
          </div>
          <div className="rounded-2xl border border-border p-10 bg-card font-mono text-xs leading-loose text-muted-foreground">
            <p className="text-primary">// formula</p>
            <p>spend = (headcount × salary × 1000) + (tools × 11000)</p>
            <p>fee = spend × 0.15</p>
            <p>keep = spend − fee</p>
            <p>reduction = keep ÷ spend</p>
            <p className="mt-6 text-primary">// example · 7 seats @ $72K · 11 tools</p>
            <p>spend = $625,000</p>
            <p>fee = $93,750</p>
            <p className="text-foreground">keep = $531,250 (85%)</p>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32 border-b border-border">
        <p className="eyebrow">What we won't claim</p>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">Three numbers we <em className="text-primary">refuse</em> to put in a deck.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { t: "Productivity gains", b: "We can't measure your team's individual output. Anyone who claims a percentage here is selling, not measuring." },
            { t: "Revenue lift", b: "We touch the back office. Revenue is your front office. Don't let a vendor take credit for your sales team." },
            { t: "Time saved per person", b: "Means nothing if the person stays on payroll. We measure dollars out the door, not hours not worked." },
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
          <h2 className="font-serif text-3xl md:text-5xl max-w-3xl">Want a number with your name on it?</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover-lift">
            Free 48-hour audit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
