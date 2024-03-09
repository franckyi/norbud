import { extendTheme } from "@mui/material-next/styles";

export const customTheme = extendTheme({
  ref: {
    palette: {
      primary: {
        0: "#000000",
        10: "#052e16",
        20: "#14532d",
        30: "#166534",
        40: "#15803d",
        50: "#16a34a",
        60: "#22c55e",
        70: "#4ade80",
        80: "#86efac",
        90: "#bbf7d0",
        95: "#dcfce7",
        99: "#f0fdf4",
        100: "#FFFFFF",
      },
    },
  },
  // cssVarPrefix is only required if multiple themes coexist
  // on the same page like on this guide
  cssVarPrefix: "green-md3",
});