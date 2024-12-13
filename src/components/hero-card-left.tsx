import useFonts from "@/hooks/use-fonts";


const HeroCardLeft = () => {

  const {sub_cap, sub, font} = useFonts()

  return (
      <div className="hero-card-left xl:h-[280px] bg-glassmorphic border-subtle flex flex-col justify-center !border-b-0 max-xl:!border-r-0 !border-l-0 rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none xl:rounded-tl-none xl:rounded-tr-3xl text-center px-4">
        <p
        className={`${sub.className} font-size-xs text-gray-400 font-extrabold`}
      >
        Organized By
      </p>
      <p
        className={`${sub_cap.className} font-size-sm pt-2 text-gray-50 font-extrabold`}
      >
        Dept. of Computer Science
      </p>
      <p
        className={`${font.className} font-size-xs pt-4 leading-snug font-medium text-gray-300`}
      >
        Ramakrishna Mission Vivekananda Educational and Research Institute
        (RKMVERI)
      </p>
      <p
        className={`${font.className} font-size-xs pt-1 leading-snug font-extralight text-gray-50`}
      >
        (Deemed-to-be-University as declared by Govt. of India under Section 3
        of UGC Act, 1956)
      </p>
      </div>
  );
};

export default HeroCardLeft;
