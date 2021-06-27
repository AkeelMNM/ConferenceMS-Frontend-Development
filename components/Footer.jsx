import React from "react";
import '../styles/HeaderFooter.css'

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className={'footer'}>
                <p>This is Footer</p>
            </div>
        </div>
    }
}

export default Footer