"use client";

import { useState } from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import Filter from "../filter/Filter";
import MenuGrid from "../menuGrid/MenuGrid";
import { menuData } from "@/data/menu";
import useMenu from "@/hooks/useMenu";

const MenuContainer = () => {
  const { handleFilter, filteredMenu } = useMenu();

  return (
    <ContainerLayout>
      <h2 className="text-center"> Explore Our Menu</h2>
      <Filter handleFilter={handleFilter} />
      <MenuGrid filteredMenu={filteredMenu} />
    </ContainerLayout>
  );
};

export default MenuContainer;
