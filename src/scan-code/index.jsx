import React from "react";
import Reader from "./reader";
import Photo from "./photo";
import Button from "../menu-button";

export default function ScanCode({ code, setCode }) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {code ? <Photo code={code} /> : <Reader setCode={setCode} />}
      </div>
      <div
        style={{
          width: window.innerWidth,
          position: "absolute",
          boxSizing: "border-box",
          bottom: 0,
        }}
      >
        <Button to={"/"} active>
          Scan QR Code
        </Button>
        <Button
          to={"/photo"}
          style={{
            borderLeft: "1px transparent",
          }}
        >
          Take Photo
        </Button>
      </div>
    </>
  );
}
