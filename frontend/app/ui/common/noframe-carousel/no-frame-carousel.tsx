import "./noframecarousel.css";
import { toolsBrands } from "./carousel-config";
import CarouselItem from "./carousel-item";

function NoFrameCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(toolsBrands).map((key) => {
          return (
            <CarouselItem
              key={toolsBrands[key].id}
              imgUrl={toolsBrands[key].imgUrl}
              imgTitle={toolsBrands[key].title}
              imgWidth={toolsBrands[key].width}
              imgHeight={toolsBrands[key].height}
            ></CarouselItem>
          );
        })}
        {Object.keys(toolsBrands).map((key) => {
          return (
            <CarouselItem
              key={toolsBrands[key].id}
              imgUrl={toolsBrands[key].imgUrl}
              imgTitle={toolsBrands[key].title}
              imgWidth={toolsBrands[key].width}
              imgHeight={toolsBrands[key].height}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}

export default NoFrameCarousel;
