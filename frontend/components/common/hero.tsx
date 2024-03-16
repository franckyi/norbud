"use client";
import CheckisHome from "@/lib/check-is-home";
import AnimatedHeadline from "../animated-headline/animated-headline";
import Numbers from "../home/numbers";
import getWelcomeMessage from "@/lib/get-welcome-message";
import { useContext, useEffect, useState } from "react";

const heroBaseClasses =
  "flex items-end pb-16 max-md:p-8 max-md:py-16 bg-no-repeat";
type HeroProps = {
  worksCount: number;
};

function Hero({ worksCount }: HeroProps) {
  const [heading, setHeading] = useState("");

  useEffect(() => {
    getWelcomeMessage().then((heading) => setHeading(heading));
  }, []);

  const isHome = CheckisHome();
  const bgClasses = CheckisHome()
    ? "bg-hero-1 bg-cover min-h-screen"
    : "bg-hero-short bg-cover min-h-80";

  return (
    <header className={`${heroBaseClasses} ${bgClasses}`}>
      {isHome && (
        <div className="lg:ml-80 text-white">
          <p className="text-xl italic">{heading}</p>
          <AnimatedHeadline />
          <Numbers worksCount={worksCount} />
        </div>
      )}
    </header>
  );
}

export default Hero;
