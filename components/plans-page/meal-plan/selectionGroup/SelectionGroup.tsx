// SelectionGroup.jsx
import React from "react";
import SelectionOption from "@/components/plans-page/meal-plan/selectionOption/SelectionOption";
import styles from "../mealPlan.module.css";

type SelectionGroupProps = {
  label: string;
  options: {
    id: number;
    name: string;
    value: number;
  }[];
  selectedOption: number;
  onSelectChange: (value: number) => void;
};

const SelectionGroup = ({
  label,
  options,
  selectedOption,
  onSelectChange,
}: SelectionGroupProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.optionContainer}>
        {options.map((item) => (
          <SelectionOption
            key={item.id}
            value={item.value}
            name={item.name}
            selected={selectedOption === item.value}
            onSelectChange={onSelectChange}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectionGroup;
