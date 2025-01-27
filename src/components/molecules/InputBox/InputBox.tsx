import React from "react";
import styles from "./InputBox.module.css";
import { BaseProps } from "@/types/common";
import Input from '../../atoms/Input/Input';

interface InputBoxProps extends BaseProps {
  id?: string;
  title?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  name?: string;
  placeHolder?: string;
  value?: string;
  onChange: (value: string) => void;
  backgroundColor?: string;
  titleFontSize?: string | number;
  titleFontColor?: string;
}

function InputBox({ 
  id, 
  title, 
  type = 'text', 
  name, 
  placeHolder,
  value, 
  onChange, 
  backgroundColor, 
  titleFontSize, 
  titleFontColor,
  ...props
}: InputBoxProps) {
  return (
    <div className={styles.container} {...props}>
      {title && (
        <label
          htmlFor={id}
          style={{
            fontSize: titleFontSize,
            color: titleFontColor
          }}
        >
          {title}
        </label>
      )}
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        backgroundColor={backgroundColor}
      />
    </div>
  );
}

export default React.memo(InputBox);
