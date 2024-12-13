import useFonts from "@/hooks/use-fonts";

import Countdown from "./countdown";

const HeroCardRight = () => {
  const { sub, sub_cap } = useFonts();

  return (
    <div className="hero-card-right bg-glassmorphic text-center px-4 border-subtle flex flex-col justify-center !border-b-0 max-xl:!border-l-0 max-md:!border-t-0 !border-r-0 md:rounded-tr-3xl xl:rounded-tr-none xl:rounded-tl-3xl">
      <p
        className={`${sub.className} text-[clamp(6px,3vw,16px)] text-gray-400 font-extrabold`}
      >
        Event Date
      </p>
      <p
        className={`${sub_cap.className} text-[clamp(10px,4vw,24px)] pt-2 pb-6 text-gray-50 font-extrabold`}
      >
        10-11<sup>th</sup> January, 2025
      </p>
      <p
        className={`${sub.className} text-[clamp(6px,3vw,16px)] pb-2 text-gray-400 font-extrabold`}
      >
        Perceptron stats in
      </p>
      <Countdown />
    </div>
  );
};

export default HeroCardRight;
