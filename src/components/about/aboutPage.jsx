import React from 'react'
import  "../about-section-one/about-section-one.css";

import "../about-section-two/about-section-two.css";
import AboutSectionOne from '../about-section-one/about-section-one';
import AboutSectionTwo from '../about-section-two/about-section-two';
const AboutPage = () => {
    return (
       <React.Fragment>
           <AboutSectionOne/>
           <AboutSectionTwo/>
       </React.Fragment>
    )
}

export default AboutPage
