"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode, useState } from "react";
import cn from "classnames";
import { Button } from "@mui/material";
import alt from "@/data/alt.json";

interface IImgPage {
  isModal?: boolean;
}

export default function ImgPage({ isModal = false }: IImgPage) {
  const params = useParams<{ id: string }>();

  const [type, theme, img, desc, linkTarget, linkHref] = decodeURI(params.id).split("_");

  const [loading, setLoading] = useState<boolean>(true);

  const replace = (str: string = ""): string => {
    return str
      .replace(/sl4sh/g, "/")
      .replace(/und325c023/g, "_")
      .replace(/c0L0n/g, ":");
  };

  const descWithLink = (desc: string, target: string, href: string): ReactNode => {
    const splitted = desc.split(target);
    return (
      <span className="mt-2">
        {splitted[0]}
        <Link href={href} target="_blank" className="decoration-solid text-pink-600">
          {target}
        </Link>
        {splitted[1]}
      </span>
    );
  };

  const onImgLoad = () => {
    setLoading(false);
  };

  return (
    <div
      className={cn(
        "p-2 lg:px-16 overflow-y-auto flex portrait:flex-col portrait:justify-center portrait:items-start",
        {
          "min-h-svh": !isModal,
        }
      )}
    >
      <div
        className={cn("relative flex items-center opacity-0 animate-fadeup", {
          "animation-delay-400": !isModal,
          "animation-delay-1200": isModal,
        })}
      >
        {loading && (
          <Image
            src={"/assets/spinner.gif"}
            alt={`${alt.mainAlt}-spinner`}
            width={50}
            height={50}
            unoptimized
            className="absolute top-0 right-0 bottom-0 left-0 m-auto"
          />
        )}
        <Image
          src={`/gallery/IMG_${img}.webp`}
          alt={`${alt.mainAlt}-${type}-${theme}`}
          width={500}
          height={500}
          priority={true}
          onLoad={onImgLoad}
          className={"landscape:h-5/6 portrait:h-4/6 w-auto rounded-lg border-2 border-pink-600"}
        />
      </div>
      {!loading && (
        <div
          className={cn(
            "flex flex-col justify-center items-start opacity-0 animate-fadeup animation-delay-600",
            {
              "animation-delay-800": !isModal,
            }
          )}
        >
          <p className="portrait:mt-2 lg:text-xl">Tipe: {type}</p>
          <p className="portrait:mt-2 lg:text-xl mt-6">Tema: {theme}</p>
          {desc && desc !== "undefined" && (
            <>
              {linkTarget && linkHref ? (
                descWithLink(replace(desc), replace(linkTarget), replace(linkHref))
              ) : (
                <span className="portrait:mt-2 mt-6 lg:text-lg">{replace(desc)}</span>
              )}
            </>
          )}
          {!isModal && (
            <Link href={`/gallery/${encodeURIComponent(type)}`} className="inline-block mt-6">
              <Button id="back-to-gallery" variant="contained">
                Back
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
