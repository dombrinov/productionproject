import { useTheme } from "app/providers/ThemeProvider";
import { setMaxListeners } from "events";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import classes from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const { theme } = useTheme();

  const mods: Record<string, boolean> = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]); //если onClose передан, то вызываем его

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  ); //запоминаем значение этой функции, чтобы не рендерить сслыку на эту функцию повторно

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const timeRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(classes.Modal, mods, [className, theme])}>
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
