import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Home from "./components/Home";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import AdminCreateUser from "./components/user/AdminCreateUser";
import ResearchersPayment from "./components/user/ResearchersPayment";
import AttendeesPayment from "./components/user/AttendeesPayment";

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register} />
                <Route path="/AdminCreateUser" component={AdminCreateUser} />
                <Route path="/ResearchersPayment" component={ResearchersPayment} />
                <Route path="/AttendeesPayment" component={AttendeesPayment} />
            </Switch>
        </Router>
    }
}

export default App;