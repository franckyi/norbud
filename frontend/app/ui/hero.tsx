import AppBar from "./app-bar";
import { HeroProps } from "../types/hero-props";
import getData from "../lib/getData";
import { companyInfoRequest } from "../data/company-info-request";
import FadingHeadline from "./FadingHeadline/FadingHeadline";
import Numbers from "./home/numbers";

const heroClasses = "min-h-screen w-full bg-no-repeat bg-cover";
const words = ["Innowacyjność", "Doświadczenie", "Nowoczesność"];

async function Hero({ bg }: HeroProps) {
  let data = await getData(companyInfoRequest.URL);
  let aboutUsHeading = data.acf.aboutUsHeading;

  return (
    <header className={heroClasses + " " + bg}>
      <AppBar />
      <div className="lg:ml-80 my-16 text-white">
        <p className="italic text-xl">{aboutUsHeading}</p>
        <FadingHeadline words={words} interval={2000} />
        <Numbers />
      </div>
    </header>
  );
}

export default Hero;
