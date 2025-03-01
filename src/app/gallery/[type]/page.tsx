import { FC } from "react";
import types from "@/data/types.json";
import cn from "classnames";
import Item from "./components/item";
import { cookies } from "next/headers";
import Link from "next/link";
import { Masonry } from "@mui/lab";

const Theme: FC = () => {
  const pathname = cookies().get("currentPath")?.value;

  let type = pathname?.split("/").filter(Boolean).pop();

  type = decodeURIComponent(type!);

  return (
    <>
      {type &&
        types
          .filter((it) => it.type === type)[0]
          .themes.map((theme, i) => (
            <div
              key={theme.theme}
              className={cn(
                "opacity-0 flex flex-col m-3 landscape:w-1/2 landscape:m-auto animate-fadeup",
                `animation-delay-${i * 300}`
              )}
            >
              <h3>{theme.theme}</h3>
              <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5 }} spacing={2}>
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
              </Masonry>
            </div>
          ))}
      <Link
        className="fixed bottom-[5rem] right-7 z-50 opacity-0 animate-fadeleft animation-delay-800 rounded-full shadow-xl"
        href="/gallery"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 -960 960 960"
          width="36px"
          fill="#ffffff"
          className="bg-pink-600 rounded-full pl-1.5 py-2 shadow-2xl"
          stroke="#ffffff"
          strokeWidth="32"
        >
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </Link>
    </>
  );
};

export default Theme;
