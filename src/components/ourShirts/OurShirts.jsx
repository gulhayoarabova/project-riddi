import React from 'react'
import './ourShirtsSectionTwo.css'
import background from '../../assets/our_shirts_img/header background.png'
import OurShirtsHeader from '../ourShirtsHeader/OurShirtsHeader';
import OurShirtsSectionThree from '../ourShirtsSectionThree/OurShirtsSectionThree';
import OurShirtsSectionFour from '../ourShirtsSectionFour/OurShirtsSectionFour';
import OurShirtsSectionFive from '../ourShirtsSectionFive/OurShirtsSectionFive';

const OurShirts = () => {
    return (
        <>
            <OurShirtsHeader />
            <section class="our_shirts_section-2">
                <div class="our_shirts_container">
                    <div class="back-img">
                        <p>Наши рубашки</p>
                        <img src={background} alt="" />
                    </div>
                </div>
            </section>
            <OurShirtsSectionThree />
            <OurShirtsSectionFour />
            <OurShirtsSectionFive />
        </>
    )
}

export default OurShirts
