import React from "react";
import {Link} from "react-router-dom";

class AddResearchPaper extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            authorName:'',
            paperTitle:'',
            email:'',
            date:'',
            file:''
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }
    render() {
        return <div>
            <Link to={"/"}>Home</Link>
            <form>
                <div>
                    <label htmlFor={'authorName'}>Author Name</label>
                    <input type={'text'} name={'authorName'} id={'authorName'} value={this.state.authorName}
                            onChange={event => this.onChange(event)} />
                </div>
                <div>
                    <label htmlFor={'paperTitle'}>Paper Title</label>
                    <input type={'text'} name={'paperTitle'} id={'paperTitle'} value={this.state.authorName}
                           onChange={event => this.onChange(event)} />
                </div>
                <div>
                    <label htmlFor={'email'}>Author Email</label>
                    <input type={'text'} name={'email'} id={'email'} value={this.state.authorName}
                           onChange={event => this.onChange(event)} />
                </div>
                <div>
                    <label htmlFor={'date'}>Submitting Date</label>
                    <input type={'date'} name={'date'} id={'date'} value={this.state.authorName}
                           onChange={event => this.onChange(event)} />
                </div>
                <div>
                    <label htmlFor={'file'}>Upload Research Paper</label>
                    <input type={'file'} name={'file'} id={'file'} value={this.state.authorName}
                           onChange={event => this.onChange(event)} />
                </div>
            </form>
        </div>
    };
}

export default AddResearchPaper;