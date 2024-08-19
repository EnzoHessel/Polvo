"use client";

import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Ticker from "@/components/Ticker";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-16 items-center py-16 min-h-screen text-white">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Ticker />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Team />
      </section>
      <section className="w-full">
        <FAQ />
      </section>
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
    </main>
  );
}

