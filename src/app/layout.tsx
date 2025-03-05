import type { Metadata } from "next";
import "./globals.css";

// import Header from "@/components/header";
import WhatsApp from "@/components/whatsapp";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Hantarannya Humaira",
  description:
    "Hias dan sewa hantaran / seserahan untuk daerah Purwokerto, Banyumas, Cilacap dan Purbalingga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <AppRouterCacheProvider>
          <Providers>
            {/* <Header info="10% off until December 2024" /> */}
            {children}
            <WhatsApp />
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
