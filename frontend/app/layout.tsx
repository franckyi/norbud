import type { Metadata } from "next";
import "./globals.css";
import Hero from "./ui/hero";
import { archivo } from "./ui/fonts";
import ContactSection from "./ui/contact";
import Footer from "./ui/footer";
import getData from "./lib/get-data";
import { companyInfoRequest } from "./data/company-info-request";

export const metadata: Metadata = {
  title: "NOR-BUD od 2021 r. Zmieniamy Polskę",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let companyInfo = await getData(companyInfoRequest.URL);
  let heroData = await getData(companyInfoRequest.URL);

  return (
    <html lang="pl">
      <body className={archivo.className}>
        <Hero heading={heroData.acf.aboutUsHeading} />
        <main>{children}</main>
        <ContactSection companyInfo={companyInfo} />
        <Footer />
      </body>
    </html>
  );
}
