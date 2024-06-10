import FAQ from "@/components/plans-page/faq/FAQ";
import Header from "@/components/plans-page/header/Header";
import HowItWorks from "@/components/plans-page/how-it-works/HowItWorks";
import MealPlan from "@/components/plans-page/meal-plan/MealPlan";

const PlansPage = () => {
  return (
    <div>
      <Header />
      <MealPlan />
      <HowItWorks />
      <FAQ />
    </div>
  );
};

export default PlansPage;
