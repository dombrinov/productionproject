import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar = () => {
  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <div className={cls.links}>
/
      </div>
    </div>
  );
};
