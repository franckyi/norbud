import Image from "next/image";

interface LogoProps {
  classes: string;
  version: string;
}

function Logo({ classes, version }: LogoProps) {
  const logo = {
    src: `/logo-${version}.svg`,
    alt: "Norbud logo",
  };

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
