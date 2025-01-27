import React from 'react';
import Image from 'next/image';
import styles from '../../page/play/Contest.module.css';
import { runDataModal } from '@/model/contest/contest';

interface TestResultsProps {
  isSubmitting: boolean;
  runData: runDataModal | undefined;
  onClose: () => void;
}

const TestResults: React.FC<TestResultsProps> = ({ isSubmitting, runData, onClose }) => {
  return (
    <div
      style={{
        height: isSubmitting ? "50%" : "30%"
      }}
      className={styles.result_cont}
    >
      <div onClick={onClose} className={styles.result_headder}>
        <Image src={"/static/icons/testcase_icon.svg"} height={20} width={20} alt='testcase' />
        {"Test Result"}
      </div>
      <div className={styles.results}>
        {runData ? 
          <span>{runData?.response?.stdout ?? ""}</span> : 
          <span>Loading...</span>
        }
      </div>
    </div>
  );
};

export default TestResults;
