import { createTheme, PaletteColorOptions } from "@mui/material";
import { orange, red } from "@mui/material/colors";
import type { } from '@mui/lab/themeAugmentation';
import { isWhiteSpaceLike } from "typescript";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                    // border: "2px solid",
                    // fontSize: "1.2rem",
                    textTransform: "none"
                }

            }
        },
        MuiLoadingButton: {
            styleOverrides: {
                loadingIndicatorCenter: {
                    color: "white",
                    fontSize: "3rem"
                },
                loadingIndicator: {
                    color: "white"
                },
                loadingIndicatorEnd: {
                    color: "white"
                },
                loadingIndicatorStart: {
                    color: "white"
                },
                loading: {
                    color: "white"
                }
            }
        },
    },
    typography: {
        fontFamily: "Roboto Condensed"
    },
    palette: {
        mode: 'dark',
        primary: {
            main: "#fff",
            light: "#fff",
            dark: "#fff"
        },
        secondary: {
            main: "#ffff",
            light: "#fff",
            dark: "#bebebe"
        },
        text: {
            secondary: "#bebebe",
            disabled: "#ffff",
        }
    }
});
export { theme }