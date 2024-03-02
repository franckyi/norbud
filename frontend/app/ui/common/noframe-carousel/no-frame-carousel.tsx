import "./noframecarousel.css";
import { brandList } from "../../../data/brand-list";
import CarouselItem from "./carousel-item";

function NoFrameCarousel() {
  return (
    <div className="carousel-container">
      carousel
      <div className="carousel-track">
        {brandList.length > 0 &&
          brandList.map((brand) => {
            return (
              <CarouselItem
                key={brand.id}
                imgSrc={brand.imgSrc}
                imgTitle={brand.title}
                imgWidth={brand.width}
                imgHeight={brand.height}
              ></CarouselItem>
            );
          })}
        {brandList.length > 0 &&
          brandList.map((brand) => {
            return (
              <CarouselItem
                key={brand.id}
                imgSrc={brand.imgSrc}
                imgTitle={brand.title}
                imgWidth={brand.width}
                imgHeight={brand.height}
              ></CarouselItem>
            );
          })}
      </div>
    </div>
  );
}

export default NoFrameCarousel;
