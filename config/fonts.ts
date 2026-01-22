import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "../public/fonts/SofiaPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SofiaPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SofiaPro-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SofiaPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SofiaPro-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

