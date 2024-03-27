"use client";
import { useEffect, useState } from "react";
import getData from "@/lib/get-data";
import { portfolioRequest } from "@/lib/portfolio-request";
import WorkList from "./work-list";
import RadioFilters from "@/components/common/radio-filters";
import filterCategories from "@/lib/filter-categories";
import { WorkItemI } from "@/types/workItem";

const headingClasses = "mt-16 text-center text-2xl font-extrabold uppercase";

function Portfolio() {
  const heading = "Nasze realizacje";
  const [selectedCategory, setCategory] = useState<string>("all");
  const [works, setWorks] = useState<WorkItemI[]>([]);
  const [filteredItems, setFilteredItems] = useState<WorkItemI[]>([]);

  function handleFilterClick() {
    if (selectedCategory === "all") {
      setFilteredItems(works);
    } else {
      setFilteredItems(filterCategories(works, selectedCategory));
    }
  }

  useEffect(() => {
    getData(portfolioRequest.URL).then((response) => {
      setWorks(response);
    });
  }, []);

  useEffect(handleFilterClick, [works, selectedCategory]);

  return (
    <section id="realizacje" className="mx-auto text-center">
      <h2 className={headingClasses}>{heading}</h2>
      <RadioFilters setCategory={setCategory} />
      <WorkList portfolioItems={filteredItems} />
    </section>
  );
}

export default Portfolio;
