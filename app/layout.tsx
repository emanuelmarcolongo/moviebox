import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const lexend = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moviebox - Descubra filmes e séries",
  description:
    "Site para descobrir filmes e séries, criar listas e trocar opiniões com a comunidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${lexend.className} bg-primary`}>
        <Navbar />
        <div className="max-w-[970px] mx-auto  px-12">{children}</div>
      </body>
    </html>
  );
}
