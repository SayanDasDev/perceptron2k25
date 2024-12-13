"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Pause, Play } from "lucide-react";

import BgVideo from "@/components/bg-video";
import HeroCardLeft from "@/components/hero-card-left";
import HeroCardRight from "@/components/hero-card-right";
import HeroTitle from "@/components/hero-title";
import { Logos } from "@/components/logos";
import NavMenu from "@/components/nav-menu";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

import useFonts from "@/hooks/use-fonts";

export default function Home() {
  const { mono, sub } = useFonts();

  const [videoPlaying, setVideoPlaying] = useState(false);

  const heroRef = useRef(null);
  const playIconRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(playIconRef.current, {
        rotate: videoPlaying ? 360 : 0,
        scale: videoPlaying ? 0.8 : 1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    },
    { scope: heroRef, dependencies: [videoPlaying] }
  );

  return (
    <main className="overflow-x-hidden">
      <NavMenu />
      <section
        id="hero"
        className="hero w-screen min-h-screen grid grid-rows-[80px_25dvh_1fr] md:grid-rows-[80px_30dvh_1fr] xl:grid-rows-[80px_1fr_280px]"
      >
        {videoPlaying ? (
          <BgVideo />
        ) : (
          <Image src={"/images/hero.png"} alt="" fill objectFit="cover" />
        )}
        <div className="overlay absolute inset-0  bg-black/50" />
        <Navbar />
        <div className="text-gray-50 h-4 xl:hidden ml-auto mr-6 my-6" />
        <div className="w-full z-10 hero-title-grid xl:flex items-center justify-between mt-8 xl:mt-0 xl:px-6 xl:pb-8">
          <Logos.Perceptron className="w-[20vw] md:w-[18vw] xl:w-[15vw] hero-title-logo-left" />
          <HeroTitle />
          <Logos.RKM className="w-[18vw] md:w-[16vw] xl:w-[12vw] hero-title-logo-right" />
        </div>
        <div className="grid hero-cards-grid">
          <HeroCardLeft />
          <div className="hero-cta flex flex-col-reverse col-span-1 md:col-span-2 xl:col-span-1 xl:flex-col gap-6 items-center justify-center mx-auto">
            <Button
              className={`${sub.className} xl:translate-y-[-150%]`}
              variant={"heroCTA"}
              size={"responsiveXL"}
            >
              Register
            </Button>
            <Button
              onClick={() => setVideoPlaying(!videoPlaying)}
              className={`${sub.className} hero-play rounded-full w-20 h-20 xl:w-28 xl:h-28 px-0`}
              variant={"heroCTA"}
              size={"responsiveXL"}
            >
              <div ref={playIconRef}>
                {videoPlaying ? (
                  <Pause className="w-8 h-8 xl:w-12 xl:h-12 scale-[250%]" />
                ) : (
                  <Play className="w-8 h-8 xl:w-12 xl:h-12 scale-[250%]" />
                )}
              </div>
            </Button>
          </div>
          <HeroCardRight />
        </div>
      </section>
    </main>
  );
}
