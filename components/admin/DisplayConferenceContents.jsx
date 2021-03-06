import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";
import '/styles/admin/Conference.css';
/*
*  IT 19167442
*  Author Nusky M.A.M
* */

class DisplayConferenceContents extends Component {

    constructor(props){
        super(props)

        this.state={
            conferences:[]

        }
        this.createconference=this.createconference.bind(this);
        this.updateconference = this.updateconference.bind(this);
        this.deleteconference = this.deleteconference.bind(this);
        this.approveconference=this.approveconference.bind(this);


    }

    deleteconference(id){
        ConferenceService.deleteconference(id).then( res => {
            this.setState({conferences: this.state.conferences.filter(conference => conference.id !== id)});
        });


    }

    viewconference(id){
        this.props.history.push(`/view-conference/${id}`);
    }

    updateconference(id){
        this.props.history.push(`/update-conference/${id}`);
    }


    componentDidMount(){
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'Editor'){
            this.props.history.push('/');
        }else {
            ConferenceService.getConference().then((res) => {

                this.setState({conferences: res});
            });
        }
    }

    createconference(){
        this.props.history.push('add-conference/_add');

    }
    //Admin
    approveconference(){
        this.props.history.push('approve-conference/_add');

    }
    logout(event){
        localStorage.clear();
        this.props.history.push('/');

    }

    render() {
        return (

            <div>
                {
                    localStorage.getItem('type')==='Editor' ?
                        (<></>)
                        :(
                            <div className="sidebar">
                                <div className="navDiv">
                                    <a className="aDLink" href="#"><span id="dashName">ICAF 2021</span></a>
                                    <ul id="dashUl">
                                        <li className="dashLi"><a className="aDLink" href="/adminDashboard/">Dashboard</a></li>
                                        <li className="dashLi"><a className="aDLink" href="/adminCreateUser">Create User</a></li>
                                        <li className="dashLi"><a className="aDLink" href="/approve-conference/:id">View Requests</a></li>
                                        <li className="dashLi"><a className="aDLink" href="/adminViewUser">View Users</a></li>
                                        <li className="dashLi"><a className="aDLink" href="/display-conference/:id">View Conference Contents</a></li>
                                        <li className="dashLi"><a className="aDLink" href="/userProfile"> Admin Profile </a></li>
                                    </ul>
                                </div>
                                <button id={'logOutAdmin'} onClick={event => this.logout(event)}>Log out</button>
                            </div>
                        )
                }

                <h2 className="text-center"> Active Conference Contents</h2>
                <div className= "row">


                </div>
                <br></br>
                <div className="row">

                    <table className="table table-striped table-bordered">

                        <tbody>

                        {
                            this.state.conferences.map(
                                conference =>
                                    <tr key={conference.id}>
                                        <br></br>

                                        <div><label>Creator : </label>{conference.creator} </div>

                                        <div>  <label>Conference Title : </label>{conference.conference_title} </div>

                                        <div> <label>Message :</label> {conference.message} </div>

                                        <div><label>Conference Date & Time : </label> {conference.postedDate} </div>

                                        <div>

                                            <br></br>
                                            <button style={{marginLeft: "280px"}} onClick={ () => this.viewconference(conference.id)} className="btn btn-info">View </button>
                                            <br></br>
                                        </div>

                                    </tr>
                            )

                        }

                        </tbody>

                    </table >

                </div>
            </div>
        )
    }
}
export default DisplayConferenceContents;