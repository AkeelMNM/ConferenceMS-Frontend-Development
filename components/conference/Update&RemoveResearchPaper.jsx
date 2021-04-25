import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/upRemRes&Work.css'

class UpdateRemoveResearchPaper extends React.Component{
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
            <div><label id={'UPHeadLine'} >Update or Remove Research Paper Submission</label></div>
            <div className={'form-style-upRemResWork'}>
                <form>
                    <div>
                        <label htmlFor={'authorName'}>Author Name</label>
                        <input type={'text'} name={'authorName'} id={'authorName'} value={this.state.authorName}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'paperTitle'}>New Paper Title</label>
                        <input type={'text'} name={'paperTitle'} id={'paperTitle'} value={this.state.paperTitle}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'email'}>New Author Email</label>
                        <input type={'text'} name={'email'} id={'email'} value={this.state.email}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'date'}>New Submitting Date</label>
                        <input type={'date'} name={'date'} id={'date'} value={this.state.date}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'file'}>Re-upload Research Paper</label>
                        <input type={'file'} name={'file'} id={'file'} value={this.state.file}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <div id={'checkB'}><input type={'checkbox'}/><span>By clicking this checkbox i agree i'm posting my own research works</span></div>
                        <div id={'btnDiv'}>
                            <input type={'button'} value={'Update Paper Submission'} />
                            <input type={'button'} id={'btnDelete'} value={'Remove Paper Submission'} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    };
}

export default UpdateRemoveResearchPaper;