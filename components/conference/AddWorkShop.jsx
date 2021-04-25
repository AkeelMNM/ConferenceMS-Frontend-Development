import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/Res&Work.css'

class AddWorkShop extends React.Component{
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
            <div><label id={'CHeadLine'} >New Workshop Submission</label></div>
            <div className={'form-style-resWork'}>
                <form>
                    <div>
                        <label htmlFor={'workshopTitle'}>WorkShop Title</label>
                        <input type={'text'} name={'workshopTitle'} id={'workshopTitle'} value={this.state.workshopTitle}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'presenterName'}>Presenter Name</label>
                        <input type={'text'} name={'presenterName'} id={'presenterName'} value={this.state.presenterName}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'affiliation'}>Affiliation</label>
                        <input type={'text'} name={'affiliation'} id={'affiliation'} placeholder={'Ex:University Name'} value={this.state.email}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'contactNo'}>Contact Number</label>
                        <input type={'text'} name={'contactNo'} id={'contactNo'} value={this.state.contactNo}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'postingDate'}>Posting Date</label>
                        <input type={'date'} name={'postingDate'} id={'postingDate'} value={this.state.postingDate}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'file'}>Upload Workshop Proposal Document</label>
                        <input type={'file'} name={'file'} id={'file'} value={this.state.file}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <div id={'checkB'}><input type={'checkbox'}/><span>By clicking this checkbox i agree i'm posting my own works</span></div>
                        <input type={'button'} value={'Add Workshop'} />
                    </div>
                </form>
            </div>
        </div>
    };
}

export default AddWorkShop;