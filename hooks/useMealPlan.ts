"use client";
import { MealPlan } from "@/data/mealPlan";
import { useEffect, useState } from "react";

type UseMealPlanProps = {
  servingsPerMealData: MealPlan[];
  mealsPerWeekData: MealPlan[];
};

type UseMealPlanReturn = {
  selectedServings: number;
  selectedMeals: number;
  handleServingsChange: (value: number) => void;
  handleMealsChange: (value: number) => void;
  pricePerServing: number;
  totalPrice: string;
};

const useMealPlan = ({
  servingsPerMealData,
  mealsPerWeekData,
}: UseMealPlanProps): UseMealPlanReturn => {
  const [selectedServings, setSelectedServings] = useState(
    servingsPerMealData[0].value,
  );
  const [selectedMeals, setSelectedMeals] = useState(mealsPerWeekData[0].value);
  const [totalPrice, setTotalPrice] = useState<string>("");

  const handleServingsChange = (value: number) => {
    setSelectedServings(value);
  };

  const handleMealsChange = (value: number) => {
    setSelectedMeals(value);
  };

  const pricePerServing = 10.99;

  useEffect(() => {
    setTotalPrice(
      (selectedServings * selectedMeals * pricePerServing).toFixed(2),
    );
  }, [selectedServings, selectedMeals]);

  return {
    selectedServings,
    selectedMeals,
    handleServingsChange,
    handleMealsChange,
    pricePerServing,
    totalPrice,
  };
};

export default useMealPlan;
