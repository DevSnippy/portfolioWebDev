import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aviram's Site",
  description: "Portfolio site ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
