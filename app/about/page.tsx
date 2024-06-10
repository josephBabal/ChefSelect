import AboutHeader from "@/components/about-page/about-header/AboutHeader";
import Product from "@/components/about-page/product/Product";
import Values from "@/components/about-page/values/Values";
import React from "react";

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
