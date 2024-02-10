"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Image from "next/image";

function ImageCarousel({ galleryId }: string) {
  let srcList: string[] = [];
  let i = 1;
  let currentFile = `${i}.webp`;
  let isNotValid = false;

  // do {
  //   srcList.push(`/realizacje/${galleryId}/${i}.webp`);
  //   let img = new Image();
  //   img.src = `/realizacje/${galleryId}/${currentFile}`;
  //   img.onerror = () => {
  //     isNotValid = true;
  //   };

  //   i++;
  // } while (!isNotValid);
  // TODO: find way to check if current image exists

  // var srcList = [
  //   // path: `realizacje/${galleryId}/${i}.webp`,
  //   `/realizacje/${galleryId}/1.webp`,
  //   `/realizacje/${galleryId}/2.webp`,
  //   `/realizacje/${galleryId}/3.webp`,
  // ];

  return (
    <Carousel>
      {srcList.map((src, i) => (
        <CarouselItem key={i} src={src} />
      ))}
    </Carousel>
  );
}

function CarouselItem(props: any) {
  return (
    <Paper>
      <Image src={props.src} alt="Norbud" width={200} height={200} />

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default ImageCarousel;
