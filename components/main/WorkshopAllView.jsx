import React from 'react';
import WorkShopServices from "../../services/WorkShopServices";
import WorkshopAllViewListHolder from "./WorkshopAllViewListHolder";
import '../../styles/WebView.css';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


class WorkShopAllView extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            Workshops:[
                {
                    _id:'1',
                    workShopTitle:'New Improvements in JavaScript Language',
                    conductorNames:['Nimal','Kamal'],
                    affiliation:'SLIIT',
                    email:'Kamal@gmail.com',
                },
                {
                    _id:'2',
                    workShopTitle:'New Improvements in JavaScript Language2',
                    conductorNames:['Nimal2','Kamal2'],
                    affiliation:'SLIIT2',
                    email:'Kamal2@gmail.com',
                }
            ],
            WorkshopsCont:[
                {
                    _id:'C1',
                    workshopId:'1',
                    postedDate:'12-01-2021',
                    status:'Approved'
                },
                {
                    _id:'C2',
                    workshopId:'2',
                    postedDate:'14-02-2021',
                    status:'Rejected'
                }
            ],

            newWorkshops:[]
        }

    }

    /**
     * Mounting Workshop proposal submission of the relevant user to view
     */
    componentDidMount() {
        /**
         * Change the Parameter need to get the userID from Token
         */
       /* WorkShopServices.getWorkShopByUser("60b1345d1a66ed342a73681b")
            .then(workShop => {
                this.setState({Workshops:workShop})})
            .catch(err => console.error(err));*/
        this.filterDetails(this.state.Workshops,this.state.WorkshopsCont)
    }

    filterDetails(Workshops,workshopContent){
        let tempArray = [];
        workshopContent.map(workshopC => {
            if(workshopC.status === 'Approved'){
                Workshops.map(workshop =>{
                    if(workshopC.workshopId === workshop._id){
                        let NewWorkshop = {
                            _id:workshop._id,
                            workShopTitle:workshop.workShopTitle,
                            conductorNames:workshop.conductorNames,
                            affiliation:workshop.affiliation,
                            email:workshop.email,
                            postedDate:workshopC.postedDate
                        }
                        tempArray.push(NewWorkshop)
                    }
                })
            }
        })

        this.setState({newWorkshops:tempArray})
    }


    render() {
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>Workshop</label>
                </div>
            </div>
            <div>
                {
                    this.state.newWorkshops.map(workshop => {
                        console.log(workshop)
                        return <WorkshopAllViewListHolder key={workshop._id} Workshop={workshop}/>
                    })
                }
            </div>
        </div>
    }
}

export default WorkShopAllView;