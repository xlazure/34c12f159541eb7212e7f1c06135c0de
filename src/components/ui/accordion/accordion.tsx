import { FC, HTMLAttributes, ReactNode, useRef } from "react";
import styles from "./accordion.module.scss";
import { mergeClassNames } from "../../../utils/mergeClasses";
import ArrowDown from "../../icons/ArrowDown";

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode[] | ReactNode | undefined;
  className?: string;
}

const Accordion: FC<AccordionProps> = ({ children, className }) => {
  return (
    <div className={mergeClassNames(styles.accordion, className)}>
      {children}
    </div>
  );
};

const AccordionTrigger: FC<AccordionProps> = ({
  children,
  className,
}) => {
  const accTriggerRef = useRef<HTMLDivElement | null>(null);
  const handleAccordionTrigger = () => {
    const parentNode = accTriggerRef.current?.parentNode as HTMLElement;
    if (parentNode) {
      const isOpen = parentNode.getAttribute("data-open") === "true";
      parentNode.setAttribute("data-open", String(!isOpen));
    }
  };

  return (
    <div
      className={mergeClassNames(styles.accordion__trigger, className)}
      ref={accTriggerRef}
      onClick={handleAccordionTrigger}
    >
      {children}
      <ArrowDown />
    </div>
  );
};

const AccordionContent: FC<AccordionProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={mergeClassNames(styles.accordion__content, className)}
    >
      {children}
    </div>
  );
};

export { Accordion, AccordionTrigger, AccordionContent };
