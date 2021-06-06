import React, {Component} from 'react';
import {toast} from "react-toastify";
import '../../styles/user/LoginRegister.css';
import '../../styles/toast.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import UserServices from "../../services/UserServices";
toast.configure();

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            email:'',
            type:'',
            password:''
        }
    }

    /**
     * This function is to submit registrar proposal
     */
    registerAccount(event) {
        event.preventDefault();

        let Account = {
            name:this.state.name,
            email:this.state.email,
            type:this.state.type,
            password:this.state.password
        }

        /* configuring options to display toast message */
        const options = {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar:true,
            autoClose:3000,
            closeButton:false
        }

        /**
         * Validating the Registration submission input fields
         * Displaying Error message if any input field is empty
         */
        if(Account.name == ''){
            toast.warning("Fill your Full Name.", options);
        }else if(Account.email == ''){
            toast.warning("Fill your Email Address.", options);
        }else if(Account.type == ''){
            toast.warning("Select user type.", options);
        }else if(Account.password == ''){
            toast.warning("Fill password.", options);
        }else {
            console.log(JSON.stringify(Account));
            UserServices.createAccount(Account).then(res => {
               if(res.status == 200){
                   toast.success("Account created Successfully", options);
               }else{
                   toast.error("Something went wrong!!,Try again.", options);
               }
            });
        }

    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div>
            <div className={'form-style-logReg'}>
                <label id={'logRegHead'}>SignUp</label><br/>
                <form>
                    <div>
                        <label htmlFor={'name'}>Full Name</label>
                        <input type={'text'} name={'name'} id={'name'} value={this.state.name}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'email'}>Email</label>
                        <input type={'text'} name={'email'} id={'email'}  value={this.state.email}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'type'}>User Type</label>
                        <select id="type" name="type" value={this.state.type} onChange={event => this.onChange(event)}>
                            <option>Select</option>
                            <option value="Researcher">Researcher</option>
                            <option value="WorkshopConductor">Workshop Conductor</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor={'password'}>Password</label>
                        <input type={'password'} name={'password'} id={'password'} value={this.state.password}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <input type={'submit'} value={'Register'} onClick={event => this.registerAccount(event)} />
                    </div>
                </form>
            </div>
        </div>
    }
}

export default Register;