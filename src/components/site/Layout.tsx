import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </>
      )}
      <div className="container-x relative py-28 md:py-40">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="reveal reveal-delay-1 mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
