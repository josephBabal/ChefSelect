export type MealPlan = {
  id: number;
  name: string;
  value: number;
};

export const servingsPerMealData: MealPlan[] = [
  {
    id: 0,
    name: "2",
    value: 2,
  },
  {
    id: 1,
    name: "4",
    value: 4,
  },
];

export type MealsPerWeek = {
  id: number;
  name: string;
  value: number;
};

export const mealsPerWeekData: MealPlan[] = [
  {
    id: 0,
    name: "2",
    value: 2,
  },
  {
    id: 1,
    name: "3",
    value: 3,
  },
  {
    id: 2,
    name: "4",
    value: 4,
  },
  {
    id: 3,
    name: "5",
    value: 5,
  },
  {
    id: 4,
    name: "6",
    value: 6,
  },
];
