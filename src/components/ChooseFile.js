import React from "react";
import "../styles/ChooseFile.css";
import txtImgIcon from "../images/txtImgIcon.png";
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
                    <div class="flow-root h-full border-dashed border-2 border-gray-800 border-opacity-25 container px-8 pt-4 pb-16 relative flex flex-wrap">
                        <img alt="txtImgIcon" src={txtImgIcon} className="h-20 block mx-auto my-5"></img>
                        <button
                            type="button"
                            className="block rounded choose-file-button m-auto bg-white text-black border-0 px-6 py-4 text-center inline-block font-bold flex items-center"
                        >
                            <img
                                alt="fileAdditonIcon"
                                src={plusFile}
                                className="h-6 w-auto mx-3"
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
