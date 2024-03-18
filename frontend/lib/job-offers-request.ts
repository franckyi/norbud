const DOMAIN_NAME = "https://admin.nor-bud.com";
const PER_PAGE = "?per_page=50";
const CATEGORY = "category=1";
const WPPATH = `wp-json/wp/v2/posts?${PER_PAGE}&${CATEGORY}`;

export const jobOffersRequest = {
  URL: `${DOMAIN_NAME}/${WPPATH}`,
};
