import React, { useState } from "react";
import styles from "./Dropdown.module.css";

export type option = {
  label: string;
  value: string;
};

export type options = option[];

export type DropDownProps = {
  placeHolder: string;
  value: string | null;
  options: options;
  onChange: (e: string) => void;
  height?: string;
  width?: string;
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
};

const DropDown: React.FC<DropDownProps> = ({
  placeHolder,
  value,
  onChange,
  options,
  width,
  height,
  backgroundColor,
  fontColor,
  fontSize,
  padding,
  borderRadius,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSelection = (val: string) => {
    setOpen(false);
    onChange(val);
  };

  const originalH: number = height ? parseInt(height, 10) : 0;

  return (
    <div
      style={{
        height: height,
        width: width,
      }}
      className={styles.container}
    >
      <div
        className={styles.inside_cont}
        style={{
          backgroundColor: backgroundColor,
          fontSize: fontSize,
          color: fontColor,
          padding: padding,
          borderRadius: borderRadius,
        }}
      >
        <label>
          {options.find((e) => e.value === value)?.label ??
            placeHolder ??
            "Select"}
        </label>
        <div
          onClick={() => setOpen(!open)}
          style={{
            width: "0",
            height: "0",
            borderTop: !open ? "12px solid #FFFFFF" : "none",
            borderBottom: open ? "12px solid #FFFFFF" : "none",
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderRadius: "2px",
            transition: "200ms linear",
          }}
        ></div>
      </div>
      {
        <div
          style={{
            top: height ? `${originalH + 3}px` : "",
          }}
          className={`${styles.options_cont} ${
            open && styles.options_cont_show
          }`}
        >
          {options?.map((e, i) => (
            <span
              onClick={() => handleSelection(e.value)}
              className={`${e.value === value && styles.selected_option_color}`}
              key={i}
            >
              {e.label}
            </span>
          ))}
        </div>
      }
    </div>
  );
};

export default DropDown;
