import type { Metadata } from "next";
import "./globals.css";
import { AuthSessionProvider } from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Michael-DSPA | Your AI Peer Advisor",
  description:
    "A personalized AI guide for UC Berkeley Data Science students, trained on years of peer advising experience and official CDSS resources.",
  icons: {
    icon: "/michael_headshot.jpeg",
  },
  openGraph: {
    title: "Michael-DSPA | Your AI Peer Advisor",
    description:
      "A personalized AI guide for UC Berkeley Data Science students, trained on years of peer advising experience and official CDSS resources.",
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
      <body className="antialiased">
        <AuthSessionProvider>{children}</AuthSessionProvider>
        <Analytics />
      </body>
    </html>
  );
}
