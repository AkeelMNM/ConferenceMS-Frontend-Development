import React from 'react';
import '../../styles/conference/ReserachWorkshopView.css'
import ResearchListHolder from "./ResearchViewListHolder";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

const Research = [
    {
    rsID:'ww',
    paperTitle:'paperTitle',
    authorName:'example',
    authorEmail:'123@gamil.com',
    subDate:'12-12-2121'
    },
    {
        rsID:'ww2',
        paperTitle:'paperTitle2',
        authorName:'example2',
        authorEmail:'123@gamil.com',
        subDate:'12-12-2111'
    }
]

class ResearchView extends React.Component{
    constructor(props) {
        super(props);

    }

    editSubmission(rsID){

    }

    render() {
        return <div>
            <div><label id={'VHeadLine'} >Research Paper Submissions</label></div>
            <div>
                {
                    Research.map(research => {
                        return <ResearchListHolder key={research.rsID} Research={research}
                                                   editSubmission={research => this.editSubmission(research.rsID) } />
                    })
                }
            </div>
        </div>
    }
}

export default ResearchView;