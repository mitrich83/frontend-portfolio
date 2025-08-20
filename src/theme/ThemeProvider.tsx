import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "./themes";

type ThemeMode = "light" | "dark";
type ThemeContextType = { toggle: () => void; mode: ThemeMode };

const ThemeContext = createContext<ThemeContextType>({
  toggle: () => {},
  mode: "light",
});
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    return (localStorage.getItem("theme") as ThemeMode) || "dark";
  });

  const toggle = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  const theme = mode === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value as string);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
