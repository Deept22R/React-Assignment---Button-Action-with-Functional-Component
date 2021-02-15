import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [flag, setFlag] = useState(false);
  function renderPara() {
    setFlag(true);
  }
  function paragraph() {
    if (flag)
      return (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>);
  }
  return (
    <div id="main">
      <button id="click" onClick={renderPara}>Click</button>
      {paragraph()}
    </div>
  );
}


export default App;
