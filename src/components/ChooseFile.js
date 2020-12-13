import React from "react";
import "../styles/ChooseFile.css";
import axios from "axios";
import txtImgIcon from "../images/txtImgIcon.png";
import plusFile from "../images/plusFile.png";

class ChooseFile extends React.Component {
	state = {
		selectedFile: null,
	};

	fileSelectedHandler = (event) => {
		this.setState({
			selectedFile: event.target.files[0],
		});
		console.log(event.target.files[0].name);
	};

	fileUploadHandler = () => {
		const data = new FormData();
		data.append(
			"file",
			this.state.selectedFile,
			this.state.selectedFile.name
		);
		axios.post("//localhost:4000/upload", data).then((res) => {
			console.log(res);
		});
	};

	render() {
		const { selectedFile } = this.state;
		let fileName;
		if (selectedFile !== null) {
			fileName = selectedFile.name;
		}
		return (
			<div className="choose-file">
				<div
					className={`p-4 wrapper my-5 w-11/12 m-auto ${
						selectedFile === null ? "" : "display-none"
					}`}
				>
					<div className="flow-root h-full border-dashed border-2 border-gray-800 border-opacity-25 container px-8 pt-4 pb-16 relative flex flex-wrap">
						<img
							alt="txtImgIcon"
							src={txtImgIcon}
							className="h-20 block mx-auto my-5"
						></img>
						<input
							style={{ display: "none" }}
							type="file"
							onChange={this.fileSelectedHandler}
							ref={(fileInput) => (this.fileInput = fileInput)}
						/>
						<button
							type="button"
							className="block rounded choose-file-button m-auto bg-white text-black border-0 px-6 py-4 text-center inline-block font-bold flex items-center"
							onClick={() => this.fileInput.click()}
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
				<div
					className={`p-4 bg-gray-100 my-5 w-11/12 m-auto border-solid border border-gray-900 border-opacity-50 rounded-md choose-file-disabled ${
						selectedFile === null ? "display-none" : ""
					}`}
				>
					<p className="block mx-auto text-center my-5">
						File: {fileName}
					</p>
					<button
						onclick={this.fileUploadHandler}
						className="block rounded compress-file-button m-auto text-white border-0 px-6 py-4 text-center uppercase inline-block font-bold flex items-center"
					>
						{this.props.mode}
					</button>
				</div>
			</div>
		);
	}
}

export default ChooseFile;

{
	/* */
}
