import { useState } from "react";

import useFonts from "@/hooks/use-fonts";

import { Button } from "../ui/button";
import { AboutVideo } from "./about-video";

const About = () => {
  const { main, font, serif_font, sub, sub_cap } = useFonts();

  const [about, setAbout] = useState<"RKMVERI" | "PERCEPTRON">("PERCEPTRON");

  const aboutRKMVERI = () => {
    return (
      <div className="space-y-4">
        <div>
          Ramakrishna Mission Vivekananda Educational and Research Institute
          (RKMVERI) is a recognized Deemed-to-be-University,overseen by the
          Ramakrishna Mission – a charitable, philanthropic, and spiritual
          organization with over more than 200 branches worldwide. Government of
          India declared RKMVERI, through a Gazetted Notification dated 5
          January 2005, as a de novo Deemed-to-be-University under Section 3 of
          UGC Act, 1956.
        </div>
        <div>
          The Institute is a leading educational institution in the country with
          a strong commitment to excellence in education and research offering a
          wide range of programs in the field of Arts, Science, Indian Heritage
          and more. Over a century ago, Swami Vivekananda, a leader in India's
          modernization and a Vedanta philosopher, emphasized education as a
          holistic process that builds character and integrates both Eastern
          spiritual wisdom and Western scientific knowledge. He supported
          educational initiatives and inspired figures like Jamshedji Tata,
          founder of the Indian Institute of Science. RKMVERI continues this
          legacy by focusing on character development, intellectual growth, and
          fostering a culture of innovation and service to society.
        </div>
      </div>
    );
  };

  const aboutPERCEPTRON = () => {
    return (
      <div className="space-y-4">
        <div>
          Welcome to the 3rd installation of Perceptron, the flagship technical
          fest organized by the Department of Computer Science at Ramakrishna
          Mission Vivekananda Educational and Research Institute, Belur.
        </div>
        <div>
          This year, Perceptron 2025 is a two-day extravaganza packed with
          exciting events, ranging from coding challenges and chess tournaments
          to quizzes, gaming competitions, and much more. For those eager to
          dive into the latest trends in Artificial Intelligence and technology,
          we have curated insightful seminars and thrilling hackathons that will
          inspire and ignite innovation.
        </div>
        <div>
          Be a part of this dynamic journey where technology meets talent, and
          ideas turn into reality. Perceptron 2025 isn’t just an event – it’s a
          movement to push boundaries, ignite passion, and celebrate the spirit
          of innovation. Whether you're here to compete, learn, or simply
          explore, there’s something for everyone. Let’s come together to create
          moments that inspire and memories that last a lifetime!
        </div>
      </div>
    );
  };

  return (
    <div
      className={`w-full h-full border-subtle max-md:border-0 !border-t-0 py-12 !border-b-0`}
    >
      <div className="h-full border-subtle flex items-center justify-center max-md:border-0 !border-l-0 !border-r-0">
        <div
          className={`${font.className} my-auto flex flex-col p-6 justify-center items-center`}
        >
          <div
            className={`${sub_cap.className} font-size-sm tracking-[2rem] md:tracking-[4rem] leading-[0px] flex flex-wrap items-center justify-center p-4 translate-x-[4%] text-slate-500`}
          >
            ABOUT
          </div>
          <div
            className={`${main.className} font-size-lg flex flex-wrap items-center justify-start px-4 mb-6 text-primary`}
          >
            {about}
          </div>
          <div className="flex flex-1 max-w-[1250px] sm:gap-4">
            <div className="flex flex-col flex-1">
              <AboutVideo />
              <div className="flex gap-4">
                <div className="w-[5%] max-sm:hidden rounded-md mt-[18px] h-[3px] bg-primary"></div>
                <div className="flex flex-1 justify-center items-center">
                  <div
                    className={`${serif_font.className} text-ellipsis font-size-sm text-justify sm:leading-10 overflow-hidden text-slate-300`}
                  >
                    {about == "RKMVERI" ? aboutRKMVERI() : aboutPERCEPTRON()}
                  </div>
                </div>
              </div>
              <Button
                className={`${sub.className} md:translate-x-[78px] !text-lg mt-6 w-[320px]`}
                variant={"heroCTA"}
                size={"responsiveXL"}
                onClick={() =>
                  setAbout(about == "RKMVERI" ? "PERCEPTRON" : "RKMVERI")
                }
              >
                About {about == "RKMVERI" ? "PERCEPTRON" : "RKMVERI"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
