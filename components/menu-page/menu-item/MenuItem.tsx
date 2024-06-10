"use client";
import { Menu } from "@/data/menu";
import styles from "../menuGrid/menuGrid.module.css";

type MenuItemProps = {
  item: Menu;
};

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div key={item.id} className={styles.item}>
      <img src={item.image} className={styles.image} alt="" />
      <p className={styles.name}>{item.name}</p>
      <div>
        <p>
          {item.time}{" "}
          {item.diet && item.diet.length > 0 && `| ${item.diet.join(", ")}`}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
