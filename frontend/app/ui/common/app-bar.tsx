"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "../../data/nav-links";
import WriteUsButton from "./write-us-button";

export default function AppBar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="lg:flex lg:justify-center lg:gap-8 top-0 lg:top-8 z-50 lg:pt-8 lg:ml-80">
      <Image
        src={"/logo.svg"}
        height={155}
        width={90}
        alt="Norbud logo"
        priority
        draggable="false"
        className="max-md:mx-auto"
      />
      <nav
        className="max-md:my-4 p-3 flex flex-wrap items-center max-md:justify-center h-full gap-4 lg:gap-16 lg:px-4 lg:pl-12 lg:w-full text-sm tracking-wide lg:font-semibold leading-6 bg-green-700 text-stone-100 uppercase"
        aria-label="Global"
      >
        {NAV_LINKS.map(({ href, label }, index) => (
          <Link key={label} href={href}>
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
        <WriteUsButton
          bg="bg-white"
          textColor="text-black"
          bgHover="hover:bg-stone-900 hover:text-white"
        />
      </nav>
    </div>
  );
}
