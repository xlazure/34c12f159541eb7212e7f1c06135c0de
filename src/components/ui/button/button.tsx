import { ButtonHTMLAttributes, ReactNode } from "react";
import { mergeClassNames } from "../../../utils/mergeClasses";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {

  return (
    <button className={mergeClassNames(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
