import types from "@/data/types.json";
import Type from "./components/type";
import { FC } from "react";
import { Stack } from "@mui/material";

const Gallery: FC = async () => {

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
        />
      ))}
    </Stack>
  );
};

export default Gallery;
