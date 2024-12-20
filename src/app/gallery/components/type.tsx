"use client";

import { FC, useEffect, useRef, useState } from "react";
import cn from "classnames";
import IType from "@/interfaces/types";
import Theme from "./theme";

const Type: FC<IType> = ({ type, themes }) => {
  const [isVisible, setIsVisible] =
    useState<boolean>(false);
  const typeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          setIsVisible(entry.isIntersecting);
      });
    });

    const ref = typeRef.current;

    observer.observe(ref as Element);

    return () => {
      if (ref) observer.unobserve(ref as Element);
    };
  }, []);

  return (
    <div
      ref={typeRef}
      className={cn(
        "flex flex-col opacity-0 w-fit h-fit mb-8",
        {
          "animate-fadeup": isVisible,
        }
      )}
    >
      <h2>Tipe: {type}</h2>
      {themes.map((theme) => (
        <Theme
          key={theme.theme}
          type={type}
          theme={theme.theme}
          images={theme.images}
        />
      ))}
    </div>
  );
};

export default Type;
