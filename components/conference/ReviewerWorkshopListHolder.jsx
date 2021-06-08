import React from 'react';
import '../../styles/conference/ResWorkResearcherView.css'

export default function ReviewerWorkshopListHolder(props) {
    const {Workshop, approveWorkshop, viewWorkshop,rejectWorkshop} = props;

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
                    <button className={'btnView'} onClick={() => viewWorkshop(Workshop)}>View Proposal Document</button>
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    {
                        Workshop.proposalStatus === 'Approved'?
                            (<span id={'stateS'}>States : Approved</span>)
                        :(
                            <div>
                                <button className={'btnAccept'} onClick={() => approveWorkshop(Workshop)}>Approve</button>
                                <button className={'btnDecline'} onClick={() => rejectWorkshop(Workshop)}>Reject</button>
                            </div>
                         )
                    }
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}