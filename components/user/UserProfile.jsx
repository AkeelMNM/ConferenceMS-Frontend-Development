import React, {Component} from 'react';
import "../../styles/user/UserProfile.css";
import UserServices from "../../services/UserServices";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newName:'',
            NewEmail:'',
            newType:'',
            password:'',
            rePassword:'',
            User: [],
            fullName:'',
            email:'',
            type:''
        }
    }

    clearInputs(){
        this.setState({
            newName:'',
            NewEmail:'',
            newType:'',
            password:'',
            rePassword:'',
        })
    }

    /**
     * This function is to submit Researcher Payment proposal
     */
    changeUserDetails(event){
        event.preventDefault();


        let Account = {
            fullName:this.state.newName,
            email:this.state.NewEmail,
            type:this.state.newType,
            password:this.state.rePassword
        }

        const userID = localStorage.getItem('_id');
        UserServices.updateUser(userID,Account)
            .then(res =>{
                
            })

    }


    /**
     * Mounting user details proposal submission of the relevant user to view
     */
    componentDidMount() {
        UserServices.getUserByID(localStorage.getItem('_id'))
            .then(user => {
                this.setState({
                    fullName: user.fullName,
                    email: user.email,
                    type: user.type
                })
            }).catch(err => console.error(err));
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div>
            <div className={"profile-section"}>
                <div className={"profile-container"}>

                    <div className={"profile-row"}>
                        <div className={"section-title"}>
                            <h2>User Settings</h2>
                        </div>
                    </div>

                    <div className={"profile-row"}>
                        <div className={"profile-item"}>
                            <div className={"profile-item-inner outer-shadow-Profile"}>

                                <h1> User Details </h1>

                                <div>
                                    <label className={"la"}> Full Name :  <label className={"label"}> {this.state.fullName} </label> </label>
                                </div>
                                <div>
                                    <label className={"la"}> Email Address :  <label className={"label"}> {this.state.email} </label> </label>
                                </div>
                                <div>
                                    <label className={"la"}> User type :  <label className={"label"}> {this.state.type} </label> </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"profile-row"}>
                        <div className={"profile-change"}>
                            <div className={"profile-item-inner outer-shadow-Profile"}>
                                <h1> Change Email </h1>
                                <form>
                                    <div className={"input-Field"}>
                                        <input type={'text'} name={'NewEmail'} id={'NewEmail'}  value={this.state.NewEmail} placeholder={'Enter New Email'}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <input type={'submit'} value={'Change Email'} onClick={event => this.changeUserDetails(event)} />
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className={"profile-change"}>
                            <div className={"profile-item-inner outer-shadow-Profile"}>
                                <h1> Change Password </h1>
                                <form>
                                    <div className={"input-Field"}>
                                        <input type={'password'} name={'password'} id={'password'} value={this.state.password} placeholder={'Enter New Password'}
                                               onChange={event => this.onChange(event)}/>
                                    </div>
                                    <div>
                                        <input type={'submit'} value={'Change Password'} onClick={event => this.changeUserDetails(event)} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            {/*<div className={'form-style-userPro'}>*/}
            {/*    <form>*/}
            {/*        <div>*/}
            {/*            <label htmlFor={'newName'}>Change Username</label>*/}
            {/*            <input type={'text'} name={'newName'} id={'newName'} value={this.state.newName} placeholder={'Enter New Username'}*/}
            {/*                   onChange={event => this.onChange(event)}/>*/}

            {/*            <input type={'submit'} value={'Change Username'} onClick={event => this.changeUserDetails(event)} />*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*    <form>*/}
            {/*        <div>*/}
            {/*            <br/>*/}
            {/*            <label htmlFor={'NewEmail'}>Change Email</label>*/}
            {/*            <input type={'text'} name={'NewEmail'} id={'NewEmail'}  value={this.state.NewEmail} placeholder={'Enter New Email'}*/}
            {/*                   onChange={event => this.onChange(event)}/>*/}

            {/*            <input type={'submit'} value={'Change Email'} onClick={event => this.changeUserDetails(event)} />*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*    <form>*/}
            {/*        <div>*/}
            {/*            <br/>*/}
            {/*            <label htmlFor={'password'}>Change Password</label>*/}
                        <input type={'password'} name={'password'} id={'password'} value={this.state.password} placeholder={'Enter New Password'}
                               onChange={event => this.onChange(event)}/>
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <input type={'submit'} value={'Change Password'} onClick={event => this.changeUserDetails(event)} />*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}

        </div>
    }
}

export default UserProfile;