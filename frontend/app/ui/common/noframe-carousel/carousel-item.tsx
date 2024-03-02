import Image from "next/image";

function CarouselItem({ imgUrl, imgTitle, imgWidth, imgHeight }) {
  return (
    <div className="carousel-card">
      <Image src={imgUrl} alt={imgTitle} width={imgWidth} height={imgHeight} />
    </div>
  );
}

export default CarouselItem;
