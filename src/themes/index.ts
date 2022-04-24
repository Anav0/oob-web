import { createTheme, PaletteColorOptions } from "@mui/material";
import { orange, red } from "@mui/material/colors";

declare module '@mui/material/styles' {

    interface ThemeOptions {
        mode: string,
        status?: {
            danger?: string;
        };
    }
    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }

}
const theme = createTheme({
    mode: "dark",
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
        MuiAutocomplete: {
            styleOverrides: {
                fullWidth: true,
                root: {
                    color: "red"
                },
                input: {
                    color: "white",
                }
            },

        }
    },
    status: {
        danger: red[500],

    },
    typography: {
        fontFamily: "Roboto Condensed"
    },
    palette: {
        primary: {
            main: "#ffff"
        },
        neutral: {
            main: "#ffff",
        },
        secondary: {
            main: "#bebebe"
        }
    }
});
export { theme }