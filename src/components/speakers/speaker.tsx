import Image from "next/image";

import { Calendar, Clock } from "lucide-react";

import { speakersData } from "@/config/speakers";

import { BackgroundGradient } from "../ui/background-gradient";
import { Badge } from "../ui/badge";

const Speaker = () => {
  return (
    <div>
      <div className="max-w-screen-xl p-10 grid grid-cols-1">
        {speakersData.map((speaker, index) => {
          return (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] p-4 max-[1270px]:w-[80vw] max min-[824px]:p-10 min-[824px]:grid min-[824px]:grid-cols-[400px_1fr] dark:bg-slate-900"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                height="400"
                width="400"
                className="object-contain w-full rounded-[22px]"
              />
              {/* <div className="flex"> */}
              <div className="min-[824px]:pl-10 my-auto">
                <Badge className="mt-4" variant={"secondary"}>
                  {speaker.role}
                </Badge>
                <p className="text-2xl leading-none font-bold text-black mt-2 mb-1 dark:text-neutral-200">
                  {speaker.name}
                </p>
                <p className="text-[0.6rem] sm:text-sm leading-none text-neutral-400">
                  {/* {speaker.designation}
                    <br />
                    {speaker.department}
                    <br />
                    {speaker.institution} */}
                  {speaker.designation +
                    ", " +
                    speaker.department +
                    ", " +
                    speaker.institution}
                </p>
                <p className="text-2xl max-sm:text-lg leading-snug mt-4 text-slate-400">
                  <span className="text-slate-200 font-medium">Topic:</span>{" "}
                  {speaker.topic}
                </p>
                <div className="flex gap-2 max-[300px]:gap-0 flex-wrap">
                  <div className="rounded-full w-fit pl-3 pr-2 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-slate-800">
                    <Calendar size={14} />
                    <span className="bg-slate-700 rounded-full px-2 py-1 text-white text-nowrap">
                      {speaker.date}
                    </span>
                  </div>
                  <div className="rounded-full w-fit pl-3 pr-2 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-slate-800">
                    <Clock size={14} />
                    <span className="bg-slate-700 rounded-full px-2 py-1 text-white text-nowrap">
                      {speaker.time}
                    </span>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </BackgroundGradient>
          );
        })}
      </div>
    </div>
  );
};

export default Speaker;
