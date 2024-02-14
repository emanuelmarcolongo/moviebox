import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexend = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moviebox - Descubra séries e filmes e interaja com a comunidade",
  description:
    "Site para descobrir filmes e séries, criar listas e trocar opiniões com a comunidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>{children}</body>
    </html>
  );
}
