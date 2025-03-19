import React from "react";
import styles from "../Login.module.css";
import InfoLeftContainer from "../../../components/InfoLeftContainer";
import RightContainer from "./RightContainer";
import { LoginUserInput } from "@/modules/auth/types/mutation";

interface LoginProps {
  onLogin: (e: React.FormEvent) => void;
  onHandleInputs: (value: string, key: keyof LoginUserInput) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onHandleInputs }) => {
  return (
    <div className={styles.mainContainer}>
      <InfoLeftContainer />
      <RightContainer onSubmit={onLogin} handleInputs={onHandleInputs} />
    </div>
  );
};

export default React.memo(Login);
