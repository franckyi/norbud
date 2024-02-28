"use client";
import Logo from "../logo";
import Navigation from "./navigation/navigation";

const appBarClasses =
  "absolute lg:flex lg:justify-center lg:gap-8 top-0 lg:top-8 z-50 lg:pt-8 lg:ml-80";

interface AppBarProps {
  toggleTheme: () => void;
}

function AppBar({ toggleTheme }: AppBarProps) {
  return (
    <div className={appBarClasses}>
      <Logo classes="max-md:mx-auto" />
      <Navigation toggleTheme={toggleTheme} />
    </div>
  );
}

export default AppBar;
