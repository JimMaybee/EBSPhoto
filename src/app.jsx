import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScanCode from "./scan-code";
import TakePhone from "./take-photo";

function App() {
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
            <ScanCode />
          </Route>
          <Route exact path="/photo">
            <TakePhone />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
