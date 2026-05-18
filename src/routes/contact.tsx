import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Free Audit — CutPayroll" },
      { name: "description", content: "Tell us about your operation. In 48 hours we send you a custom audit with the exact dollar figure you're wasting." },
    ],
  }),
  component: ContactPage,
});

const industries = ["Oil & Gas","Construction","Manufacturing","Law Firms","Healthcare","Restaurants","Real Estate","Logistics","Professional Services","Retail","Agriculture","Energy","Financial Services","Hospitality","Other"];
const ranges = ["Under $250K","$250K–$500K","$500K–$1M","$1M–$2M","$2M+"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="container-x pt-32 pb-16 border-b border-border">
        <p className="eyebrow">08 — Free Audit</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl text-balance">
          Want the exact dollar figure you're <em className="text-primary">wasting?</em>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Tell us a little about your operation. In 48 hours we'll send you a custom audit showing exactly where your money is going — and what you'd keep if it stopped.
        </p>
      </section>

      <section className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-10">
          <div>
            <p className="eyebrow">What you get</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "A map of every recurring task in your back office",
                "A list of which roles can be replaced",
                "A real dollar number — not a range",
                "Delivered in 48 hours. No call required.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3"><Check className="h-4 w-4 text-primary mt-1 shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="eyebrow">Or reach us directly</p>
            <p className="flex items-center gap-3 text-sm"><Mail className="h-4 w-4 text-primary" /> info@cutpayroll.com</p>
            <p className="flex items-center gap-3 text-sm"><Phone className="h-4 w-4 text-primary" /> +1 (832) 406-0338</p>
            <p className="flex items-center gap-3 text-sm"><MapPin className="h-4 w-4 text-primary" /> 5120 Woodway Dr. Ste. 10010, Houston, TX 77056</p>
          </div>
        </aside>

        <div className="lg:col-span-8">
          {sent ? (
            <div className="rounded-3xl border border-border bg-card p-10 md:p-16 text-center">
              <div className="mx-auto h-14 w-14 grid place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-7 w-7" />
              </div>
              <h2 className="mt-6 font-serif text-3xl md:text-5xl">We've got it.</h2>
              <p className="mt-4 text-muted-foreground max-w-md mx-auto">Your custom audit will hit your inbox within 48 hours. No call required to receive it. If you want to talk before then, reply to the confirmation email.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="rounded-3xl border border-border bg-card p-8 md:p-12 space-y-8"
            >
              <p className="eyebrow">Request your free audit</p>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" required />
                <Select label="Industry" name="industry" options={industries} />
                <Select label="Annual back-office spend" name="spend" options={ranges} />
                <Field label="Headcount in back office" name="headcount" type="number" />
              </div>
              <div>
                <label className="label-mono">Anything we should know?</label>
                <textarea name="notes" rows={4} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Optional. Where it hurts most." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-medium hover-lift">
                Send my audit <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">By submitting, you agree to receive a one-time custom audit. We don't add you to a drip campaign. We hate them too.</p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="label-mono">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        type={type} name={name} required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="label-mono">{label}</label>
      <select name={name} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
