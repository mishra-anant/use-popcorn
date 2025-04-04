import { useState } from "react";

import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onSetRating={setMovieRating}
      ></StarRating>
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(
  <>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "okay", "Good", "Amazing"]}
    ></StarRating>
    <StarRating color="red" className="test" defaultRating={3}></StarRating>
    <Test></Test>
  </>
);
