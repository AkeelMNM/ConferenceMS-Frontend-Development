import React from 'react';
import '../../styles/conference/ReserachWorkshopView.css'
import WorkshopViewListHolder from "./WorkshopViewListHolder";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

const Workshop = [
    {
        wsID:'ws1',
        workshopTitle:'Workshop Title',
        presenterName:'Name',
        email:'123@gmail.com',
        affiliation:'UOM',
        contactNo:'123456789',
        postingDate:'12-12-2021',
        file:''

    },
    {
        wsID:'ws2',
        workshopTitle:'Workshop Title2',
        presenterName:'Name2',
        email:'123@gmail.com',
        affiliation:'UOP',
        contactNo:'123456789',
        postingDate:'12-11-2021',
        file:''

    }
]

class WorkShopView extends React.Component{
    constructor(props) {
        super(props);

    }

    editSubmission(wsID){

    }

    render() {
        return <div>
            <div><label id={'VHeadLine'} >Workshop Submissions</label></div>
            <div>
                {
                    Workshop.map(workshop => {
                        return <WorkshopViewListHolder key={workshop.wsID} Workshop={workshop}
                                                       editSubmission={workshop => this.editSubmission(workshop.wsID)}/>
                    })
                }
            </div>
        </div>
    }
}

export default WorkShopView;