function createGallery(galleryId: string, sizes: any) {
  const items: string[] = [];
  const stop: number = sizes[galleryId];
  for (let i = 1; i <= stop; i++) {
    items.push(
      `https://7fiat922112129.imgix.net/norbud/realizacje/${galleryId}/${i}.webp`
    );
  }
  return items;
}

export default createGallery;
