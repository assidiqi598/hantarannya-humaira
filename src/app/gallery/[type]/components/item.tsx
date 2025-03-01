// "use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import IImages from "@/interfaces/images";
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
      className={cn("mr-2 mb-2 rounded-lg border-2 border-pink-600")}
    >
      <img
        src={`/gallery/IMG_${image}.webp`}
        alt={`${alt.mainAlt}-${image}`}
        width={100}
        height={100}
        loading="lazy"
        className="w-full h-full rounded-lg"
      />
    </Link>
  );
};

export default Item;
