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
    observer.observe(imgRef.current as Element);

    return () => {
      if (imgRef.current)
        observer.unobserve(imgRef.current as Element);
    };
  }, []);

  const onImgLoad = () => {
    setLoading(false);
  };

  const prepareEncode = (str: string = ""): string => {
    return str
      .replace(/\//g, "sl4sh")
      .replace(/_/g, "und325c023")
      .replace(/:/g, "c0L0n")
  };

  return (
    <>
      {loading && (
        <Image
          ref={imgRef}
          src={"/assets/spinner.gif"}
          alt={`${alt}-spinner`}
          width={50}
          height={50}
          className={cn(
            "opacity-0 w-1/4 md:w-1/5 lg:w-1/12 h-auto mr-2 mb-2 rounded-lg border border-pink-600",
            {
              "animate-fadeup": isVisible,
            }
          )}
        />
      )}

      <Link
        href={`/gallery/img/${encodeURI(
          `${type}_${theme}_${image}_${prepareEncode(
            desc
          )}_${prepareEncode(link?.target)}_${prepareEncode(
            link?.href
          )}`
        )}`}
        className={cn(
          "opacity-0 w-1/4 md:w-1/5 lg:w-1/12 h-auto mr-2 mb-2 rounded-lg border-2 border-pink-600",
          {
            "animate-fadeup": isVisible,
          }
        )}
      >
        <Image
          ref={imgRef}
          src={`/gallery/IMG_${image}.webp`}
          alt={`${alt}-${image}`}
          width={500}
          height={500}
          quality={100}
          onLoad={onImgLoad}
          className="w-full h-full rounded-lg"
        />
      </Link>
    </>
  );
};

export default Item;
