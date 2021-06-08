import React, {Component} from 'react';
import '../../styles/user/LoginRegister.css';

//Images
import Img01 from 'url:../../images/log.svg';
import Img02 from 'url:../../images/register.svg';
import ImgEmail from 'url:../../images/email.png';
import ImgLock from 'url:../../images/lock.png';
import ImgUser from 'url:../../images/user.png';
import ImgUsers from 'url:../../images/users.png';


// import Login from "./Login";
// import Register from "./Register";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class LoginRegisterHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive:true,
            name:'',
            email:'',
            type:'',
            password:''
        }
    }

    changeSignInForm(){
        this.setState({isActive:false})
    }

    changeSignUpForm(){
        this.setState({isActive:true})
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div>

            <div className={this.state.isActive===true ? "container" : "container sign-up-mode"} id={"container"}>
                <div className={"forms-container"}>
                    <div className={"signin-signup"}>

                        {/*<Login/>*/}
                        {/*<Register/>*/}

                        <form className={"sign-in-form"}>
                            <h2 className={"title"}>Sign In</h2>
                            <div className={"input-field"}>
                                <img src={ImgEmail} className={"fas"}/>
                                <input type={'text'} name={'email'} id={'email'}  value={this.state.email}
                                       placeholder={"Email"} onChange={event => this.onChange(event)}/>
                            </div>
                            <div className={"input-field"}>
                                <img src={ImgLock} className={"fas"}/>
                                <input type={'password'} name={'password'} id={'password'} value={this.state.password}
                                       placeholder={"Password"} onChange={event => this.onChange(event)}/>
                            </div>
                            <input type={"submit"} value={"Login"} className={"btn solid"} />
                            <p className={"social-media"}>Or Sign up with social platforms</p>
                        </form>

                        <form className={"sign-up-form"}>
                            <h2 className={"title"}>Sign up</h2>
                            <div className={"input-field"}>
                                <img src={ImgUser} className={"fas"}/>
                                <input type={'text'} name={'name'} id={'name'} value={this.state.name}
                                       placeholder={"Full Name"} onChange={event => this.onChange(event)}/>
                            </div>
                            <div className={"input-field"}>
                                <img src={ImgEmail} className={"fas"}/>
                                <input type={'text'} name={'email'} id={'email'}  value={this.state.email}
                                       placeholder={"Email"} onChange={event => this.onChange(event)}/>
                            </div>
                            <div className={"input-field"}>
                                <img src={ImgUsers} className={"fas"}/>
                                <input type={'text'} name={'email'} id={'email'}  value={this.state.email}
                                       placeholder={"Type"} onChange={event => this.onChange(event)}/>
                            </div>
                            <div className={"input-field"}>
                                <img src={ImgLock} className={"fas"}/>
                                <input type={'password'} name={'password'} id={'password'} value={this.state.password}
                                       placeholder={"Password"} onChange={event => this.onChange(event)}/>
                            </div>
                            <input type={"submit"} className={"btn"} value={"sign up"} />
                            <p className={"social-media"}>Or Sign up with social platforms</p>
                        </form>

                    </div>
                </div>

                <div className={"panels-container"}>

                    <div className={"panel left-panel"}>
                        <div className={"content"}>
                            <h3>New Here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className={"btn transparent"} id={"sign-up-btn"} onClick={this.changeSignInForm.bind(this)} >Sign up</button>
                        </div>
                        <img src={Img01} className={"image"} />
                    </div>

                    <div className={"panel right-panel"}>
                        <div className={"content"}>
                            <h3>One of us</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className={"btn transparent"} id={"sign-in-btn"} onClick={this.changeSignUpForm.bind(this)} >Sign up</button>
                        </div>
                        <img src={Img02} className={"image"} />
                    </div>

                </div>

            </div>

        </div>
    }
}

export default LoginRegisterHandler;