import React from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import IntroBanner from "./IntroBanner"
import Footer from "./Footer"

const App = () => {
    return (
      <div className="body">
        <NavBar />
        <IntroBanner />
        <Footer />
      </div>
    );
  };
  export default App;