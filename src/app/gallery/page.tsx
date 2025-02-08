import types from "@/data/types.json";
import Type from "./components/type";
import { FC } from "react";
import { cookies, headers } from "next/headers";

const Gallery: FC = () => {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol =
    headersList.get("x-forwarded-proto") || "http";
  const pathname =
    cookies().get("currentPath")?.value || "/";

  const fullUrl = `${protocol}://${host}${pathname}`;

  return (
    <div className="landscape:min-h-svh overflow-hidden flex portrait:flex-col justify-start landscape:justify-center items-center m-3 lg:m-8 animate-fadeup">
      {types.map((type, idx) => (
        <Type
          key={type.type}
          idx={idx}
          type={type.type}
          themes={type.themes}
          maxTotal={type.maxTotal}
          fullUrl={fullUrl}
        />
      ))}
    </div>
  );
};

export default Gallery;
