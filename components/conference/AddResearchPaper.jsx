import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/Res&Work.css';
import '../../styles/conference/toast.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import ResearchPaperService from "../../services/ResearchPaperServices";
toast.configure();

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class AddResearchPaper extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            authorName:'',
            paperTitle:'',
            email:'',
            file:'',
        }
    }

    submitResearchPaper(event){
        event.preventDefault();

        let researchPaper = {
            userID:'123456',
            authorName:this.state.authorName,
            paperTitle:this.state.paperTitle,
            email:this.state.email,
            researchPFileLocation:''
        }

        /* configuring options to display toast message */
        const options = {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar:true,
            autoClose:3000,
            closeButton:false
        }
        /**
         * Validating the Research Paper submission input fields
         * Displaying Error message if any input field is empty
         */
        if(researchPaper.authorName === ''){
            toast.warning("Fill the Author Name", options)
        }else if (researchPaper.paperTitle === ''){
            toast.warning("Fill Paper Title", options)
        }else if (researchPaper.email === ''){
            toast.warning("Fill Email Address", options)
        }/*else if (researchPaper.researchPFileLocation === ''){
            toast.warning("Attach the Research Paper", options)
        }*/else{
            console.log(JSON.stringify(researchPaper));
            ResearchPaperService.submitResearchPaper(researchPaper)
                .then(res => {
                    if(res.status === 200){
                        toast.success("Research Paper Submitted Successfully",options)
                    }else{
                        toast.error("Something went wrong!!,Try again.",options)
                    }
                })
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }
    render() {
        return <div>
            <div><label id={'CHeadLine'} >New Research Paper Submission</label></div>
            <div className={'form-style-resWork'}>
                <form>
                    <div>
                        <label htmlFor={'authorName'}>Author Name</label>
                        <input type={'text'} name={'authorName'} id={'authorName'} value={this.state.authorName}
                                required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'paperTitle'}>Paper Title</label>
                        <input type={'text'} name={'paperTitle'} id={'paperTitle'} value={this.state.paperTitle}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'email'}>Author Email</label>
                        <input type={'text'} name={'email'} id={'email'} value={this.state.email}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'file'}>Upload Research Paper</label>
                        <input type={'file'} name={'file'} id={'file'} value={this.state.file}
                                onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <div id={'checkB'}><input type={'checkbox'}/><span>By clicking this checkbox i agree i'm posting my own research works</span></div>
                        <input type={'submit'} value={'Add Research Paper'} onClick={ event => this.submitResearchPaper(event)} />
                    </div>
                </form>
            </div>
        </div>
    };
}

export default AddResearchPaper;