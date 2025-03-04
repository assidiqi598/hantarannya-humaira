import { FC } from "react";
import types from "@/data/types.json";
import cn from "classnames";
import Item from "./components/item";
import { cookies } from "next/headers";
import { Masonry } from "@mui/lab";
import { SpeedDialAction, SpeedDial, SpeedDialIcon } from "@mui/material";
import { CardGiftcard, ChevronLeft, ExpandLess, ExpandMore } from "@mui/icons-material";

const Theme: FC = async () => {
  const pathname = (await cookies()).get("currentPath")?.value;

  let type = pathname?.split("/").filter(Boolean).pop();

  type = decodeURIComponent(type!);

  return (
    <>
      {type &&
        types
          .filter((it) => it.type === type)[0]
          .themes.map((theme, i) => (
            <div
              key={theme.theme}
              className={cn(
                "opacity-0 flex flex-col m-3 landscape:w-1/2 landscape:m-auto animate-fadeup",
                `animation-delay-${i * 300}`
              )}
            >
              <h3>{theme.theme}</h3>
              <Masonry columns={{ xs: 3, sm: 3, md: 4, lg: 5 }} spacing={1}>
                {theme.images.map((image) => (
                  <Item
                    key={image.image}
                    type={type}
                    theme={theme.theme}
                    image={image.image}
                    desc={image.desc}
                    link={image.link}
                  />
                ))}
              </Masonry>
            </div>
          ))}
      <SpeedDial
        ariaLabel="gallery-menu"
        className="fixed bottom-[5rem] right-4 z-50 opacity-0 animate-fadeleft animation-delay-800"
        icon={<SpeedDialIcon icon={<ExpandLess />} openIcon={<ExpandMore />} />}
        direction="up"
        FabProps={{ size: "medium" }}
      >
        <SpeedDialAction
          icon={<ChevronLeft />}
          slotProps={{ tooltip: { title: "Back", open: true }, fab: { href: "/gallery" } }}
        />
        {types
          ?.filter((it) => it.type !== type)
          ?.map((it) => (
            <SpeedDialAction
              key={it.type}
              icon={<CardGiftcard />}
              slotProps={{
                tooltip: { title: it.type, open: true },
                fab: { href: `/gallery/${it.type}` },
              }}
            />
          ))}
      </SpeedDial>
    </>
  );
};

export default Theme;
