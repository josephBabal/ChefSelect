"use client";
import { Menu } from "@/data/menu";
import styles from "./menuGrid.module.css";
import MenuItem from "../menu-item/MenuItem";

type MenuGridProps = {
  filteredMenu: Menu[];
};

const MenuGrid: React.FC<MenuGridProps> = ({ filteredMenu }) => {
  return (
    <div className={styles.grid}>
      {filteredMenu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuGrid;
