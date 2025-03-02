import types from "@/data/types.json";
import Type from "./components/type";
import { FC } from "react";
import { cookies, headers } from "next/headers";
import { Stack } from "@mui/material";

const Gallery: FC = () => {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const pathname = cookies().get("currentPath")?.value || "/";

  const fullUrl = `${protocol}://${host}${pathname}`;

  return (
    <Stack
      direction={{ lg: "row" }}
      alignItems="center"
      justifyContent="center"
      className="min-h-svh min-w-svw overflow-hidden"
    >
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
    </Stack>
  );
};

export default Gallery;
