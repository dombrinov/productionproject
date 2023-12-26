import classes from "./ThemeSwitcher.module.scss";
import type { PropsWithChildren } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import LightIcon from "../../assets/themelight.svg";
import DarkIcon from "../../assets/themedark.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher(props: PropsWithChildren<ThemeSwitcherProps>) {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(classes.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}
