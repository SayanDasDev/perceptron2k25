import { EventItem } from "@/types/events";

export const RegistrationFromURL = "https://zfrmz.in/GKJwgL5mW6QU04vo2zho";
export const BrochureURL = "https://zfrmz.in/GKJwgL5mW6QU04vo2zho";

export const eventsConfig: EventItem[] = [
  {
    title: "Quiz",
    description:
      "Mode: Offline\nGroup member: Team (At most 2)\nPrize Pool: 6K",
    imageURL: "/images/quiz.png",
    prize: "6K",
    content: () => {
      return (
        <div>
          <h2 className="text-2xl font-bold">Rules and Guidelines</h2>
          <ul>
            <li>
              An Under 25 Quiz open to all students of colleges and
              universities.
            </li>
            <li>
              Each Team can have a maximum of 3 members. Duos and Lone wolves
              are also welcome.
            </li>
            <li>Cross College Teams are welcome.</li>
            <li>There can be multiple teams from one Institute.</li>
            <li>The Quiz will be divided into Prelims and Finals.</li>
            <li>There will be 26 questions in the prelims in A – Z format.</li>
            <li>Top 8 teams qualify to the finals.</li>
          </ul>
        </div>
      );
    },
  },
  {
    title: "Chess",
    description: "Mode: Offline\nGroup member: Individual\nPrize Pool: 6K",
    imageURL: "/images/chess.jpg",
    prize: "6K",
    content: () => {
      return (
        <div>
          <h2 className="text-2xl font-bold">Rules and Guidelines</h2>
          <ul>
            <li>
              Tournament Format: Preliminary rounds (Swiss style) will be played
              on a virtual board via Lichess.org or Chess.com, followed by
              offline board knockout rounds for the top 8 players.
            </li>
            <li>
              Time Control: 5 minutes per player for preliminary and
              quarterfinal rounds; 10 minutes for semifinals and finals.
            </li>
            <li>
              Platform Requirement: Preliminary rounds will be played on
              Lichess.org or Chess.com. Once the platform is finalized,
              participants will be notified via WhatsApp or Google Group, after
              which they must create an account and share their username.
            </li>
            <li>
              Fair Play & Rules: Standard chess rules apply. Violations of fair
              play will result in disqualification. Tournament arbiter's
              decisions will be final.
            </li>
            <li>
              Tie-Breakers: Tie-breakers (if needed) will follow the Buchholz
              system or platform-provided methods during preliminary rounds.
            </li>
            <li>
              Note: All participants must be physically present at Ramakrishna
              Mission Vivekananda Educational and Research Institute for the
              entire tournament. Further platform-related updates will be shared
              with registered participants via WhatsApp or Google Group once
              finalized.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    title: "Hackathon",
    description:
      "Mode: Online/Offline\nGroup member: Team (At most 3)\nPrize Pool: 6K",
    imageURL: "/images/hackathon.png",
    prize: "6K",
    content: () => {
      return (
        <div>
          <h2 className="text-2xl font-bold">Rules and Guidelines</h2>
          <ul>
            <li>
              The problem statement, case study, and dataset will be shared 7–10
              days before the event.
            </li>
            <li>
              Teams must submit their solutions, including models and
              methodologies, 2 days before the event. Submission details will be
              provided in advance.
            </li>
            <li>
              Each team will have 10 minutes to present their approach and
              findings during the event, focusing on methodology, analysis, and
              solution development.
            </li>
            <li>
              Further details will be provided here soon. Please check this page
              regularly for updates.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    title: "Coding",
    description: "Mode: Offline\nGroup member: Individual\nPrize Pool: 6K",
    imageURL: "/images/coding.jpg",
    prize: "6K",
    content: () => {
      return (
        <div>
          <h2 className="text-2xl font-bold">Rules and Guidelines</h2>
          <ul>
            <li>This contest will happen in only one round.</li>
            <li>Must have a HackerRank id.</li>
            <li>Duration of the Contest will be 1 hour.</li>
            <li>
              Candidates will be given marks upon how many test cases are
              passed.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    title: "Gaming",
    description: "Mode: Offline\nGroup member: Individual\nPrize Pool: 6K",
    imageURL: "/images/gaming.png",
    prize: "6K",
    content: () => {
      return (
        <div>
          <h2 className="text-2xl font-bold">Rules and Guidelines</h2>
          <ul>
            <li>
              Open to all. No prior gaming experience is required—everyone is
              encouraged to join and have fun!
            </li>
            <li>
              Participants can play using their own mobile phones, laptops, or
              the computers provided by the organizers.
            </li>
            <li>
              Controllers or external gaming devices are not permitted. Players
              must use the default controls available on their chosen device.
            </li>
            <li>
              Each match will last 8–10 minutes, unless otherwise specified by
              the event organizers.
            </li>
            <li>
              All participants must adhere to fair play guidelines, using only
              the in-game features and controls without external assistance or
              modifications.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    title: "Puzzle",
    description: "Mode: Offline\nGroup member: Individual\nPrize Pool: 6K",
    imageURL: "/images/puzzle.jpg",
    prize: "6K",
    content: () => {
      return (
        <div>
          <h2 className="text-2xl font-bold">Rules and Guidelines</h2>
          <ul>
            <li>
              Round 1: 15 MCQs, 40 minutes. Scoring: +4 for correct, 0 for
              wrong, +1 for unanswered.
            </li>
            <li>
              Round 2: 10 problems, 1 hour. Maximum 10 marks per question.
            </li>
            <li>
              Qualification: Top 20 from Round 1 qualify for Round 2.
              Tiebreaker: Fewer wrong attempts in Round 1.
            </li>
          </ul>
        </div>
      );
    },
  },

  {
    title: "Beyond the lines",
    description: "Mode: Online\nGroup member: Individual\nPrize Pool: 4K",
    imageURL: "/images/beyond_the_lines.jpg",
    prize: "4K",
    content: () => {
      return (
        <div>
          <h2 className="text-2xl font-bold">Rules and Guidelines</h2>
          <ul>
            <li>
              All interested participants must register beforehand, no spot
              registration will be available.
            </li>
            <li>Registration will close at 8th January 11:59 PM.</li>
            <li>
              Participants have 24 hours to submit their writing in typing in a
              pdf and doc format. No handwritten submission will be entertained.
            </li>
            <li>
              The writing medium is English. Both the writing format and topics
              will be given out through online on 9th January 12:00 AM.
            </li>
            <li>The specific rules for each format will be given alongside.</li>
            <li>
              The submission likewise, will be through online. The links will be
              given out shortly after registration closes. The writing must be
              original, participants are strictly barred from using generative
              AI.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    title: "Photography",
    description: "Mode: Online\nGroup member: Individual\nPrize Pool: 4K",
    imageURL: "/images/photography.png",
    prize: "4K",
    content: () => {
      return (
        <div>
          <h2 className="text-2xl font-bold">Rules and Guidelines</h2>
          <ul>
            <li>Online photography event.</li>
            <li>Themes will be decided later. There will be two themes.</li>
            <li>Aspect ratio is 3:4 or 4:3 both are accepted.</li>
            <li>
              Each participant has to submit maximum of one photograph from each
              of the themes. Both mobile and camera are allowed for the
              competition. Pictures should have timestamps with participant’s
              names.
            </li>
            <li>
              Basic editing and colour grading is allowed. Participants have to
              submit both of the raw and edited pictures.
            </li>
          </ul>
        </div>
      );
    },
  },
  {
    title: "Auction",
    description:
      "Mode: Offline\nGroup member: Team (At most 3)\nPrize Pool: 6K",
    imageURL: "/images/auction.png",
    prize: "6K",
    content: () => {
      return (
        <div>
          <h2 className="text-2xl font-bold">Rules and Guidelines</h2>
          <ul>
            <li>
              Teams of 2-3 members must register with an owner and will receive
              a unique identification number. Spot registration is allowed.
            </li>
            <li>
              The event consists of two rounds: a prelims round (general
              knowledge quiz) and a finals auction round where teams build a
              squad of 15 players within a budget of 90 crores.
            </li>
            <li>
              Teams bid on players with specific bidding increments based on
              price ranges. Teams must adhere to squad composition rules,
              including a maximum of 7 non-Indian players and specific player
              roles.
            </li>
            <li>
              Teams are evaluated based on their playing 11, with points awarded
              for captains and wicket-keepers from a predefined list.
              Tiebreakers include reserve player points and remaining budget.
            </li>
            <li>
              Teams will be disqualified for failing to meet squad criteria,
              running out of budget, or engaging in unfair practices during
              prelims.
            </li>
            <li>
              Teams must arrive on time, cannot communicate during the event,
              and must consult the auctioneer for rule clarifications before the
              auction begins.
            </li>
          </ul>
        </div>
      );
    },
  },
];
