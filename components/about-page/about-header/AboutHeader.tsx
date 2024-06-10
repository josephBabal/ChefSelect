import ContainerLayout from "@/components/layouts/ContainerLayout";
import React from "react";

const AboutHeader = () => {
  return (
    <ContainerLayout container="md">
      <h2 className="text-center"> Local, Sustainable, Delicious </h2>
      <img
        src="/images/about-veggie-header-1200px.jpg"
        className="img-max-ht-500"
        alt="about header"
      />
    </ContainerLayout>
  );
};

export default AboutHeader;
