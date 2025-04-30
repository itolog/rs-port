import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";

import { GoogleAnalytics } from "@next/third-parties/google";
import cl from "clsx";
import type { Metadata } from "next";

import { doto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serhii Romanichenko | Front-End Developer",
  description: "Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const bodyClass = cl(doto.className, "relative antialiased w-full h-full bg-slate-900");

  return (
    <html lang="en">
      <body className={bodyClass}>
        <main className={"main relative h-screen"}>{children}</main>
      </body>
      {process.env.NEXT_PUBLIC_ANALYTICS && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS} />
      )}
      <Analytics />
    </html>
  );
}
