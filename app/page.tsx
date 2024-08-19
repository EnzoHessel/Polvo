"use client"

import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-16 items-center pt-16 h-screen text-white">
      <Image src="/background.png" alt="Background" layout="fill" className="-z-10 object-cover"/>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
    </main>
  );
}
