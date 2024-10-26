"use client";

import ITheme from "@/interfaces/theme";
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
    observer.observe(themeRef.current as Element);

    return () => {
      if (themeRef.current)
        observer.unobserve(themeRef.current as Element);
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
      <h3>Tema: {theme}</h3>
      <div className="flex flex-wrap">
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
