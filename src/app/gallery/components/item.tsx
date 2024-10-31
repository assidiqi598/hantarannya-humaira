"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import cn from "classnames";
import IImages from "@/interfaces/images";
import alt from "@/data/alt";
import Link from "next/link";

interface IItem extends IImages {
  type: string;
  theme: string;
}

const Item: FC<IItem> = ({
  type,
  theme,
  image,
  desc,
  link,
}) => {
  const [isVisible, setIsVisible] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          setIsVisible(entry.isIntersecting);
      });
    });

    const ref = imgRef.current;

    observer.observe(ref as Element);

    return () => {
      if (ref) observer.unobserve(ref as Element);
    };
  }, []);

  const onImgLoad = () => {
    setLoading(false);
  };

  const prepareEncode = (str: string = ""): string => {
    return str
      .replace(/\//g, "sl4sh")
      .replace(/_/g, "und325c023")
      .replace(/:/g, "c0L0n");
  };

  return (
    <Link
      href={`/gallery/img/${encodeURI(
        `${type}_${theme}_${image}_${prepareEncode(
          desc
        )}_${prepareEncode(link?.target)}_${prepareEncode(
          link?.href
        )}`
      )}`}
      scroll={false}
      className={cn(
        "relative opacity-0 w-1/4 md:w-1/5 lg:w-1/12 h-1/4 md:h-1/5 lg:h-1/12 mr-2 mb-2 rounded-lg border-2 border-pink-600",
        {
          "animate-fadeup": isVisible,
        }
      )}
    >
      {loading && (
        <Image
          ref={imgRef}
          src={"/assets/spinner.gif"}
          alt={`${alt}-spinner`}
          width={50}
          height={50}
          unoptimized
          className="absolute top-0 right-0 bottom-0 left-0 m-auto"
        />
      )}
      <Image
        ref={imgRef}
        src={`/gallery/IMG_${image}.webp`}
        alt={`${alt}-${image}`}
        width={200}
        height={200}
        onLoad={onImgLoad}
        className="w-full h-full rounded-lg"
      />
    </Link>
  );
};

export default Item;
