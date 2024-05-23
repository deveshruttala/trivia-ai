import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "AI Generated  QUIZ APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen justify-between items-center`}>
        <header>
          <h2 className="text-2xl m-10">TRIVIA Generator!</h2>
        </header>
        {children}
        <footer>Created by Devesh Ruttala - 2024</footer>
      </body>
    </html>
  );
}
