"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";
import createGallery from "../lib/create-gallery";
import getData from "../lib/get-data";
import { galleryRequest } from "../lib/gallery-request";

function ImageCarousel({ galleryId }: any) {
  let srcList: string[] = [];
  const data = getData(galleryRequest.URL);

  data.then((resolve) => {
    resolve.find((gallery: any) => {
      if (gallery.title.rendered === galleryId) {
        const string = gallery.title.rendered;
        const regex = /https:\/\/[^ ]+\.webp/g;
        const matches = string.match(regex);
        srcList = matches.map((url: string) => url.trim());
        console.log("srcList", srcList);
      }
    });
  });

  return (
    <Carousel>
      {srcList.length > 0 &&
        srcList.map((src, i) => <CarouselItem key={galleryId} src={src} />)}
    </Carousel>
  );
}

function CarouselItem(props: any) {
  return (
    <Paper>
      <Image src={props.src} alt="Norbud" width={800} height={450} />
    </Paper>
  );
}

export default ImageCarousel;
