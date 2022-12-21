import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppClass from "./AppClass";
import elephant from "./images/elephant.jpeg";

const root = ReactDOM.createRoot(document.getElementById("root"));

let data = [
  {
    id: 1,
    img: elephant,
  },
  {
    id: 2,
    img: elephant,
  },
  {
    id: 3,
    img: elephant,
  },
  {
    id: 4,
    img: elephant,
  },
];

root.render(
  <>
    <App data={data} />
    {/* <AppClass data={data} /> */}
  </>
  // {change the above line - for interchaning between App and AppClass}
);
