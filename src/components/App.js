import React from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import IntroBanner from "./IntroBanner"

const App = () => {
    return (
      <div className="body">
        <NavBar />
        <IntroBanner />
      </div>
    );
  };
  export default App;