"use client";
import "./globals.css";
import Hero from "./ui/common/hero";
import { archivo } from "./ui/common/fonts";
import Footer from "./ui/common/footer";
import AppBar from "./ui/common/app-bar/app-bar";
import { ReactNode, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext<null | string>(null);

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [theme, setTheme] = useState("dark");

  function themeToggle() {
    if (theme === "dark") {
      setTheme("");
    } else {
      setTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <html lang="pl" className={`scroll-smooth ${theme}`}>
        <body className={archivo.className}>
          <AppBar themeToggle={themeToggle} />
          <p>{theme}</p>
          <Hero />
          <main className="text-center">{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}

export default RootLayout;
