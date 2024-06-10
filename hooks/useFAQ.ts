"use client";

import { useState } from "react";

type UseFAQProps = {
  initialIndex?: number;
};

type UseFAQReturnType = {
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
};

const useFAQ = ({ initialIndex = 0 }: UseFAQProps): UseFAQReturnType => {
  const [openIndex, setOpenIndex] = useState<number | null>(initialIndex);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return { openIndex, toggleFAQ };
};

export default useFAQ;
