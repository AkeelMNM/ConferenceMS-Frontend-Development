import React from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";



import CreateConferenceComponent from './components/admin/CreateConferenceComponent';
import EditConferenceComponent from './components/admin/EditConferenceComponent';
import ListConferenceComponent from './components/admin/ListConferenceComponent';
import EditorViewConferenceComponent from "./components/admin/EditorViewConferenceComponent";
import AdminApproveOrRejectComponent from "./components/admin/AdminApproveOrRejectComponent";
import AdminConferenceListHolder from "./components/admin/AdminConferenceListHolder";
import AdminUpdateApprovororReject from "./components/admin/AdminUpdateApprovororReject";
import DisplayConferenceContents from "./components/admin/DisplayConferenceContents";



class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route path ="/" exact component ={ListConferenceComponent}></Route>
                <Route path ="/add-conference/:id" component ={CreateConferenceComponent}></Route>
                <Route path ="/view-conference/:id" component ={EditorViewConferenceComponent}></Route>
                <Route exact path="/update-conference/:id" component={EditConferenceComponent}/>
                <Route exact path="/approve-conference/:id" component={AdminApproveOrRejectComponent}/>
                <Route exact path="/update-conferenceapproval/:id" component={AdminUpdateApprovororReject}/>
                <Route exact path="/display-conference/:id" component={DisplayConferenceContents}/>

            </Switch>
        </Router>
    }
}

export default App;