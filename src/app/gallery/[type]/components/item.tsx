import { FC } from "react";
import Link from "next/link";
import IImages from "@/lib/interfaces/images";
import alt from "@/data/alt.json";
import { customEncodeURI } from "@/util/encode";
import Image from "next/image";

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
      <Image
        src={`/gallery/IMG_${image}.webp`}
        alt={`${alt.mainAlt}-${image}`}
        width={100}
        height={100}
        loading="lazy"
        className="w-full h-full"
      />
    </Link>
  );
};

export default Item;
