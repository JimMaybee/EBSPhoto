import React from "react";
import Button from "../menu-button";
import sendToParse from "../modules/send";

import cloud from "./cloud.svg";
import camera from "./camera.svg";

export default function TakePhoto({ code, text, setText, photo, setPhoto }) {
  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        {photo ? (
          <img
            src={URL.createObjectURL(photo)}
            style={{
              height: window.innerHeight * 0.5,
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: window.innerHeight * 0.5,
            }}
          >
            Take photo...
          </div>
        )}
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{}}>
            <input
              id="fileField"
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              capture
              onChange={(e) => {
                setPhoto(e.target.files[0]);
              }}
            />
            <button
              onClick={() => {
                document.getElementById("fileField").click();
              }}
              style={{
                display: "block",
                backgroundImage: `url(${camera})`,
                width: 100,
                height: 100,
                border: "1px solid lightgrey",
                padding: "1rem",
              }}
            />
            <button
              style={{
                display: "block",
                background: `url(${cloud})`,
                width: 100,
                height: 100,
                border: "1px solid lightgrey",
                padding: "1rem",
              }}
              onClick={() => {
                if (photo.length === 0) return;
                if (text.length === 0) return;
                sendToParse(code, text, photo);
              }}
            />
          </div>
          <div
            style={{
              flex: 1,
            }}
          >
            <textarea
              type="text"
              onChange={(e) => {
                setText(e.target.value);
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: window.innerWidth,
        }}
      >
        <Button to={"/"}>Scan QR Code</Button>
        <Button
          active
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
