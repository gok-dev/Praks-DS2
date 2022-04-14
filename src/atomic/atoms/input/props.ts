import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  iconColor?: string;
  iconSize?: number;
  iconPosition?: "left" | "right";
  icon?: any;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  color?: "secondary" | "danger" | "success";
  variant?: "outline" | "disabled";
  register?: any;
  message?: string;
  error?: boolean;
}
