import Heading from "../heading";
import SparklesText from "../ui/sparkles-text";
import Designers from "./designers";
import Organizers from "./organizers";
import TeamLeads from "./team-leads";

const Team = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <Heading heading="Our Team" />
      <SparklesText className="text-background text-2xl" text="Organizers" />
      <Organizers />
      <SparklesText className="text-background text-2xl" text="Team Leads" />
      <TeamLeads />
      <SparklesText className="text-background text-2xl" text="Designers" />
      <Designers />
    </div>
  );
};

export default Team;
