import React from "react";
import styles from "./Avatar.module.css";

interface Props {
  size: number;
  src: string;
  alt: string;
  className?: string;
}

export const Avatar: React.FC<Props> = ({ size, src, alt, className }) => {
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={alt}
      className={`${styles.image} ${className}`}
    />
  );
};
