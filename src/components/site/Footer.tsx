import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Stop bleeding money</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Want the exact dollar figure you're <em className="text-primary">wasting?</em>
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover-lift"
            >
              Request a free audit <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
            <div>
              <p className="label-mono mb-4">Pages</p>
              <ul className="space-y-2.5">
                <li><Link to="/" className="hover:text-primary">Home</Link></li>
                <li><Link to="/problem" className="hover:text-primary">The Problem</Link></li>
                <li><Link to="/cost" className="hover:text-primary">The Cost</Link></li>
                <li><Link to="/fix" className="hover:text-primary">The Fix</Link></li>
                <li><Link to="/numbers" className="hover:text-primary">The Numbers</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-mono mb-4">Company</p>
              <ul className="space-y-2.5">
                <li><Link to="/who-we-are" className="hover:text-primary">Who We Are</Link></li>
                <li><Link to="/industries" className="hover:text-primary">Industries</Link></li>
                <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-mono mb-4">Office</p>
              <ul className="space-y-2.5 text-muted-foreground">
                <li>Houston, TX</li>
                <li>1100 Travis St, Suite 2200</li>
                <li>hello@cutpayroll.co</li>
                <li>+1 (713) 555-0188</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-border">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} CutPayroll. All quiet on the back office.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Built for operators · Houston, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
