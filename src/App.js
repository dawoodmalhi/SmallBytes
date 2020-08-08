import React from "react";
import MainPage from "./pages/MainPage";
import CompressorPage from "./pages/CompressorPage";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route
                        exact
                        path="/compresser"
                        component={CompressorPage}
                    />
                </Switch>
            </Router>
        );
    }
}

export default App;
