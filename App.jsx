import React from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from "./components/Home";


import CreateConferenceComponent from './components/admin/CreateConferenceComponent';
import EditConferenceComponent from './components/admin/EditConferenceComponent';
import ListConferenceComponent from './components/admin/ListConferenceComponent';
import EditorViewConferenceComponent from "./components/admin/EditorViewConferenceComponent";



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
                <Route exact path="/updateConference/:id" component={EditConferenceComponent}/>

            </Switch>
        </Router>
    }
}

export default App;