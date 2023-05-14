import { Theme } from "../context/ThemeContext";

export const changeThemeRootVariables = (theme: Theme) => {
  const root = document.querySelector(":root") as HTMLElement;

  const components = [
    "body-background",
    "components-background",
    "card-background",
    "card-shadow",
    "text-color",
  ];
  components.map((component) => {
    root.style.setProperty(
      `--${component}-default`,
      `var(--${component}-${theme})`
    );
  });
};
