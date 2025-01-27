import React from "react";
import { BaseProps } from "@/types/common";

interface InputProps extends BaseProps {
  type?: 'text' | 'password' | 'email' | 'number';
  name?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  backgroundColor?: string;
}

function Input({ 
  type = 'text', 
  name, 
  placeholder, 
  value,
  onChange, 
  backgroundColor,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      style={{
        backgroundColor,
        ...props.style
      }}
      value={value}
      placeholder={placeholder} 
      name={name} 
      type={type} 
      onChange={(e) => onChange(e.target.value)} 
    />
  );
}

export default React.memo(Input);
