"use client";

import ContainerLayout from "@/components/layouts/ContainerLayout";
import SelectionGroup from "./selectionGroup/SelectionGroup";
import OrderSummary from "./order-summary/OrderSummary";
import useMealPlan from "@/hooks/useMealPlan";
import { servingsPerMealData, mealsPerWeekData } from "@/data/mealPlan";
import Button from "@/components/button/Button";
import styles from "./mealPlan.module.css";

const MealPlan = () => {
  const {
    selectedServings,
    selectedMeals,
    handleServingsChange,
    handleMealsChange,
    pricePerServing,
    totalPrice,
  } = useMealPlan({ servingsPerMealData, mealsPerWeekData });

  return (
    <ContainerLayout container="md" paddingTop="regular">
      <div className={styles.grid}>
        <form>
          <SelectionGroup
            label="Servings per meal"
            options={servingsPerMealData}
            selectedOption={selectedServings}
            onSelectChange={handleServingsChange}
          />

          <SelectionGroup
            label="Meals per week"
            options={mealsPerWeekData}
            selectedOption={selectedMeals}
            onSelectChange={handleMealsChange}
          />
        </form>

        <div className={styles.summary}>
          <OrderSummary
            pricePerServing={pricePerServing.toString()}
            totalPrice={totalPrice}
          />

          <Button
            text="Select this plan"
            type="secondary"
            className="plan-btn"
          />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default MealPlan;
