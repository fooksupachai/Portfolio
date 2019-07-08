import React from 'react';
import lax from 'lax.js';
import signature from '../../assets/images/signature.png';
import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';
import one from '../../assets/images/1.png';
import LaxButton from '../Common/LaxButton';
 
class About extends React.Component {
    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }
    render(){
        return (
            <section id="about" className="uk-about  about-area uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <div className="about-content">
                                <div className="uk-section-title section-title">
                                    <span>About Me</span>
                                    <h2>My name is Supachai but you can call me Fook !</h2>
                                    <div className="bar"></div>
                                </div>

                                <div className="about-text">
                                    <div className="icon">
                                        <i className="flaticon-quality"></i>
                                    </div>
                                    <h3>Age 23 years old</h3>
                                    <p>Thammasat University</p>
                                    <p>Bachelor of Engineering Program</p>
                                    <p>Concentration in Software Engineering</p>
                                    <p>Age 23 years old</p>

                                    {/* <div className="signature">
                                        <img src={signature} alt="signature" />
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="about-img">
                                <img src={about1} className="about-img1" alt="about-img" />
                                <img src={about2} className="about-img2" alt="about-img" />
                                <img src={one} className="shape-img" alt="shape" />

                                <LaxButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;