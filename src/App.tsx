import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "sample-npm-pkg";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Message />
      </header>
    </div>
  );
};

export default App;
