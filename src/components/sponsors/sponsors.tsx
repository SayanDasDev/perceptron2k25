"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Facebook, Globe, Instagram, Linkedin, Youtube } from "lucide-react";

import { sponsorData } from "@/config/sponsors";
import { cn } from "@/lib/utils";

import Heading from "../heading";
import { buttonVariants } from "../ui/button";
import { GlareCard } from "../ui/glare-card";

const Sponsors = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <Heading heading="Sponsors" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 gap-10 max-w-7xl mx-auto w-full">
        {sponsorData.map((sponsor, index) => (
          <div key={index} className="flex justify-center items-center">
            <GlareCard className="flex flex-col items-center justify-center text-background !mx-auto px-4">
              <Image
                src={sponsor.imageURL}
                width={200}
                height={200}
                alt={sponsor.name}
                className="h-40 object-contain w-full"
              />
              {/* <p className="text-background font-bold text-xl mt-4">
                {sponsor.name}
              </p> */}
              <p className="text-background/75 font-semibold text-lg mt-8">
                {sponsor.title}
              </p>
              <div className="grid grid-cols-3 flex-wrap gap-2 mt-4 !z-[10000]">
                {Object.entries(sponsor.links || {}).map(
                  ([social, link], index) => (
                    <React.Fragment key={index}>
                      {social == "website" && (
                        <Link
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "bg-background rounded-full mr-4 text-foreground z-[10000]"
                          )}
                          href={link}
                        >
                          <Globe size={16} />
                        </Link>
                      )}
                      {social == "linkedin" && (
                        <Link
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "bg-background rounded-full mr-4 text-foreground z-[10000]"
                          )}
                          href={link}
                        >
                          <Linkedin size={16} />
                        </Link>
                      )}
                      {social == "facebook" && (
                        <Link
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "bg-background rounded-full mr-4 text-foreground z-[10000]"
                          )}
                          href={link}
                        >
                          <Facebook size={16} />
                        </Link>
                      )}
                      {social == "instagram" && (
                        <Link
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "bg-background rounded-full mr-4 text-foreground z-[10000]"
                          )}
                          href={link}
                        >
                          <Instagram size={16} />
                        </Link>
                      )}
                      {social == "youtube" && (
                        <Link
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "bg-background rounded-full mr-4 text-foreground z-[10000]"
                          )}
                          href={link}
                        >
                          <Youtube size={16} />
                        </Link>
                      )}
                    </React.Fragment>
                  )
                )}
              </div>
            </GlareCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
