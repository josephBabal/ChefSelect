import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChefSelect - Home",
  description: "Premium food prep delivery service offering a wide range of fresh, healthy, and delicious meals.",
  openGraph: {
    type: "website",
    url: "https://chefselect.vercel.app/",
    title: "ChefSelect - Home",
    description: "Premium food prep delivery service offering a wide range of fresh, healthy, and delicious meals.",
    siteName: "ChefSelect",
    images: [
      {
        url: "https://chefselect.vercel.app/images/og.jpg",
        secureUrl:  "https://chefselect.vercel.app/images/og.jpg",
        width: 1920,
        height: 1080,
        alt: "ChefSelect - Food prep delivery service",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {/* <div className="container"> */}
        {children}
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
