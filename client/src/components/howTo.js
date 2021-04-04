import React from "react";
import CompressionLogo from "../images/Compression.png";
import DecompressionLogo from "../images/Decompression.png";

const HowTo = (props) => {
	return (
		<section className="text-gray-700 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="mx-auto flex flex-wrap items-center">
					<img
						alt="CompressionLogo"
						className="lg:w-4/12 w-full lg:h-auto h-64 object-cover object-center rounded"
						src={
							props.mode === "Compress"
								? CompressionLogo
								: DecompressionLogo
						}
					></img>
					<div className="lg:w-8/12 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h1 className="text-gray-900 text-xl font-bold mb-1">
							How to {props.mode} your File Online:
						</h1>
						<h2 className="my-8">
							<strong>1.</strong> Select the Type of File you want
							to Compress from Select File Format.
						</h2>
						<h2 className="my-8">
							<strong>2.</strong> Click Compress File and wait for
							the Compression process to take place.
						</h2>
						<h2 className="my-8">
							<strong>3.</strong> Now you are one. Just save the
							Compressed file to your device.
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowTo;
