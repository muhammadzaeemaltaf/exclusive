import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Image from "next/image";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[1300px]  mx-auto">
      <div className="h-[781px] flex items-center relative lg:-left-32 w-full">
        <div className="flex w-full">
         <div className="h-full hidden lg:block">
         <Image
            src={"/authImage.jfif"}
            alt="authImage"
            width={1000}
            height={1000}
            className=""
          />
         </div>
        <div className="w-full lg:w-[50%] flex items-center px-4 lg:px-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
