"use client";

import { GitGraph } from "lucide-react";

import Heading from "../heading";
import { GlareCard } from "../ui/glare-card";

const Sponsors = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <Heading heading="Sponsors" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 gap-10 max-w-7xl mx-auto w-full">
        <div className="flex justify-center items-center">
          <GlareCard className="flex flex-col items-center justify-center text-background !mx-auto">
            <GitGraph size={64} />
            <p className="text-white font-bold text-xl mt-4">Aceternity</p>
          </GlareCard>
        </div>
        <div className="flex justify-center items-center">
          <GlareCard className="flex flex-col items-center justify-center text-background !mx-auto">
            <GitGraph size={64} />
            <p className="text-white font-bold text-xl mt-4">Aceternity</p>
          </GlareCard>
        </div>
        <div className="flex justify-center items-center">
          <GlareCard className="flex flex-col items-center justify-center text-background !mx-auto">
            <GitGraph size={64} />
            <p className="text-white font-bold text-xl mt-4">Aceternity</p>
          </GlareCard>
        </div>
        <div className="flex justify-center items-center">
          <GlareCard className="flex flex-col items-center justify-center text-background !mx-auto">
            <GitGraph size={64} />
            <p className="text-white font-bold text-xl mt-4">Aceternity</p>
          </GlareCard>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
