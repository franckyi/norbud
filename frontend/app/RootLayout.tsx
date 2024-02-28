import AppBar from "./ui/common/app-bar/app-bar";
import { archivo } from "./ui/common/fonts";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={archivo.className}>
        <AppBar />
        <main>{children}</main>
        <footer>@ 2024 Norbud. All rights reserved.</footer>
      </body>
    </html>
  );
}
