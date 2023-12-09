import classes from "./SideBar.module.scss";
import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
import { Button } from "shared/ui/Button/Button";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sideBar"
      className={classNames(
        classes.SideBar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <Button
        data-testid="sideBar-toggle"
        onClick={onToggle}>
        toggle
      </Button>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
