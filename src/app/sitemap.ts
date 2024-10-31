import type { MetadataRoute } from "next";
import types from "@/data/types.json";
import { customEncodeURI } from "@/util/encode";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = "https://humaira.biz.id";
  let images = [];

  types.forEach((type) => {
    type.themes.forEach((theme) => {
      theme.images.forEach((image) => {
        images.push({
          url: `${BASE_URL}/gallery/img/${customEncodeURI(
            type.type,
            theme.theme,
            image.image,
            image.desc,
            image.link?.target,
            image.link?.href
          )}`,
          prioriy: 0.7
        });
      });
    });
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/book`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
