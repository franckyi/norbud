import getData from "../lib/get-data";
import { portfolioRequest } from "../lib/portfolio-request";
import WorkList from "./work-list";

async function Portfolio() {
  const data = await getData(portfolioRequest.URL);
  const portfolioItems = data;
  const heading = "Nasze realizacje";

  return (
    <section id="realizacje" className="mx-auto text-center">
      <h2 className="mt-16 text-center text-2xl font-extrabold uppercase">
        {heading}
      </h2>
      <WorkList portfolioItems={portfolioItems} />
    </section>
  );
}

export default Portfolio;
