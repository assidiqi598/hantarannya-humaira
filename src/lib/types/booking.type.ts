import { CrystalTheme } from "../enums/theme-crystal.enum";
import { HiddenTheme } from "../enums/theme-hidden.enum";
import { Type } from "../enums/type.enum";

type MergedThemes = CrystalTheme[keyof CrystalTheme] | HiddenTheme[keyof HiddenTheme];

export type Booking = {
  name: string;
  bookingDate: string;
  type: Type;
  theme: MergedThemes;
  totalBox: number;
  additionalRequest?: string;
};
