import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orville Gym",
  description:
    "Orville Gym — train harder, live stronger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}