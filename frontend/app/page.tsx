import AboutUs from "./ui/home/about-us";
import getData from "./lib/getData";
import { companyInfoRequest } from "./data/company-info-request";
import WhyUs from "./ui/home/why-us";

async function Home() {
  let data = await getData(companyInfoRequest.URL);
  data = data.acf;

  return (
    <>
      <AboutUs aboutUsText={data.aboutUsText} />
      <WhyUs whyUsHeading={data.whyUsHeading} whyUsList={data.whyUsList} whyUsFinalText={data.whyUsFinalText} />
      <p>test 2</p>
    </>
  );
}

export default Home;
