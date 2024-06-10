import Grid2Layout from "@/components/layouts/Grid-2-layout";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { howItWorksData } from "@/data/howItWorks";
import styles from "./howItWorks.module.css";
import "@styles/grids.css";

const HowItWorks = () => {
  return (
    <ContainerLayout container="md">
      <h2 className="text-center"> How It Works</h2>

      <Grid2Layout type="small">
        <div className={styles.container}>
          {howItWorksData.map((item, index) => (
            <div key={index} className={styles.itemContainer}>
              <span className="text-md title-text-color semi-bold">
                {" "}
                {index + 1}.{" "}
              </span>
              <div>
                <p className="text-md title-text-color semi-bold">
                  {" "}
                  {item.title}
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <img
          src="/images/how-it-works-illustration-800px.jpg"
          alt="how it works"
        />
      </Grid2Layout>
    </ContainerLayout>
  );
};

export default HowItWorks;
