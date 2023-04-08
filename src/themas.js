import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#EBD2CD",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      //   light: '#0066ff',
      main: "#3B887B",
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
