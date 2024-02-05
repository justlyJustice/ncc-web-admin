import { Metadata } from "next";

import "./globals.css";
import "./styles/utils.css";
import "./styles/pages.css";
import "./styles/boxicons/css/boxicons.css";

import AppProvider from "@/auth/context";

export const metadata: Metadata = {
  title: "FGiant Comm Web",
  description:
    "The web platform to manage calls and track users' locations that have been sent to the FGiant Comm server.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
