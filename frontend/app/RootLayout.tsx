import AppBar from "./ui/app-bar";
import { inter } from "./layout";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <AppBar />
        <main bg="bg-hero-1">{children}</main>
        <footer>@ 2024 Norbud. All rights reserved.</footer>
      </body>
    </html>
  );
}
