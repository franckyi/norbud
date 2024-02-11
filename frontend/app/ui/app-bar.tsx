"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../data/nav-links";

export default function AppBar() {
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
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            className="border-solid border-b-4 border-green-700 hover:border-red-700"
          >
            {label}
          </Link>
        ))}
        <a
          href="mailto:biuro@nor-bud.com"
          className="px-4 py-1 ml-2 bg-neutral-200 text-neutral-900 rounded-full hover:bg-white hover:text-green-700"
        >
          Napisz o Twoim projekcie
        </a>
      </nav>
    </div>
  );
}
