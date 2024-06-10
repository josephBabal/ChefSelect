// SelectionOption.jsx
import React from "react";
import styles from "../mealPlan.module.css";

type SelectionOptionProps = {
  value: number;
  name: string;
  selected: boolean;
  onSelectChange: (value: number) => void;
};

const SelectionOption = ({
  value,
  name,
  selected,
  onSelectChange,
}: SelectionOptionProps) => {
  const handleClick = () => {
    onSelectChange(value);
  };

  return (
    <div
      className={`${styles.option} ${selected ? styles.selected : ""}`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

export default SelectionOption;
