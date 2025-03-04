import { z } from "zod";
import { CrystalTheme } from "../enums/theme-crystal.enum";
import { HiddenTheme } from "../enums/theme-hidden.enum";
import { Type } from "../enums/type.enum";
import dayjs from "dayjs";

const crystalTheme = Object.values(CrystalTheme) as [string, ...string[]];

const hiddenTheme = Object.values(HiddenTheme) as [string, ...string[]];

export const bookingSchema = z
  .object({
    name: z.string().min(3, "Booking name is required"),
    bookingDate: z.preprocess(
      (val) => (typeof val === "string" ? dayjs(val) : val),
      z
        .custom<dayjs.Dayjs>((val) => dayjs.isDayjs(val))
        .refine((date) => date.isValid(), { message: "Invalid date" })
        .refine((date) => date.isAfter(dayjs().add(13, "days")), {
          message: "Date must be at least 2 weeks away",
        })
    ),
    type: z
      .enum(
        Object.values(Type).filter((value) => typeof value === "string") as [string, ...string[]]
      )
      .refine((value) => value !== "", {
        message: "Type of hantaran is required",
      }),
    theme: z.enum([...crystalTheme, ...hiddenTheme]).refine((value) => value !== "", {
      message: "Theme of hantaran is required",
    }),
    totalBox: z.preprocess((val) => Number(val), z.number().min(3, "Minimum 3")),
    additionalRequest: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.type === "Crystal Tray") {
        return crystalTheme.includes(data.theme);
      }

      if (data.type === "Hidden Box") {
        return hiddenTheme.includes(data.theme);
      }

      return false;
    },
    {
      message: "Invalid theme for the selected type",
      path: ["theme"],
    }
  );
