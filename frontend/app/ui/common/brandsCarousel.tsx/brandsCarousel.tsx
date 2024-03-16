"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./responsive";
import CarouselItem from "./carousel-item";
import { brandList } from "@/app/data/brand-list";

function BrandsCarousel() {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
    >
      {brandList.map((brand) => (
        <CarouselItem
          key={brand.id}
          imgSrc={brand.imgSrc}
          imgTitle={brand.title}
          imgWidth={brand.width}
          imgHeight={brand.height}
          href={brand.href}
        />
      ))}
    </Carousel>
  );
}

export default BrandsCarousel;
