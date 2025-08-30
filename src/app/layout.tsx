import Navbar from "@/components/section/navbar";
import NavbarMobile from "@/components/section/navbar-mobile";
import { Pointer } from "@/components/ui/pointer";
import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Reality Club",
  description: "It&#39;s not always about the music, but it&#39;s also about the story behind the music. With that in mind, this is why Reality Club stands out as one of the most sought-after acts in Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimo.className} antialiased bg-black flex flex-col items-center`}
      >
        <Navbar />
        <NavbarMobile />
        <Pointer className="fill-red-600 z-50" />
        {children}
      </body>
    </html>
  );
}
