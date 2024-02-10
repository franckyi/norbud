import AppBar from "./app-bar";
import { HeroProps } from "../types/hero-props";
import getData from "../lib/getData";
import { companyInfoRequest } from "../data/company-info-request";
import FadingHeadline from "./FadingHeadline/FadingHeadline";

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
        <div className="flex gap-4">
          <p className="w-36 h-36 p-12 flex flex-col justify-between items-center bg-green-700">
            <div className="text-6xl">10+</div>{" "}
            <span className="text-base font-light">Realizacje</span>
          </p>
          <p className="w-36 h-36 p-12 flex flex-col justify-between items-center bg-green-700">
            <div className="text-6xl">22</div>{" "}
            <span className="text-base font-light">Powiatów</span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
