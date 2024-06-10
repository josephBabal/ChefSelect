import { useState } from "react";
import { menuData, Menu } from "@/data/menu";

type useMenuReturn = {
  handleFilter: (value: string) => void;
  filteredMenu: Menu[];
};

const useMenu = (): useMenuReturn => {
  const [filter, setFilter] = useState<string>("all");

  const handleFilter = (value: string) => {
    setFilter(value.toLowerCase());
  };

  const filteredMenu = menuData.filter((item) => {
    if (filter === "all") return true;

    const itemMatchesFilter = item.diet?.filter(
      (diet) => diet.toLowerCase() === filter,
    );
    return itemMatchesFilter && itemMatchesFilter.length > 0;
  });

  return {
    handleFilter,
    filteredMenu,
  };
};

export default useMenu;
