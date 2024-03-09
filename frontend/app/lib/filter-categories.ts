import { WorkItemI } from "../types/workItem";

function filterCategories(data: WorkItemI[], selectedCategory: string) {
  return selectedCategory === "sport"
    ? data.filter((item: WorkItemI) => item.acf.category.sport)
    : data.filter((item: WorkItemI) => item.acf.category.road);
}

export default filterCategories;
