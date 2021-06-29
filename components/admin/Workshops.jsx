import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";
import '/styles/admin/Conference.css';
/*
*  IT 19167442
*  Author Nusky M.A.M
* */

class Workshops extends Component {

    constructor(props){
        super(props)

        this.state={
            workshops:[
                {
                    _id:"123",
                   proposalStatus:"Approved",
                    presenterName:" Mr.Kushira",
                    workShopTitle :"AF Conference"


                }



            ],
            conferences:[]


        }
        this.createconferencecontent=this.createconferencecontent.bind(this);
        this.updateconference = this.updateconference.bind(this);
        this.deleteconference = this.deleteconference.bind(this);
        this.approveconference=this.approveconference.bind(this);
        this.displayconference=this.displayconference.bind(this);


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

    createconferencecontent(workshop){
        console.log(workshop);
        this.props.history.push(`/add-conference/${workshop._id}/${workshop.presenterName}/${workshop.workShopTitle}`);


    }
    //Admin
    approveconference(){
        this.props.history.push('approve-conference/_add');

    }

    displayconference(){
        this.props.history.push('display-conference/_add');

    }


    render() {
        return (
            <div>
                <h2 className="text-center"> Conference Content  List </h2>
                <div className= "row">

                </div>
                <br></br>
                <div className="row">

                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th> Creator</th>
                            <th> Conference Title </th>

                        </tr>

                        </thead>

                        <tbody>
                        {
                            this.state.workshops.map(

                                workshop =>
                                    workshop.proposalStatus === 'Approved' ?(
                                        <tr>
                                        <td>   {workshop.presenterName} </td>
                                        <td> {workshop.workShopTitle}</td>

                                            <td>
                                                <button onClick={ () => this.createconferencecontent(workshop)} className="btn btn-info">Create Conference Content </button>

                                            </td>
                                        </tr>
                                        ):( <> </>)




                            )

                        }

                        </tbody>

                    </table >

                </div>
            </div>
        )
    }
}

export default Workshops;
