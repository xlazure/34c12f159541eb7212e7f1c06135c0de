import { HTMLAttributes, ReactNode } from "react";
import styles from "./card.module.scss";
import { mergeClassNames } from "../../../utils/mergeClasses";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  bold?: boolean
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div className={mergeClassNames(styles.card, className)} {...props}>
      {children}
    </div>
  );
};

const CardHead: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div className={mergeClassNames(styles.card__head, className)} {...props}>
      {children}
    </div>
  );
};

const CardContent: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={mergeClassNames(styles.card__content, className)}
      {...props}
    >
      {children}
    </div>
  );
};

const CardText: React.FC<CardProps> = ({
    children,
    className,
    bold,
    ...props
  }) => {

    const boldFont = bold ? 'bold' : ''

    return (
      <div
        className={mergeClassNames(styles.card__text, boldFont, className)}
        {...props}
      >
        {children}
      </div>
    );
  };

export { Card, CardHead, CardContent, CardText };
