import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-16 mt-16 bg-stone-950 text-white">
      <Image
        className="mx-auto mb-8"
        src="logo.svg"
        alt="NORBUD Logo"
        width={100}
        height={100}
      />
      <p>@ 2024 Norbud. Wszelkie prawa zastrzeżone.</p>
    </footer>
  );
};

export default Footer;
