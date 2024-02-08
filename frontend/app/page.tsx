import AboutUs from "./ui/home/about-us";
import getData from "./lib/getData";
import { companyInfoRequest } from "./data/company-info-request";

async function Home() {
  const data = await getData(companyInfoRequest.URL);

  return (
    <>
      <AboutUs aboutUsText={data.aboutUsText} />
      <p>test 2</p>
    </>
  );
}

export default Home;
