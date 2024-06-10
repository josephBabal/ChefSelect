import { IoIosArrowBack } from "react-icons/io";
import styles from "../faq.module.css";

type FAQItemProps = {
  item: {
    question: string;
    answer: string;
  };
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
};

const FAQItem: React.FC<FAQItemProps> = ({
  item,
  index,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`${styles.item} ${isActive ? styles.active : ""}`}
      onClick={() => onClick(index)}
    >
      <div className={styles.question}>
        <p className={styles.questionText}>{item.question}</p>
        <IoIosArrowBack
          className={`${styles.arrow} ${isActive ? styles.arrowActive : ""}`}
        />
      </div>

      <div className={styles.answer}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
