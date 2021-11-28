import React from "react";
import "./App.css";
import Button from "./Button";

function App() {
  function clicked() {
    alert("Button Clicked");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button>Hello React</Button>
        <br />
        <Button color="secondary" onClick={clicked}>
          Secondary Button
        </Button>
        <br />
        <Button color="warn" disabled={true} onClick={clicked}>
          Disabled Button
        </Button>
      </header>
    </div>
  );
}

export default App;
