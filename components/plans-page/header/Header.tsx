import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import styles from "./header.module.css";

const Header = () => {
  return (
    <ContainerLayout className="text-center">
      <h2 className="mb-6"> Create Your Plan </h2>
      <p className={styles.mxHeaderTxt}>
        Craft your ideal meal plan with ease and flexibility, putting you in
        control of your culinary journey
      </p>
    </ContainerLayout>
  );
};

export default Header;
