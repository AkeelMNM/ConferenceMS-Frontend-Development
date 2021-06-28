import React from "react";
import '../../styles/conference/WebView.css'

class WorkshopSubmission extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>Workshop Submission</label>
                </div>
                <div>
                    <div className={'topicDiv'}>
                        <label className={'conTopic'}>Submission Guideline</label>
                        <div>
                            <div className={'listDiv'}>
                                <ul className={'topicList'}>
                                    <li>First Register and Login to the System</li>
                                    <li>Go to the Workshop Registration Page</li>
                                    <li>Provide Workshop Organizers Details (names, affiliation, and contact information)</li>
                                    <li>Attach the Workshop Proposal Document</li>
                                    <li>Submit to the System</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default WorkshopSubmission;