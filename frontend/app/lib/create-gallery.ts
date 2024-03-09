import { galleryRequest } from "./gallery-request";
import getData from "./get-data";

function createGallery(galleryId: string) {
  const items: string[] = [];
  const data = getData(galleryRequest.URL);
  return items;
}

export default createGallery;
