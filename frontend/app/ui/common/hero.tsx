"use client";
import CheckisHome from "@/app/lib/check-is-home";
import AnimatedHeadline from "../animated-headline/animated-headline";
import Numbers from "../home/numbers";
import getWelcomeMessage from "@/app/lib/get-welcome-message";
import { useEffect, useState } from "react";

const heroBaseClasses =
  "flex items-end pb-16 max-md:p-8 max-md:py-16 bg-no-repeat";

function Hero() {
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
          <Numbers />
        </div>
      )}
    </header>
  );
}

export default Hero;
