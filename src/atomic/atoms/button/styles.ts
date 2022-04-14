import { styled } from "../../../configs/theme";

export const Container = styled("button", {
  background: "$primary",
  color: "$black",
  cursor: "pointer",
  border: "none",
  fontSize: "14px",
  fontWeight: "bold",
  lineHeight: "17px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  borderRadius: "8px",
  padding: "10px 16px",
  variants: {
    color: {
      secondary: {
        background: "$secondary",
        color: "white",
        border: "none",
        "&:hover": {
          background: "transparent",
          border: "$secondary solid 1px",
          color: "$secondary",
        },
      },
      danger: {
        background: "$danger",
        color: "white",
        border: "none",
        "&:hover": {
          background: "transparent",
          border: "$danger solid 1px",
          color: "$white",
        },
      },
      success: {
        background: "$success",
        color: "white",
        border: "none",
        "&:hover": {
          background: "transparent",
          border: "$success solid 1px",
          color: "$white",
        },
      },
    },
    variant: {
      outline: {
        background: "transparent",
        border: "solid 1px",
      },
      disabled: {
        opacity: "0.5",
      },
    },
  },
  "& svg": {
    // Icon alignment
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  "&:hover": {
    background: "$black",
    color: "$primary",
    border: "$primary solid 1px",
  },
});
