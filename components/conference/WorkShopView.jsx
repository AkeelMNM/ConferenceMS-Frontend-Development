import React from 'react';
import '../../styles/conference/ReserachWorkshopView.css'

class WorkShopView extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div><label id={'VHeadLine'} >Workshop Submissions</label></div>
            <div className={'RItem-style-view'}>
                <table>
                    <thead>
                    <tr>
                        <th colSpan={3}><label id={'pTitle'}>Workshop Title</label></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={'resTag'}>Presenter Name</td>
                        <td className={'resTd'}>: Name</td>
                        <td><span id={'statCol'}>Submission Status</span> : Approved</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td className={'resTd'}>: 123@gm.lk</td>
                        <td rowSpan={4} id={'btnTag'}><button id={'btnWork'}>Edit Submission</button></td>
                    </tr>
                    <tr>
                        <td>Affiliation</td>
                        <td className={'resTd'}>: SLIIT</td>
                    </tr>
                    <tr>
                        <td>Submitted Date</td>
                        <td className={'resTd'}>: 11-11-1111</td>
                    </tr>
                    <tr>
                        <td>File</td>
                        <td className={'resTd'}>: File</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}

export default WorkShopView;