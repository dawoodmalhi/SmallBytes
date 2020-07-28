import React from "react";
import MainPage from "./pages/MainPage"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                </Switch>
            </Router>
        );
    }
}

export default App;