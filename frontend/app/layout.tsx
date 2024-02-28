import "./globals.css";
import Hero from "./ui/common/hero";
import { archivo } from "./ui/common/fonts";
import Footer from "./ui/common/footer";
import getData from "./lib/get-data";
import { companyInfoRequest } from "./data/company-info-request";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let heroData = await getData(companyInfoRequest.URL);

  return (
    <html lang="pl">
      <body className={archivo.className}>
        <Hero heading={heroData.acf.aboutUsHeading} />
        <main className="text-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
