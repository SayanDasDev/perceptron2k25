"use client";

import About from "@/components/about/about";
import Events from "@/components/events/events";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import { Gallery } from "@/components/gallery/gallery";
import Hero from "@/components/hero/hero";
import NavMenu from "@/components/nav-menu";
import { Speakers } from "@/components/speakers/speakers";
import Sponsors from "@/components/sponsors/sponsors";
import Team from "@/components/team/team";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Workshop from "@/components/workshop/workshop";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-transparent z-20">
      <NavMenu />
      <section
        id="hero"
        className="hero w-screen min-h-screen grid grid-rows-[80px_25dvh_1fr] md:grid-rows-[80px_30dvh_1fr] xl:grid-rows-[80px_1fr_280px]"
      >
        <Hero />
      </section>
      <HeroHighlight containerClassName="bg-slate-950 h-full pb-20">
        <section
          id="about"
          className="about px-12 border-t-2 border-[#3a4150] !border-r-0 !border-l-0  flex items-center justify-center text-9xl bg-gradient-to-b from-black to-slate-900 text-white"
        >
          <About />
        </section>

        <section id="events" className="flex items-center justify-center">
          <Events />
        </section>

        <section id="speakers" className="flex bg-transparent">
          <Speakers />
        </section>

        <section id="workshop" className="flex bg-transparent">
          <Workshop />
        </section>

        <section
          id="sponsors"
          className="flex justify-center mt-20 bg-transparent"
        >
          <Sponsors />
        </section>

        <section id="team" className="flex justify-center mt-20 bg-transparent">
          <Team />
        </section>

        <section
          id="gallery"
          className="flex justify-center mt-20 bg-transparent"
        >
          <Gallery />
        </section>

        <section id="faqs" className="flex mt-20 bg-transparent">
          <FAQ />
        </section>
      </HeroHighlight>
      <section id="footer" className="flex bg-transparent">
        <Footer />
      </section>
    </main>
  );
}
