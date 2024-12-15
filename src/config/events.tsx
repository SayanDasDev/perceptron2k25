import EventRulesList from "@/components/events/rules-list";

import { EventItem } from "@/types/events";

export const RegistrationFromURL = "https://zfrmz.in/GKJwgL5mW6QU04vo2zho";
export const BrochureURL = "/brochure.pdf";

export const eventsConfig: EventItem[] = [
  {
    title: "ExQuizzIt",
    description: "Quiz Competition",
    imageURL: "/images/quiz.png",
    prize: "₹ 6K",
    content: () => {
      return (
        <EventRulesList
          rules={[
            <div>
              An <span className="font-semibold text-primary">Under 25</span>{" "}
              Quiz open to all students of colleges and universities.
            </div>,
            <div>
              Each Team can have a maximum of{" "}
              <span className="font-semibold text-primary">3 members</span>.
              Duos and Lone wolves are also welcome.
            </div>,
            <div>Cross College Teams are welcome.</div>,
            <div>There can be multiple teams from one Institute.</div>,
            <div>The Quiz will be divided into Prelims and Finals.</div>,
            <div>
              There will be 26 questions in the prelims in{" "}
              <span className="font-semibold text-primary">A – Z</span> format.
            </div>,
            <div>Top 8 teams qualify to the finals.</div>,
          ]}
        />
      );
    },
  },
  {
    title: "Better Call Tal",
    description: "Chess Competition",
    imageURL: "/images/chess.jpg",
    prize: "₹ 6K",
    content: () => {
      return (
        <EventRulesList
          rules={[
            <div>
              <span className="font-semibold text-primary">
                Tournament Format:
              </span>{" "}
              Preliminary rounds (Swiss style) will be played on a virtual board
              via Lichess.org or Chess.com, followed by offline board knockout
              rounds for the top 8 players.
            </div>,
            <div>
              <span className="font-semibold text-primary">Time Control:</span>{" "}
              5 minutes per player for preliminary and quarterfinal rounds; 10
              minutes for semifinals and finals.
            </div>,
            <div>
              <span className="font-semibold text-primary">
                Platform Requirement:
              </span>{" "}
              Preliminary rounds will be played on Lichess.org or Chess.com.
              Once the platform is finalized, participants will be notified via
              WhatsApp or Google Group, after which they must create an account
              and share their username.
            </div>,
            <div>
              <span className="font-semibold text-primary">
                Fair Play & Rules:
              </span>{" "}
              Standard chess rules apply. Violations of fair play will result in
              disqualification. Tournament arbiter's decisions will be final.
            </div>,
            <div>
              <span className="font-semibold text-primary">Tie-Breakers:</span>{" "}
              Tie-breakers (if needed) will follow the Buchholz system or
              platform-provided methods during preliminary rounds.
            </div>,
            <div>
              <i>Note:</i> All participants must be physically present at
              Ramakrishna Mission Vivekananda Educational and Research Institute
              for the entire tournament. Further platform-related updates will
              be shared with registered participants via WhatsApp or Google
              Group once finalized.
            </div>,
          ]}
        />
      );
    },
  },
  {
    title: "Deep Think",
    description: "AI Hackathon",
    imageURL: "/images/hackathon.png",
    prize: "₹ 6K",
    content: () => {
      return (
        <EventRulesList
          rules={[
            <div>
              The problem statement, case study, and dataset will be shared{" "}
              <span className="font-semibold text-primary">7–10 days</span>{" "}
              before the event.
            </div>,
            <div>
              Teams must submit their solutions, including models and
              methodologies,{" "}
              <span className="font-semibold text-primary">2 days</span> before
              the event. Submission details will be provided in advance.
            </div>,
            <div>
              Each team will have{" "}
              <span className="font-semibold text-primary">10 minutes</span> to
              present their approach and findings during the event, focusing on
              methodology, analysis, and solution development.
            </div>,
            <div>
              Further details will be provided here soon. Please check this page
              regularly for updates.
            </div>,
          ]}
        />
      );
    },
  },
  {
    title: "The Turing Show",
    description: "Coding Competition",
    imageURL: "/images/coding.jpg",
    prize: "₹ 6K",
    content: () => {
      return (
        <EventRulesList
          rules={[
            <div>This contest will happen in only one round.</div>,
            <div>Must have a HackerRank id.</div>,
            <div>Duration of the Contest will be 1 hour.</div>,
            <div>
              Candidates will be given marks upon how many test cases are
              passed.
            </div>,
          ]}
        />
      );
    },
  },
  {
    title: "Clash of Wheels",
    description: "Gaming Competition",
    imageURL: "/images/gaming.png",
    prize: "₹ 6K",
    content: () => {
      return (
        <EventRulesList
          rules={[
            <div>
              Play{" "}
              <span className="font-semibold text-primary">Smash Karts</span>, a
              fast-paced, multiplayer online kart racing and battle royale game
              that combines high-speed driving with explosive combat.
            </div>,
            <div>
              Open to all. No prior gaming experience is required—everyone is
              encouraged to join and have fun!
            </div>,
            <div>
              Participants can play using their own mobile phones, laptops, or
              the computers provided by the organizers.
            </div>,
            <div>
              Controllers or external gaming devices are not permitted. Players
              must use the default controls available on their chosen device.
            </div>,
            <div>
              Each match will last{" "}
              <span className="font-semibold text-primary">8–10 minutes</span>,
              unless otherwise specified by the event organizers.
            </div>,
            <div>
              All participants must adhere to fair play guidelines, using only
              the in-game features and controls without external assistance or
              modifications.
            </div>,
          ]}
        />
      );
    },
  },
  {
    title: "Enigma Equation",
    description: "Puzzle Solving Competition",
    imageURL: "/images/puzzle.jpg",
    prize: "₹ 6K",
    content: () => {
      return (
        <EventRulesList
          rules={[
            <div>
              In this event you have to go through rounds by solving mind
              bending puzzles. The highest scorer wins.
            </div>,
            <div>
              <span className="font-semibold text-primary">Round 1:</span> 15
              MCQs.
              <EventRulesList
                className="space-y-[1px]"
                rules={[
                  <span>Time: 40 minutes.</span>,
                  <span>
                    Scoring: +4 for correct, 0 for wrong, +1 for unanswered.
                  </span>,
                ]}
              />
            </div>,
            <div>
              <span className="font-semibold text-primary">Round 2:</span> 10
              problems.
              <EventRulesList
                className="space-y-[1px]"
                rules={[
                  <span>Time: 1 hour</span>,
                  <span>Scoring: Maximum 10 marks per question.</span>,
                ]}
              />
            </div>,
            <div>
              <span className="font-semibold text-primary">Qualification:</span>{" "}
              Top 20 from Round 1 qualify for Round 2.
            </div>,
            <div>
              <span className="font-semibold text-primary">Tiebreaker:</span>{" "}
              Fewer wrong attempts in Round 1.
            </div>,
          ]}
        />
      );
    },
  },
  {
    title: "Under the Hammer",
    description: "Auction",
    imageURL: "/images/auction.png",
    prize: "₹ 6K",
    content: () => {
      return (
        <EventRulesList
          rules={[
            <div>
              Your goal is to{" "}
              <span className="font-semibold text-primary">
                build a cricket squad
              </span>{" "}
              through auction.
            </div>,
            <div>
              Teams of{" "}
              <span className="font-semibold text-primary">2-3 members</span>{" "}
              must register with an owner and will receive a unique
              identification number. Spot registration is allowed.
            </div>,
            <div>
              The event consists of two rounds: a prelims round (general
              knowledge quiz) and a finals auction round where teams build a
              squad of{" "}
              <span className="font-semibold text-primary">15 players</span>{" "}
              within a budget of{" "}
              <span className="font-semibold text-primary">90 crores</span>.
            </div>,
            <div>
              Teams bid on players with specific bidding increments based on
              price ranges. Teams must adhere to squad composition rules,
              including a maximum of{" "}
              <span className="font-semibold text-primary">
                7 non-Indian players
              </span>{" "}
              and specific player roles.
            </div>,
            <div>
              Teams are evaluated based on their playing 11, with points awarded
              for captains and wicket-keepers from a predefined list.
              Tiebreakers include reserve player points and remaining budget.
            </div>,
            <div>
              Teams will be disqualified for failing to meet squad criteria,
              running out of budget, or engaging in unfair practices during
              prelims.
            </div>,
            <div>
              Teams must arrive on time, cannot communicate during the event,
              and must consult the auctioneer for rule clarifications before the
              auction begins.
            </div>,
          ]}
        />
      );
    },
  },
  {
    title: "Beyond the lines",
    description: "Creative Writing",
    imageURL: "/images/beyond_the_lines.png",
    prize: "₹ 4K",
    content: () => {
      return (
        <EventRulesList
          rules={[
            <div>
              All interested participants must register beforehand, no spot
              registration will be available.
            </div>,
            <div>
              Registration will close at{" "}
              <span className="font-semibold text-primary">
                8th January 11:59 PM
              </span>
              .
            </div>,
            <div>
              Participants have{" "}
              <span className="font-semibold text-primary">24 hours</span> to
              submit their writing in typing in a pdf and doc format. No
              handwritten submission will be entertained.
            </div>,
            <div>
              The writing medium is English. Both the writing format and topics
              will be given out through online on{" "}
              <span className="font-semibold text-primary">
                9th January 12:00 AM
              </span>
              .
            </div>,
            <div>
              The specific rules for each format will be given alongside.
            </div>,
            <div>
              The submission likewise, will be through online. The links will be
              given out shortly after registration closes. The writing must be
              original, participants are strictly barred from using generative
              AI.
            </div>,
          ]}
        />
      );
    },
  },
  {
    title: "Lens and Light",
    description: "Photography Competition",
    imageURL: "/images/photography.png",
    prize: "₹ 4K",
    content: () => {
      return (
        <EventRulesList
          rules={[
            <div>Online photography event.</div>,
            <div>Themes will be decided later. There will be two themes.</div>,
            <div>Aspect ratio is 3:4 or 4:3 both are accepted.</div>,
            <div>
              Each participant has to submit maximum of one photograph from each
              of the themes. Both mobile and camera are allowed for the
              competition. Pictures should have timestamps with participant’s
              names.
            </div>,
            <div>
              Basic editing and colour grading is allowed. Participants have to
              submit both of the raw and edited pictures.
            </div>,
          ]}
        />
      );
    },
  },
];
