import React from "react";
/*
*  IT 19167442
*  Author Nusky M.A.M
* */
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import CreateConferenceComponent from './components/admin/CreateConferenceComponent';
import EditConferenceComponent from './components/admin/EditConferenceComponent';
import ListConferenceComponent from './components/admin/ListConferenceComponent';
import EditorViewConferenceComponent from "./components/admin/EditorViewConferenceComponent";
import AdminApproveOrRejectComponent from "./components/admin/AdminApproveOrRejectComponent";
import AdminConferenceListHolder from "./components/admin/AdminConferenceListHolder";
import AdminUpdateApprovororReject from "./components/admin/AdminUpdateApprovororReject";
import DisplayConferenceContents from "./components/admin/DisplayConferenceContents";
import Workshops from "./components/admin/Workshops";
import AdminDashboard from "./components/admin/AdminDashboard";




class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route path ="/"  exact component ={ListConferenceComponent}/>
                <Route path ="/add-conference/:id/:name/:title" component ={CreateConferenceComponent}/>
                <Route path ="/view-conference/:id" component ={EditorViewConferenceComponent}/>
                <Route  path="/display-workshops" component={Workshops}/>
                <Route  path="/list-ContentView" component={ListConferenceComponent}/>
                <Route  path="/update-conference/:id" component={EditConferenceComponent}/>
                <Route path="/approve-conference/:id" component={AdminApproveOrRejectComponent}/>
                <Route  path="/display-conference/:id" component={DisplayConferenceContents}/>
                <Route  path="/AdminDashboard/" component={AdminDashboard}/>
                <Route  path="/go/" component={ListConferenceComponent}/>

            </Switch>
        </Router>
    }
}

export default App;