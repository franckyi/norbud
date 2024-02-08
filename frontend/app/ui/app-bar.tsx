"use client";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../data/nav-links";

export default function AppBar() {
  return (
    <header className="sticky flex justify-end gap-8 top-0 lg:top-8 z-50">
      <Image
        src={"/logo.svg"}
        height={155}
        width={90}
        alt="Norbud logo"
        priority
      />
      <nav
        className="flex items-center gap-16 p-3 lg:px-4 lg:w-3/4 text-sm lg:font-semibold leading-6 lg:rounded bg-green-700 text-neutral-100 uppercase"
        aria-label="Global"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
        <Link
          href="mailto:biuro@nor-bud.com"
          className="px-4 py-1 ml-2 bg-neutral-200 text-neutral-900 rounded-full hover:bg-white"
        >
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
