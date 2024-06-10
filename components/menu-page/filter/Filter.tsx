"use client";
import { filterMenuData } from "@/data/menu";
import styles from "./filter.module.css";

type FilterProps = {
  handleFilter: (value: string) => void;
};
const Filter: React.FC<FilterProps> = ({ handleFilter }) => {
  return (
    <div className={styles.container}>
      <p className={styles.filterBy}>Filter By: </p>

      <div className={styles.filterContainer}>
        {filterMenuData.map((item) => (
          <div
            key={item.id}
            className={styles.filterItem}
            onClick={() => handleFilter(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
