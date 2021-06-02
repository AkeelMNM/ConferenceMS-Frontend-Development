import React, {Component} from 'react';
import '../../styles/user/LoginRegister.css';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class AdminCreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password:'',
            email:'',
            type:'',
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div>
            <div className={'form-style-logReg'}>
                <label id={'logRegHead'}>Admin Create User form </label><br/>
                <form>
                    <div>
                        <label htmlFor={'username'}>Full Name</label>
                        <input type={'text'} name={'username'} id={'username'} value={this.state.username}
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
                            <option value="Editor">Editor</option>
                            <option value="Reviewer">Reviewer</option>
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

export default AdminCreateUser;