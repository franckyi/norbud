const DOMAIN_NAME = "https://admin.nor-bud.com";
const WPPATH = "wp-json/wp/v2/norbud_gallery";
const PER_PAGE = 100;

export const galleryRequest = {
  URL: `${DOMAIN_NAME}/${WPPATH}?per_page=${PER_PAGE}`,
};
