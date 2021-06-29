import React from "react";
import '../styles/HeaderFooter.css';

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            type:''
        }
    }

    forGuestView(){
        return <div>
            <div  id={'HeadDiv'}>
                <label id={'HeadTitle'}>ICAF 2021</label>
                <div id={'logRDiv'}>
                    <a href={'/registration'} id={'regLink'}>Registration</a>
                    <a href={'/login'} id={'logLink'}>Login</a>
                </div>

            </div>
            <div>
                <div>
                    <nav id={'bigDiv'}>

                        <label htmlFor={'drop'} className={'toggle'}>Menu</label>
                        <input type={'checkbox'} id={'drop'}/>
                        <ul className={'menu'}>
                            <li><a href="/">Home</a></li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-1'} className={'toggle'}>Authors +</label>
                                <a href="#">Authors</a>
                                <input type={'checkbox'} id={'drop-1'}/>
                                <ul>
                                    <li><a href="/callForPaper">Call For Papers</a></li>
                                    <li><a href="/paperSubmission">Submission Instructions</a></li>
                                </ul>

                            </li>
                            <li>

                                {/* First Tier Drop Down */}
                                <label htmlFor={'drop-2'} className={'toggle'}>Workshop +</label>
                                <a href="#">Workshop</a>
                                <input type={'checkbox'} id={'drop-2'}/>
                                <ul>
                                    <li><a href="/workShopAllView">Workshops</a></li>
                                    <li><a href="/WorkshopSubmission">Submission Instructions</a></li>
                                </ul>
                            </li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-3'} className={'toggle'}>Attendees +</label>
                                <a href="#">Attendees</a>
                                <input type={'checkbox'} id={'drop-3'}/>

                                <ul>
                                    <li><a href="/attendeesRegistration">Registrations</a></li>
                                </ul>
                            </li>
                            <li><a href="/about">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    }

    forReviewerView(){
        return <div>
            <div  id={'HeadDiv'}>
                <label id={'HeadTitle'}>ICAF 2021</label>
                <div id={'logRDiv'}>
                    <a href={'/userProfile'} id={'regLink'}>User Profile</a>
                    <a href={'#'} id={'logLink'}>Logout</a>
                </div>

            </div>
            <div>
                <div>
                    <nav id={'bigDiv'}>

                        <label htmlFor={'drop'} className={'toggle'}>Menu</label>
                        <input type={'checkbox'} id={'drop'}/>
                        <ul className={'menu'}>
                            <li><a href="/">Home</a></li>
                            <li style={{width:"230px"}}><a href="/reviewerResearchView">Paper Submissions</a></li>
                            <li style={{width:"230px"}}><a href="/reviewerWorkshopView">Workshop Submissions</a></li>
                            <li><a href="/about">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    }

    forEditorView(){
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
                            <li style={{width:"250px"}}><a href="#">View Conference Contents</a></li>
                            <li style={{width:"250px"}}><a href="#">View Approved Workshop</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    }

    forAttendeeView(){
        return <div>
            <div  id={'HeadDiv'}>
                <label id={'HeadTitle'}>ICAF 2021</label>
                <div id={'logRDiv'}>
                    <a href={'#'} id={'regLink'}>User Profile</a>
                    <a href={'#'} id={'logLink'}>Login</a>
                </div>

            </div>
            <div>
                <div>
                    <nav id={'bigDiv'}>

                        <label htmlFor={'drop'} className={'toggle'}>Menu</label>
                        <input type={'checkbox'} id={'drop'}/>
                        <ul className={'menu'}>
                            <li><a href="/">Home</a></li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-1'} className={'toggle'}>Authors +</label>
                                <a href="#">Authors</a>
                                <input type={'checkbox'} id={'drop-1'}/>
                                <ul>
                                    <li><a href="/callForPaper">Call For Papers</a></li>
                                    <li><a href="/paperSubmission">Submission Instructions</a></li>
                                </ul>

                            </li>
                            <li>

                                {/* First Tier Drop Down */}
                                <label htmlFor={'drop-2'} className={'toggle'}>Workshop +</label>
                                <a href="#">Workshop</a>
                                <input type={'checkbox'} id={'drop-2'}/>
                                <ul>
                                    <li><a href="/workShopAllView">Workshops</a></li>
                                    <li><a href="/WorkshopSubmission">Submission Instructions</a></li>
                                </ul>
                            </li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-3'} className={'toggle'}>Attendees +</label>
                                <a href="#">Attendees</a>
                                <input type={'checkbox'} id={'drop-3'}/>

                                <ul>
                                    <li><a href="/attendeesRegistration">Registrations</a></li>
                                    <li><a href="#">By Ticket</a></li>
                                </ul>
                            </li>
                            <li><a href="/about">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    }

    forResearcherView(){
        return <div>
            <div  id={'HeadDiv'}>
                <label id={'HeadTitle'}>ICAF 2021</label>
                <div id={'logRDiv'}>
                    <a href={'/userProfile'} id={'regLink'}>User Profile</a>
                    <a href={'#'} id={'logLink'}>Logout</a>
                </div>

            </div>
            <div>
                <div>
                    <nav id={'bigDiv'}>

                        <label htmlFor={'drop'} className={'toggle'}>Menu</label>
                        <input type={'checkbox'} id={'drop'}/>
                        <ul className={'menu'}>
                            <li><a href="/">Home</a></li>
                            <li style={{width:"230px"}}><a href="/addResearchPaper">Paper Submission</a></li>
                            <li style={{width:"230px"}}><a href="/researchView">View Submissions</a></li>
                            <li style={{width:"230px"}}><a href="/paperSubmission">Submissions Guidelines</a></li>
                            <li><a href="/about">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    }

    forWConductorView(){
        return <div>
            <div  id={'HeadDiv'}>
                <label id={'HeadTitle'}>ICAF 2021</label>
                <div id={'logRDiv'}>
                    <a href={'/userProfile'} id={'regLink'}>User Profile</a>
                    <a href={'#'} id={'logLink'}>Logout</a>
                </div>

            </div>
            <div>
                <div>
                    <nav id={'bigDiv'}>

                        <label htmlFor={'drop'} className={'toggle'}>Menu</label>
                        <input type={'checkbox'} id={'drop'}/>
                        <ul className={'menu'}>
                            <li><a href="/">Home</a></li>
                            <li style={{width:"230px"}}><a href="/addWorkShop">Workshop Submission</a></li>
                            <li style={{width:"230px"}}><a href="/workShopView">View Submissions</a></li>
                            <li style={{width:"230px"}}><a href="/WorkshopSubmission">Submissions Guideline</a></li>
                            <li><a href="/about">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    }

    render() {
        return <div>
            {
                this.state.type === 'Researcher'?
                    (this.forResearcherView())
                :this.state.type === 'WorkshopConductor'?
                    (this.forWConductorView())
                :this.state.type === 'Editor'?
                    (this.forEditorView())
                :this.state.type === 'Reviewer'?
                    (this.forReviewerView())
                :this.state.type === 'Attendee'?
                    (this.forAttendeeView())
                :(this.forGuestView())
            }
            {/*<div  id={'HeadDiv'}>
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
                                First Tier Drop Down
                                <label htmlFor={'drop-1'} className={'toggle'}>Authors +</label>
                                <a href="#">Authors</a>
                                <input type={'checkbox'} id={'drop-1'}/>
                                <ul>
                                    <li><a href="#">Call For Papers</a></li>
                                    <li><a href="#">Submission Instructions</a></li>
                                </ul>

                            </li>
                            <li>

                                 First Tier Drop Down
                                <label htmlFor={'drop-2'} className={'toggle'}>Workshop +</label>
                                <a href="#">Workshop</a>
                                <input type={'checkbox'} id={'drop-2'}/>
                                <ul>
                                    <li><a href="#">Workshops</a></li>
                                    <li><a href="#">Submission Instructions</a></li>
                                </ul>
                            </li>
                            <li>
                                First Tier Drop Down
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
            </div>*/}
        </div>
    }
}

export default Header;