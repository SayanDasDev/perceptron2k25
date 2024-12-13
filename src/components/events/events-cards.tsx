import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function EventsCards() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          imageURL="/event.png"
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    // header: <Event />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    // header: <Event />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    // header: <Event />,
  },
  {
    title: "Under the hammer",
    description:
      "Understand the impact of effective communication in our lives.",
    // header: <Event />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    // header: <Event />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    // header: <Event />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    // header: <Event />,
  },
];
