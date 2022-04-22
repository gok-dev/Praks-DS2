import React from "react";
import * as Component from "./styles";
import { InputProps } from "./props";

const Input: React.FC<InputProps> = ({ register, error, ...props }) => {
  return (
    <Component.Container>
      <Component.Label>{props.label}</Component.Label>
      <Component.BoxInput>
        {props.icon && <Component.Icon>{props.icon}</Component.Icon>}
        <Component.Field
          css={{ border: error ? "$danger" : "#403D4A" }}
          {...register}
          {...props}
          type="text"
        />
        <Component.Message>{props.message}</Component.Message>
      </Component.BoxInput>
    </Component.Container>
  );
};

export default Input;
