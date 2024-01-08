import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import classes from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(classes.Navbar, {}, [])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        className={classes.links}
        onClick={onToggleModal}
      >
        {t("Войти")}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        beatae doloribus reiciendis architecto voluptatem, illum autem quod,
        minima esse, dolorem quasi recusandae assumenda? Odio ex mollitia velit
        fugit modi pariatur.
      </Modal>
    </div>
  );
};
