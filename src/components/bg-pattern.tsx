"use client";

import { HeroHighlight } from "./ui/hero-highlight";

export function BgPattern() {
  return (
    <HeroHighlight containerClassName="fixed z-[-1] bg-slate-950 top-0 left-0 w-screen h-full">
      <span> </span>
    </HeroHighlight>
  );
}
