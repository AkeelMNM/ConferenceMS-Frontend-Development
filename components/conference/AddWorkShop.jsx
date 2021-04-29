import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/Res&Work.css'
import {toast} from "react-toastify";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class AddWorkShop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            presenterName:'',
            workshopTitle:'',
            email:'',
            affiliation:'',
            contactNo:'',
            postingDate:'',
            file:''
        }
    }

    submitWorkShop(event){
        event.preventDefault();

        let WorkShop = {
            presenterName:this.state.presenterName,
            workshopTitle:this.state.workshopTitle,
            email:this.state.email,
            affiliation:this.state.affiliation,
            contactNo:this.state.contactNo,
            postingDate:this.state.postingDate,
            file:''
        }

        /* configuring options to display toast message */
        const options = {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar:true,
            autoClose:3000,
            closeButton:false
        }
        /**
         * Validating the Workshop submission input fields
         * Displaying Error message if any input field is empty
         */
        if(WorkShop.workshopTitle === ''){
            toast.error("Fill Workshop Title", options);
        }else if(WorkShop.presenterName === ''){
            toast.error("Fill Presenter Name",options )
        }else if (WorkShop.email === ''){
            toast.error("Fill Email Address", options)
        }else if (WorkShop.affiliation === ''){
            toast.error("Add Affiliation", options)
        }else if (WorkShop.contactNo === ''){
            toast.error("Add Contact Number", options)
        }else if (WorkShop.postingDate === ''){
            toast.error("Add Submission Date", options)
        }else if (WorkShop.file === ''){
            toast.error("Attach Proposal Document", options)
        }else{
            console.log(JSON.stringify(WorkShop));
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
                               required={'required'} onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'presenterName'}>Presenter Name</label>
                        <input type={'text'} name={'presenterName'} id={'presenterName'} value={this.state.presenterName}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'affiliation'}>Affiliation</label>
                        <input type={'text'} name={'affiliation'} id={'affiliation'} placeholder={'Ex : University Name'} value={this.state.affiliation}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'contactNo'}>Contact Number</label>
                        <input type={'text'} name={'contactNo'} id={'contactNo'} value={this.state.contactNo}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'postingDate'}>Posting Date</label>
                        <input type={'date'} name={'postingDate'} id={'postingDate'} value={this.state.postingDate}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'file'}>Upload Workshop Proposal Document</label>
                        <input type={'file'} name={'file'} id={'file'} value={this.state.file}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <div id={'checkB'}><input type={'checkbox'}/><span>By clicking this checkbox i agree i'm posting my own works</span></div>
                        <input type={'submit'} value={'Add Workshop'} onClick={event => this.submitWorkShop(event)} />
                    </div>
                </form>
            </div>
        </div>
    };
}

export default AddWorkShop;