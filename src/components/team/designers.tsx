"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Globe, Linkedin } from "lucide-react";

import { TeamData } from "@/config/team";
import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

export const Designers = ({ autoplay = true }: { autoplay?: boolean }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % TeamData.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + TeamData.length) % TeamData.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 2000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {TeamData.map((testimonial, index) => (
                <motion.div
                  key={testimonial.avatar}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : TeamData.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <Badge
              variant={"secondary"}
              className="text-sm rounded-full text-foreground"
            >
              {TeamData[active].role}
            </Badge>
            <h3 className="text-3xl font-bold text-background">
              {TeamData[active].name}
            </h3>
            <motion.p className="text-lg w-80 text-gray-500 mt-8 dark:text-neutral-300">
              {Object.entries(TeamData[active].links || {}).map(
                ([social, link], index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {social == "github" ? (
                      <Link
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "bg-background rounded-full mr-4"
                        )}
                        href={link}
                      >
                        <Github size={16} />
                      </Link>
                    ) : social == "linkedIn" ? (
                      <Link
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "bg-background rounded-full mr-4"
                        )}
                        href={link}
                      >
                        <Linkedin size={16} />
                      </Link>
                    ) : (
                      social == "website" && (
                        <Link
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "bg-background rounded-full mr-4"
                          )}
                          href={link}
                        >
                          <Globe size={16} />
                        </Link>
                      )
                    )}
                  </motion.span>
                )
              )}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
