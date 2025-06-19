import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/component/Navbar";





export const metadata: Metadata = {
  title: "Shawon-Task",
  description: "Made this site for assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme='light' lang="en">
      <head>
       <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sporting-grotesque" />
      </head>
      <body
      style={{ fontFamily: 'Sporting Grotesque, sans-serif' }}
      >
        <div className="max-w-[1440px] h-[888px] bg-[url('/bannar.png')] bg-center bg-cover mx-auto">
          <div>
        <Navbar></Navbar>
        </div>
       <div> {children}</div>
        </div>
      </body>
    </html>
  );
}
