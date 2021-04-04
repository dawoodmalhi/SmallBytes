import React from "react";
import MainPage from "./pages/MainPage";
import CompressorPage from "./pages/CompressorPage";
import DecompressorPage from "./pages/DecompressorPage";
import invalidLink from "./pages/InvalidLink";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/home" component={MainPage} />
					<Route exact path="/">
						<Redirect to="/home" />
					</Route>
					<Route
						exact
						path="/compressor/txt"
						component={CompressorPage}
					/>
					<Route
						exact
						path="/compressor/tiff"
						component={CompressorPage}
					/>
					<Route exact path="/compressor">
						<Redirect to="/compressor/txt" />
					</Route>
					<Route
						exact
						path="/decompressor/txt"
						component={DecompressorPage}
					/>
					<Route
						exact
						path="/decompressor/tiff"
						component={DecompressorPage}
					/>
					<Route exact path="/decompressor">
						<Redirect to="/decompressor/txt" />
					</Route>
					<Route exact path="/404" component={invalidLink} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		);
	}
}

export default App;
