import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'
import ReviewerWorkshopListHolder from "./ReviewerWorkshopListHolder";
import WorkShopServices from "../../services/WorkShopServices";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class ReviewerWorkshopView extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            Workshops:[]
        }
    }

    /**
     * Mounting All Workshop proposal submission details to view
     */
    componentDidMount() {
        WorkShopServices.getWorkShop()
            .then(workShop => {
                this.setState({Workshops:workShop})})
            .catch(err => console.error(err));
    }

    /**
     * this method is to handle if the Reviewer approve Workshop proposal
     */
    approveWorkshop(workshop){

    }

    /**
     * this method is to handle if the Reviewer want to view Workshop proposal
     */
    viewWorkshop(workshop){

    }

    /**
     * this method is to handle if the Reviewer reject Workshop proposal
     */
    rejectWorkshop(workshop){

    }

    render() {
        return <div>
            <div><label id={'RVHeadLine'} >All Proposed Workshops</label></div>
            <div>
                {
                    this.state.Workshops.map(workshop => {
                        return <ReviewerWorkshopListHolder key={workshop._id} Workshop={workshop}
                                                           approveWorkshop={workshop => this.approveWorkshop(workshop)}
                                                           rejectWorkshop={workshop => this.rejectWorkshop(workshop)}
                                                           viewWorkshop={workshop => this.viewWorkshop(workshop)}/>
                    })
                }
            </div>
        </div>
    }
}

export default ReviewerWorkshopView;