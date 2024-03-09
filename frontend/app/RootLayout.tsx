"use client";
import "./globals.css";
import Hero from "./ui/common/hero";
import { archivo } from "./ui/common/fonts";
import Footer from "./ui/common/footer";
import AppBar from "./ui/common/app-bar/app-bar";
import React, { ReactNode, useState, createContext, useEffect } from "react";
import getData from "./lib/get-data";
import { companyInfoRequest } from "./lib/company-info-request";
import { companyInfoFallback } from "./data/company-info-fallback";
import { CssVarsProvider } from "@mui/material-next/styles";
import { customTheme } from "./ui/mui-custom-theme";
import ContactToggle from "./ui/contact/contact-toggle";
import { CompanyInfoResponse } from "./types/companyInfoResponse";

const bodyClasses =
  "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-400";

const ThemeContext = createContext<null | string>(null);

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [theme, setTheme] = useState("dark");
  const [companyInfo, setCompanyInfo] = useState(companyInfoFallback);

  useEffect(() => {
    getData(companyInfoRequest.URL).then((response) => {
      let data = response.filter(
        (item: CompanyInfoResponse) => item.title.rendered === "Główny Norbud"
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
      <CssVarsProvider theme={customTheme}>
        <html lang="pl" className={`scroll-smooth ${theme}`}>
          <body className={`${archivo.className} ${bodyClasses}`}>
            <AppBar toggleTheme={toggleTheme} />
            <Hero />
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
