import React from "react";
import home from 'url:../images/home.jpg'
import '../styles/Home.css';
import "aos/dist/aos.css";
import AOS from 'aos';

class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        AOS.init();
        return <div>
            <div className={'wrapper'}>
                <div className={'divImage'}></div>
                <div className={'divText'}>International Conference on Application Frameworks</div>
                <div className={'divText2'}>7th,8th and 9th July 2021</div>
                <div className={'divText3'}>Sri Lanka Institute of Information Technology, Sri Lanka</div>
            </div>

            <div className={'aboutDiv'}>
                <label id={'aboutCon'}>ABOUT THE CONFERENCE</label>
                <p id={'para'}>
                    The 3rd International conference on advancements in computing -2021 (ICAC2021) is organized by the
                    Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT) as an open forum
                    for academics along with industry professionals to present the latest findings and research output
                    and practical deployments in the Computer Science and Information Technology domains.
                    Primary objective of the ICAC is to uplift the research culture and the quality of research done by
                    Sri Lankan researchers.
                    This conference will create a platform for national and international researchers to showcase their
                    research output, networking opportunities to discuss innovative ideas, and initiate collaborative
                    work.
                    ICAC 2019 and ICAC 2020 were successfully conducted with a technical co-sponsorship by IEEE Sri
                    Lanka Section and all publications are available in IEEE Xplore digital library
                </p>
            </div>
            <div id={'cardDiv'} data-aos={'fade-up'}>
                <div>
                    <div className={'box'}>
                        <label className={'custom-underline'}>KEY NOTE SPEAKERS</label>
                    </div>
                    <div id={'cardInsideDiv'}>
                        <div className={'card'} data-aos={'fade-up'}>
                            <div className={'info'}>
                                <h1 className={'title'}>Prof. John L. Volakis</h1>
                                <p className={'description'}>College of Engineering and Computing, Florida International
                                    University, USA</p>
                            </div>
                        </div>
                        <div className={'card'} data-aos={'fade-up'}>
                            <div className={'info'}>
                                <h1 className={'title'}>Prof. John L. Volakis</h1>
                                <p className={'description'}>College of Engineering and Computing, Florida International
                                    University, USA</p>
                            </div>
                        </div>
                        <div className={'card'} data-aos={'fade-up'}>
                            <div className={'info'}>
                                <h1 className={'title'}>Prof. John L. Volakis</h1>
                                <p className={'description'}>College of Engineering and Computing, Florida International
                                    University, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" >
                <div className={'box'}>
                    <label className={'custom-underline'}>EVENT VENUE</label>
                </div>
                <div id={'venueTile'} data-aos={'fade-up'}>
                    <div id={'venueName'}>
                        <label className={'vNameTitle'}>VENUE</label>
                        <label id={'vNameCont'}>Sri Lanka Institute of Information Technology, Sri Lanka</label>
                    </div>
                    <div id={'venueDate'}>
                        <label className={'vNameTitle'}>DATE</label><br/>
                        <label id={'vNameDate'}>1st - 3rd July,2021</label>
                    </div>

                </div>
                <div id={'imageTileDiv'} data-aos={'fade-up'}>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage: "url("+home+")"}}/>
                    </div>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage:"url("+home+")"}}/>
                    </div>
                </div>
                <div id={'imageTileDiv2'} data-aos={'fade-up'}>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage: "url("+home+")"}}/>
                    </div>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage: "url("+home+")"}}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;