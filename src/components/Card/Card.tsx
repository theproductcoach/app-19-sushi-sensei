import { CSSProperties, ReactNode } from "react";
import styles from "./card.module.css";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Card({ children, className, style }: CardProps) {
  return (
    <div className={clsx(styles.card, className)} style={style}>
      {children}
    </div>
  );
}
