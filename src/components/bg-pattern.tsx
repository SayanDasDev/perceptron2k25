"use client";

import { motion } from "framer-motion";

import { HeroHighlight } from "./ui/hero-highlight";

export function BgPattern() {
  return (
    <HeroHighlight containerClassName="fixed z-[1] top-0 left-0 w-screen h-full">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      />
    </HeroHighlight>
  );
}
