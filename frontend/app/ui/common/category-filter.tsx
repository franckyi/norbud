// "use client";
import Chip from "@mui/material/Chip";
import { useState } from "react";

const activeChipClasses =
  "bg-green-700 text-white dark:bg-green-700 dark:text-white";
const chipClasses = "mx-2 text-stone-800 dark:text-stone-500";

interface CategoryFilterProps {
  filters: string[];
  setFilters: (filters: string[]) => void;
}

enum Categories {
  ROAD = "Infrastruktura drogowa",
  SPORT = "Obiekty sportowe",
}

function CategoryFilter({ filters, setFilters }: CategoryFilterProps) {
  const [isActiveChip, setIsActiveChip] = useState(false);

  function handleClick(e: any) {
    console.log(e.target.textContent);
    const clickedFilter = e.target.textContent;

    if (filters.includes(clickedFilter)) {
      setFilters(filters.filter((filter) => filter !== clickedFilter));
    } else {
      setFilters([...filters, clickedFilter]);
    }
  }

  return (
    <div className="mx-auto">
      <Chip
        label={Categories.ROAD}
        onClick={handleClick}
        variant="outlined"
        className={chipClasses + isActiveChip ? activeChipClasses : ""}
        // ref={clickedChip => clickedChip && setIsActiveChip(true)}
      />
      <Chip
        label={Categories.SPORT}
        onClick={handleClick}
        variant="outlined"
        className={chipClasses + isActiveChip ? activeChipClasses : ""}
      />
    </div>
  );
}

export default CategoryFilter;
