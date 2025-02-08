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

const Item: FC<IItem> = ({
  type,
  theme,
  image,
  desc,
  link,
}) => {
//   const [isVisible, setIsVisible] =
//     useState<boolean>(false);
//   // const [loading, setLoading] = useState<boolean>(true);
//   const linkRef = useRef<HTMLAnchorElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting)
//           setIsVisible(entry.isIntersecting);
//       });
//     });

//     const ref = linkRef.current;

//     observer.observe(ref as Element);

//     return () => {
//       if (ref) observer.unobserve(ref as Element);
//     };
//   }, []);

  return (
    <Link
    //   ref={linkRef}
      href={`/gallery/img/${customEncodeURI(
        type,
        theme,
        image,
        desc,
        link?.target,
        link?.href
      )}`}
      scroll={false}
      className={cn(
        "portrait:w-1/4 mr-2 mb-2 rounded-lg border-2 border-pink-600",
        // {
        //   "animate-fadeup": isVisible,
        //   "opacity-0": !isVisible,
        // }
      )}
    >
      {/* {loading && (
        <Image
          src={"/assets/spinner.gif"}
          alt={`${alt.mainAlt}-spinner`}
          width={50}
          height={50}
          unoptimized
          className="absolute top-0 right-0 bottom-0 left-0 m-auto"
        />
      )} */}
      {/* with the use of onLoad, some images sometimes loaded but not showing up */}
      <Image
        src={`/gallery/IMG_${image}.webp`}
        alt={`${alt.mainAlt}-${image}`}
        width={100}
        height={100}
        // onLoad={() => setLoading(false)}
        // onLoadingComplete={() => setLoading(false)}
        className="w-full h-full rounded-lg"
      />
    </Link>
  );
};

export default Item;
