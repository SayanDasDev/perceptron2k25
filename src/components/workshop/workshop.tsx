import { cn } from "@/lib/utils";

import EventRulesList from "../events/rules-list";
import Heading from "../heading";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { BackgroundGradient } from "../ui/background-gradient";

const Workshop = () => {
  const testimonials = [
    {
      quote:
        "Professor Pradip Ranjan Sengupta, an academic, author, filmmaker, and poet, has contributed extensively to literature, translations, and education.",
      name: "Dr. Pradip Ranjan Sengupta",
      designation: "Honorary Professor at Adamas University",
      src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/main/public/images/workshop_pr_sengupta.png",
    },
    {
      quote:
        "She is an accomplished Ed-Tech entrepreneur, HR expert, bestselling author, and trainer with significant impact in education and literature.",
      name: "Dr. Pallabi Sengupta",
      designation: "Founder and Director, Human and Emotion Learning",
      src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/main/public/images/workshop_pallabi_sengupta.png",
    },
    {
      quote:
        "He is a global HR expert, bestselling author, coach, and trainer with extensive experience in education, leadership, and development.  ",
      name: "Abhisek Gupta",
      designation: "Global HR Leader, Author, Leadership & Management Coach ",
      src: "https://raw.githubusercontent.com/SayanDasDev/perceptron2k25/refs/heads/main/public/images/workshop_abhisek_gupta.png",
    },
  ];
  return (
    <div className="w-full flex flex-col mt-20 items-center justify-center space-y-12">
      <Heading heading="Workshop" />
      <div className="justify-center items-center w-screen-xl p-10">
        <BackgroundGradient className="rounded-[22px] p-4 max-[1270px]:w-[80vw] w-full dark:bg-slate-900">
          <AnimatedGradientText>
            <div className="grid grid-cols-1 gap-12 items-center">
              <span
                className={cn(
                  `inline text-center animate-gradient text-4xl bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Management Skill Development Workshop
              </span>

              <div className="">
                <div className=" mx-auto">
                  <EventRulesList
                    className="grid grid-cols-1 sm:grid-cols-2 items-start gap-2 space-y-0"
                    rules={[
                      <div>Decision Making and Problem-Solving</div>,
                      <div>Conflict Resolution and Negotiation</div>,
                      <div>Innovation and Creativity in Practice</div>,
                      <div>Emotional Intelligence</div>,
                      <div>Critical Thinking</div>,
                      <div>Effective Teams</div>,
                      <div>Change Management</div>,
                      <div>Time Management, Productivity and Stress</div>,
                      <div>Business Etiquette and Communication</div>,
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedGradientText>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Workshop;
