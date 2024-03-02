import Image from "next/image";

interface CarouselItemProps {
  imgSrc: string;
  imgTitle: string;
  imgWidth: number;
  imgHeight: number;
}

function CarouselItem({
  imgSrc,
  imgTitle,
  imgWidth,
  imgHeight,
}: CarouselItemProps) {
  return (
    <div className="carousel-card">
      <Image src={imgSrc} alt={imgTitle} width={imgWidth} height={imgHeight} />
    </div>
  );
}

export default CarouselItem;
