import * as React from "react";
import Image from "next/image";

interface CarouselLinkProps {
  href: string;
  children: React.ReactNode;
}

function CarouselLink({ href, children }: CarouselLinkProps) {
  return (
    <a
      href={href ?? "#"}
      className="inline-block p-8 h-36 flex justify-center items-center bg-green-700"
    >
      {children}
    </a>
  );
}

interface CarouselItemProps {
  imgSrc: string;
  imgTitle: string;
  imgWidth: number;
  imgHeight: number;
  href: string;
}

function CarouselItem({
  imgSrc,
  imgTitle,
  imgWidth,
  imgHeight,
  href,
}: CarouselItemProps) {
  return href !== null ? (
    <CarouselLink href={href}>
      <Image
        src={imgSrc}
        alt={imgTitle}
        width={imgWidth}
        height={imgHeight}
        draggable="false"
      />
    </CarouselLink>
  ) : (
    <div className="inline-block p-8 h-36 flex justify-center items-center bg-green-700">
      <Image
        src={imgSrc}
        alt={imgTitle}
        width={imgWidth}
        height={imgHeight}
        draggable="false"
      />
    </div>
  );
}

export default CarouselItem;
