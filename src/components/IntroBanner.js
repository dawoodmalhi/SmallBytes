import React from "react";
import "../styles/IntroBanner.css";
import logo  from "../images/SmallBytesLogo.SVG"

class IntroBanner extends React.Component {
    render(){
        return(
            <div>
                <section className="text-gray-700 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900" style={{color: "#db2d2c"}}>
                                What is Small Bytes
                            </h1>
                            <p className="mb-8 leading-relaxed text-xl text-justify">
                            Small Bytes is a Web Application Based Free Compression Tool. 
                            It uses the LZW Compression algorithm to compress your files. 
                            This application is a university project. It is very simple 
                            and easy to use. This project is basically implemented to show 
                            how LZW Compression works. This Web Application is made using 
                            React, TailWind CSS and Node.js. Also this is an open source 
                            project. And you can view its code&nbsp;
                                <a href="https://github.com/TayyabAsghar/CS311S20PID48" target="_blank" className="project-link">
                                    here
                                </a>
                                .
                            </p>
                            <strong className="text-2xl mb-2">We Support following formats</strong>
                            <div className="flex justify-center text-2xl text-gray-600">
                                <a href="#" className="formats">TXT</a>
                                <div className="border-l-2 border-gray-700 m-2"></div>
                                <a href="#" className="formats">TXT</a>
                                <div className="border-l-2 border-gray-700 m-2"></div>
                                <a href="#" className="formats">TXT</a>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="App Logo" src={logo}></img>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default IntroBanner;