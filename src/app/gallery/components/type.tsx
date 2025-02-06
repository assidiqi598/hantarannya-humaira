import { FC } from "react";
import cn from "classnames";
import Image from "next/image";
import IType from "@/interfaces/types";
import Theme from "./theme";
import alt from "@/data/alt.json";
import Link from "next/link";

const Type: FC<
  IType & { fullUrl?: string; idx: number }
> = ({ type, idx, themes, fullUrl }) => {
  return (
    <Link
      className={cn(
        "flex flex-col opacity-0 w-fit h-fit m-4 rounded-xl border px-10 pb-6 animate-fadeup",
        {
          "bg-pink-600 border-pink-300":
            type === "Hidden Box",
          "bg-pink-300 border-pink-600":
            type === "Crystal Tray",
          "text-white": type === "Hidden Box",
          [`animation-delay-${idx * 800}`]: idx > 0,
        }
      )}
      href={`${fullUrl}/${encodeURIComponent(type)}`}
    >
      <div className="flex justify-between items-center">
        <h2>{type}</h2>
      </div>

      <Image
        className="rounded-xl"
        src={`/gallery/IMG_${themes[0].images[0].image}.webp`}
        alt={`${alt.mainAlt}-${type}`}
        width={200}
        height={200}
      />
    </Link>
  );
};

export default Type;
