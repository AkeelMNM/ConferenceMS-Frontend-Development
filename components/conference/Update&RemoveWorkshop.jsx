import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/upRemRes&Work.css'

class UpdateRemoveWorkshop extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            presenterName:'',
            workshopTitle:'',
            email:'',
            affiliation:'',
            contactNo:'',
            postingDate:'',
            file:''
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }
    render() {
        return <div>
            <div><label id={'UPHeadLine'} >Update or Remove Workshop Submission</label></div>
            <div className={'form-style-upRemResWork'}>
                <form>
                    <div>
                        <label htmlFor={'workshopTitle'}>New WorkShop Title</label>
                        <input type={'text'} name={'workshopTitle'} id={'workshopTitle'} value={this.state.workshopTitle}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'presenterName'}>Presenter Name</label>
                        <input type={'text'} name={'presenterName'} id={'presenterName'} value={this.state.presenterName}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'affiliation'}>New Affiliation</label>
                        <input type={'text'} name={'affiliation'} id={'affiliation'} placeholder={'Ex:University Name'} value={this.state.email}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'contactNo'}>New Contact Number</label>
                        <input type={'text'} name={'contactNo'} id={'contactNo'} value={this.state.contactNo}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'postingDate'}>New Posting Date</label>
                        <input type={'date'} name={'postingDate'} id={'postingDate'} value={this.state.postingDate}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'file'}>Re-upload Workshop Proposal Document</label>
                        <input type={'file'} name={'file'} id={'file'} value={this.state.file}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <div id={'checkB'}><input type={'checkbox'}/><span>By clicking this checkbox i agree i'm posting my own works</span></div>
                        <div id={'btnDiv'}>
                            <input type={'button'} value={'Update Workshop Details'} />
                            <input type={'button'} id={'btnDelete'} value={'Remove Workshop Details'} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    };
}

export default UpdateRemoveWorkshop;