"use client";
import "./globals.css";
import Hero from "@/components/common/hero";
import { archivo } from "@/components/common/fonts";
import Footer from "@/components/common/footer";
import AppBar from "@/components/common/app-bar/app-bar";
import React, { ReactNode, useState, createContext, useEffect } from "react";
import getData from "@/lib/get-data";
import { companyInfoRequest } from "@/lib/company-info-request";
import { companyInfoFallback } from "@/data/company-info-fallback";
import { CssVarsProvider } from "@mui/material-next/styles";
import { customTheme } from "@/components/mui-custom-theme";
import ContactToggle from "@/components/contact/contact-toggle";
import { CompanyInfoResponse } from "@/types/companyInfoResponse";
import { portfolioRequest } from "@/lib/portfolio-request";

const bodyClasses =
  "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-400";
const ThemeContext = createContext<null | string>(null);

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [theme, setTheme] = useState("dark");
  const [companyInfo, setCompanyInfo] = useState(companyInfoFallback);
  const [works, setWorks] = useState(null); // TODO: USE THIS TO GET DATA FOR HOME CAROUSELS
  const [worksCount, setWorksCount] = useState(0);

  useEffect(() => {
    getData(companyInfoRequest.URL).then((response) => {
      let data = response.filter(
        (item: CompanyInfoResponse) => item.title.rendered === "Główny Norbud"
      );
      data = data[0].acf;
      setCompanyInfo(data);
    });
  }, []);

  useEffect(() => {
    getData(portfolioRequest.URL).then((response) => {
      setWorks(response);
      setWorksCount(response.length);
    });
  });

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("");
    } else {
      setTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <CssVarsProvider theme={customTheme}>
        <html lang="pl" className={`scroll-smooth ${theme}`}>
          <body className={`${archivo.className} ${bodyClasses}`}>
            <AppBar toggleTheme={toggleTheme} />
            <Hero worksCount={worksCount} />
            <main className="text-center">{children}</main>
            <ContactToggle companyInfo={companyInfo} />
            <Footer companyInfo={companyInfo} />
          </body>
        </html>
      </CssVarsProvider>
    </ThemeContext.Provider>
  );
}

export default RootLayout;
