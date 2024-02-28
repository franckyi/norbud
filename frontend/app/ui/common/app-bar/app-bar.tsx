"use client";
import Logo from "../logo";
import NavigationLinks from "./navigation-links/navigation-links";

const appBarClasses =
  "lg:flex lg:justify-center lg:gap-8 top-0 lg:top-8 z-50 lg:pt-8 lg:ml-80";

interface AppBarProps {
  handleThemeToggleClick: () => void;
}

function AppBar({ handleThemeToggleClick }: AppBarProps) {
  return (
    <div className={appBarClasses}>
      <Logo classes="max-md:mx-auto" />
      <NavigationLinks handleThemeToggleClick={handleThemeToggleClick} />
    </div>
  );
}

export default AppBar;
