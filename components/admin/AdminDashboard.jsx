import React, { Component } from 'react'
import '/styles/admin/AdminDashboard.css';

/*
*  IT 19167442
*  Author Nusky M.A.M
* */
export default class AdminDashboard extends Component {

    constructor(props){
        super(props)

        this.state={
            conferences:[]

        }

        this.go=this.go.bind(this);


    }
    go(){
        this.props.history.push('go/');

    }
    render() {
        return (<div>
                    <div className="nav-btn">Menu</div>
                    <div className="admin-container">

                        <div className="sidebar">
                            <div className="navDiv">
                                <a className="aDLink" href="#"><span id="dashName">ICAF 2021</span></a>
                                <ul id="dashUl">
                                    <li className="dashLi active"><a className="aDLink" href="#">Dashboard</a></li>
                                    <li className="dashLi"><a className="aDLink" href="#">Followers</a></li>
                                    <li className="dashLi"><a className="aDLink" href="#">About</a></li>
                                    <li className="dashLi"><a className="aDLink" href="#">Social</a></li>
                                    <li className="dashLi"><a className="aDLink" href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



        )

    }
}