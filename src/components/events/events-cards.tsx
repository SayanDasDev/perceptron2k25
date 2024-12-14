import { eventsConfig } from "@/config/events";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function EventsCards() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {eventsConfig.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          imageURL={item.imageURL}
        />
      ))}
    </BentoGrid>
  );
}
