import { navigation } from "@/data/navigation";

import styles from "./footer.module.css";
const FooterDisplay = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo}> ChefSelect </p>
      <div className={styles.linksContainer}>
        {navigation.map((item) => (
          <p key={item.id}> {item.name} </p>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default FooterDisplay;
