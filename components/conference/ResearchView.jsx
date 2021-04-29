import React from 'react';
import '../../styles/conference/ReserachWorkshopView.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class ResearchView extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div><label id={'VHeadLine'} >Research Paper Submissions</label></div>
            <div className={'RItem-style-view'}>
                <table>
                    <thead>
                    <tr>
                        <th colSpan={3}><label id={'pTitle'}>Paper Title</label></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={'resTag'}>Author Name</td>
                        <td className={'resTd'}>: Name</td>
                        <td><span id={'statCol'}>Submission Status</span> : Approved</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td className={'resTd'}>: 123@gm.lk</td>
                        <td rowSpan={3} id={'btnTag'}><button id={'btnPaper'}>Edit Submission</button></td>
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

export default ResearchView;