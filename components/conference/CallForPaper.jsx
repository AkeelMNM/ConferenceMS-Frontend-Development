import React from "react";
import '../../styles/conference/WebView.css'

class CallForPaper extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div id={'bigDivision'}>
                <div className={'box'}>
                    <label className={'custom-underline'}>Call For Paper</label>
                </div>
                <div className={'paraDiv'}>
                    <p className={'discPara'}>
                        The 2021 International Conference on Application Frameworks (ICAF 2021) will be held in Sri Lanka from 6th to 8th July 2021.
                        The ICAF 2021 is themed “Latest findings and implementations of different programming languages.”
                        ICAF 2021 will include attractive workshops and programs aimed at practitioners,
                        with keynotes and panels from both local and international researchers.
                    </p>
                </div>
                <div className={'topicDiv'}>
                    <label className={'conTopic'}>Conference topics</label>
                    <div>
                        <div className={'listDiv'}>
                            <ul className={'topicList'}>
                                <li>New finding on Java </li>
                                <li>New finding on JavaScript </li>
                                <li>New finding on Python </li>
                                <li>New finding on C# </li>
                                <li>New finding on Ruby </li>
                                <li>New finding on C++ </li>
                                <li>New finding on Php </li>
                                <li>New finding on Swift </li>
                            </ul>
                        </div>
                        <div className={'listDiv'}>
                            <ul className={'topicList'}>
                                <li>New finding on SQL </li>
                                <li>New finding on PostgreSQL </li>
                                <li>New finding on R </li>
                                <li>New finding on XML </li>
                                <li>New finding on Pascal</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <label className={'noteLabel'}>*Please note that Literature Survey/Review papers will not be accepted.
                        All papers submitted will be checked for plagiarism.</label>
                </div>
            </div>
        </div>
    }
}

export default CallForPaper;