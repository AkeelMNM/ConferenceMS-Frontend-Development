import React, {Component} from 'react';
import {toast} from "react-toastify";
import AttendeesPaymentServices from "../../services/AttendeesPaymentServices";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class AttendeesPayment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            email:'',
            payment:'',
            payDate:''
        }
    }

    /**
     * This function is to submit Attendees Payment proposal
     */
    Pay(event){
        event.preventDefault();

        let Payment = {
            name:this.state.name,
            email:this.state.email,
            payment:this.state.payment,
            payDate:this.state.payDate
        }

        /* configuring options to display toast message */
        const options = {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar:true,
            autoClose:3000,
            closeButton:false
        }

        // The regular expression to validate the email pattern
        const emailRegex = /\S+@\S+\.\S+/;

        /**
         * Validating the login account submission input fields
         * Displaying Error message if any input field is empty
         */
        if(Payment.name === ''){
            toast.warning("File Name.", options);
        }else if(Payment.email === ''){
            toast.warning("File Email.", options);
        }else if(Payment.payment === ''){
            toast.warning("File Amount.", options);
        }else if(Payment.payDate === '') {
            toast.warning("File Date.", options);
        }else if(emailRegex.test(Payment.email) ){
            console.log(JSON.stringify(Payment));
            AttendeesPaymentServices.makePayment(Payment)
                .then(res => {
                    if(res.status === 201){
                        toast.success("Made payments successful.", options)
                    }else{
                        toast.error("Error!! Please fill in the correct details and try again.",options);
                    }
                })
        }else {
            toast.info("Please enter a valid email!", options);
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div className={'big-style-div'}>
            <h1> Attendees Payment </h1>
            <div className={'form-style-pay'}>
                <form>
                    <div>
                        <label htmlFor={'name'}>Name</label>
                        <input type={'text'} name={'name'} id={'name'} placeholder={'Name'} value={this.state.name}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'email'}>Email</label>
                        <input type={'text'} name={'email'} id={'email'} placeholder={'Email'} value={this.state.email}
                               pattern={''}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'payment'}>Payment</label>
                        <input type={'text'} name={'payment'} id={'payment'} placeholder={'Amount'} value={this.state.payment}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'payDate'}>Payment Date</label>
                        <input type={'date'} name={'payDate'} id={'payDate'} value={this.state.payDate}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <input type={'submit'} value={'Make Payment'} onClick={event => this.Pay(event)} />
                    </div>
                </form>
            </div>
        </div>
    }
}

export default AttendeesPayment;