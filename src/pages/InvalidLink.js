import React from "react";
import NavBar from "../components/NavBar";
import "../styles/invalidLink.css";

const invalidLink = () => {
    return (
        <div>
            <NavBar />
            <div className="invalid-link-text text-gray-800 tracking-wider text-center mx-auto mt-20">
                ERROR 404: The Link you Entered is NOT VALID
            </div>
        </div>
    );
};

export default invalidLink;
