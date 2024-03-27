import { ChangeEvent, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

interface RadioFiltersProps {
  setCategory: (value: string) => void;
}

function RadioFilters({ setCategory }: RadioFiltersProps) {
  const [value, setValue] = useState("all");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    setCategory(value);
  }, [value, setCategory]);

  return (
    <FormControl className="mt-8">
      <RadioGroup
        row
        aria-labelledby="radio-filters-buttons-group"
        className="max-md:justify-center"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="all"
          control={<Radio className="text-green-700" color="success" />}
          label="Wszystkie"
        />
        <FormControlLabel
          value="road"
          control={<Radio className="text-green-700" color="success" />}
          label="Infrastruktura drogowa"
        />
        <FormControlLabel
          value="sport"
          control={<Radio className="text-green-700" color="success" />}
          label="Obiekty sportowe"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioFilters;
