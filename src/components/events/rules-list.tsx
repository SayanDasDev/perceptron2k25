import React from "react";

import { Check } from "lucide-react";

const EventRulesList = ({ rules }: { rules: React.ReactNode[] }) => {
  return (
    <ul className="space-y-4 text-left text-background/90">
      {rules.map((rule, index) => (
        <li
          key={index}
          className="grid grid-cols-[20px,1fr] gap-2 items-center text-lg"
        >
          <Check size={20} />
          {rule}
        </li>
      ))}
    </ul>
  );
};

export default EventRulesList;
