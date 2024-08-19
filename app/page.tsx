"use client"

import About from "@/components/About";
import Hero from "@/components/Hero";
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
      <div className="absolute inset-0 -z-10">
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

