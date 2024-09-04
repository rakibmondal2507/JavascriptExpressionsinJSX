import React from "react";
import ReactDOM from "react-dom";

const fname = "Rakib";
const lname = " Mondal";
const number = 15;

ReactDOM.render(
  <div>
    <h1>Hello {fname + lname}!</h1>
    <p>Your Lucky Number is {number}</p>
  </div>,

  document.getElementById("root")
);
