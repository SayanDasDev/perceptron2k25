import useFonts from "@/hooks/use-fonts";

const Heading = ({ heading }: { heading: string }) => {
  const { mono } = useFonts();

  return (
    <div className="relative h-[120px] w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1
        className={`md:text-6xl text-3xl lg:text-8xl ${mono.className} font-bold text-center text-primary relative z-20`}
      >
        {heading}
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-lime-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-lime-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default Heading;
