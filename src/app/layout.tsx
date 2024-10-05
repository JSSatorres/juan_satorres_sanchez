import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import NavBar from "@/components/sections/NavBar";
import "../../styles/styles.css";

export const metadata: Metadata = {
  title: "Juan Portfolio",
  description: "Juan Satorres Sánchez portfolio web developer",
};

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <main className=" bg-gray-900">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
