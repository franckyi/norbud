// "use client";
import "./globals.css";
import Hero from "./ui/common/hero";
import { archivo } from "./ui/common/fonts";
import Footer from "./ui/common/footer";
import AppBar from "./ui/common/app-bar";
import { ReactNode } from "react";
// import { createContext } from "react";

// const ThemeContext = createContext("dark");

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pl">
      <body className={archivo.className}>
        <AppBar />
        <Hero />
        <main className="text-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
