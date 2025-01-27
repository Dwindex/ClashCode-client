import React from "react";
import styles from "./GoogleButton.module.css";
import { BaseProps } from "@/types/common";
import Button from "@/components/atoms/Button/Button";

interface GoogleButtonProps extends BaseProps {
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
}

function GoogleButton({ 
  onClick,
  disabled,
  text = "Continue with Google",
  ...props
}: GoogleButtonProps) {
  return (
    <Button
      {...props}
      className={styles.googleButton}
      onClick={onClick}
      disabled={disabled}
      variant="outline"
    >
      <img 
        src="/google-icon.svg" 
        alt="Google"
        className={styles.googleIcon}
      />
      {text}
    </Button>
  );
}

export default React.memo(GoogleButton);
