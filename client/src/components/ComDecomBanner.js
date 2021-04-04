import React from "react";
import ChooseFile from "./ChooseFile";
import Services from "./Services";
import HowTo from "./howTo";
import { Link } from "react-router-dom";

class ComDecomBanner extends React.Component {
	render() {
		return (
			<div>
				<div className="tracking-wide mb-10">
					<div
						style={{ color: "#ee3233" }}
						className="text-center uppercase mt-10 text-3xl font-bold tracking-widest"
					>
						{this.props.mode} your files
					</div>
					<h2 className="text-2xl uppercase text-center font-medium mb-2 mt-4">
						Select File Format
					</h2>
					<div className="flex justify-center text-xl text-gray-600">
						<Link
							to={
								this.props.mode === "Compress"
									? "/compressor/txt"
									: "/decompressor/txt"
							}
							className="formats mx-1"
						>
							TXT
						</Link>
						<div className="border-l-2 border-gray-700 mx-2 "></div>
						<Link
							to={
								this.props.mode === "Compress"
									? "/compressor/tiff"
									: "/decompressor/tiff"
							}
							className="formats mx-1"
						>
							TIFF
						</Link>
					</div>
				</div>
				<ChooseFile mode={this.props.mode} />
				<Services />
				<hr></hr>
				<HowTo mode={this.props.mode} />
				<hr></hr>
			</div>
		);
	}
}

export default ComDecomBanner;
