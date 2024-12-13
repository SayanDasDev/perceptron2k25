import { Bruno_Ace, Bruno_Ace_SC, Bungee, DM_Sans, Sacramento, Sedan, VT323 } from "next/font/google";
const main = Bungee({ subsets: ["latin"], weight: ["400"] });
const sub_cap = Bruno_Ace_SC({ subsets: ["latin"], weight: ["400"] });
const sub = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });
const font = DM_Sans({ subsets: ["latin"] });
const serif_font = Sedan({ subsets: ["latin"], weight: ["400"] });
const handwriting = Sacramento({ subsets: ["latin"], weight: ["400"] });
const mono = VT323({ subsets: ["latin"], weight: ["400"] });

const useFonts = () => {
  return { font, serif_font, main, sub, sub_cap, handwriting, mono }
}

export default useFonts
