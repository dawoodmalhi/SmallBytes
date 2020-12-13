import React from "react";
import "../styles/MainPage.css";
import NavBar from "../components/NavBar";
import IntroBanner from "../components/IntroBanner";
import Footer from "../components/Footer";

const MainPage = () => {
    return (
        <div className="body">
            <NavBar />
            <IntroBanner />
            <Footer />
        </div>
    );
};
export default MainPage;
