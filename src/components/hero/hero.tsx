import Image from "next/image";
import { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Pause, Play } from "lucide-react";

import BgVideo from "@/components/hero/bg-video";
import HeroCardLeft from "@/components/hero/hero-card-left";
import HeroCardRight from "@/components/hero/hero-card-right";
import HeroTitle from "@/components/hero/hero-title";
import { Logos } from "@/components/logos";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

import useFonts from "@/hooks/use-fonts";

import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Hero = () => {
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
    <>
      {videoPlaying ? (
        <BgVideo />
      ) : (
        <Image src={"/images/hero.png"} alt="" fill objectFit="cover" />
      )}
      <div className="overlay absolute inset-0  bg-black/50" />
      <Navbar />
      <div className="text-gray-50 h-4 xl:hidden ml-auto mr-6 my-6" />
      <div className="w-full z-10 hero-title-grid xl:flex items-center justify-between mt-8 xl:mt-0 xl:px-6 xl:pb-8">
        <Logos.Perceptron className="w-[20vw] hero-title-logo-left" />
        <HeroTitle />
        <Image
          src={`/icons/rkm-logo.webp`}
          alt=""
          width={400}
          height={400}
          className="w-[20vw] object-cover hero-title-logo-right"
        />
      </div>
      <div className="grid hero-cards-grid">
        <HeroCardLeft />
        <div className="hero-cta flex flex-col-reverse col-span-1 md:col-span-2 xl:col-span-1 xl:flex-col gap-6 items-center justify-center mx-auto">
          {/* <Button
            className={`${sub.className} xl:translate-y-[-150%] cursor-pointer z-[100]`}
            variant={"heroCTA"}
            size={"responsiveXL"}
          >
            Brochure
          </Button> */}
          <HoverBorderGradient
            containerClassName="rounded-full xl:translate-y-[-150%] cursor-pointer z-[100] !bg-glassmorphic`"
            as="button"
            // onClick={() => }
            className={`${sub.className} cursor-pointer z-[100] bg-glassmorphic text-2xl px-8`}
          >
            <span>Brochure</span>
          </HoverBorderGradient>
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
    </>
  );
};

export default Hero;
