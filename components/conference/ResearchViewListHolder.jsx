import React from "react";
import '../../styles/conference/ReserachWorkshopView.css'

export default function ResearchViewListHolder(props){
    const {Research, editSubmission} = props;

    return <div className={'RItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={3}><label id={'pTitle'}>{Research.paperTitle}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'resTag'}>Author Name</td>
                <td className={'resTd'}>: {Research.authorName}</td>
                <td><span id={'statCol'}>Submission Status</span> : {Research.submissionStatus}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td className={'resTd'}>: {Research.email}</td>
                <td rowSpan={3} id={'btnTag'}><button id={'btnPaper'} onClick={() => editSubmission(Research)}>Edit Submission</button></td>
            </tr>
            <tr>
                <td>Submitted Date</td>
                <td className={'resTd'}>: {Research.submittedDate}</td>
            </tr>
            <tr>
                <td>File</td>
                <td className={'resTd'}>: File</td>
            </tr>
            </tbody>
        </table>
    </div>
}