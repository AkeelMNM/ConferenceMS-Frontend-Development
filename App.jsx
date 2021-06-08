import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Home from "./components/Home";
import Login from "./components/user/Login";
import LoginRegisterHandler from "./components/user/LoginRegisterHandler";
import AdminCreateUser from "./components/user/AdminCreateUser";
import UserProfile from "./components/user/UserProfile";
import ResearchersPayment from "./components/user/ResearchersPayment";
import AttendeesPayment from "./components/user/AttendeesPayment";
import TemplatesDownload from "./components/user/TemplatesDownload";

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <Switch>
                <Route exact path="/" component={LoginRegisterHandler}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={LoginRegisterHandler}/>
                <Route path="/UserProfile" component={UserProfile} />
                <Route path="/AdminCreateUser" component={AdminCreateUser} />
                <Route path="/ResearchersPayment" component={ResearchersPayment} />
                <Route path="/AttendeesPayment" component={AttendeesPayment} />
                <Route path="/TemplatesDownload" component={TemplatesDownload} />
            </Switch>
        </Router>
    }
}

export default App;