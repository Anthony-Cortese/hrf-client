import React from "react";
import "./App.css";
import Login from "./components/Login";
import Questionaire from "./components/Questionaire";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Questionaire />
      <Signup/>
      <Login />
    </div>
  );
}

export default App;
