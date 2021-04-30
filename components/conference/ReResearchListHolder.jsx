import React from "react";
import '../../styles/conference/ResWorkResearcherView.css'

export default function ReResearchListHolder(props){
    const {ResearchPaper, approvePaper, viewPaper} = props;

    return <div className={'RWItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={2}><label id={'pTitle'}>{ResearchPaper.paperTitle}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'resTag'}>Author Name</td>
                <td className={'resTd'}>: {ResearchPaper.authorName}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td className={'resTd'}>: {ResearchPaper.email}</td>
            </tr>
            <tr>
                <td>Submitted Date</td>
                <td className={'resTd'}>: {ResearchPaper.date}</td>
            </tr>
            <tr>
                <td>File</td>
                <td className={'resTd'}>: {ResearchPaper.file}</td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button className={'btnView'}>View Research Paper</button>
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