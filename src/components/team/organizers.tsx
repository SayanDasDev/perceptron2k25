import Image from "next/image";
import Link from "next/link";

import { Github, Globe, Linkedin, Phone } from "lucide-react";

import { OrganizersData } from "@/config/team";
import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { WobbleCard } from "../ui/wobble-card";

const Organizers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 gap-10 max-w-7xl mx-auto w-full">
      {OrganizersData.map((member, i) => (
        <WobbleCard
          key={i}
          containerClassName="col-span-1 group h-full bg-slate-950 h-72 w-72 "
          className="p-4 !px-4 flex flex-col items-center justify-between no-scrollbar"
        >
          <Badge
            variant={"secondary"}
            className="text-lg bg-glassmorphic text-background rounded-full group-hover:bg-background group-hover:text-foreground"
          >
            {member.role}
          </Badge>
          <Image
            src={member.avatar}
            fill
            alt={""}
            className="absolute inset-0 -z-10 object-cover rounded-2xl group-hover:brightness-80 brightness-80 ease-in-out duration-300 transition-all"
          />
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="font-bold text-background text-2xl [text-shadow:_2px_5px_4px_rgb(0_0_0_/_40%)]">
              {member.name}
            </div>
            <div className="flex gap-4 justify-around ">
              {member.links?.github && (
                <Link
                  target="_blank"
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={member.links?.github}
                >
                  <Github size={16} />
                </Link>
              )}
              {member.links?.linkedIn && (
                <Link
                  target="_blank"
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={member.links?.linkedIn}
                >
                  <Linkedin size={16} />
                </Link>
              )}
              {member.links?.website && (
                <Link
                  target="_blank"
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={member.links?.website}
                >
                  <Globe size={16} />
                </Link>
              )}
              {member.links?.mobile && (
                <Link
                  target="_blank"
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={`tel:${member.links.mobile}`}
                >
                  <Phone size={16} />
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
