import { galleryRequest } from "./gallery-request";
import getData from "./get-data";

function createGallery(galleryId: string) {
  const items: string[] = [];

  const data = getData(galleryRequest.URL);
  console.log(data);

  // const stop: number = sizes[galleryId];
  // for (let i = 1; i <= stop; i++) {
  //   items.push(
  //     `https://7fiat922112129.imgix.net/norbud/realizacje/${galleryId}/${i}.webp`
  //   );
  // }
  return items;
}

export default createGallery;
