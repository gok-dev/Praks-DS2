export interface ButtonProps {
  icon?: any;
  text?: string;
  onClick?: (event: any) => void;
  href?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  animationIcon?: boolean;
  color?: "secondary" | "danger" | "success";
  variant?: "outline" | "disabled";
}
