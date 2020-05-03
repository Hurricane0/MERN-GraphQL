import { createMuiTheme } from "@material-ui/core/styles";
// import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    // type: "dark",
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#fff",
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    contrastText: "#fff",
  },
});
