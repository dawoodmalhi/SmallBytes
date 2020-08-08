import React from "react";
import "../styles/ChooseFile.css";
import txtIcon from "../images/txtIcon.SVG";
import plusFile from "../images/plusFile.png";

class ChooseFile extends React.Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            fileName: "",
        };
    }

    handleSubmit(evt) {
        evt.preventDefault();
    }

    handleInputChange(evt) {
        this.setState({
            fileName: this.fileInput.value ? this.fileInput.files[0].name : "",
        });
    }
    render() {
        return (
            <div className="choose-file">
                <div class="p-4 wrapper my-5 w-11/12 m-auto">
                    <div class="h-full border-dashed border-2 border-gray-800 border-opacity-25 container px-8 pt-16 pb-24 relative flex flex-wrap">
                        <button
                            type="button"
                            className="rounded choose-file-button m-auto bg-white text-black border-0 px-6 py-4 text-center inline-block font-bold flex items-center"
                        >
                            <img
                                alt="fileAdditonIcon"
                                src={plusFile}
                                className="h-6 w-6 mx-3"
                            ></img>
                            <span className="button-text uppercase tracking-wider">
                                Choose File
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChooseFile;

{
    /* <div>
                            <img src={txtIcon} alt="textFileIcon" height="60" width="60" ></img>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    <input type="file"
                                        onChange={this.handleInputChange}
                                        ref={input => this.fileInput = input}
                                        className="form-control" />
                                </label>
                                <br />
                                {
                                    this.state.fileName
                                        && <h4 className="mt-3">
                                                File: <span className="text-danger">{this.state.fileName}</span>
                                            </h4>
                                }
                            </form>
                        </div> */
}
