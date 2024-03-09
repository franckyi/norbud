"use client";
import { useEffect, useState } from "react";
import getData from "../lib/get-data";
import { portfolioRequest } from "../lib/portfolio-request";
import WorkList from "./work-list";
import RadioFilters from "../ui/common/radio-filters";
import filterCategories from "../lib/filter-categories";
import { WorkItemI } from "../types/workItem";

const headingClasses = "mt-16 text-center text-2xl font-extrabold uppercase";

function Portfolio() {
  const heading = "Nasze realizacje";
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [data, setData] = useState<WorkItemI[]>([]);
  const [filteredItems, setFilteredItems] = useState<WorkItemI[]>([]);

  function handleFilterClick() {
    if (selectedCategory === "all") {
      setFilteredItems(data);
    } else {
      setFilteredItems(filterCategories(data, selectedCategory));
    }
  }

  useEffect(() => {
    getData(portfolioRequest.URL).then((response) => {
      setData(response);
    });
  }, []);

  useEffect(handleFilterClick, [data, selectedCategory]);

  return (
    <section id="realizacje" className="mx-auto text-center">
      <h2 className={headingClasses}>{heading}</h2>
      <RadioFilters setSelectedCategory={setSelectedCategory} />
      <WorkList portfolioItems={filteredItems} />
    </section>
  );
}

export default Portfolio;
