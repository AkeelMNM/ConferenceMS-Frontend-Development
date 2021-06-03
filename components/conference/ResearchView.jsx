import React from 'react';
import '../../styles/conference/ReserachWorkshopView.css'
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

    componentDidMount() {
        ResearchPaperServices.getResearchPaper("60b134021a66ed342a73681a")
            .then(researchPaper => {
                this.setState({researchPapers:researchPaper})})
            .catch(err => console.error(err));

    }

    editSubmission(research){
       const id = research._id;
       this.props.history.push(`/updateResearchPaper/${id}`);
    }

    render() {
        return <div>
            <div><label id={'VHeadLine'} >Research Paper Submissions</label></div>
            <div>
                {
                    this.state.researchPapers.map(research => {
                        return <ResearchListHolder key={research._id} Research={research}
                                                   editSubmission={research => this.editSubmission(research) } />
                    })
                }
            </div>
        </div>
    }
}

export default ResearchView;