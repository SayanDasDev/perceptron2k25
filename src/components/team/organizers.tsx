import Image from "next/image";
import Link from "next/link";

import { Github, Globe, Linkedin } from "lucide-react";

import { TeamData } from "@/config/team";
import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { WobbleCard } from "../ui/wobble-card";

const Organizers = () => {
  const data = TeamData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 gap-10 max-w-7xl mx-auto w-full">
      {TeamData.map((data, i) => (
        <WobbleCard
          key={i}
          containerClassName="col-span-1 group h-full bg-slate-950 h-72 w-72 "
          className="p-4 !px-4 flex flex-col items-center justify-between no-scrollbar"
        >
          <Badge
            variant={"secondary"}
            className="text-lg bg-glassmorphic text-primary rounded-full group-hover:bg-background"
          >
            Organizer
          </Badge>
          <Image
            src={data.avatar}
            fill
            alt={""}
            className="absolute inset-0 -z-10 object-cover rounded-2xl brightness-50 group-hover:brightness-100 ease-in-out duration-300 transition-all"
          />
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="font-bold text-background text-2xl">
              {data.name}
            </div>
            <div className="flex gap-4 justify-around ">
              {data.github && (
                <Link
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={data.github}
                >
                  <Github size={16} />
                </Link>
              )}
              {data.linkedIn && (
                <Link
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={data.linkedIn}
                >
                  <Linkedin size={16} />
                </Link>
              )}
              {data.website && (
                <Link
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={data.website}
                >
                  <Globe size={16} />
                </Link>
              )}
            </div>
          </div>
        </WobbleCard>
      ))}
    </div>
  );
};

export default Organizers;
