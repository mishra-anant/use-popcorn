import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(
  <>
    <StarRating maxRating={5}></StarRating>
    <StarRating maxRating={10}></StarRating>
  </>
);
