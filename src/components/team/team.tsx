import Heading from "../heading";
import { Designers } from "./designers";
import Organizers from "./organizers";
import TeamLeads from "./team-leads";

const Team = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <Heading heading="Our Team" />
      <Organizers />
      <TeamLeads />
      <Designers />
    </div>
  );
};

export default Team;
