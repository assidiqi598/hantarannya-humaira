"use client";

import ITheme from "@/lib/interfaces/theme";
import { FC, useEffect, useRef, useState } from "react";
import cn from "classnames";
import Item from "./item";

interface IThemeComponent extends ITheme {
  type: string;
}

const Theme: FC<IThemeComponent> = ({
  type,
  theme,
  images,
}) => {
  const [isVisible, setIsVisible] =
    useState<boolean>(false);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          setIsVisible(entry.isIntersecting);
      });
    });

    const ref = themeRef.current;

    observer.observe(ref as Element);

    return () => {
      if (ref) observer.unobserve(ref as Element);
    };
  }, []);

  return (
    <div
      ref={themeRef}
      key={theme}
      className={cn("opacity-0 flex flex-col", {
        "animate-fadeup": isVisible,
      })}
    >
      <h3>{theme}</h3>
      <div className="flex flex-wrap items-center">
        {images.map((image) => (
          <Item
            key={image.image}
            type={type}
            theme={theme}
            image={image.image}
            desc={image.desc}
            link={image.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Theme;
