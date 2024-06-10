import Button from "@/components/button/Button";
import Grid2Layout from "../../layouts/Grid-2-layout";
import ContainerLayout from "../../layouts/ContainerLayout";
import styles from "./hero.module.css";
import "@styles/grids.css";
const Hero = () => {
  return (
    <ContainerLayout>
      <Grid2Layout>
        <div className={styles.flexCol}>
          <h1>Discover Freshness at Your Doorstep</h1>
          <p className={`${styles.subText}`}>
            {" "}
            Take the Stress Out of Meal Planning and Shopping. Enjoy
            Chef-Quality Dinners Without the Hassle{" "}
          </p>
          <Button text="Explore plans" type="primary" href="/plans" />
        </div>

        <img className={`${styles.heroImg}`} src="/images/home-1920px.jpg" />
      </Grid2Layout>
    </ContainerLayout>
  );
};

export default Hero;
