import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Provider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Repo tracker",
  description: "This is repo tracker app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <header className="sticky top-0 z-[2]">
            <Navbar />
          </header>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
