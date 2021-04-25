import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import UpdateRemoveWorkshop from "./components/conference/Update&RemoveWorkshop";
import UpdateRemoveResearchPaper from "./components/conference/Update&RemoveResearchPaper";
import AddWorkShop from "./components/conference/AddWorkShop";
import AddResearchPaper from "./components/conference/AddResearchPaper";


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    }
}

export default App;