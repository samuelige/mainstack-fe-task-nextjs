"use client";

import React from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@mui/material/styles";

const MuiTheme: React.FC<React.PropsWithChildren> = ({ children }) => {
  const muitheme = createTheme({
    typography: {
      fontFamily: ["Degular"].join(","),
    },
  });
  return <ThemeProvider theme={muitheme}>{children}</ThemeProvider>;
};

export default MuiTheme;
