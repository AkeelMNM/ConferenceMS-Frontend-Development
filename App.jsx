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
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallForPaper from "./components/main/CallForPaper";
import WorkshopSubmission from "./components/main/WorkshopSubmission";
import AddWorkShop from "./components/conference/AddWorkShop";
import PaperSubmission from "./components/main/PaperSubmission";
import ImportantDates from "./components/main/ImportantDates";
import About from "./components/main/About";
import WorkShopAllView from "./components/main/WorkshopAllView";
import AttendeesRegistration from "./components/main/AttendeesRegistration";


class App extends React.Component{
    constructor(props) {
        super(props);
    }



    render() {
        return <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/callForPaper" component={CallForPaper}/>
                <Route exact path="/importantDates" component={ImportantDates}/>
                <Route exact path="/paperSubmission" component={PaperSubmission}/>
                <Route exact path="/workShopAllView" component={WorkShopAllView}/>
                <Route exact path="/WorkshopSubmission" component={WorkshopSubmission}/>
                <Route exact path="/attendeesRegistration" component={AttendeesRegistration}/>

                <Route  path="/addResearchPaper" component={AddResearchPaper}/>
                <Route  path="/addWorkShop" component={AddWorkShop}/>
                <Route  path="/researchView" component={ResearchView}/>
                <Route  path="/workShopView" component={WorkShopView}/>
                <Route  path="/reviewerResearchView" component={ReviewerResearchView}/>
                <Route  path="/reviewerWorkshopView" component={ReviewerWorkshopView}/>
                <Route  path="/updateResearchPaper/:id" component={UpdateRemoveResearchPaper}/>
                <Route  path="/updateWorkShop/:id" component={UpdateRemoveWorkshop}/>
            </Switch>
            <Footer/>
        </Router>
    }
}

export default App;