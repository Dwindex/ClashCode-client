import React, { useState } from "react";
import styles from "./Faq.module.css";
import ExpandArrow from "/static/icons/ExpandArrow.svg";

const faqs = [
  {
    question: "How can I withdraw the money from wallet?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut veniam unde neque quasi eius at necessitatibus corrupti Tempore, ratione. Expedita nemo corrupti minus ad quia! Labore placeat tempore illo vel doloremque!",
  },
  {
    question: "How to Play 1 v 1 Contest?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut veniam unde neque quasi eius at necessitatibus corrupti Tempore, ratione. Expedita nemo corrupti minus ad quia! Labore placeat tempore illo vel doloremque!",
  },
  {
    question: "How can I withdraw the money from wallet?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut veniam unde neque quasi eius at necessitatibus corrupti Tempore, ratione. Expedita nemo corrupti minus ad quia! Labore placeat tempore illo vel doloremque!",
  },
  {
    question: "How can I withdraw the money from wallet?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut veniam unde neque quasi eius at necessitatibus corrupti Tempore, ratione. Expedita nemo corrupti minus ad quia! Labore placeat tempore illo vel doloremque!",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Frequently Asked Questions</h1>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.question} onClick={() => toggleFAQ(index)}>
              {faq.question}
              <div
                className={`${styles.icon} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <img src={ExpandArrow} alt="Expand Icon" width={20} />
              </div>
            </div>
            <div
              className={`${styles.answerContainer} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <div className={styles.answer}>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
