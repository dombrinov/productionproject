import classes from "./SideBar.module.scss";
import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";
import AboutIcon from "../../../assets/About.svg";
import MainIcon from "../../../assets/main.svg";

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
        onClick={onToggle}
        className={classes.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={SizeButton.L}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={classes.items}>
        <div className={classes.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
            <MainIcon className={classes.icon} />
            <span className={classes.link}>Главная</span>
          </AppLink>
        </div>
        <div className={classes.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
            <AboutIcon className={classes.icon} />
            <span className={classes.link}>О сайте</span>
          </AppLink>
        </div>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={classes.lang} />
      </div>
    </div>
  );
};
