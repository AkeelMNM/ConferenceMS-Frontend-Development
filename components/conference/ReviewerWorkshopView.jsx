import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'
import ReviewerWorkshopListHolder from "./ReviewerWorkshopListHolder";
import WorkShopServices from "../../services/WorkShopServices";
import {toast} from "react-toastify";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

/* configuring options to display toast message */
const options = {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar:true,
    autoClose:6000,
    closeButton:false,
    className:'Toastify__toast-containerBig'
}

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
        let id = research._id;
        let approval = {aStatus:"Approved"}
        WorkShopServices.workShopApproval(id,approval)
            .then(response =>{
                let researchPaper = response;
                if(researchPaper.submissionStatus === "Approved"){
                    toast.success(`${workshop.workShopTitle} workshop proposal is Approved`,options)
                }else{
                    toast.error(`Something went wrong, try again!!`,options)
                }
            })
    }

    /**
     * this method is to handle if the Reviewer reject Workshop proposal
     */
    rejectWorkshop(workshop){
        let id = research._id;
        let approval = {aStatus:"Rejected"}
        WorkShopServices.workShopApproval(id,approval)
            .then(response =>{
                let researchPaper = response;
                if(researchPaper.submissionStatus === "Rejected"){
                    /**
                     * TODO:display the message appropriately
                     */
                    console.log("Rejected")
                }else{
                    /**
                     * TODO:display the message appropriately
                     */
                    console.log("Something went wrong, try again!!")
                }
            })
    }

    render() {
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>All Proposed Workshops</label>
                </div>
            </div>
            <div>
                {
                    this.state.Workshops.map(workshop => {
                        return <ReviewerWorkshopListHolder key={workshop._id} Workshop={workshop}
                                                           approveWorkshop={workshop => this.approveWorkshop(workshop)}
                                                           rejectWorkshop={workshop => this.rejectWorkshop(workshop)}/>
                    })
                }
            </div>
        </div>
    }
}

export default ReviewerWorkshopView;