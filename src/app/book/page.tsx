"use client";

import { useState, useEffect, ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import IType from "@/lib/interfaces/types";
import { z } from "zod";
import { bookingSchema } from "@/lib/schemas/booking.schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CrystalTheme } from "@/lib/enums/theme-crystal.enum";
import { HiddenTheme } from "@/lib/enums/theme-hidden.enum";
import { Type } from "@/lib/enums/type.enum";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/id";

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const [types, setTypes] = useState<IType[]>([]);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const theme = searchParams.get("theme");

  useEffect(() => {
    fetch("/api/hantaran")
      .then((res) => res.json())
      .then((data: IType[]) => {
        setTypes(data);
      })
      .catch((err) => console.error("Failed to fetch types:", err));
  }, []);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const submit = (data: BookingFormValues) => {
    const message = `Hallo kak,

Saya ingin booking hantaran dengan rincian sebagai berikut.

Booking atas nama: ${data.name}
Untuk tanggal: ${data.bookingDate.locale("id").format("dddd, D MMMM YYYY")}
Tipe: ${data.type}
Tema: ${data.theme}
Total Hantaran: ${data.totalBox}

Tambahan:
${data.additionalRequest}`;

    window.open(`https://wa.me/+6289670428545?text=${encodeURI(message)}`, "_blank");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form
        id="main-choosing"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(submit, (errors) => {
            console.log("❌ handleSubmit errors:", errors);
          })(e);
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 2, lg: 3 }}
          className="bg-white rounded-lg shadow-xl p-5"
        >
          <Typography variant="h4" fontWeight="bold" align="left" className="w-full">
            Booking Form
          </Typography>
          <Divider component="div" className="w-full border-2 border-pink-300" />
          <TextField
            required
            id="requester-name"
            {...register("name")}
            variant="outlined"
            label="Your name"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={2}
            className="w-full"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={2} justifyContent="space-between" className="lg:w-full">
              <Controller
                name="bookingDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    value={field.value || null}
                    onChange={(newValue) => field.onChange(newValue)}
                    format="DD/MM/YYYY"
                    label="Booking date*"
                    slotProps={{
                      textField: {
                        helperText: errors.bookingDate?.message,
                        error: !!errors.bookingDate,
                      },
                    }}
                    className="lg:w-1/3"
                  />
                )}
              ></Controller>

              <Select
                {...register("type")}
                required
                displayEmpty
                error={!!errors.theme}
                renderValue={(selected): ReactNode => {
                  if (!selected) {
                    return <span style={{ color: "#717171" }}>Choose your type*</span>;
                  }
                  return <span>{`${selected}`}</span>;
                }}
                className="lg:w-1/3"
                defaultValue={type ?? ""}
              >
                {Object.values(Type).map((it) => (
                  <MenuItem key={it} value={it}>
                    {it}
                  </MenuItem>
                ))}
              </Select>
            </Stack>

            <Select
              {...register("theme")}
              required
              displayEmpty
              error={!!errors.theme}
              renderValue={(selected): ReactNode => {
                if (!selected) {
                  return <span style={{ color: "#717171" }}>Choose your theme*</span>;
                }
                return <span>{`${selected}`}</span>;
              }}
              className="lg:w-1/3"
              defaultValue={theme ?? ""}
              disabled={!watch("type")}
            >
              {watch("type") === "Crystal Tray" &&
                Object.values(CrystalTheme).map((it) => (
                  <MenuItem key={it} value={it}>
                    {it}
                  </MenuItem>
                ))}
              {watch("type") === "Hidden Box" &&
                Object.values(HiddenTheme).map((it) => (
                  <MenuItem key={it} value={it}>
                    {it}
                  </MenuItem>
                ))}
              {!watch("type") &&
                [...Object.values(HiddenTheme), ...Object.values(CrystalTheme)].map((it) => (
                  <MenuItem key={it} value={it}>
                    {it}
                  </MenuItem>
                ))}
            </Select>
          </Stack>

          <Box sx={{ width: "100%" }}>
            <Typography gutterBottom sx={{ color: "#717171" }}>
              Total box*
            </Typography>
            <Slider
              aria-label="Total box"
              {...register("totalBox")}
              onChange={(_, val) =>
                setValue("totalBox", Array.isArray(val) ? +val[0] : +val, {
                  shouldValidate: true,
                })
              }
              min={3}
              max={types.filter((it) => it.type === watch("type"))[0]?.maxTotal ?? 7}
              step={1}
              marks
              valueLabelDisplay="auto"
              disabled={types?.length === 0 || !watch("type")}
            />
          </Box>
          <TextField
            id="additional-request"
            label="Additional request"
            {...register("additionalRequest")}
            multiline
            rows={4}
            className="w-full"
          />

          <Button id="btn-send-req" type="submit" variant="contained" className="w-full py-2">
            Send{" "}
            <svg
              id="Layer_1"
              fill="#FFFFFF"
              height="24"
              width="24"
              className="ml-2"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.56 122.88"
            >
              <title>send</title>
              <path
                className="fill-current"
                d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z"
              />
            </svg>
          </Button>
        </Stack>
      </form>
    </LocalizationProvider>
  );
}
