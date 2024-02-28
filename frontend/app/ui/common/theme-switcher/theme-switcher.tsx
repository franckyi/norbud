"use client";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MaterialUISwitch } from "./material-ui-switch";

interface ThemeSwitcherProps {
  handleThemeToggleClick: () => void;
}

function ThemeSwitcher({ handleThemeToggleClick }: ThemeSwitcherProps) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label=""
        className="m-0"
        onClick={handleThemeToggleClick}
      />
    </FormGroup>
  );
}

export default ThemeSwitcher;
