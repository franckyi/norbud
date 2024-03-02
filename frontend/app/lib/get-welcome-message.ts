import { homeContentRequest } from "./home-content-request";
import getData from "./get-data";

async function getWelcomeMessage() {
  const response = await getData(homeContentRequest.URL);
  return response.acf.aboutUsHeading;
}

export default getWelcomeMessage;
