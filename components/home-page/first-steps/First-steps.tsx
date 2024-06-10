import Button from "@/components/button/Button";
import Grid2Layout from "@/components/layouts/Grid-2-layout";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import React from "react";
import styles from "./first-steps.module.css";

const FirstSteps = () => {
  return (
    <ContainerLayout container="md">
      <Grid2Layout direction="reverse">
        <div className={styles.flexCol}>
          <h2>Take the First Step Towards an Easier Routine</h2>
          <Button text="Explore plans" href="/plans" />
        </div>

        <img src="/images/first-steps-1200px.jpg" alt="cutting veggies" />
      </Grid2Layout>
    </ContainerLayout>
  );
};

export default FirstSteps;
