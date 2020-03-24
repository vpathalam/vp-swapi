import React from "react";
import ReactDOM from "react-dom";
import Cell from "./Cell.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const el = "hello world";
  const i = {};
  ReactDOM.render(<Cell url={el} key={i} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
