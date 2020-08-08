import React from "react";
import ChooseFile from "./ChooseFile";
import Services from "./Services";
import HowToCompress from "./howToCompress";
import Footer from "./Footer";

class CompressorBanner extends React.Component {
    render() {
        return (
            <div>
                <div className="tracking-wide mb-10">
                    <h2 className="text-2xl uppercase text-center font-medium mb-2 mt-8">
                        Select File Format
                    </h2>
                    <div className="flex justify-center text-xl text-gray-600">
                        <a href="#" className="formats mx-1">
                            TXT
                        </a>
                        <div className="border-l-2 border-gray-700 m-2"></div>
                        <a href="#" className="formats mx-1">
                            TIFF
                        </a>
                        <div className="border-l-2 border-gray-700 m-2"></div>
                        <a href="#" className="formats mx-1">
                            GIF
                        </a>
                    </div>
                </div>
                <ChooseFile />
                <Services />
                <hr></hr>
                <HowToCompress />
                <hr></hr>
                <Footer />
            </div>
        );
    }
}

export default CompressorBanner;
