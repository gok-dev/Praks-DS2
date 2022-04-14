import * as React from "react";
import { ButtonProps } from "./props";
import * as S from "./styles";

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <S.Container {...props}>
      {props.icon && <i>{props.icon}</i>}
      {props.text && <span>{props.text}</span>}
    </S.Container>
  );
};

export default Button;
