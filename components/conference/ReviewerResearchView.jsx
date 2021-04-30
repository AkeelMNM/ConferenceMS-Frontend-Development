import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'
import ReResearchListHolder from "./ReResearchListHolder";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

const ResearchPapers = [
    {
        authorName:'Name',
        paperTitle:'Paper Title',
        email:'123@gmail.com',
        date:'21-05-20201',
        file:'File',
    },{
        authorName:'Name2',
        paperTitle:'Paper Title2',
        email:'2123@gmail.com',
        date:'26-05-20201',
        file:'File2',
    }
]

class ReviewerResearchView extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div><label id={'RVHeadLine'} >Research Paper Submissions</label></div>
            <div>
                {
                    ResearchPapers.map(researchPaper =>{
                        return <ReResearchListHolder ResearchPaper={researchPaper}/>
                    })
                }
            </div>
        </div>
    }
}

export default ReviewerResearchView;