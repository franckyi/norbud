"use client";
import { useEffect, useState } from "react";
import getData from "../lib/get-data";
import { portfolioRequest } from "../lib/portfolio-request";
import CategoryFilter from "../ui/common/category-filter";
import WorkList from "./work-list";

function Portfolio() {
  const heading = "Nasze realizacje";
  const [filters, setFilters] = useState<string[]>([]);
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    getData(portfolioRequest.URL).then((response) => {
      const filteredResponse = response.filter(
        (item) => item.acf.category.road
      );
      setPortfolioItems(filteredResponse);
    });
  }, []);

  return (
    <section id="realizacje" className="mx-auto text-center">
      <h2 className="mt-16 text-center text-2xl font-extrabold uppercase">
        {heading}
      </h2>
      <CategoryFilter filters={filters} setFilters={setFilters} />
      active filters: {filters}
      <WorkList portfolioItems={portfolioItems} />
    </section>
  );
}

export default Portfolio;
