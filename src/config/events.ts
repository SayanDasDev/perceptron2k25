import { EventItem } from "@/types/events";


export const eventsConfig: EventItem[] = [
  {
    title: "Stragtegem",
    description: "Case Study Competition",
    href: "stragtegem",
    imageURL: "/event.png",
    rules: [
      "Team Size: 2-3",
      "Time Limit: 10 minutes",
      "No. of Rounds: 2",
    ],
    prize: "₹10,000",
    formURL: "https://google.com",
  },
  {
    title: "Better Call Tal",
    description: "Chess Competition",
    href: "quiz",
    imageURL: "/event.png",
    rules: [
      "Time Control: 10+0",
      "No. of Rounds: 5",
      "Platform: Lichess",
    ],
    prize: "₹5,000",
    formURL: "https://google.com",
  },

]