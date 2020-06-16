import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScanCode from "./scan-code";
import TakePhone from "./take-photo";

function App() {
  const [code, setCode] = useState(null);
  const [text, setText] = useState(null);
  const [photo, setPhoto] = useState(null);

  return (
    <div
      style={{
        position: "relative",
        boxSizing: "border-box",
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ScanCode code={code} setCode={setCode} />
          </Route>
          <Route exact path="/photo">
            <TakePhone
              code={code}
              text={text}
              setText={setText}
              photo={photo}
              setPhoto={setPhoto}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
