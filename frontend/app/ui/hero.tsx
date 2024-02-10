"use client";
import AppBar from "./app-bar";
import { HeroProps } from "../types/hero-props";
import FadingHeadline from "./fading-headline/fading-headline";
import Numbers from "./home/numbers";
import { usePathname } from "next/navigation";

const baseClasses = "w-full bg-no-repeat";
const words = ["Innowacyjność", "Doświadczenie", "Nowoczesność"];
let isHome = null;

function Hero({ heading }: HeroProps) {
  const pathName = usePathname();
  isHome = pathName === "/" ? true : false;
  let heroClasses: string | null = null;
  heroClasses = isHome
    ? "bg-hero-1 bg-cover min-h-screen"
    : "bg-hero-short min-h-80";

  return (
    <header className={baseClasses + " " + heroClasses}>
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
