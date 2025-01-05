import Image from "next/image";
import Link from "next/link";

import { Github, Globe, Linkedin, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { TeamItem } from "@/types/team";

import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { WobbleCard } from "../ui/wobble-card";

const TeamsData = ({
  data,
  isOrganizer = false,
}: {
  data: TeamItem[];
  isOrganizer?: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 gap-10 max-w-7xl mx-auto w-screen">
      {data.map((member, i) => (
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
            // src={`https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/main/public${member.avatar}`}
            fill
            alt={""}
            className={cn(
              isOrganizer
                ? "group-hover:brightness-80 brightness-80"
                : "brightness-50 group-hover:brightness-100",
              "absolute inset-0 -z-10 object-cover rounded-2xl ease-in-out duration-300 transition-all"
            )}
          />
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="font-bold text-background text-2xl">
              {member.name}
            </div>
            <div className="flex gap-4 justify-around ">
              {member.links?.github && (
                <Link
                  target="_blank"
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={member.links?.github}
                >
                  <span className="sr-only">Github</span>
                  <Github size={16} />
                </Link>
              )}
              {member.links?.linkedIn && (
                <Link
                  target="_blank"
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={member.links?.linkedIn}
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin size={16} />
                </Link>
              )}
              {member.links?.website && (
                <Link
                  target="_blank"
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={member.links?.website}
                >
                  <span className="sr-only">Website</span>
                  <Globe size={16} />
                </Link>
              )}
              {member.links?.mobile && (
                <Link
                  target="_blank"
                  className={cn(buttonVariants({ variant: "avatarLinks" }))}
                  href={`tel:${member.links.mobile}`}
                >
                  <span className="sr-only">Phone</span>
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

export default TeamsData;
