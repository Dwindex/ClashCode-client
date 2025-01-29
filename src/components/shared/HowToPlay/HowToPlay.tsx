import React, { ReactNode } from 'react';
import styles from './HowToPlay.module.css';
import Arrow7 from '/static/icons/Arrow7.svg';
import CrossKnife from '/static/images/dashboard/crossknif.svg';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Select a contest",
    description:
      "Browse through available contests and choose one that matches your skill level and preferred entry fee.",
    icon: "🏆",
  },
  {
    number: 2,
    title: "Join Contest",
    description:
      "Pay the entry fee to join the contest and get ready to showcase your coding skills.",
    icon: <img className={styles.knif} alt="Cross Knife" width={25} height={35} src={CrossKnife}/>,
  },
  {
    number: 3,
    title: "Win Prize Pool",
    description:
      "Complete the coding challenges within the time limit. Top performers win from the prize pool!",
    icon: "💵",
  },
];

const HowToPlay: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>How to Play ?</h2>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>
                {step.title} {step.icon}
              </h3>
              <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <img src={Arrow7} alt="" className={styles.arrow} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowToPlay;