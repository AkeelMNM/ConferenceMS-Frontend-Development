import React, {Component} from 'react';
import '../../styles/user/LoginRegister.css';


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

    // onChange(event){
    //     const { name, value } = event.target;
    //     this.setState({ [name] : value });
    // }

    render() {
        return  <div className={"signin-signup"}>

            <form className={"sign-in-form"}>
                <h2 className={"title"}>Sign In</h2>
                <div className={"input-field"}>
                    <i></i>
                    <input type={'text'} name={'email'} id={'email'}  value={this.state.email}
                           placeholder={"Email"} onChange={event => this.onChange(event)}/>
                </div>
                <div className={"input-field"}>
                    <i></i>
                    <input type={'password'} name={'password'} id={'password'} value={this.state.password}
                           placeholder={"Password"} onChange={event => this.onChange(event)}/>
                </div>
                <input type={"submit"} value={"Login"} className={"btn solid"} />
                <p className={"social-media"}>Or Sign up with social platforms</p>
            </form>

        </div>
    }
}

export default Login;