import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import Home from "./components/Home";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

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
            </Switch>
        </Router>
    }
}

export default App;