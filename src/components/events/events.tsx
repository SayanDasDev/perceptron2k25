import EventTitleSection from "./event-title-section";
import { EventsCards } from "./events-cards";

const Events = () => {
  return (
    <div>
      <div className="event h-screen flex items-center justify-center text-8xl overflow-clip bg-gradient-to-b bg-transparent from-slate-900 to-transparent text-white">
        <EventTitleSection />
      </div>
      <div className="w-screen text-white p-12">
        <EventsCards />
      </div>
    </div>
  );
};

export default Events;
