import { FC } from "react";
import cn from "classnames";
import IType from "@/interfaces/types";
import Link from "next/link";
import { Typography } from "@mui/material";

const Type: FC<IType & { fullUrl?: string; idx: number }> = ({ type, idx, themes, fullUrl }) => {
  return (
    <Link
      className={cn(
        "relative flex justify-center items-center bg-cover opacity-0 animate-fadeleft h-[50svh] w-[100svw] landscape:w-[50svw] landscape:h-[100svh] overflow-hidden",
        {
          "bg-hidden-box": type === "Hidden Box",
          "bg-crystal-tray": type === "Crystal Tray",
          [`animation-delay-${idx * 800}`]: idx > 0,
        }
      )}
      href={`${fullUrl}/${encodeURIComponent(type)}`}
    >
      <div className="absolute inset-0 transition-all duration-300 hover:backdrop-brightness-50"></div>
      <Typography variant="h4" fontWeight="bold" className="text-white relative z-10">
        {type}
      </Typography>
    </Link>
  );
};

export default Type;
