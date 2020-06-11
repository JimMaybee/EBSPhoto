import React, { useState, useEffect } from "react";
import QrCode from "react-qr-code";

import getFromParseDb from "../modules/get";

export default function Photo({ code }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    photo: null,
    text: "",
  });

  useEffect(() => {
    getFromParseDb(code).then((json) => {
      const result = json && json.results[0];
      const photo = result && result.ConditionPhoto.url;
      const text = result && result.ConditionComments;
      setData({
        photo,
        text,
      });
      setLoading(false);
    });
  });

  const { photo, text } = data;
  return (
    <div>
      {loading ? (
        "Retreiving photo.."
      ) : (
        <div>
          <div>
            <img src={photo} alt="" width="100%" />
          </div>

          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <QrCode value={code} size={100} />
            </div>
            <div
              style={{
                width: "100%",
                backgroundColor: "white",
              }}
            >
              {text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
