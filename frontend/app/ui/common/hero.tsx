"use client";
import CheckisHome from "@/app/lib/check-is-home";
import { HeroProps } from "../../types/hero-props";
import FadingHeadline from "../fading-headline/fading-headline";
import Numbers from "../home/numbers";

const baseClasses = "w-full max-md:p-8 bg-no-repeat";
const words = ["Innowacyjność", "Doświadczenie", "Nowoczesność"];

function Hero({ heading }: HeroProps) {
  let heroClasses: string | null = null;
  heroClasses = CheckisHome()
    ? "bg-hero-1 bg-cover min-h-screen"
    : "bg-hero-short bg-cover min-h-80";

  let isHome = CheckisHome();

  return (
    <header className={baseClasses + " " + heroClasses}>
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
