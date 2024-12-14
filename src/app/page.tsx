"use client";

import About from "@/components/about/about";
import Events from "@/components/events/events";
import FAQ from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import NavMenu from "@/components/nav-menu";
import { Speakers } from "@/components/speakers/speakers";
import Sponsors from "@/components/sponsors/sponsors";
import Team from "@/components/team/team";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-slate-950">
      <NavMenu />
      <section
        id="hero"
        className="hero w-screen min-h-screen grid grid-rows-[80px_25dvh_1fr] md:grid-rows-[80px_30dvh_1fr] xl:grid-rows-[80px_1fr_280px]"
      >
        <Hero />
      </section>

      <section
        id="about"
        className="about w-screen px-12 border-b-2 border-t-2 border-[#3a4150] !border-r-0 !border-l-0  flex items-center justify-center text-9xl bg-gradient-to-b from-black to-slate-900 text-white"
      >
        <About />
      </section>

      <section id="events" className="flex">
        <Events />
      </section>

      <section id="speakers" className="flex bg-slate-950">
        <Speakers />
      </section>

      <section id="sponsors" className="flex mt-20 bg-slate-950">
        <Sponsors />
      </section>

      <section id="team" className="flex mt-20 bg-slate-950">
        <Team />
      </section>

      <section id="faqs" className="flex mt-20 bg-slate-950">
        <FAQ />
      </section>
    </main>
  );
}
