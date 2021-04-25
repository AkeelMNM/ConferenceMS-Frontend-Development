import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'

class ReviewerResearchView extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div><label id={'RVHeadLine'} >Research Paper Submissions</label></div>
            <div className={'RWItem-style-view'}>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={2}><label id={'pTitle'}>Paper Title</label></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={'resTag'}>Author Name</td>
                                <td className={'resTd'}>: Name</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td className={'resTd'}>: 123@gm.lk</td>
                            </tr>
                            <tr>
                                <td>Submitted Date</td>
                                <td className={'resTd'}>: 11-11-1111</td>
                            </tr>
                            <tr>
                                <td>File</td>
                                <td className={'resTd'}>: File</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><button className={'btnReview'}>Review Paper</button></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    }
}

export default ReviewerResearchView;