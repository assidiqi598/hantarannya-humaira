import { FC } from "react";
import Link from "next/link";
import IImages from "@/lib/interfaces/images";
import alt from "@/data/alt.json";
import { customEncodeURI } from "@/util/encode";

interface IItem extends IImages {
  type: string;
  theme: string;
}

const Item: FC<IItem> = ({ type, theme, image, desc, link }) => {
  return (
    <Link
      href={`/gallery/img/${customEncodeURI(type, theme, image, desc, link?.target, link?.href)}`}
      scroll={false}
    >
      <img
        src={`/gallery/IMG_${image}.webp`}
        alt={`${alt.mainAlt}-${image}`}
        loading="lazy"
        className="w-full h-full"
      />
    </Link>
  );
};

export default Item;
