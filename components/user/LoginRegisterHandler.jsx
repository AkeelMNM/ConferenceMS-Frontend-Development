import React, {Component} from 'react';
import '../../styles/user/LoginRegister.css';

//Images
import Img01 from 'url:../../images/Login/log.svg';
import Img02 from 'url:../../images/Login/register.svg';
import ImgEmail from 'url:../../images/Login/email.png';
import ImgLock from 'url:../../images/Login/lock.png';
import ImgUser from 'url:../../images/Login/user.png';
import ImgUsers from 'url:../../images/Login/users.png';
import ImgEye from 'url:../../images/Login/eye.png';
import ImgEyeHide from 'url:../../images/Login/eye-hide.png';


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
            isPasswordShown: false,
            isEyeImage: true,
            isOnClicked: true,
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

    PasswordVisibility(){
        this.setState({isPasswordShown:true});
        this.setState({isEyeImage:false});
        this.setState({isOnClicked:false})
    };

    PasswordNotVisibility(){
        this.setState({isPasswordShown:false});
        this.setState({isEyeImage:true});
        this.setState({isOnClicked:true})
    };

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
                                <input
                                    type={this.state.isPasswordShown===false ? "password" : "text"}
                                    name={'password'} id={'password'}
                                    value={this.state.password} placeholder={"Password"}
                                    onChange={event => this.onChange(event)}
                                />
                                <img
                                    src={this.state.isEyeImage===true ? ImgEye : ImgEyeHide}
                                    className={"eye"}
                                    onClick={this.state.isOnClicked===true ? this.PasswordVisibility.bind(this) : this.PasswordNotVisibility.bind(this)}
                                />
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
                                <input
                                    type={this.state.isPasswordShown===false ? "password" : "text"}
                                    name={'password'} id={'password'}
                                    value={this.state.password} placeholder={"Password"}
                                    onChange={event => this.onChange(event)}
                                />
                                <img
                                    src={this.state.isEyeImage===true ? ImgEye : ImgEyeHide}
                                    className={"eye"}
                                    onClick={this.state.isOnClicked===true ? this.PasswordVisibility.bind(this) : this.PasswordNotVisibility.bind(this)}
                                />
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