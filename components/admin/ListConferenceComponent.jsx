import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";
import '/styles/admin/Conference.css';


class ListConferenceComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            conferences:[]

        }
        this.createconference=this.createconference.bind(this);
        this.updateconference = this.updateconference.bind(this);
        this.deleteconference = this.deleteconference.bind(this);


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

        ConferenceService.getConference().then((res) =>{

            this.setState({conferences:res.data});
        });

    }

    createconference(){
        this.props.history.push('add-conference/_add');

    }



    render() {
        return (
            <div>
                <h2 className="text-center"> Conference List </h2>
                <div className= "row">
                    <button className="btn btn-primary" onClick={this.createconference}>Add Conference</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th> Creator</th>
                            <th> Conference Title </th>
                            <th> Message</th>
                            <th> Status</th>
                            <th> Conference Date & Time</th>
                            <th> Actions</th>
                        </tr>

                        </thead>

                        <tbody>
                        {
                            this.state.conferences.map(
                                conference =>
                                    <tr key={conference.id}>
                                        <td> {conference.creator}</td>
                                        <td> {conference.conference_title}</td>
                                        <td> {conference.message}</td>
                                        <td> {conference.status}</td>
                                        <td> {conference.postedDate}</td>

                                        <td>
                                            <button onClick={ () => this.updateconference(conference.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteconference(conference.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewconference(conference.id)} className="btn btn-info">View </button>
                                        </td>

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

export default ListConferenceComponent;
