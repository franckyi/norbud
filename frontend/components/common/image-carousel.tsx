"use client";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Image from "next/image";
import getData from "@/lib/get-data";
import { galleryRequest } from "@/lib/gallery-request";

import { GalleryResponse } from "@/types/galleryResponse";

type ImageCarouselProps = {
  galleryId: string;
};

function ImageCarousel({ galleryId }: ImageCarouselProps) {
  const [srcList, setSrcList] = useState<string[]>([]);

  useEffect(() => {
    const fetchGallery = async () => {
      const galleries = await getData(galleryRequest.URL);
      const gallery = galleries.find(
        (item: GalleryResponse) => item.title.rendered === galleryId
      );

      if (gallery) {
        const stringToBeParsed = gallery.content.rendered;
        const regex = /https:\/\/[^ ]+\.webp/g;
        const matches = stringToBeParsed.match(regex);
        if (matches) {
          const urls = matches.map((url: string) => url.trim());
          setSrcList(urls);
        }
      }
    };

    fetchGallery();
  }, [galleryId]);

  return (
    <div>
      {srcList.length > 0 ? (
        <Carousel>
          {srcList.map((src, index) => (
            <CarouselItem key={index} src={src} />
          ))}
        </Carousel>
      ) : (
        <div>Ładowanie...</div>
      )}
    </div>
  );
}

function CarouselItem(props: { src: string }) {
  return (
    <Paper>
      <Image src={props.src} alt="Norbud" width={800} height={450} />
    </Paper>
  );
}

export default ImageCarousel;
