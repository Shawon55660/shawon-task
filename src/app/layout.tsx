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
        className={`font antialiased`}
      >
        <div className="max-w-[1440px] mx-auto">
          <div style={{ fontFamily: 'Sporting Grotesque, sans-serif' }}>
        <Navbar></Navbar>
        </div>
        {children}
        </div>
      </body>
    </html>
  );
}
