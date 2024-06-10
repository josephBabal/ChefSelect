import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import FooterDisplay from "./FooterDisplay";
import Background from "../background/Background";

const Footer = () => {
  return (
    <Background paddingBlock="md" className="mt-md-container text-white">
      <ContainerLayout paddingTop="none">
        <FooterDisplay />
      </ContainerLayout>
    </Background>
  );
};

export default Footer;
