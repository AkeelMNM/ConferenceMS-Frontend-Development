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

    componentDidMount() {
        ResearchPaperServices.getResearchPaper()
            .then(researchPaper => {
                this.setState({researchPapers:researchPaper})})
            .catch(err => console.error(err));
    }

    render() {
        return <div>
            <div><label id={'RVHeadLine'} >Research Paper Submissions</label></div>
            <div>
                {
                    this.state.researchPapers.map(researchPaper =>{
                        return <ReviewerResearchListHolder key={researchPaper._id} ResearchPaper={researchPaper}/>
                    })
                }
            </div>
        </div>
    }
}

export default ReviewerResearchView;