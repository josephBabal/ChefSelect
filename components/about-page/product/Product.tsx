import Grid2Layout from "@/components/layouts/Grid-2-layout";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { productData } from "@/data/product";
import styles from "./product.module.css";
const Product = () => {
  return (
    <ContainerLayout>
      <div className={styles.gridProduct}>
        <img
          src="/images/product-600px.jpg"
          className={styles.child1}
          alt="product"
        />

        <div className={`${styles.flex} ${styles.child2}`}>
          {productData.map((item) => (
            <div key={item.id}>
              <p className="text-md title-text-color semi-bold">
                {" "}
                {item.title}{" "}
              </p>
              <p> {item.description} </p>
            </div>
          ))}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Product;
