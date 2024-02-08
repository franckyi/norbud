import AppBar from "./app-bar";
import { HeroProps } from "../types/hero-props";

const heroClasses = "min-h-screen w-full bg-no-repeat bg-cover";

function Hero({ aboutUsHeading, bg }: HeroProps) {
  return (
    <header className={heroClasses + " " + bg}>
      <AppBar />
      <div className="lg:ml-80 my-16 text-white">
        <p className="italic text-xl">{aboutUsHeading}</p>
        <p className="text-8xl font-bold">Innowacyjność</p>
      </div>
    </header>
  );
}

export default Hero;
