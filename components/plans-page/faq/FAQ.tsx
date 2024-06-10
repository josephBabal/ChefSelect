"use client";

import ContainerLayout from "@/components/layouts/ContainerLayout";
import { FAQData } from "@/data/FAQ";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./faq.module.css";
import useFAQ from "@/hooks/useFAQ";
import FAQItem from "./faq-item/FAQItem";

const FAQ = () => {
  const { openIndex, toggleFAQ } = useFAQ({ initialIndex: 0 });

  return (
    <ContainerLayout container="md">
      <h2>FAQ</h2>

      <div className={styles.faqContainer}>
        {FAQData.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            index={index}
            isActive={openIndex === index}
            onClick={toggleFAQ}
          />
        ))}
      </div>
    </ContainerLayout>
  );
};

export default FAQ;
