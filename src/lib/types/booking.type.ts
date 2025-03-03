import { CrystalTheme } from "../enums/theme-crystal.enum";
import { HiddenTheme } from "../enums/theme-hidden.enum";
import { Type } from "../enums/type.enum";

const mergedThemes = {
  ...CrystalTheme,
  ...HiddenTheme,
} as const;

type MergedThemes = (typeof mergedThemes)[keyof typeof mergedThemes];

export type Booking = {
  name: string;
  bookingDate: string;
  type: Type;
  theme: MergedThemes;
  totalBox: number;
  requestHantaran?: string;
};
