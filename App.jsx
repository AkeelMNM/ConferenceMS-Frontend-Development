import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import AddResearchPaper from "./components/conference/AddResearchPaper";
import AddWorkShop from "./components/conference/AddWorkShop";


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route exact path="/">
                    <AddWorkShop/>
                </Route>
            </Switch>
        </Router>
    }
}

export default App;