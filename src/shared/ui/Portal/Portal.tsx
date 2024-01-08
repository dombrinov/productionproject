import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Portal.module.scss";

interface PortalProps {
  children: ReactNode; //то, что телепортируем
  element?: HTMLElement; //куда телепортируем
}

export const Portal = (props: PortalProps) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
