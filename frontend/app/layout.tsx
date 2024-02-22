import type { Metadata } from "next";
import "./globals.css";
import Hero from "./ui/hero";
import { archivo } from "./ui/fonts";
import Footer from "./ui/footer";
import getData from "./lib/get-data";
import { companyInfoRequest } from "./data/company-info-request";

export const metadata: Metadata = {
  title: "NOR-BUD od 2021 r. Zmieniamy Polskę",
  description:
    "BUD to firma, której początki sięgają 12 stycznia 2021 roku. Jesteśmy dumni, że w tak krótkim czasie udało nam się zdobyć zaufanie klientów i zyskać uznanie w branży budowlanej.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let heroData = await getData(companyInfoRequest.URL);

  return (
    <html lang="pl">
      <body className={archivo.className}>
        <Hero heading={heroData.acf.aboutUsHeading} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
