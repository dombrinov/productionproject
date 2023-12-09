import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import classes from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };//у объекта location вызываем метод reload для обновления страницы по кнопке

  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      <p>{t("Произошла ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
