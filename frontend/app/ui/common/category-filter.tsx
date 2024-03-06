"use client";
import Chip from "@mui/material/Chip";

const chipClasses = "mx-2 text-stone-800 dark:text-stone-500";

interface CategoryFilterProps {
  setFilters: (filters: string[]) => void;
}

function CategoryFilter({ setFilters }: CategoryFilterProps) {
  function handleClick(e) {
    console.log(e.target.id);
    setFilters(["road", "sport"]);
  }

  return (
    <div className="mx-auto">
      <Chip
        id="road"
        label="Infrastruktura drogowa"
        onClick={handleClick}
        variant="outlined"
        className={chipClasses}
      />
      <Chip
        id="sport"
        label="Obiekty sportowe"
        onClick={handleClick}
        variant="outlined"
        className={chipClasses}
      />
    </div>
  );
}

export default CategoryFilter;
