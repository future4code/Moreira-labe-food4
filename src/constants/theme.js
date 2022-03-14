import { createTheme } from "@material-ui/core/styles";
import { primaryColor, secundaryColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",     
    },
    secundary: {
      main: secundaryColor,
      contrastText: "black",
    },
    // text: {
    //   primary: neutralColor,
    // },
  },
});

export default theme;
