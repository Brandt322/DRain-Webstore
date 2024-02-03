import * as React from "react";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";

const ColorPalletes = {
  DARK: "dark",
  LIGHT: "light",
};

const typographyGlobals = {
  fontFamily: ["Roboto"].join(","),
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EE2C70",
    },
  },
  typography: {
    ...typographyGlobals,
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ea2845",
    },
  },
  typography: {
    ...typographyGlobals,
  },
});

export const ColorModeContext = React.createContext({
  toggleColorMode() {
    return;
  },
});

export function ThemeMode({children}) {
  const [colorMode, setColorMode] = React.useState(
    localStorage.getItem("mode") === ColorPalletes.DARK
      ? ColorPalletes.DARK
      : ColorPalletes.LIGHT
  );

  const colorModeOptions = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  React.useEffect(() => {
    localStorage.setItem("mode", colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={colorModeOptions}>
      <CssBaseline />
      <ThemeProvider
        theme={colorMode === ColorPalletes.DARK ? darkTheme : lightTheme}
      >
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ThemeMode.propTypes = {
  children: PropTypes.node.isRequired,
};
