"use client";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./material-ui-switch";

interface ThemeSwitcherProps {
  toggleTheme: () => void;
}

function ThemeSwitcher({ toggleTheme }: ThemeSwitcherProps) {
  function handleClick() {
    toggleTheme();
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label=""
        className="m-0"
        onClick={handleClick}
      />
    </FormGroup>
  );
}

export default ThemeSwitcher;
