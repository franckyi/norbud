import Image from "next/image";

const logo = {
  src: "/logo.svg",
  alt: "Norbud logo",
};

interface LogoProps {
  classes: string;
}

function Logo({ classes }: LogoProps) {
  return (
    <Image
      src={logo.src}
      height={155}
      width={90}
      alt={logo.alt}
      priority
      draggable="false"
      className={classes}
    />
  );
}

export default Logo;
