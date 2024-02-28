import AboutUs from "./ui/home/about-us";
import getData from "./lib/get-data";
import { companyInfoRequest } from "./lib/company-info-request";
import { ofertaRequest } from "./lib/oferta-request";
import WhyUs from "./ui/home/why-us";
import Oferta from "./ui/home/oferta";
import WriteUsButton from "./ui/common/write-us-button";
import { ServiceProps } from "./types/services-props";
import type { Metadata } from "next";
import SampleWork from "./ui/home/sample-work";

export const metadata: Metadata = {
  title: "NOR-BUD od 2021 r. Zmieniamy Polskę",
  description:
    "BUD to firma, której początki sięgają 12 stycznia 2021 roku. Jesteśmy dumni, że w tak krótkim czasie udało nam się zdobyć zaufanie klientów i zyskać uznanie w branży budowlanej.",
};

async function Home() {
  let data = await getData(companyInfoRequest.URL);
  let services: ServiceProps[] = await getData(ofertaRequest.URL);
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
      <SampleWork />
      <WhyUs
        whyUsHeading={data.whyUsHeading}
        whyUsList={whyUsList}
        whyUsFinalText={data.whyUsFinalText}
      />
      <Oferta services={services} />
      <WriteUsButton
        bg="bg-green-700"
        textColor="text-white"
        bgHover="hover:bg-stone-900 hover:text-white"
      />
    </>
  );
}

export default Home;
