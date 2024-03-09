import { WorkItem } from "../types/workItem";

function filterCategories(data: WorkItem[], selectedCategory: string) {
  return selectedCategory === "sport"
    ? data.filter((item: WorkItem) => item.acf.category.sport)
    : data.filter((item: WorkItem) => item.acf.category.road);
}

export default filterCategories;
