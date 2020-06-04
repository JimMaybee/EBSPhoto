import React, { useState } from "react";
import QrReader from "react-qr-reader";

function App() {
  const [result, setResult] = useState("");

  return (
    <div>
      <QrReader
        delay={300}
        onError={() => {}}
        onScan={(data) => {
          if (data) setResult(data);
        }}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </div>
  );
}

export default App;
