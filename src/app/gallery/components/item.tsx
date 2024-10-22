"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import cn from "classnames";
import IImages from "@/interfaces/images";
import alt from "@/data/alt";

const Item: FC<IImages> = ({ image }) => {
  const [isVisible, setIsVisible] =
    useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          setIsVisible(entry.isIntersecting);
      });
    });
    observer.observe(imgRef.current as Element);

    return () =>
      observer.unobserve(imgRef.current as Element);
  }, []);

  return (
    <Image
      ref={imgRef}
      src={`/gallery/IMG_${image}.webp`}
      alt={`${alt}-${image}`}
      width={500}
      height={500}
      quality={100}
      placeholder="blur"
      blurDataURL="/assets/spinner.gif"
      className={cn(
        "opacity-0 w-1/4 md:w-1/5 h-auto mr-2 mb-2 rounded-lg border border-pink-600",
        {
          "animate-fadeup": isVisible,
        }
      )}
    />
  );
};

export default Item;
