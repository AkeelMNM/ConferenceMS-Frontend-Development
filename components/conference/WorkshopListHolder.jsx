import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'

export default function WorkshopListHolder(props) {
    const {Workshop, approveWorkshop, viewWorkshop} = props;

    return <div className={'RWItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={2}><label id={'pTitle'}>{Workshop.workshopTitle}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'resTag'}>Presenter Name</td>
                <td className={'resTd'}>: {Workshop.presenterName}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td className={'resTd'}>: {Workshop.email}</td>
            </tr>
            <tr>
                <td>Affiliation</td>
                <td className={'resTd'}>: {Workshop.affiliation}</td>
            </tr>
            <tr>
                <td>Contact Number</td>
                <td className={'resTd'}>: {Workshop.contactNo}</td>
            </tr>
            <tr>
                <td>Submitted Date</td>
                <td className={'resTd'}>: {Workshop.postingDate}</td>
            </tr>
            <tr>
                <td>File</td>
                <td className={'resTd'}>: {Workshop.file}</td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button className={'btnView'}>View Proposal Document</button>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button className={'btnAccept'}>Approve</button>
                    <button className={'btnDecline'}>Reject</button>
                    {/* <span id={'stateS'}>States : Approved</span>*/}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}