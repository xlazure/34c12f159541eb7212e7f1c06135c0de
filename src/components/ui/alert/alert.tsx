import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { mergeClassNames } from "../../../utils/mergeClasses";

import styles from "./alert.module.scss";
import CloseIcon from "../../icons/CloseIcon";

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

interface AlertButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
}

const AlertPosition: React.FC<AlertProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={mergeClassNames(styles.alertPosition, className)}
      {...props}
    >
      {children}
    </div>
  );
};

const Alert: React.FC<AlertProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={mergeClassNames(styles.alert, className)} {...props}>
      {children}
    </div>
  );
};

const AlertCloseButton: React.FC<AlertButtonProps> = ({
    children = <CloseIcon />,
    className,
    ...props
  }) => {
    return (
      <button className={mergeClassNames(styles.alert__closeButton, className)} {...props}>
        {children}
      </button>
    );
  };

export { AlertPosition, Alert, AlertCloseButton };
