import AppBar from "./app-bar";
import { HeroProps } from "../types/hero-props";
import getData from "../lib/getData";
import { companyInfoRequest } from "../lib/company-info-request";

const heroClasses = "min-h-screen w-full bg-no-repeat bg-cover";

async function Hero({ bg }: HeroProps) {
  let data = await getData(companyInfoRequest.URL);
  let aboutUsHeading = data.acf.aboutUsHeading;

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
