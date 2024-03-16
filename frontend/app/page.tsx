import AboutUs from "@/components/home/about-us";
import getData from "@/lib/get-data";
import { homeContentRequest } from "@/lib/home-content-request";
import { ofertaRequest } from "@/lib/oferta-request";
import WhyUs from "@/components/home/why-us";
import OurServices from "@/components/home/our-services";
import { ServiceProps } from "@/types/services-props";
import type { Metadata } from "next";
import SampleWork from "@/components/home/sample-work";
import BrandsCarousel from "@/components/common/brandsCarousel.tsx/brandsCarousel";

export const metadata: Metadata = {
  title: "NOR-BUD od 2021 r. Zmieniamy Polskę",
  description:
    "BUD to firma, której początki sięgają 12 stycznia 2021 roku. Jesteśmy dumni, że w tak krótkim czasie udało nam się zdobyć zaufanie klientów i zyskać uznanie w branży budowlanej.",
};

async function Home() {
  let data = await getData(homeContentRequest.URL);
  data = data.acf;
  const services: ServiceProps[] = await getData(ofertaRequest.URL);

  let whyUsList = [
    data.whyUsGroup1,
    data.whyUsGroup2,
    data.whyUsGroup3,
    data.whyUsGroup4,
  ];

  return (
    <>
      <BrandsCarousel />
      <AboutUs aboutUsText={data.aboutUsText} />
      <SampleWork />
      <WhyUs
        whyUsHeading={data.whyUsHeading}
        whyUsList={whyUsList}
        whyUsFinalText={data.whyUsFinalText}
      />
      <OurServices services={services} />
    </>
  );
}

export default Home;
