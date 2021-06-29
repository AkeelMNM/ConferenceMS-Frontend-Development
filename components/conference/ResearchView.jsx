import React from 'react';
import '../../styles/conference/ResearchWorkshopView.css'
import ResearchListHolder from "./ResearchViewListHolder";
import ResearchPaperServices from "../../services/ResearchPaperServices";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


class ResearchView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            researchPapers:[]
        }
    }

    /**
     * Mounting Research paper submission of the relevant user to view
     */
    componentDidMount() {
        /**
         * Change the Parameter need to get the userID from Token
         */
        ResearchPaperServices.getResearchPaperByUser("123456")
            .then(researchPaper => {
                this.setState({researchPapers:researchPaper})})
            .catch(err => console.error(err));
    }

    /**
     * this method is to redirect to the update page for edit Research paper submission
     */
    editSubmission(research){
       const id = research._id;
       this.props.history.push(`/updateResearchPaper/${id}`);
    }

    render() {
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>Research Paper Submissions</label>
                </div>
            </div>
            <div>
                {
                    this.state.researchPapers.map(research => {
                        return <ResearchListHolder key={research._id} Research={research}
                                                   editSubmission={research => this.editSubmission(research) } />
                    })
                }
            </div>
            <div style={{height:'30px'}}></div>
        </div>
    }
}

export default ResearchView;