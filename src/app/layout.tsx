import type { Metadata } from "next";
import { Exo, Julius_Sans_One } from "next/font/google";
import "./globals.css";

const julius = Julius_Sans_One({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-julius'
});

const exo = Exo({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
  variable: '--font-exo'
});

export const metadata: Metadata = {
  title: 'John Cox',
  description: "Software Engineer & Astronomy Enthusiast",
  // openGraph: {
  //   images: './opengraph-image.png',
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${julius.variable} ${exo.variable}`}>
        {children}
      </body>
    </html>
  );
}
