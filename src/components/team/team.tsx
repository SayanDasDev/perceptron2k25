import Heading from "../heading";
import { Designers } from "./designers";
import Organizers from "./organizers";

const Team = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <Heading heading="Team" />
      <Organizers />
      <Designers />
    </div>
  );
};

export default Team;
