"use client"

import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex justify-center pt-16  w-full h-screen text-white">
      <Image src="/background.png" alt="Background" layout="fill" className="-z-10 object-cover"/>
      <Hero />
      
    </main>
  );
}
