import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import AddResearchPaper from "./components/conference/AddResearchPaper";
import ReviewerResearchView from "./components/conference/ReviewerResearchView";
import ReviewerWorkshopView from "./components/conference/ReviewerWorkshopView";
import ResearchView from "./components/conference/ResearchView";
import WorkShopView from "./components/conference/WorkShopView";
import UpdateRemoveResearchPaper from "./components/conference/Update&RemoveResearchPaper";
import UpdateRemoveWorkshop from "./components/conference/Update&RemoveWorkshop";


class App extends React.Component{
    constructor(props) {
        super(props);
    }



    render() {
        return <Router>
            <Switch>
                <Route exact path="/" component={ResearchView}/>
                <Route exact path="/updateResearchPaper/:id" component={UpdateRemoveResearchPaper}/>
                <Route exact path="/WorkShopView" component={WorkShopView}/>
                <Route exact path="/updateWorkShop/:id" component={UpdateRemoveWorkshop}/>
                <Route exact path="/ReResearchPaperView" component={ReviewerResearchView}/>
            </Switch>
        </Router>
    }
}

export default App;