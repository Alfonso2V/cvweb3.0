import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { languages } from "../constants";
import Link from "next/link";
import { Navigation } from "./components";
import Image from "next/image";

const font = Poppins({ subsets: ["latin"], display: "swap", weight: "400" });

export async function generateStaticParams() {
  return languages.map(({ code }) => ({ lang: code }));
}

export const metadata: Metadata = {
  title: "Alfonso Verastegui",
  description:
    "CV web by Alfonso Verastegui | Web Developer | FullStack Developer |  FrontEnd Developer | BackEnd Developer",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body className={`${font.className} antialiased`}>
        <div className="w-full flex justify-evenly pt-4 fixed bg-background/60 backdrop-blur-sm">
          <Link
            href="/"
            className="w-20"
          >
            <picture>
              <Image
                alt="logo"
                src="/assets/logo_gray.png"
                height={1080}
                width={1920}
              />
            </picture>
          </Link>
          <Navigation />
        </div>
        <section className="md:px-20 px-2">{children}</section>
      </body>
    </html>
  );
}
