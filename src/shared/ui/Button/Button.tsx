import classes from "./Button.module.scss";
import type { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum SizeButton {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, square, size, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [classes[theme]]: true,
    [classes.square]: square,
    [classes[size]]: true,
  };

  return (
    <button
      className={classNames(classes.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
