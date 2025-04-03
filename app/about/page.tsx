import AboutHeader from "@/components/about-page/about-header/AboutHeader";
import Product from "@/components/about-page/product/Product";
import Values from "@/components/about-page/values/Values";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChefSelect - About",
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
        alt: "ChefSelect - About",
      },
    ],
  }
};


const AboutPage = () => {
  return (
    <div>
      <AboutHeader />
      <Values />
      <Product />
    </div>
  );
};

export default AboutPage;
