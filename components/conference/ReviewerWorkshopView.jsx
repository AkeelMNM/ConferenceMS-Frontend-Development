import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class ReviewerWorkshopView extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div><label id={'RVHeadLine'} >All Proposed Workshops</label></div>
            <div className={'RWItem-style-view'}>
                <table>
                    <thead>
                    <tr>
                        <th colSpan={2}><label id={'pTitle'}>Workshop Title</label></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={'resTag'}>Presenter Name</td>
                        <td className={'resTd'}>: Name</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td className={'resTd'}>: 123@gm.lk</td>
                    </tr>
                    <tr>
                        <td>Affiliation</td>
                        <td className={'resTd'}>: SLIIT</td>
                    </tr>
                    <tr>
                        <td>Contact Number</td>
                        <td className={'resTd'}>: 11111111</td>
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
                        <td colSpan={2}><button className={'btnReview'}>View More</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}

export default ReviewerWorkshopView;