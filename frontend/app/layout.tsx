"use client";
import "./globals.css";
import Hero from "./ui/common/hero";
import { archivo } from "./ui/common/fonts";
import Footer from "./ui/common/footer";
import AppBar from "./ui/common/app-bar/app-bar";
import { ReactNode, useState, createContext, useEffect } from "react";
import getData from "./lib/get-data";
import { companyInfoRequest } from "./lib/company-info-request";
import { CompanyInfo } from "./types/company-info";
import ContactSection from "./ui/contact/ContactSection";
import { companyInfoFallback } from "./data/company-info-fallback";
import GoogleMap from "./ui/common/map";

const bodyClasses =
  "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-400";

const ThemeContext = createContext<null | string>(null);

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [theme, setTheme] = useState("dark");
  const [companyInfo, setCompanyInfo] = useState(companyInfoFallback);

  useEffect(() => {
    getData(companyInfoRequest.URL).then((response) => {
      let data = response.filter(
        (item: any) => item.title.rendered === "Główny Norbud"
      );
      data = data[0].acf;
      setCompanyInfo(data);
    });
  }, []);

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("");
    } else {
      setTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <html lang="pl" className={`scroll-smooth ${theme}`}>
        <body className={`${archivo.className} ${bodyClasses}`}>
          <AppBar toggleTheme={toggleTheme} />
          <Hero />
          <main className="text-center">{children}</main>
          <ContactSection companyInfo={companyInfo} />
          <GoogleMap />
          <Footer companyInfo={companyInfo} />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}

export default RootLayout;
