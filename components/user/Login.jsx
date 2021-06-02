import React, {Component} from 'react';
import '../../styles/user/LoginRegister.css';
import {Link} from "react-router-dom";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return  <div>

            <div className={'form-style-logReg'}>
                <label id={'logRegHead'}>SignIn</label><br/>
                <form>
                    <div>
                        <label htmlFor={'email'}>Email</label>
                        <input type={'text'} name={'email'} id={'email'}  value={this.state.email}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <label htmlFor={'cv'}>Password</label>
                        <input type={'password'} name={'password'} id={'password'} value={this.state.password}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <input type={'submit'} value={'Login'} onClick={event => this.loginAccount(event)} />
                    </div> <br/>
                    <div>
                        <label id={'crtLabel'}>Don't have an account? </label><Link id={'linkC'} to={'/Register'}>Create Account</Link>
                    </div>
                </form>
            </div>
            <div style={{height:'138px'}}></div>

        </div>
    }
}

export default Login;