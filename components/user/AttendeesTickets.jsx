import React, {Component} from 'react';
import '../../styles/user/AttendeesTickets.css';
import AttendeesServices from "../../services/AttendeesServices";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class AttendeesTickets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            payment:'',
            payDate:'',
            tickets:[]
        }
    }

    /**
     * Mounting user details proposal submission of the relevant user to view
     */
    componentDidMount() {
        AttendeesServices.getTicketsByUserId('60db36dcf7520c0da8590d81')
            .then(res => {
                console.log('res',res);
                this.setState({tickets: res})
            }).catch(err => console.error(err));
        console.log("Data", this.tickets);
    }

    render() {
        return (
            <div className={"Tickets-section"}>
                <div className={"Tickets-container"}>

                    <div className={"Tickets-row"}>
                        <div className={"section-title"}>
                            <h2>Conference Tickets</h2>
                        </div>
                    </div>

                    <div className={"Tickets-row"}>
                        <div className={"Tickets-item"}>
                            <div className={"Tickets-item-inner outer-shadow-Tickets"}>
                                <h3> Hello</h3>
                            </div>
                        </div>
                        <div className={"Tickets-item"}>
                            <div className={"Tickets-item-inner outer-shadow-Tickets"}>
                                <h3> Hello</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AttendeesTickets;