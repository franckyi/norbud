import { NAV_LINKS } from "@/app/data/nav-links";
import Link from "next/link";
import WriteUsButton from "../../write-us-button";
import ThemeSwitcher from "../../theme-switcher/theme-switcher";

const navigation = {
  containerClasses:
    "max-md:my-4 p-3 flex flex-wrap items-center max-md:justify-center h-full gap-4 lg:gap-16 lg:px-4 lg:pl-12 lg:w-full text-sm tracking-wide lg:font-semibold leading-6 bg-green-700 text-stone-100 uppercase",
};

interface NavigationProps {
  themeToggle: () => void;
}

function Navigation({ themeToggle }: NavigationProps) {
  return (
    <nav className={navigation.containerClasses} aria-label="Global">
      {NAV_LINKS.map(({ id, href, label }, index) => (
        <Link key={id} href={href}>
          <div className="relative z-10">{label}</div>
        </Link>
      ))}
      <ThemeSwitcher themeToggle={themeToggle} />
      <WriteUsButton
        bg="bg-white"
        textColor="text-black"
        bgHover="hover:bg-stone-900 hover:text-white"
      />
    </nav>
  );
}

export default Navigation;
