import React from 'react';
import styles from './LoadingSpinner.module.css';
import { BaseProps } from '@/types/common';

interface LoadingSpinnerProps extends BaseProps {
    size?: 'small' | 'medium' | 'large';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
    size = 'medium',
    className,
    ...props 
}) => {
    return (
        <div 
            className={`${styles.spinner} ${styles[size]} ${className || ''}`}
            {...props}
        >
            <div className={styles.bounce1}></div>
            <div className={styles.bounce2}></div>
            <div className={styles.bounce3}></div>
        </div>
    );
};

export default React.memo(LoadingSpinner);
