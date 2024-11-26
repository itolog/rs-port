import { ReactNode } from "react";

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
    <html lang="en" className={"w-full h-full"}>
      <body className={bodyClass}>
        <main className={"w-full h-full"}>{children}</main>
      </body>
    </html>
  );
}
