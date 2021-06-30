import React, {Component} from 'react';
import '../../styles/user/Payment.css';
import {toast} from "react-toastify";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class ResearchersPayment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            payment:'',
            payDate:''
        }
    }

    /**
     * This function is to submit Researcher Payment proposal
     */
    ResearcherPay(event){
        event.preventDefault();

        let Payment = {
            name:this.state.name,
            payment:this.state.payment
        }

        /* configuring options to display toast message */
        const options = {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar:true,
            autoClose:3000,
            closeButton:false
        }

        /**
         * Validating the login account submission input fields
         * Displaying Error message if any input field is empty
         */
        if(Payment.name === ''){
            toast.warning("File Name.", options);
        }else if(Payment.payment === ''){
            toast.warning("File Amount.", options);
        }else {
            console.log(JSON.stringify(Payment));

        }

    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div className={'big-style-div'}>
            <div className={"payment-section"}>
                <div className={"payment-container"}>

                    <div className={"payment-row"}>
                        <div className={"section-title"}>
                            <h2>Researcher Payment</h2>
                        </div>
                    </div>

                    <div className={"payment-row"}>
                        <div className={"payment-item"}>
                            <div className={"payment-item-inner outer-shadow-payment"}>
                                <form>
                                    <div>
                                        <label htmlFor={'name'}>Card Owner</label>
                                        <input type={'text'} name={'name'} id={'name'} placeholder={'Name'} value={this.state.name}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <label htmlFor={'payment'}>Payment</label>
                                        <input type={'text'} name={'payment'} id={'payment'} placeholder={'Amount'} value={this.state.payment}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <label htmlFor={'cardNo'}>Card Number</label>
                                        <input type={'text'} name={'cardNo'} id={'cardNo'} placeholder={'Valid Card Number'} value={this.state.cardNo}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <label htmlFor={'exDate'}>Expiration Date</label>
                                        <input type={'text'} name={'exDate'} id={'exDate'} placeholder={'MM/YY'} value={this.state.exDate}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <label htmlFor={'cvv'}>CVV Code</label>
                                        <input type={'text'} name={'cvv'} id={'cvv'} placeholder={'CVV'} value={this.state.cvv}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <input type={'submit'} value={'Make Payment'} onClick={event => this.ResearcherPay(event)} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    }
}

export default ResearchersPayment;