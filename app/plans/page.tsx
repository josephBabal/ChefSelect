import FAQ from "@/components/plans-page/faq/FAQ";
import Header from "@/components/plans-page/header/Header";
import HowItWorks from "@/components/plans-page/how-it-works/HowItWorks";
import MealPlan from "@/components/plans-page/meal-plan/MealPlan";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChefSelect - Plans",
  description: "Premium food prep delivery service offering a wide range of fresh, healthy, and delicious meals.",
  openGraph: {
    type: "website",
    url: "https://chefselect.vercel.app/",
    title: "ChefSelect - Home",
    description: "Premium food prep delivery service offering a wide range of fresh, healthy, and delicious meals.",
    siteName: "ChefSelect",
    images: [
      {
        url: "https://chefselect.vercel.app/images/og.jpg",
        secureUrl:  "https://chefselect.vercel.app/images/og.jpg",
        width: 1920,
        height: 1080,
        alt: "ChefSelect - Plans",
      },
    ],
  }
};

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
