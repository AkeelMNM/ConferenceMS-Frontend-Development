import React from 'react';
import '../../styles/conference/ReserachWorkshopView.css'
import WorkshopViewListHolder from "./WorkshopViewListHolder";
import WorkShopServices from "../../services/WorkShopServices";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


class WorkShopView extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            Workshops:[]
        }

    }

    componentDidMount() {
        /**
         * Change the Parameter need to get the userID from Token
         */
        WorkShopServices.getWorkShopByUser("60b1345d1a66ed342a73681b")
            .then(workShop => {
                this.setState({Workshops:workShop})})
            .catch(err => console.error(err));
    }

    editSubmission(workshop){
        const id = workshop._id;
        this.props.history.push(`/updateWorkShop/${id}`);
    }

    render() {
        return <div>
            <div><label id={'VHeadLine'} >Workshop Submissions</label></div>
            <div>
                {
                    this.state.Workshops.map(workshop => {
                        return <WorkshopViewListHolder key={workshop._id} Workshop={workshop}
                                                       editSubmission={workshop => this.editSubmission(workshop)}/>
                    })
                }
            </div>
        </div>
    }
}

export default WorkShopView;