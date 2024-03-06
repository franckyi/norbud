import { useState } from "react";
import getData from "../lib/get-data";
import { portfolioRequest } from "../lib/portfolio-request";
import CategoryFilter from "../ui/common/category-filter";
import WorkList from "./work-list";

async function Portfolio() {
  const data = await getData(portfolioRequest.URL);
  const portfolioItems = data;
  const heading = "Nasze realizacje";
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <section id="realizacje" className="mx-auto text-center">
      <h2 className="mt-16 text-center text-2xl font-extrabold uppercase">
        {heading}
      </h2>
      <CategoryFilter filters={filters} setFilters={setFilters} />
      <WorkList portfolioItems={portfolioItems} />
    </section>
  );
}

export default Portfolio;
