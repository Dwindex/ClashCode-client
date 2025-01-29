import React from 'react';
import styles from '../Signup.module.css';
import { RegisterModel } from '@/types/modules/auth';
import RightContainer from './RightContainer';
import InfoLeftContainer from '../../../components/InfoLeftContainer';


interface SignupProps {
    onRegister: (e: React.FormEvent) => void;
    onHandleInputs: (value: string, key: keyof RegisterModel) => void;
}

const Signup: React.FC<SignupProps> = ({ onRegister, onHandleInputs }) => {
    return (
        <div className={styles.mainContainer}>
            <InfoLeftContainer />
            <RightContainer 
                onSubmit={onRegister}
                handleInputs={onHandleInputs}
            />
        </div>
    );
};

export default React.memo(Signup);
