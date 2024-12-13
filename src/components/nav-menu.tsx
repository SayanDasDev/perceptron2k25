"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import useFonts from "@/hooks/use-fonts";

import { docsConfig } from "@/config/docs";
import "@/styles/menu.css";

import { Button } from "./ui/button";

const NavMenu = () => {
  const { sub, mono } = useFonts();

  const container = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(".menu-bg-container", {
          display: "flex",
        })
        .to(".menu-overlay", {
          duration: 0.15,
          height: "640px",
          maxWidth: "300px",
          width: "calc(100vw - 24px)",
          ease: "power2.inOut",
        })
        .set(".nav-menu-links", { y: 20 })
        .to(".nav-menu-links", {
          duration: 0.04,
          y: 0,
          opacity: 1,
          stagger: 0.015,
          ease: "elastic.inOut",
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="" ref={container}>
      <Button
        onClick={toggleMenu}
        variant={"ghostNoHover"}
        className={`${sub.className} xl:hidden fixed top-5 right-3 z-[100] text-background/50 text-xl`}
      >
        {isMenuOpen ? `Close` : `Menu`}
      </Button>
      <div className="menu-overlay xl:hidden menu-bg-glassmorphic border border-background/20 fixed top-4 right-3 h-12 w-[100px] rounded-2xl z-[90]" />
      <div
        className={`${sub.className} menu-bg-container xl:hidden fixed top-0 right-0 translate-x-[calc(-50vw+50%)] min-[425px]:translate-x-[-75px] translate-y-[10%] hidden flex-col gap-6 items-start justify-center p-6 text-2xl text-gray-300 z-[95]`}
      >
        {docsConfig.navbarItems.map((item, i) => (
          <div className="flex gap-2 items-end" key={i}>
            <p
              className={`${mono.className} nav-menu-links translate-y-[-1000px] text-primary text-sm opacity-0`}
            >
              0{i}
            </p>
            <Link
              onClick={toggleMenu}
              className={`nav-menu-links translate-y-[-1000px] opacity-0`}
              href={item.href}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
