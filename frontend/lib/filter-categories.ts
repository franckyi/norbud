import { WorkItemI } from "@/types/workItem";

function filterCategories(works: WorkItemI[], selectedCategory: string) {
  switch (selectedCategory) {
    case "sport": {
      return works.filter((item: WorkItemI) => item.acf.category.sport);
    }
    case "road": {
      return works.filter((item: WorkItemI) => item.acf.category.road);
    }
    case "demolition": {
      return works.filter((item: WorkItemI) => item.acf.category.demolition);
    }
    default: {
      return works;
    }
  }
}

export default filterCategories;
