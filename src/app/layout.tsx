import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ishita badole's digital garden",
  description: "my life and other stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${poppins.variable} antialiased`}>
      <head>
      <Script 
        data-goatcounter="https://ishita.goatcounter.com/count"
        src="//gc.zgo.at/count.js"
        strategy="afterInteractive"
        async
      />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
