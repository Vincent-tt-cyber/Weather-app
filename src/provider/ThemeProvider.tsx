import React, { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import { changeThemeRootVariables } from "../model/ChangeThemeRootVariables.ts";
import { storage } from "../model/Storage.ts";

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem("theme") || Theme.LIGHT
  );
  changeThemeRootVariables(theme);

  const changeTheme = (theme: Theme) => {
    storage.setItem("theme", theme);
    setTheme(theme);
    changeThemeRootVariables(theme);
  };
  return (
    <>
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme,
        }}
        {...props}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};
