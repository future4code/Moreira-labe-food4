import { createTheme } from "@material-ui/core/styles";
import { primaryColor, secondaryColor, neutral } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",     
    },
    secundary: {
      main: secondaryColor,
      contrastText: "black",
    },
    neutralColor: {
      main: neutral,
      contrastText: "black",
    },
  },
});

export default theme;
