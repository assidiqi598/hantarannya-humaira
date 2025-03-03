"use client";

import { useState, useEffect, ChangeEvent, ReactNode } from "react";
import { Button, Divider, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import ITheme from "@/lib/interfaces/theme";
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

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function MainChoosing() {
  const [type, setType] = useState<IType>();
  const [theme, setTheme] = useState<ITheme>();
  const [totalBox, setTotalBox] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [urlEncodedMsg, setUrlEncodedMsg] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<Date>(() => {
    const currentDate = new Date();
    return new Date(currentDate.setDate(currentDate.getDate() + 14));
  });
  const [additionalReq, setAdditionalReq] = useState<string>("");

  const [types, setTypes] = useState<IType[]>([]);

  useEffect(() => {
    if (type && theme && name && bookingDate) {
      setMessage(`Hallo kak,

Saya ingin booking hantaran dengan rincian sebagai berikut.
        
Booking atas nama: ${name}
Untuk tanggal: ${bookingDate.toLocaleDateString("id-ID", {
        dateStyle: "full",
      })}
Tipe: ${type?.type ?? ""}
Tema: ${theme?.theme ?? ""}
Total Hantaran: ${totalBox ?? ""}
        
Tambahan:
${additionalReq}`);
    }
  }, [type, theme, totalBox, name, bookingDate, additionalReq]);

  useEffect(() => {
    setUrlEncodedMsg(encodeURI(message));
  }, [message]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      bookingDate: "",
      totalBox: 7,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form id="main-choosing">
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
                    label="Booking date"
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
                    return <span style={{ color: "#aaa" }}>Choose your type</span>;
                  }
                  return <span>{`${selected}`}</span>;
                }}
                className="lg:w-1/3"
                defaultValue=""
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
                  return <span style={{ color: "#aaa" }}>Choose your theme</span>;
                }
                return <span>{`${selected}`}</span>;
              }}
              className="lg:w-1/3"
              defaultValue=""
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
            </Select>
          </Stack>

          <div className="mt-5 opacity-0 animate-fadeup">
            <h3 className="text-white">Total hantaran</h3>
            <div className="flex items-center justify-center rounded-lg bg-white w-fit">
              <span className="p-3 text-lg font-bold">{totalBox}</span>
              <div className="flex flex-col items-center justify-center">
                <div
                  className="p-1 bg-pink-200 rounded-tr-lg cursor-pointer origin-center active:scale-95 transition-transform"
                  onClick={() => {
                    if (totalBox < type.maxTotal) {
                      setTotalBox((oldVal) => oldVal + 1);
                    }
                  }}
                >
                  <svg
                    height="18"
                    width="18"
                    fill="#212121"
                    xmlns="http://www.w3.org/2000/svg"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 512 299.283"
                  >
                    <path d="M75.334 286.691c-64.764 36.929-96.186-15.595-60.203-51.975L215.997 25.104c33.472-33.472 46.534-33.472 80.006 0l200.866 209.612c35.983 36.38 4.561 88.904-60.203 51.975L256 189.339 75.334 286.691z" />
                  </svg>
                </div>
                <div
                  className="p-1 bg-pink-200 rounded-br-lg cursor-pointer origin-center active:scale-95 transition-transform"
                  onClick={() => {
                    if (totalBox > 3) {
                      setTotalBox((oldVal) => oldVal - 1);
                    }
                  }}
                >
                  <svg
                    height="18"
                    width="18"
                    fill="#212121"
                    xmlns="http://www.w3.org/2000/svg"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 512 299.283"
                  >
                    <path d="M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 opacity-0 animate-fadeup animation-delay-400 w-full">
            <h3 className="text-white">Request tambahan:</h3>
            <textarea
              className="p-2 w-full resize-none rounded-lg focus:outline-none"
              rows={7}
              onChange={(e) => setAdditionalReq(e.target.value)}
              value={additionalReq}
              placeholder="Tulis requestmu di sini."
            />
          </div>
          <Link
            href={`https://wa.me/+6289670428545?text=${urlEncodedMsg}`}
            target="_blank"
            className="opacity-0 animate-fadeup animation-delay-800"
          >
            <Button id="btn-send-req">
              Send request{" "}
              <svg
                id="Layer_1"
                fill="#212121"
                height="24"
                width="24"
                className="ml-2"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.56 122.88"
              >
                <defs>
                  <style>.cls-1{"fill-rule:evenodd;"}</style>
                </defs>
                <title>send</title>
                <path
                  className="cls-1"
                  d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z"
                />
              </svg>
            </Button>
          </Link>
        </Stack>
      </form>
    </LocalizationProvider>
  );
}
