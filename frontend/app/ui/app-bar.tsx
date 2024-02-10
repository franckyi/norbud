"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { NAV_LINKS } from "../data/nav-links";

export default function AppBar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex justify-center gap-8 top-0 lg:top-8 z-50 lg:pt-8 lg:ml-80">
      <Image
        src={"/logo.svg"}
        height={155}
        width={90}
        alt="Norbud logo"
        priority
        draggable="false"
      />
      <nav
        className="flex items-center gap-16 p-3 lg:px-4 lg:pl-12 lg:w-full text-sm tracking-wide lg:font-semibold leading-6 bg-green-700 text-neutral-100 uppercase"
        aria-label="Global"
        style={{ height: "100%" }}
      >
        {NAV_LINKS.map(({ href, label }, index) => (
          <Link key={label} href={href}>
            <div className="relative">
              <div
                className={`absolute inset-x-0 bottom-0 border-b-4 border-transparent transition-all duration-300 ${
                  hoveredIndex === index ? "w-full border-red-700" : "w-0 border-green-700"
                }`}
              />
              <div
                className="relative z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {label}
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
