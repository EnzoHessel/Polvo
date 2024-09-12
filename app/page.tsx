import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Ticker from "@/components/Ticker";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background.png"
          alt="Background image"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>

      {/* Main Content */}
      <main className="relative flex flex-col lg:gap-16 items-center min-h-screen text-white">

        {/* Hero Section */}
        <section aria-label="Hero section">
          <Hero />
        </section>

        <section aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">About Us</h2>
          <About />
        </section>
        <section aria-labelledby="ticker-heading">
          <h2 id="ticker-heading" className="sr-only">Latest Updates</h2>
          <Ticker />
        </section>
        <section aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          <Services />
        </section>

        <section aria-labelledby="team-heading">
          <h2 id="team-heading" className="sr-only">Meet Our Team</h2>
          <Team />
        </section>

        <section aria-labelledby="faq-heading" className="w-full">
          <h2 id="faq-heading" className="sr-only">Frequently Asked Questions</h2>
          <FAQ />
        </section>
      </main>
    </>
  );
}
