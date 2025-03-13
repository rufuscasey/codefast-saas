import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReUp.Supply",
  description: "10 X your productivity with ReUp.Supply",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme = "light" className="scroll-smooth">
      <body className={inter.className}>
        <div>
          <Toaster />
        </div>
        {children}</body>
    </html>
  );
}
