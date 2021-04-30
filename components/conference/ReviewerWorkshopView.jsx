import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'
import WorkshopListHolder from "./WorkshopListHolder";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

const Workshop = [
    {
        presenterName:'Name',
        workshopTitle:'Work Title',
        email:'123@gmail.com',
        affiliation:'SLIIT',
        contactNo:'077854785',
        postingDate:'25-01-2021',
        file:'File'
    },
    {
        presenterName:'Name2',
        workshopTitle:'Work Title2',
        email:'54123@gmail.com',
        affiliation:'Peradeniya',
        contactNo:'077854785',
        postingDate:'28-07-2021',
        file:'File2'
    }
]

class ReviewerWorkshopView extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div><label id={'RVHeadLine'} >All Proposed Workshops</label></div>
            <div>
                {
                    Workshop.map(workshop => {
                        return <WorkshopListHolder Workshop={workshop} />
                    })
                }
            </div>
        </div>
    }
}

export default ReviewerWorkshopView;