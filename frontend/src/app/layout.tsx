import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael-DSPA | Berkeley DS Guide",
  description:
    "Michael-DSPA is an AI version of a former UC Berkeley Data Science Peer Advisor, helping students navigate the Data Science major.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
