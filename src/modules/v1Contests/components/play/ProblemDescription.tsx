import React from 'react';
import Image from 'next/image';
import styles from '../../page/play/Contest.module.css';

interface ProblemDescriptionProps {
  problem: {
    title: string;
    description: string;
    public_sample_input: string;
    public_sample_output: string;
    explanation?: string;
  };
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
  return (
    <div className={styles.problem}>
      <label>{problem?.title ?? ""}</label>
      <p>{problem?.description ?? ""}</p>
      <span>Example: </span>
      <div className={`${(problem?.explanation?.length ?? "".length) > 0 && styles.example_box_min_height} ${styles.example_box}`}>
        <label>Input: {problem?.public_sample_input ?? ""}</label>
        <label>Output: {problem?.public_sample_output ?? ""}</label>
        {problem?.explanation && (
          <label>Explanation: <p>{problem?.explanation}</p></label>
        )}
      </div>
      <label className={styles.topics_text}>Topics:</label>
      <div className={styles.topics_items}>
        {["Array", "Hashmap"].map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </div>
    </div>
  );
};

export default ProblemDescription;
