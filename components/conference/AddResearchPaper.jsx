import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/Res&Work.css'

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
            <div className={'form-style-resWork'}>
                <form>
                    <div>
                        <label htmlFor={'authorName'}>Author Name</label>
                        <input type={'text'} name={'authorName'} id={'authorName'} value={this.state.authorName}
                                onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'paperTitle'}>Paper Title</label>
                        <input type={'text'} name={'paperTitle'} id={'paperTitle'} value={this.state.paperTitle}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'email'}>Author Email</label>
                        <input type={'text'} name={'email'} id={'email'} value={this.state.email}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'date'}>Submitting Date</label>
                        <input type={'date'} name={'date'} id={'date'} value={this.state.date}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'file'}>Upload Research Paper</label>
                        <input type={'file'} name={'file'} id={'file'} value={this.state.file}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <div id={'checkB'}><input type={'checkbox'}/><span>By clicking this checkbox i agree i'm posting my own research works</span></div>
                        <input type={'button'} value={'Add Research Paper'} />
                    </div>
                </form>
            </div>
        </div>
    };
}

export default AddResearchPaper;