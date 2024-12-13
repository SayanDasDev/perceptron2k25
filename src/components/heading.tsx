import useFonts from "@/hooks/use-fonts";

const Heading = ({ heading }: { heading: string }) => {
  const { mono } = useFonts();

  return (
    <div className={`text-7xl text-primary ${mono.className}`}>{heading}</div>
  );
};

export default Heading;
