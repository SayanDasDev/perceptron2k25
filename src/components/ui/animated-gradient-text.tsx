import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mt-8 mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-transparent px-4 py-1.5 text-sm font-medium backdrop-blur-sm  duration-500 ease-out [--bg-size:300%]",
        className
      )}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-transparent from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
    </div>
  );
}
