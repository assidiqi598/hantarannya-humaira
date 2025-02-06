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
              "opacity-0 flex flex-col m-3 animate-fadeup"
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
        className="fixed bottom-[5rem] right-5 z-50 opacity-0 animate-fadeup animation-delay-800 px-3 py-2 rounded-full bg-pink-300 font-bold"
        href="/gallery"
      >
        <i className="fa-solid fa-user fa-xl"></i>
      </Link>
    </>
  );
};

export default Theme;
