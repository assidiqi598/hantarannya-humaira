import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Button from "@/components/button";
import alt from "@/data/alt";

export default function ImgPage({
  params: { id },
}: {
  params: { id: string };
}) {
    
  const decodedUri = decodeURI(id);

  const [type, theme, img, desc, linkTarget, linkHref] =
    decodedUri.split("_");

  const replace = (str: string = ""): string => {
    return str
      .replace(/sl4sh/g, "/")
      .replace(/und325c023/g, "_")
      .replace(/c0L0n/g, ":");
  };

  const descWithLink = (
    desc: string,
    target: string,
    href: string
  ): ReactNode => {
    const splitted = desc.split(target);
    console.log(href);
    return (
      <span className="mt-2">
        {splitted[0]}
        <Link
          href={href}
          target="_blank"
          className="decoration-solid text-pink-600"
        >
          {target}
        </Link>
        {splitted[1]}
      </span>
    );
  };

  return (
    <div className="px-2 mt-12 min-h-svh w-svw flex flex-col justify-center items-start animate-fadeup">
      {loading && (
        <Image
          src={"/assets/spinner.gif"}
          alt={`${alt}-spinner`}
          width={50}
          height={50}
          className="opacity-0 w-1/4 md:w-1/5 lg:w-1/12 h-auto mr-2 mb-2 rounded-lg border border-pink-600 animate-fadeup"
        />
      )}
      <Image
        src={`/gallery/IMG_${img}.webp`}
        alt={`${alt}-${type}-${theme}`}
        width={1000}
        height={1000}
        priority={true}
        className="lg:w-1/4 rounded-lg border-2 border-pink-600"
      />
      <p className="mt-2">Tipe: {type}</p>
      <p className="mt-2">Tema: {theme}</p>
      {desc && desc !== "undefined" && (
        <>
          {linkTarget && linkHref ? (
            descWithLink(
              replace(desc),
              replace(linkTarget),
              replace(linkHref)
            )
          ) : (
            <span className="mt-2">{replace(desc)}</span>
          )}
        </>
      )}
      <Link href="/gallery" className="mt-2">
        <Button id="back-to-gallery">
          Back to gallery
        </Button>
      </Link>
    </div>
  );
}
