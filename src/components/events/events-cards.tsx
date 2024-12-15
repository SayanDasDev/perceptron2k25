"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useOutsideClick } from "@/hooks/use-outside-click";

import {
  BrochureURL,
  RegistrationFromURL,
  eventsConfig,
} from "@/config/events";
import { cn } from "@/lib/utils";

import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";

export function EventsCards() {
  const [active, setActive] = useState<
    (typeof eventsConfig)[number] | boolean | null
  >(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // @ts-ignore
  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[98%]  flex flex-col bg-slate-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={272}
                  height={272}
                  src={active.imageURL}
                  alt={active.title}
                  className="w-full h-56 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="bg-slate-900">
                <div className="flex justify-between flex-wrap gap-4 items-start p-4">
                  <div className="">
                    <Badge
                      variant={"secondary"}
                      className="text-sm mb-2 rounded-full text-foreground"
                    >
                      {active.prize}
                    </Badge>
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-background text-2xl"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.title}-${id}`}
                        className="text-background"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="pr-2 h-full relative">
                      <Link
                        href={BrochureURL}
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "rounded-full border bg-transparent h-[44px]"
                        )}
                      >
                        More Details
                      </Link>
                    </div>
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={RegistrationFromURL}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-primary text-foreground"
                    >
                      Register
                    </motion.a>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-background/75 max-h-80 sm:max-h-28 overflow-y-scroll text-xs md:text-sm lg:text-base md:h-fit pb-10 flex flex-col items-start gap-4 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-6xl mx-auto w-full gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {eventsConfig.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col justify-between items-center hover:bg-slate-900 dark: rounded-xl cursor-pointer border border-background/10"
          >
            <div className="flex gap-4 justify-center items-center flex-col ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={272}
                  height={272}
                  src={card.imageURL}
                  alt={card.title}
                  className="h-60 w-60 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-background text-center"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.title}-${id}`}
                  className="text-background/75 text-center "
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-background hover:bg-primary hover:text-background text-foreground mt-4"
            >
              Explore
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
