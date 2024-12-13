import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "./button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  imageURL,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  imageURL: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-slate-900 dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-1 min-h-[272px] relative w-full rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Image src={imageURL} alt="header" fill />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-xl mb-2 mt-2">{title}</div>
      </div>
      <Button className="" variant={"secondary"}>
        Expore Now
      </Button>
    </div>
  );
};
