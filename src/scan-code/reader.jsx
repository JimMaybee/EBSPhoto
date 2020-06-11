import React from "react";
import QrReader from "react-qr-reader";

export default function Reader({ setCode }) {
  return (
    <QrReader
      delay={300}
      onError={() => {}}
      onScan={(code) => {
        if (code != null) {
          setCode(code);
        }
      }}
      style={{ width: "100%" }}
    />
  );
}
