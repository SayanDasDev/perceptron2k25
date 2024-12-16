import { DesignersData, OrganizersData, TeamLeadsData } from "@/config/team";

import Heading from "../heading";
import SparklesText from "../ui/sparkles-text";
import TeamsData from "./teams-data";

const Team = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <Heading heading="Our Team" />
      <SparklesText className="text-background text-2xl" text="Organizers" />
      <TeamsData data={OrganizersData} isOrganizer={true} />
      <SparklesText
        className="text-background text-2xl"
        text="Event Team Leads"
      />
      <TeamsData data={TeamLeadsData} />
      <SparklesText className="text-background text-2xl" text="Designers" />
      <TeamsData data={DesignersData} />
    </div>
  );
};

export default Team;
