import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/Res&Work.css'
import {toast} from "react-toastify";
import WorkShopServices from "../../services/WorkShopServices";
import FileUploadService from "../../services/FileUploadService";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

/* configuring options to display toast message */
const options = {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar:true,
    autoClose:3000,
    closeButton:false
}

class AddWorkShop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            presenterName:'',
            workShopTitle:'',
            email:'',
            affiliation:'',
            contactNo:'',
            file:[],

            agreement:false
        }
    }

    /**
     * This function is to submit Workshop proposal
     */
    submitWorkShop(event){
        event.preventDefault();

        let WorkShop = {
            presenterName:this.state.presenterName,
            workShopTitle:this.state.workShopTitle,
            email:this.state.email,
            affiliation:this.state.affiliation,
            contactNo:this.state.contactNo,
            file:''
        }

        /**
         * Validating the Workshop submission input fields
         * Displaying Error message if any input field is empty
         */
        if(WorkShop.workShopTitle === ''){
            toast.warning("Fill Workshop Title", options);
        }else if(WorkShop.presenterName === ''){
            toast.warning("Fill Presenter Name",options )
        }else if (WorkShop.email === ''){
            toast.warning("Fill Email Address", options)
        }else if (WorkShop.affiliation === ''){
            toast.warning("Add Affiliation", options)
        }else if (WorkShop.contactNo === ''){
            toast.warning("Add Contact Number", options)
        }else if (this.state.file.length === 0){
            toast.warning("Attach Proposal Document", options)
        }else if (this.state.agreement === false){
            toast.warning("Please Agree to Terms&Conditions.", options)
        }else{
            FileUploadService.FileUploads(this.state.file)
                .then(response =>{
                    WorkShop.file = response.url
                    WorkShopServices.submitWorkShop(WorkShop)
                        .then(res => {
                            if(res.status === 200){
                                toast.success("Workshop Proposal Submitted Successfully",options)
                            }else{
                                toast.error("Something went wrong!! Try again.",options)
                            }
                    })
                })

        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    handleFileInput(event){
        const file = event.target.files;
        this.setState({ file :file[0]});
    }

    handleCheckBox(){
        if(this.state.agreement === false){
            this.setState({agreement:true})
        }else{
            this.setState({agreement:false})
        }
    }

    render() {
        return <div>
            <div><label id={'CHeadLine'} >New Workshop Submission</label></div>
            <div className={'form-style-resWork'}>
                <form>
                    <div>
                        <label htmlFor={'workShopTitle'}>WorkShop Title</label>
                        <input type={'text'} name={'workShopTitle'} id={'workShopTitle'} value={this.state.workShopTitle}
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
                        <label htmlFor={'file'}>Upload Workshop Proposal Document</label>
                        <input type={'file'} name={'file'} id={'file'}
                               onChange={event => this.handleFileInput(event)} />
                    </div>
                    <div>
                        <div id={'checkB'}>
                            <input type={'checkbox'} type={'checkbox'} name={'agreement'} value={true} onChange={() => this.handleCheckBox()}/>
                            <span>By clicking this checkbox i agree i'm posting my own works</span>
                        </div>
                        <input type={'submit'} value={'Add Workshop'} onClick={event => this.submitWorkShop(event)} />
                    </div>
                </form>
            </div>
        </div>
    };
}

export default AddWorkShop;