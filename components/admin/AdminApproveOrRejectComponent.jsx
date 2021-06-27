import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";
import '/styles/admin/AdminApproval.css';


class AdminApproveOrRejectComponent extends Component {



    constructor(props){
        super(props)

        this.state={
            conferences:[]

        }


        this.deleteapproval = this.deleteapproval.bind(this);
        this.approveconference = this.approveconference.bind(this);
       /* this.rejectonference = this.rejectonference.bind(this);*/
        this.updateconferenceApproval = this.updateconferenceApproval.bind(this);


    }

    deleteapproval(id){
        ConferenceService.deleteconference(id).then( res => {
            this.setState({conferences: this.state.conferences.filter(conference => conference.id !== id)});
        });


    }

// Approval
    updateconferenceApproval(id){
        this.props.history.push(`/update-conferenceapproval/${id}`);
    }

   /* viewconference(id){
        this.props.history.push(`/view-conference/${id}`);
    }*/

   approveconference(id){
        this.props.history.push(`/Approve-conference/${id}`);
    }

    /*rejectonference(id){
        this.props.history.push(`/Reject-conference/${id}`);
    }*/
/////////////////////////////////////////
    approvalconference(conference){
        let id = conference._id;
        let approval = {aStatus:"Approved"}
        ConferenceService.ConferenceApproval(id,approval)
            .then(response =>{
                let conference = response;
                if(conference.status === "Approved"){
                    /**
                     * TODO:display the message appropriately
                     */
                    console.log("Approved")
                }else{
                    /**
                     * TODO:display the message appropriately
                     */
                    console.log("Something went wrong, try again!!")
                }
            })
    }


    rejectconference(conference){
        let id = conference._id;
        let approval = {aStatus:"Rejected"}
        ConferenceService.ConferenceApproval(id,approval)
            .then(response =>{
                let conference = response;
                if(conference.status === "Rejected"){
                    /**
                     * TODO:display the message appropriately
                     */
                    console.log("Rejected")
                }else{
                    /**
                     * TODO:display the message appropriately
                     */
                    console.log("Something went wrong, try again!!")
                }
            })
    }




// /////////////////////////////////////

    componentDidMount(){

        ConferenceService.getConference().then((res) =>{

            this.setState({conferences:res.data});
        });

    }





    render() {
        return (
            <div>
                <h2 className="text-center"> Admin View Conference List </h2>

                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th> Creator</th>
                            <th> Conference Title </th>
                            <th> Message</th>

                            <th> PostedDate</th>
                            <th> Status</th>
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
                                        <td> {conference.postedDate}</td>
                                        <td> {conference.status}</td>
                                        <td >
                                            {
                                                conference.status === 'Approved'?
                                                    (<span id={'stateS'}>States : Approved</span>)
                                                    :(
                                                        <div>
                                                            <button onClick={ () => this.updateconferenceApproval(conference.id)} className="btn btn-info">Approve/Reject </button>
                                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteapproval(conference.id)} className="btn btn-delete">Delete</button>
                                                        </div>
                                                    )
                                            }

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

export default AdminApproveOrRejectComponent;
