import { NAV_LINKS } from "@/app/data/nav-links";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "../../theme-switcher/theme-switcher";
import WriteUsButton from "../../write-us-button";

const navigation = {
  containerClasses:
    "max-md:my-4 p-3 flex flex-wrap items-center max-md:justify-center h-full gap-4 lg:gap-16 lg:px-4 lg:pl-12 lg:w-full text-sm tracking-wide lg:font-semibold leading-6 bg-green-700 text-stone-100 uppercase",
};

interface NavigationLinksProps {
  handleThemeToggleClick: () => void;
}

function NavigationLinks({ handleThemeToggleClick }: NavigationLinksProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className={navigation.containerClasses} aria-label="Global">
      {NAV_LINKS.map(({ id, href, label }, index) => (
        <Link key={id} href={href}>
          <div
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="absolute inset-x-0 bottom-0 border-b-4 border-transparent transition-all duration-300"
              style={{
                width: hoveredIndex === index ? "100%" : "0",
                borderColor: hoveredIndex === index ? "#E53E3E" : "#48BB78",
              }}
            />
            <div className="relative z-10">{label}</div>
          </div>
        </Link>
      ))}
      <ThemeSwitcher handleThemeToggleClick={handleThemeToggleClick} />
      <WriteUsButton
        bg="bg-white"
        textColor="text-black"
        bgHover="hover:bg-stone-900 hover:text-white"
      />
    </nav>
  );
}

export default NavigationLinks;
