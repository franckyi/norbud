import AboutUs from "./ui/home/about-us";
import getData from "./lib/get-data";
import { companyInfoRequest } from "./lib/company-info-request";
import { ofertaRequest } from "./lib/oferta-request";
import WhyUs from "./ui/home/why-us";
import Oferta from "./ui/home/oferta";
import WriteUsButton from "./ui/common/write-us-button";
import Image from "next/image";

async function Home() {
  let data = await getData(companyInfoRequest.URL);
  let oferta = await getData(ofertaRequest.URL);
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
      <div className="my-24 text-9xl text-green-700 font-extrabold text-center">
        <p>Połączymy</p>
        <div className="mt-4 p-8 mx-auto bg-green-700">
          {/* <p>świat</p> */}
          <Image
            width={600}
            height={400}
            src="/bud.webp"
            alt="Przejście zdjęcie"
            className="mx-auto rounded-xl shadow-xl border-2 border-green-400"
          />
        </div>
      </div>
      <WhyUs
        whyUsHeading={data.whyUsHeading}
        whyUsList={whyUsList}
        whyUsFinalText={data.whyUsFinalText}
      />
      <Oferta ofertaList={oferta} />
      <WriteUsButton
        bg="bg-green-700"
        textColor="text-white"
        bgHover="hover:bg-stone-900 hover:text-white"
      />
    </>
  );
}

export default Home;
