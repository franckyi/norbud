import { WorkItem } from "../types/workItem";

function filterCategories(data: WorkItem[], category: string) {
  return data.filter((item) => item.acf.category[category]);
}

export default filterCategories;
