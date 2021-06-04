import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/upRemRes&Work.css'
import {toast} from "react-toastify";
import ResearchPaperServices from "../../services/ResearchPaperServices";
import ResearchPaperService from "../../services/ResearchPaperServices";

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

class UpdateRemoveResearchPaper extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            subID:this.props.match.params.id,
            authorName:'',
            paperTitle:'',
            email:'',
            file:''
        }
    }

    componentDidMount() {
        console.log(this.state.subID)
        ResearchPaperServices.getResearchPaperByID(this.state.subID)
            .then(res => {
                console.log(res)
                this.setState({
                    authorName:res.authorName,
                    paperTitle:res.paperTitle,
                    email:res.email,
                })
            })
            .catch(err => console.error(err));
    }

    /**
     *  This method is to update Research Paper Submission
     */
    updateResearchPaper(event){
        event.preventDefault();

        let researchPaper = {
            authorName:this.state.authorName,
            paperTitle:this.state.paperTitle,
            email:this.state.email,
            file:''
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
        }else if (researchPaper.file === ''){
            toast.warning("Attach the Research Paper", options)
        }else{
            console.log(JSON.stringify(researchPaper));
            ResearchPaperService.updateResearchPaper(researchPaper)
                .then(res => {
                    if(res.status === 200){
                        toast.success("Research Paper Submission Updated Successfully",options)
                    }else{
                        toast.error("Something went wrong!!,Try again.",options)
                    }
                })
        }
    }

    removeResearchPaper(event){
        event.preventDefault()
        ResearchPaperService.removeResearchPaper(this.state.subID)
            .then(res => {
                if(res.status === 200){
                    toast.error("Research Paper Submission Removed",options)
                    this.props.history.push("/");
                }else{
                    toast.warning("Something went wrong!!,Try again.",options)
                }
            })
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div>
            <div><label id={'UPHeadLine'} >Update or Remove Research Paper Submission</label></div>
            <div className={'form-style-upRemResWork'}>
                <form>
                    <div>
                        <label htmlFor={'authorName'}>Author Name</label>
                        <input type={'text'} name={'authorName'} id={'authorName'} value={this.state.authorName}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'paperTitle'}>New Paper Title</label>
                        <input type={'text'} name={'paperTitle'} id={'paperTitle'} value={this.state.paperTitle}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'email'}>New Author Email</label>
                        <input type={'text'} name={'email'} id={'email'} value={this.state.email}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'file'}>Re-upload Research Paper</label>
                        <input type={'file'} name={'file'} id={'file'} value={this.state.file}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <div id={'checkB'}><input type={'checkbox'}/><span>By clicking this checkbox i agree i'm posting my own research works</span></div>
                        <div id={'btnDiv'}>
                            <input type={'submit'} value={'Update Paper Submission'} onClick={event => this.updateResearchPaper(event)} />
                            <input type={'submit'} id={'btnDelete'} value={'Remove Paper Submission'}
                                   onClick={event => this.removeResearchPaper(event)} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    };
}

export default UpdateRemoveResearchPaper;