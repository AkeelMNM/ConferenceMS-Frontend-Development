import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import AddResearchPaper from "./components/conference/AddResearchPaper";
import ReviewerResearchView from "./components/conference/ReviewerResearchView";
import ReviewerWorkshopView from "./components/conference/ReviewerWorkshopView";


class App extends React.Component{
    constructor(props) {
        super(props);
    }



    render() {
        return <Router>
            <Switch>
                <Route exact path="/">
                    <ReviewerWorkshopView/>
                </Route>
            </Switch>
        </Router>
    }
}

export default App;