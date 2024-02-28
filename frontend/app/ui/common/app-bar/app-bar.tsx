"use client";
import Logo from "../logo";
import Navigation from "./navigation/navigation";

const appBarClasses =
  "absolute lg:flex lg:justify-center lg:gap-8 top-0 lg:top-8 z-50 lg:pt-8 lg:ml-80";

interface AppBarProps {
  themeToggle: () => void;
}

function AppBar({ themeToggle }: AppBarProps) {
  return (
    <div className={appBarClasses}>
      <Logo classes="max-md:mx-auto" />
      <Navigation themeToggle={themeToggle} />
    </div>
  );
}

export default AppBar;
