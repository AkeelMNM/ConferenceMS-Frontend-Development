import React from 'react';

export default function WorkshopAllViewListHolder(props) {
    const {Workshop} = props;
    console.log(JSON.stringify(Workshop))
    return <div className={'WAItem-style-view'}>
        <table>
            <thead>
            <tr>
                <th colSpan={3}><label id={'pTitle'}>{Workshop.workShopTitle}</label></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={'wAresTag'}>Conductors Name:&nbsp;
                    {
                        Workshop.conductorNames.map(
                            name =>{
                                return name+", "
                            }
                        )
                    }
                </td>
            </tr>
            <tr>
                <td className={'wAresTag'}>Presenter Affiliation : {Workshop.affiliation}</td>
            </tr>
            <tr>
                <td className={'wAresTag'}>Presenter Email : {Workshop.email}</td>
            </tr>
            <tr>
                <td className={'wAresTag'}>Workshop Conducting Date: {Workshop.postedDate}</td>
            </tr>
            </tbody>
        </table>
    </div>
}