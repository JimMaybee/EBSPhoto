import React, { useState } from "react";
import Reader from "./reader";
import Photo from "./photo";

function App() {
  const [code, setCode] = useState("XAvVf5FoIS");

  return (
    <div>
      <div>{code ? <Photo code={code} /> : <Reader setCode={setCode} />}</div>
      <div>
        <button onClick={() => setCode("")}>Scan again</button>
      </div>
    </div>
  );
}

export default App;
