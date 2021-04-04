import React from "react";
import "../styles/ComDecomPage.css";
import Navbar from "../components/NavBar";
import ComDecomBanner from "../components/ComDecomBanner";
import Footer from "../components/Footer";

class DecompressorPage extends React.Component {
	render() {
		return (
			<div className="body">
				<Navbar />
				<ComDecomBanner mode="Decompress" />
				<Footer />
			</div>
		);
	}
}

export default DecompressorPage;
