import React, {Component} from 'react';

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

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div className={'big-style-div'}>
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
                        <input type={'submit'} value={'Make Payment'} onClick={event => this.payMobile(event)} />
                    </div>
                </form>
            </div>
        </div>
    }
}

export default AttendeesPayment;