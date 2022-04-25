import { createTheme, PaletteColorOptions } from "@mui/material";
import { orange, red } from "@mui/material/colors";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                    border: "2px solid",
                    fontSize: "1.2rem",
                    textTransform: "none"
                }

            }
        },
        // MuiInputBase: {
        //     styleOverrides: {
        //         root: {
        //             "&::before": {
        //                 borderBottom: `1px solid ${colorInactive}`
        //             }
        //         }
        //     }
        // },
        // MuiFormLabel: {
        //     styleOverrides: {
        //         root: {
        //             color: colorInactive
        //         }
        //     }
        // },
        // MuiOutlinedInput: {
        //     styleOverrides: {
        //         notchedOutline: {
        //             borderColor: colorInactive
        //         }
        //     }
        // },

    },
    typography: {
        fontFamily: "Roboto Condensed"
    },
    palette: {
        primary: {
            main: "#ffff"
        },
        secondary: {
            main: "#ffff"
        },
        text: {
            secondary: "#bebebe",
            disabled: "#ffff",
        }
    }
});
export { theme }