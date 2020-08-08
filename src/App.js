import React from "react";
import MainPage from "./pages/MainPage";
import CompressorPage from "./pages/CompressorPage";
import invalidLink from "./pages/InvalidLink";
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
                    <Route exact path="/404" component={invalidLink} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        );
    }
}

export default App;
