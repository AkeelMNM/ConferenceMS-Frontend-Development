import React, {Component} from 'react';
import "../../styles/user/UserProfile.css";

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
            password:'',
            rePassword:'',

            name:'',
            email:'',
            type:''
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div>
            <div>
                <label id={'usTitle'}>User Settings</label>
                <table id={'tableSt'}>
                    <thead>
                        <tr className={'trSt'}>
                            <th colSpan={2} className={'thSt'}>User Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={'trSt'}>
                            <td className={'tdSt'}>User Name : {this.state.name}</td>
                        </tr>
                        <tr className={'trSt'}>
                            <td className={'tdSt'}>User Email : {this.state.email}</td>
                        </tr>
                        <tr className={'trSt'}>
                            <td className={'tdSt'}>User Type : {this.state.type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={'form-style-userPro'}>
                <form>
                    <div>
                        <label htmlFor={'newName'}>Change Username</label>
                        <input type={'text'} name={'newName'} id={'newName'} value={this.state.newName} placeholder={'Enter New Username'}
                               onChange={event => this.onChange(event)}/>

                        <input type={'submit'} value={'Change Username'} onClick={event => this.changeUserDetails(event)} />
                    </div>
                </form>
                <form>
                    <div>
                        <br/>
                        <label htmlFor={'NewEmail'}>Change Email</label>
                        <input type={'text'} name={'NewEmail'} id={'NewEmail'}  value={this.state.NewEmail} placeholder={'Enter New Email'}
                               onChange={event => this.onChange(event)}/>

                        <input type={'submit'} value={'Change Email'} onClick={event => this.changeUserDetails(event)} />
                    </div>
                </form>
                <form>
                    <div>
                        <br/>
                        <label htmlFor={'password'}>Change Password</label>
                        <input type={'password'} name={'password'} id={'password'} value={this.state.password} placeholder={'Enter New Password'}
                               onChange={event => this.onChange(event)}/>
                    </div>
                    <div>
                        <input type={'submit'} value={'Change Password'} onClick={event => this.changeUserDetails(event)} />
                    </div>
                </form>
            </div>
        </div>
    }
}

export default UserProfile;