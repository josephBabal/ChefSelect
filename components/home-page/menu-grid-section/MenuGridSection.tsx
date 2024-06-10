import BentoMenuGrid from "@/components/grids/Bento-menu-grid";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import React from "react";

const MenuGridSection = () => {
  return (
    <ContainerLayout>
      <h2 className="text-center">Choose From Our Delicious Options </h2>
      <BentoMenuGrid />
    </ContainerLayout>
  );
};

export default MenuGridSection;
