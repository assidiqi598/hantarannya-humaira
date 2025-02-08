import ITheme from "@/interfaces/theme";
import { FC, useEffect, useRef, useState } from "react";
import types from "@/data/types.json";
import cn from "classnames";
import Item from "./components/item";
import { cookies } from "next/headers";
import Link from "next/link";

const Theme: FC = () => {
  // const [isVisible, setIsVisible] =
  //   useState<boolean>(false);
  // const themeRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting)
  //         setIsVisible(entry.isIntersecting);
  //     });
  //   });

  //   const ref = themeRef.current;

  //   observer.observe(ref as Element);

  //   return () => {
  //     if (ref) observer.unobserve(ref as Element);
  //   };
  // }, []);

  const pathname = cookies().get("currentPath")?.value;

  let type = pathname?.split("/").filter(Boolean).pop();

  type = decodeURIComponent(type!);

  return (
    <>
      {types
        .filter((it) => it.type === type)[0]
        .themes.map((theme) => (
          <div
            // ref={themeRef}
            key={theme.theme}
            className={cn(
              "opacity-0 flex flex-col m-3 landscape:w-1/2 landscape:m-auto animate-fadeup"
            )}
          >
            <h3>{theme.theme}</h3>
            <div className="flex flex-wrap items-center">
              {theme.images.map((image) => (
                <Item
                  key={image.image}
                  type={type}
                  theme={theme.theme}
                  image={image.image}
                  desc={image.desc}
                  link={image.link}
                />
              ))}
            </div>
          </div>
        ))}
      <Link
        className="fixed bottom-[5rem] right-7 z-50 opacity-0 animate-fadeleft animation-delay-800"
        href="/gallery"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 -960 960 960"
          width="36px"
          fill="#212121"
          className="bg-pink-300 rounded-full pl-1.5 py-2 shadow-2xl"
          stroke="#212121"
          strokeWidth="32"
        >
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </Link>
    </>
  );
};

export default Theme;
