"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Trophy } from "lucide-react";

import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "@/components/ui/responsive-modal";

import { useOutsideClick } from "@/hooks/use-outside-click";

import {
  BrochureURL,
  RegistrationFromURL,
  eventsConfig,
} from "@/config/events";
import { cn } from "@/lib/utils";

import { Logos } from "../logos";
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
      const menuElements = document.querySelectorAll(".menu");
      menuElements.forEach((element) => {
        (element as HTMLElement).style.display = "none";
      });
    } else {
      document.body.style.overflow = "auto";
      setTimeout(() => {
        const menuElements = document.querySelectorAll(".menu");
        menuElements.forEach((element) => {
          (element as HTMLElement).style.display = "block";
        });
      }, 500);
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
          <div className="fixed inset-0 grid place-items-center z-[1100]">
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
              className="flex absolute top-2 right-2 md:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full md:w-[90vw] h-screen md:h-[95vh] pb-8 md:max-w-[1000px] md:max-h-[720px] border border-background/10 flex flex-col md:grid grid-cols-3 grid-rows-[clamp(40vh_300px_10vh)_1fr] md:gap-4 bg-slate-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={272}
                  height={272}
                  src={active.imageURL}
                  alt={active.title}
                  className="w-full max-md:h-[25vh] h-80 md:h-full md:rounded-br-3xl object-cover object-top"
                />
              </motion.div>

              <div className="bg-slate-900 col-span-2 md:self-end">
                <div className="flex flex-col flex-wrap gap-4 items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-background text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-background/75"
                    >
                      {active.description}
                    </motion.p>
                    <div className="text-lg flex flex-wrap gap-2 items-center">
                      {/* Prize: &nbsp; */}
                      <Badge
                        variant={"secondary"}
                        className="text-sm mt-2 rounded-full text-foreground flex gap-1 items-center w-fit"
                      >
                        <Trophy
                          className="inline-block text-foreground/70"
                          size={16}
                        />
                        {active.prize}
                      </Badge>
                      {active.date && (
                        <Badge
                          variant={"secondary"}
                          className="text-sm mt-2 rounded-full text-foreground flex gap-1 items-center w-fit"
                        >
                          <Calendar
                            className="inline-block text-foreground/70"
                            size={16}
                          />
                          {active.date}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <div className="pr-2 h-full relative">
                      <Link
                        href={BrochureURL}
                        target="_blank"
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "rounded-full border bg-transparent h-[44px]"
                        )}
                      >
                        More Details
                      </Link>
                    </div>
                    {!active.overMessage ? (
                      <motion.a
                        layoutId={`button-${active.title}-${id}`}
                        href={RegistrationFromURL}
                        target="_blank"
                        className="px-4 py-3 text-sm rounded-full font-bold bg-primary text-foreground"
                      >
                        Register
                      </motion.a>
                    ) : (
                      <ResponsiveModal>
                        <ResponsiveModalTrigger asChild>
                          <motion.button
                            layoutId={`button-${active.title}-${id}`}
                            className="px-4 py-3 text-sm rounded-full font-bold bg-primary/50 text-background/75"
                          >
                            Register
                          </motion.button>
                        </ResponsiveModalTrigger>
                        <ResponsiveModalContent>
                          <ResponsiveModalHeader>
                            <ResponsiveModalTitle>
                              <Logos.closed className="size-36 -rotate-12 mx-auto" />
                              {active.overMessage.title}
                            </ResponsiveModalTitle>
                            <ResponsiveModalDescription>
                              {active.overMessage.desc}
                            </ResponsiveModalDescription>
                          </ResponsiveModalHeader>
                        </ResponsiveModalContent>
                      </ResponsiveModal>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-2xl font-bold text-background/80 pl-6">
                Rules and Guidelines
              </p>
              <div className="relative px-4 col-span-3 overflow-y-scroll no-scrollbar [mask:linear-gradient(to_bottom,white,white,white,white,transparent)]">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-background/75 overflow-y-scroll text-xs md:text-sm lg:text-base pb-10 flex flex-col items-start gap-4 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="max-w-6xl mx-auto w-full gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {eventsConfig.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col justify-between items-center sm:bg-slate-950 hover:bg-slate-900 rounded-xl cursor-pointer md:border border-background/10"
          >
            <div className="flex gap-4 justify-center items-center flex-col ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={272}
                  height={272}
                  // src={card.imageURL}
                  src={card.imageURL}
                  alt={card.title}
                  className="h-60 w-60 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-background text-center text-xl"
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
      </div>
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
