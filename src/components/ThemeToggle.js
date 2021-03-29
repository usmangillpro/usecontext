import React, { useContext } from "react";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import Theme from "./App";

const ThemeToggle = () => {
  const themeCheck = useContext(Theme);

  return <div>{themeCheck === "dark" ? <DarkTheme /> : <LightTheme />}</div>;
};

export default ThemeToggle;
