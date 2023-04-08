import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#04BBEC",
      // dark: will be calculated from palette.primary.main,
      contrastText: 'white',
    },
    secondary: {
      //   light: '#0066ff',
      main: "#EA25B5",
      // dark: will be calculated from palette.secondary.main,
    //   contrastText: "#ffcc00",
    },
    custom: {
      //   light: '#ffa726',
      main: "#f57c00",
      //   dark: '#ef6c00',
      //   contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
