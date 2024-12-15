import React from "react";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface EventRulesListProps extends React.HTMLAttributes<HTMLElement> {
  rules: React.ReactNode[];
}

const EventRulesList = ({
  rules,
  className,
  ...props
}: EventRulesListProps) => {
  return (
    <ul
      className={cn("space-y-4 text-left text-background/90", className)}
      {...props}
    >
      {rules.map((rule, index) => (
        <li
          key={index}
          className="grid grid-cols-[20px,1fr] gap-2 items-center text-lg"
        >
          <Check size={20} className="self-start mt-1" />
          {rule}
        </li>
      ))}
    </ul>
  );
};

export default EventRulesList;
