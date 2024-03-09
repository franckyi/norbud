"use client";
import "./globals.css";
import Hero from "./ui/common/hero";
import { archivo } from "./ui/common/fonts";
import Footer from "./ui/common/footer";
import AppBar from "./ui/common/app-bar/app-bar";
import { ReactNode, useState, createContext, useEffect } from "react";
import getData from "./lib/get-data";
import { companyInfoRequest } from "./lib/company-info-request";
import ContactSection from "./ui/contact/ContactSection";
import { companyInfoFallback } from "./data/company-info-fallback";
import GoogleMap from "./ui/common/map";
import { CssVarsProvider } from "@mui/material-next/styles";
import { customTheme } from "./ui/mui-custom-theme";

const bodyClasses =
  "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-400";

const heading = {
  classes:
    "my-8 text-2xl font-extrabold text-center uppercase dark:text-stone-200",
  text: "Skontaktuj się znami",
};

const ThemeContext = createContext<null | string>(null);

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [theme, setTheme] = useState("dark");
  const [companyInfo, setCompanyInfo] = useState(companyInfoFallback);
  const [isMapVisible, setIsMapVisible] = useState(false);

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

  function handleToggleMap() {
    setIsMapVisible(!isMapVisible);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <CssVarsProvider theme={customTheme}>
        <html lang="pl" className={`scroll-smooth ${theme}`}>
          <body className={`${archivo.className} ${bodyClasses}`}>
            <AppBar toggleTheme={toggleTheme} />
            <Hero />
            <main className="text-center">{children}</main>
            <h2 className={heading.classes}>{heading.text}</h2>
            <div className="flex">
              <button
                type="button"
                className="w-1/2 p-8 bg-green-700 text-white hover:bg-green-800 uppercase"
                onClick={handleToggleMap}
              >
                Kontakty
              </button>
              <button
                type="button"
                className="w-1/2 p-8 bg-green-700 text-white hover:bg-green-800 uppercase"
                onClick={handleToggleMap}
              >
                Gdzie jesteśmy
              </button>
            </div>

            {isMapVisible ? (
              <GoogleMap />
            ) : (
              <ContactSection companyInfo={companyInfo} />
            )}

            <Footer companyInfo={companyInfo} />
          </body>
        </html>
      </CssVarsProvider>
    </ThemeContext.Provider>
  );
}

export default RootLayout;
