import React from 'react'
import './mainPageHeader.css'
import LogoRiddi from '../../assets/main_img/Logo Riddi.png'
import backgroundImage from '../../assets/main_img/background-image.png'
import headerSearchIcon from '../../assets/main_img/header search icon.png'
import headerUserIcon from '../../assets/main_img/header user icon.png'
import headerHeartIcon from '../../assets/main_img/header heart icon.png'
import headerQulf from '../../assets/main_img/header qulf.png'
import Ellipse1 from '../../assets/main_img/Ellipse 12.png'
import Ellipse2 from '../../assets/main_img/Ellipse 13.png'
import Ellipse3 from '../../assets/main_img/Group 88.png'
import MainSectionTwo from '../main-section-2/MainSectionTwo'
import MainSectionThird from '../main-section-3/MainSectionThird'
import MainSectionFour from '../main-section-4/MainSectionFour'
import MainSectionFive from '../main-section-5/MainSectionFive'

const MainPage = () => {
    return (
        <React.Fragment>
            <header class="main_header">
                <div class="main_container main_menu">
                    <ul class="main_menu-list">
                        <li class="main_link-items"><a href="#">Онлайн-магазин</a></li>
                        <li class="main_link-items"><a href="#">О нас</a></li>
                        <li class="main_link-items"><a href="#">Как это работает</a></li>
                    </ul>
                    <div class="main_logo">
                        <img src={LogoRiddi} alt="RIDDI Logo" />
                    </div>
                    <div class="main_sign-up">
                        <div class="main_sign-info">
                            <div class="main_search-icon">
                                <img src={headerSearchIcon} alt="" />
                                <a href="#">RUS</a>
                            </div>
                            <div class="main_user-icon">
                                <a href="#">ВХОД</a>
                                <img src={headerUserIcon} alt="" />
                            </div>
                            <div class="main_hearts-icons">
                                <img src={headerHeartIcon} alt="" />
                                <img src={headerQulf} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="corus_slide">
                    <div class="texts">
                        <h3>Создай свой стиль. Наслаждайся</h3>
                        <button class="btn">Создать Рубашку</button>
                    </div>
                </div>
                <div class="sms_img">
                    <div class="parent_img">
                        <img src={Ellipse1} alt="" />
                        <div class="child_img">
                            <img src={Ellipse2} alt="" />
                            <div class="nevara_img">
                                <img src={Ellipse3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Background  */}
            <div class="intro-slide">
                <img src={backgroundImage} alt="" />
            </div>
            <MainSectionTwo />
            <MainSectionThird />
            <MainSectionFour />
            <MainSectionFive />  
        </React.Fragment>
    )
}

export default MainPage;
