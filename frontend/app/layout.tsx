// "use client";
import "./globals.css";
import Hero from "./ui/common/hero";
import { archivo } from "./ui/common/fonts";
import Footer from "./ui/common/footer";
import getData from "./lib/get-data";
import { companyInfoRequest } from "./data/company-info-request";
import AppBar from "./ui/common/app-bar";
// import { createContext } from "react";

// const ThemeContext = createContext("dark");

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let heroData = await getData(companyInfoRequest.URL);

  return (
    <html lang="pl">
      <body className={archivo.className}>
        <AppBar />
        <Hero heading={heroData.acf.aboutUsHeading} />
        <main className="text-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
