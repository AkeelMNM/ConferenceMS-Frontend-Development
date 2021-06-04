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

    componentDidMount() {
        WorkShopServices.getWorkShop()
            .then(workShop => {
                this.setState({Workshops:workShop})})
            .catch(err => console.error(err));
    }

    render() {
        return <div>
            <div><label id={'RVHeadLine'} >All Proposed Workshops</label></div>
            <div>
                {
                    this.state.Workshops.map(workshop => {
                        return <ReviewerWorkshopListHolder key={workshop._id} Workshop={workshop} />
                    })
                }
            </div>
        </div>
    }
}

export default ReviewerWorkshopView;