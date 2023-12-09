import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import classes from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLang = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };//из библиотеки i18n достаем метод changeLanguage и в нем меняем язык везде по сайту

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(classes.LangSwitcher, {}, [className])}
      onClick={toggleLang}
    >
      {t("Язык")}
    </Button>
  );
};
