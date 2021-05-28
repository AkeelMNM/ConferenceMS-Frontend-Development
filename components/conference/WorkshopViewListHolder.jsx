import React from 'react';
import '../../styles/conference/ReserachWorkshopView.css'

export default function WorkshopViewListHolder(props) {
    const {Workshop, editSubmission} = props;

    return <div className={'RItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={3}><label id={'pTitle'}>{Workshop.workshopTitle}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'resTag'}>Presenter Name</td>
                <td className={'resTd'}>: {Workshop.presenterName}</td>
                <td><span id={'statCol'}>Submission Status</span> : {Workshop.status}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td className={'resTd'}>: {Workshop.email}</td>
                <td rowSpan={4} id={'btnTag'}><button id={'btnWork'}>Edit Submission</button></td>
            </tr>
            <tr>
                <td>Affiliation</td>
                <td className={'resTd'}>: {Workshop.affiliation}</td>
            </tr>
            <tr>
                <td>Submitted Date</td>
                <td className={'resTd'}>: {Workshop.postingDate}</td>
            </tr>
            <tr>
                <td>File</td>
                <td className={'resTd'}>: File</td>
            </tr>
            </tbody>
        </table>
    </div>
}