import React, { Component } from 'react';
import ConferenceService from "../../Services/ConferenceService";


class CreateConferenceComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            creator:'',
            conference_title:'',
            message:'',
            status:'',
            postedDate:''

        }

        this.changecreatorHandler = this.changecreatorHandler.bind(this);
        this.changeconference_titleHandler = this.changeconference_titleHandler.bind(this);
        this.changemessageHandler = this.changemessageHandler.bind(this);
        this.changestatusHandler = this.changestatusHandler.bind(this);
        this.changepostedDateHandler = this.changepostedDateHandler.bind(this);
        this.saveConference = this.saveConference.bind(this);


    }

    //step 3
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            ConferenceService.getconferenceById(this.state.id).then( (res) =>{
                let conference = res.data;
                this.setState({creator: conference.creator,
                    conference_title: conference.conference_title,
                    message : conference.message,
                    status: conference.status,
                    postedDate : conference.postedDate

                });
            });
        }
    }


    saveConference =(e)=>{

        e.preventDefault();
        let conference ={creator: this.state.creator,conference_title: this.state.conference_title,message: this.state.message,status: this.state.status,postedDate: this.state.postedDate};
        console.log('conference => '+JSON.stringify(conference));
        //step5
        if(this.state.id === '_add'){
            ConferenceService.createconference(conference).then(res =>{
                this.props.history.push('/');
            });
        }else{
            ConferenceService.updateconference(conference, this.state.id).then( res => {
                this.props.history.push('/conference');

            });
        }

    }

    changecreatorHandler= (event) =>{
        this.setState({creator: event.target.value});
    }
    changeconference_titleHandler= (event) =>{
        this.setState({conference_title: event.target.value});
    }
    changemessageHandler= (event) =>{
        this.setState({message: event.target.value});
    }
    changestatusHandler= (event)  =>{
        this.setState({status: event.target.value});
    }
    changepostedDateHandler= (event) =>{
        this.setState({postedDate: event.target.value});
    }

    cancel(){
        this.props.history.push('/conferences');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Conference</h3>
        }else{
            return <h3 className="text-center">Update Conference</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row" >
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }


                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Creator's  Name :</label>
                                        <input placeholder="creator" name="creator" className="form-control"
                                               value={this.state.creator} onChange ={this.changecreatorHandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label> Conference Title:</label>
                                        <input placeholder="conference_title" name="conference_title" className="form-control"
                                               value={this.state.conference_title} onChange ={this.changeconference_titleHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Message :</label>
                                        <input placeholder="message" name="message" className="form-control"
                                               value={this.state.message} onChange ={this.changemessageHandler}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Status :</label>
                                        <input placeholder="status" name="status" className="form-control"
                                               value={this.state.status} onChange ={this.changestatusHandler}/>

                                    </div>

                                    <div className="form-group">
                                        <label>Posted Date :</label>
                                        <input type="date" placeholder="postedDate" name="postedDate" className="form-control"
                                               value={this.state.postedDate} onChange ={this.changepostedDateHandler}/>

                                    </div>




                                    <button className="btn btn-success" onClick={this.saveConference}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>


                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CreateConferenceComponent;