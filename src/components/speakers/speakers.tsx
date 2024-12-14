"use client";

import { cn } from "@/lib/utils";

import Heading from "../heading";
import AnimatedGradientText from "../ui/animated-gradient-text";

export function Speakers() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <Heading heading="Speakers" />
      <div className="w-full flex justify-center items-center">
        <EmptyState />
      </div>
    </div>
  );
}

const EmptyState = () => {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <div
        className={cn(
          "group mx-auto rounded text-base transition-all ease-in hover:cursor-pointer p-8 bg-slate-900 hover:bg-slate-950"
        )}
      >
        <div className="flex flex-col items-center justify-center px-4 py-1 transition ease-out hover:duration-300 text-white-100">
          <div className="text-9xl">📢</div>
          {/* <div className="text-xl pt-4 text-white">Wil be declared soon</div> */}
          <AnimatedGradientText>
            <span
              className={cn(
                `inline animate-gradient text-2xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Will be decleared soon...
            </span>
          </AnimatedGradientText>
        </div>
      </div>
    </div>
  );
};
