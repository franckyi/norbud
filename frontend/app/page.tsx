import AboutUs from "./ui/home/about-us";
import getData from "./lib/getData";
import { companyInfoRequest } from "./lib/company-info-request";
import WhyUs from "./ui/home/why-us";

async function Home() {
  let data = await getData(companyInfoRequest.URL);
  data = data.acf;

  let whyUsList = [
    data.whyUsGroup1,
    data.whyUsGroup2,
    data.whyUsGroup3,
    data.whyUsGroup4,
  ];

  return (
    <>
      <AboutUs aboutUsText={data.aboutUsText} />
      <WhyUs
        whyUsHeading={data.whyUsHeading}
        whyUsList={whyUsList}
        whyUsFinalText={data.whyUsFinalText}
      />
      <p>test 2</p>
    </>
  );
}

export default Home;
