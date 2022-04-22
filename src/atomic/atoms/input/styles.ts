import { styled } from "../../../configs/theme";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const BoxInput = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  border: "solid 1px",
  padding: "0.3em",
});

export const Field = styled("input", {
  width: "100%",
  border: "solid 1px black",
  borderRadius: "0.375rem",
  display: "inline-block",
  background: "transparent",
  boxSizing: "border-box",
  color: "white",
  fontSize: "0.975rem",
  lineHeight: "1.25rem",
  paddingLeft: "0.5rem",
});

export const Label = styled("label", {
  width: "80%",
  display: "block",
  marginBottom: "6px",
  marginLeft: "1em",
  fontWeight: "bold",
  fontSize: "0.74em",
});

export const Message = styled("span", {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  fontSize: "12px",
  color: "$cardText",
  lineHeight: "14px",
  marginTop: "6px",
});

export const Icon = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "solid",
});
