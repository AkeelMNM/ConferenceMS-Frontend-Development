import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import ReviewerResearchView from "./components/conference/ReviewerResearchView";
import ReviewerWorkshopView from "./components/conference/ReviewerWorkshopView";
import ResearchView from "./components/conference/ResearchView";
import WorkShopView from "./components/conference/WorkShopView";


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route exact path="/">
                    <ResearchView/>
                </Route>
            </Switch>
        </Router>
    }
}

export default App;