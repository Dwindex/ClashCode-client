import React from "react";
import styles from "../Login.module.css";
import { LoginModel } from "@/types/modules/auth";
import InputBox from "../../../../../components/molecules/InputBox";
import Button from "../../../../../components/atoms/Button";

interface RightContainerProps {
  onSubmit: (e: React.FormEvent) => void;
  handleInputs: (value: string, key: keyof LoginModel) => void;
}

const RightContainer: React.FC<RightContainerProps> = ({
  onSubmit,
  handleInputs,
}) => {
  return (
    <div className={styles.rightContainer}>
      <form
        onSubmit={onSubmit}
        className={`${styles.signCard} ${styles.signUpCardDimensions}`}
      >
        <label>Clash</label>

        <div className={styles.loginText}>
          <span>Login</span>
          <p>Welcome Back to ClashCode! We are happy to see you back</p>
        </div>

        {/* <GoogleButton
          onClick={() => {
            console.log("pressed");
          }}
        /> */}

        <div className={styles.inputGroup}>
          <InputBox
            name="email"
            placeHolder="Enter Email"
            onChange={(e) => handleInputs(e, "email")}
            id="email"
            title="Email"
            type="email"
          />
          <InputBox
            name="password"
            placeHolder="Enter Password"
            onChange={(e) => handleInputs(e, "password")}
            id="password"
            title="Password"
            type="password"
          />
        </div>

        <div className={styles.actionGroup}>
          <Button variant="primary" className={styles.button} type="submit">
            Login
          </Button>
        </div>
        <span>
          Don't have an account? <a href="/signup">Signup</a>
        </span>
      </form>
    </div>
  );
};

export default React.memo(RightContainer);
