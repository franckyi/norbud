import AppBar from "./ui/common/app-bar";
import { archivo } from "./ui/common/fonts";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={archivo.className}>
        <AppBar />
        <main bg="bg-hero-1">{children}</main>
        <footer>@ 2024 Norbud. All rights reserved.</footer>
      </body>
    </html>
  );
}
