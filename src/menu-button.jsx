import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, active, to, style }) {
  return (
    <Link
      to={to}
      style={{
        width: "50%",
        display: "inline-block",
        boxSizing: "border-box",
        border: "1px solid grey",
        background: "lightgrey",
        color: "black",
        textDecoration: "none",
        fontSize: "1rem",
        padding: "1rem",
        textAlign: "center",
        ...(active
          ? {
              backgroundColor: "grey",
              color: "white",
            }
          : {}),
        ...style,
      }}
    >
      {children}
    </Link>
  );
}
