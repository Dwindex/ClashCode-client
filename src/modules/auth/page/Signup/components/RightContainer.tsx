import React from 'react';
import styles from '../Signup.module.css';
import { RegisterModel } from '@/types/modules/Auth';
import InputBox from '../../../../../components/molecules/InputBox';
import GoogleButton from '../../../../../components/molecules/GoogleButton';
import Button from '../../../../../components/atoms/Button';

interface RightContainerProps {
    onSubmit: (e: React.FormEvent) => void;
    handleInputs: (value: string, key: keyof RegisterModel) => void;
}

const RightContainer: React.FC<RightContainerProps> = ({ onSubmit, handleInputs }) => {
    return (
        <div className={styles.rightContainer}>
            <form onSubmit={onSubmit} className={`${styles.signCard} ${styles.signUpCardDimensions}`}>
                <label>Clash</label>
                
                <div className={styles.loginText}>
                    <span>Create your Account</span>
                    <p>Welcome! Fill the details below to join ClashCode</p>
                </div>

                <GoogleButton 
                    onClick={() => { console.log("pressed") }} 
                />

                <div className={styles.inputGroup}>
                    <InputBox 
                        name="username"
                        placeHolder="Create a unique username"
                        onChange={(e) => handleInputs(e, 'username')}
                        id="username"
                        title="Username"
                        type="text"
                    />
                    <InputBox 
                        name="email"
                        placeHolder="Enter Email"
                        onChange={(e) => handleInputs(e, 'email')}
                        id="email"
                        title="Email"
                        type="email"
                    />
                    <InputBox 
                        name="password"
                        placeHolder="Enter Password"
                        onChange={(e) => handleInputs(e, 'password')}
                        id="password"
                        title="Password"
                        type="password"
                    />
                </div>

                <div className={styles.actionGroup}>
                    <Button variant="primary" className={styles.button} type="submit">
                        Create Account
                    </Button>
                    <span>
                        Already have an account? <a href="/login">Login</a>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default React.memo(RightContainer);
