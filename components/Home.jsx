import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddResearchPaper from './conference/AddResearchPaper'

class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <Router>
                <Switch>
                    <Route exact="/"></Route>
                    <Route path="/AddResearchPaper">
                        <AddResearchPaper/>
                    </Route>
                </Switch>
                <Link to={'/AddResearchPaper'}>Add</Link>
            </Router>
        </div>
    }
}

export default Home;