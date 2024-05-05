import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import "@uploadthing/react/styles.css";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Script from "next/script";
import Contact from "./components/contact";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Contact />
          <Footer />
      </body>
      <Script src="https://smtpjs.com/v3/smtp.js"/>
    </html>
  );
}
