import React from "react";
import '../../styles/WebView.css'

class PaperSubmission extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>RESEARCH PAPER SUBMISSION</label>
                </div>
                <div>
                    <div id={'workTopicDiv'}>
                        <label className={'conTopic'}>Submission Guideline</label>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li>First Register as Researcher and Login to the System</li>
                                    <li>Go to the Research Paper Registration Page</li>
                                    <li>Provide Author Details (names, email, and contact information)</li>
                                    <li>Attach the Research Paper Document</li>
                                    <li>Submit the Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id={'paperSubDiv'}>
                        <label className={'conTopic'}>Important</label>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li>All papers should be written in English</li>
                                    <li>The page length limit for all initial submissions for review is 6 printed pages with font size of 10</li>
                                    <li>Download template form the following page while preparing full papers
                                        <ul>
                                            <li><a href={'#'}>Conference Templates Download</a></li>
                                        </ul>
                                    </li>
                                    <li>Paper selection is subjected to the contribution, originality, relevance, technical strength, and the overall quality.
                                        Upon selection of the paper, at least one author is expected to register for the conference before the deadline and present the paper</li>
                                    <li>All submissions will undergo a plagiarism check using a suitable tool</li>
                                    <li>Please contact us, if you have any questions regarding your submission or experience any issues while submitting your Paper</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px'}}></div>
            </div>
        </div>
    }
}

export default PaperSubmission;