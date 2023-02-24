import { createTheme } from "@mui/material/styles";
// import { red } from "@mui/material/colors";

// const font1 = "'Nunito', sans-serif";
const font1 = "'Carter One', cursive";
const font2 = "Carter One', cursive";
const font3 = "Courier New";
// Create a theme instance.
let theme = createTheme({
  palette: {
    common: {
        black: "#4b4b4b",
        white: "#ffffff",
    },
    primary: {
      dark: "#6c1b92",
      main: "#8f25a2",
      light: "#ac47b5",
      fade1: "#e1bee4",
      fade2: "#f3e5f4",
      contrastText: "#ffffff"
    },
    secondary: {
      dark: "#ff77ae",
      main: "#ff9ec6",
      light: "#FFC4DD",
      fade1: "#ffe8f1",
      fade2: "#ffe9e8",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ff4b4b",
    },
    warning: {
      main: "#ff4b4b",
    },
    info: {
      main: "#ce82ff",
    },
    success: {
      main: "#1cb0f6",
    },
    background: {
      paper: "#ffffff",
      paperAlt: "#120229",
      default: "#ffffff",
    },
    text: {
      primary: "#4b4b4b",
    },
  },


});

theme = createTheme(theme, {
    palette: {
        secondary2: {
            dark: "#8bcf00",
            main: "#9ef900",
            light: "#baff66",
            fade1: "#e3ffc1",
            fade2: "#f3ffe6",
            contrastText: "#ffffff",
        },
       
        grey: {
            gray1: "#4b4b4b",
            gray2: "#777777",
            gray3: "#afafaf",
            gray4: "#e5e5e5",
            gray5: "#f7f7f7",
            gray6: "#ffffff",
        }
    },
    typography: {
        fontFamily: font2,
        
        h1: {
          fontFamily: font1,
          margin: "1rem 0",
          textAlign: "center",
          wordSpacing: "10px",
          fontSize: "3.5rem",
          [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem',
            fontWeight: 700,
          },
          
        },
        h2: {
          fontFamily: font1,
          fontSize: "3rem", 
          [theme.breakpoints.down('md')]: {
            fontSize: '1.75rem',
            fontWeight: 700,
          },
        },
        h3: {
          fontFamily: font1,
          fontSize: "2.5rem", 
          [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
            fontWeight: 700,
          },
          margin: "0.5rem 0",
        },
        h4: {
          fontFamily: font1,
          margin: "0.5rem 0",
        },
        h5: {
          fontFamily: font1,
          margin: "0.5rem 0",
        },
        h6: {
          fontFamily: font1,
          margin: "0.5rem 0",
        },
        button: {
          fontFamily: font1,
          fontSize: "1.25rem",
        },
      },
    
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            html: {
                box-sizing: border-box;
            }

            *, *::before, *::after {
              box-sizing: border-box;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              -webkit-tap-highlight-color: transparent;
              -webkit-touch-callout: none;
            }
            
            body {
              margin: 0;
              font-family: 'Carter One', cursive;
            font-family: 'Lato', sans-serif;
            font-weight: 300;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background: var(--light-900);
              color: var(--dark-700);
            }
            
            code {
              font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                monospace;
            }
            
            p {
              margin: 0;
            }

            a {
              color: inherit;
              text-decoration: none;
              cursor: pointer;
            }
            
           
            
        `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: theme.palette.background.paper,
          // color: theme.palette.primary.main,
          paddingTop: "0.5rem",
          paddingBottom: "1rem",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    
    MuiButton: {
      styleOverrides: {
        root: {
            borderRadius: "8px",
            // fontSize: "1rem",
            fontWeight: 700,
            my: 1,
            py: 2,
        },
        text: {
          color: "#1cb0f6"
        },
        contained: {
            // background: "#1cb0f6",
            [theme.breakpoints.down('sm')]: {
                fontSize: "1rem",
            },
            boxShadow: "none",
        },
        outlined: {
            border: `2px solid #e5e5e5`,
            borderBottom: `3px solid #e5e5e5`,
            color: theme.palette.secondary.contrastText,
            textTransform: "lowercase",

            "&:hover": {
                border: `2px solid ${theme.palette.secondary.main}`,
                borderBottom: `3px solid ${theme.palette.secondary.main}`,
                color: theme.palette.secondary.main,
                background: "",
            }
        }

      },
    },
    MuiLink: {
      styleOverrrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
