import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const roboto = Roboto({
  weight: ['400', '700'],
  variable: "--font-roboto",
  display: 'swap',
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "NoteHub",
  description: "App for personal notes",
  openGraph:
{
  title: "NoteHub",
  description: "App for personal notes",
  url: "https://notehub.example.com",
    images: [
    {
      url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      width: 1200,
      height: 600,
      alt: "App for personal notes",
    },
  ],
  type: 'website'
 },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <TanStackProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}