import { companyInfoRequest } from "./company-info-request";
import getData from "./get-data";

async function getWelcomeMessage() {
  const response = await getData(companyInfoRequest.URL);
  return response.acf.aboutUsHeading;
}

export default getWelcomeMessage;
