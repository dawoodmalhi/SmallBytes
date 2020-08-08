import React from "react";
import "../styles/CompressorPage.css";
import Navbar from "../components/NavBar";
import CompressorBanner from "../components/CompressorBanner";

class CompressorPage extends React.Component {
    render() {
        return (
            <div className="body">
                <Navbar />
                <CompressorBanner mode="Compress" />
            </div>
        );
    }
}

export default CompressorPage;
