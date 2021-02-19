import React from "react";
import ReactDOM from "react-dom";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        
      }}
    >
      <Signup />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
