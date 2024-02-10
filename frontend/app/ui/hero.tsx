"use client";
import AppBar from "./app-bar";
import { HeroProps } from "../types/hero-props";
import FadingHeadline from "./fading-headline/fading-headline";
import Numbers from "./home/numbers";
import { usePathname } from "next/navigation";

const heroClasses = "min-h-screen w-full bg-no-repeat";
const words = ["Innowacyjność", "Doświadczenie", "Nowoczesność"];
let isHome = null;

function Hero({ heading }: HeroProps) {
  const pathName = usePathname();
  isHome = pathName === "/" ? true : false;
  let heroBg: string | null = null;
  heroBg = isHome ? "bg-hero-1 bg-cover" : "bg-hero-short";

  return (
    <header className={heroClasses + " " + heroBg}>
      <AppBar />
      {isHome && (
        <div className="lg:ml-80 my-16 text-white">
          <p className="italic text-xl">{heading}</p>
          <FadingHeadline words={words} interval={2000} />
          <Numbers />
        </div>
      )}
    </header>
  );
}

export default Hero;
