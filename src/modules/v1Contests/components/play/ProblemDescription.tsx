import React from 'react';
import styles from '@/modules/v1Contests/components/play/play.module.css';

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
  console.warn("Problem: ", problem);
  
  return (
    <div className={styles.problem}>
      <label>{problem?.Title ?? ""}</label>
      <p>{problem?.Description ?? ""}</p>
      <span>Example: </span>
      <div className={`${(problem?.Explaination?.length ?? "".length) > 0 && styles.example_box_min_height} ${styles.example_box}`}>
        <label>Input: {problem?.SampleInput ?? ""}</label>
        <label>Output: {problem?.SampleOutPut ?? ""}</label>
        {problem?.Explaination && (
          <label>Explanation: <p>{problem?.Explaination}</p></label>
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
