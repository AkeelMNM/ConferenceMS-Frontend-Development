import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'
import ReviewerResearchListHolder from "./ReviewerResearchListHolder";
import ResearchPaperServices from "../../services/ResearchPaperServices";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class ReviewerResearchView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            researchPapers:[]
        }
    }

    /**
     * Mounting All Research paper submission details to view
     */
    componentDidMount() {
        ResearchPaperServices.getResearchPaper()
            .then(researchPaper => {
                this.setState({researchPapers:researchPaper})})
            .catch(err => console.error(err));
    }

    /**
     * this method is to handle if the Reviewer approve Research paper submission
     */
    approvePaper(research){
        let id = research._id;
        let approval = {aStatus:"Approved"}
        ResearchPaperServices.researchPaperApproval(id,approval)
            .then(response =>{
                let researchPaper = response;
                if(researchPaper.submissionStatus === "Approved"){
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

    /**
     * this method is to handle if the Reviewer want to view Research paper submission
     */
    viewPaper(research){

    }

    /**
     * this method is to handle if the Reviewer reject Research paper submission
     */
    rejectPaper(research){
        let id = research._id;
        let approval = {aStatus:"Rejected"}
        ResearchPaperServices.researchPaperApproval(id,approval)
            .then(response =>{
                let researchPaper = response;
                if(researchPaper.submissionStatus === "Rejected"){
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

    render() {
        return <div>
            <div><label id={'RVHeadLine'} >Research Paper Submissions</label></div>
            <div>
                {
                    this.state.researchPapers.map(researchPaper =>{
                        return <ReviewerResearchListHolder key={researchPaper._id} ResearchPaper={researchPaper}
                                                           approvePaper={researchPaper => this.approvePaper(researchPaper)}
                                                           rejectPaper={researchPaper => this.rejectPaper(researchPaper)}
                                                           viewPaper={researchPaper => this.viewPaper(researchPaper)}/>
                    })
                }
            </div>
        </div>
    }
}

export default ReviewerResearchView;