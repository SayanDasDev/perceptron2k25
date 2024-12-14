import Heading from "../heading";
import Organizers from "./organizers";

const Team = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <Heading heading="Team" />
      <Organizers />
    </div>
  );
};

export default Team;
