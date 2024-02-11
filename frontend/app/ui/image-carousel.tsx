"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Image from "next/image";
import createGallery from "../lib/create-gallery";
import { sizes } from "../data/image-galleries";

function ImageCarousel({ galleryId }: any) {
  let srcList: string[] = createGallery(galleryId, sizes);

  return (
    <Carousel>
      {srcList.map((src, i) => (
        <CarouselItem key={galleryId} src={src} />
      ))}
    </Carousel>
  );
}

function CarouselItem(props: any) {
  return (
    <Paper>
      <Image src={props.src} alt="Norbud" width={600} height={338} />
    </Paper>
  );
}

export default ImageCarousel;
