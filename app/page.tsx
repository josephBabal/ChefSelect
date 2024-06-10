import Hero from "@/components/home-page/hero/Hero";
import styles from "./page.module.css";
import WhyChooseSection from "@/components/home-page/why-choose-section/WhyChooseSection";
import MenuGridSection from "@/components/home-page/menu-grid-section/MenuGridSection";
import FirstSteps from "@/components/home-page/first-steps/First-steps";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseSection />
      <MenuGridSection />
      <FirstSteps />
    </>
  );
}
