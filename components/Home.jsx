import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CreateConferenceComponent from "./admin/CreateConferenceComponent";

class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <Router>
                <Switch>
                    <Route exact="/"></Route>
                    <Route path="/CreateConferenceComponent">
                        <CreateConferenceComponent/>
                    </Route>
                </Switch>
                <Link to={'/CreateConferenceComponent'}>Add</Link>
            </Router>

        </div>
    }
}

export default Home;