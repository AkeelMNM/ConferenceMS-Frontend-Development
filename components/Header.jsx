import React from "react";
import '../styles/HeaderFooter.css';

class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div  id={'HeadDiv'}>
                <label id={'HeadTitle'}>ICAF 2021</label>
                <div id={'logRDiv'}>
                    <a href={'#'} id={'regLink'}>Registration</a>
                    <a href={'#'} id={'logLink'}>Login</a>
                </div>

            </div>
            <div>
                <div>
                    <nav id={'bigDiv'}>

                        <label htmlFor={'drop'} className={'toggle'}>Menu</label>
                        <input type={'checkbox'} id={'drop'}/>
                        <ul className={'menu'}>
                            <li><a href="#">Home</a></li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-1'} className={'toggle'}>Authors +</label>
                                <a href="#">Authors</a>
                                <input type={'checkbox'} id={'drop-1'}/>
                                <ul>
                                    <li><a href="#">Call For Papers</a></li>
                                    <li><a href="#">Submission Instructions</a></li>
                                </ul>

                            </li>
                            <li>

                                {/* First Tier Drop Down */}
                                <label htmlFor={'drop-2'} className={'toggle'}>Workshop +</label>
                                <a href="#">Workshop</a>
                                <input type={'checkbox'} id={'drop-2'}/>
                                <ul>
                                    <li><a href="#">Workshops</a></li>
                                    <li><a href="#">Submission Instructions</a></li>
                                </ul>
                            </li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-3'} className={'toggle'}>Attendees +</label>
                                <a href="#">Attendees</a>
                                <input type={'checkbox'} id={'drop-3'}/>

                                <ul>
                                    <li><a href="#">Registrations</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    }
}

export default Header;