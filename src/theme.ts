"use client";

import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#8C5C6A",
    },
    secondary: {
      main: "#D8C3C5",
    },
  },
});

export default theme;
