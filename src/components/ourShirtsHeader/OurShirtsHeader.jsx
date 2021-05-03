import React from 'react'
import './ourShirtsHeader.css'
import LogoRiddi from '../../assets/our_shirts_img/Logo Riddi.png'
import headerSearchIcon from '../../assets/our_shirts_img/header search icon.png'
import headerUserIcon from '../../assets/our_shirts_img/header user icon.png'
import headerHeartIcon from '../../assets/our_shirts_img/header heart icon.png'
import headerQulf from '../../assets/our_shirts_img/header qulf.png'

const OurShirtsHeader = () => {
    return (
        <>
            <header class="our_shirts_header">
                <div class="our_shirts_menu">
                    <ul class="our_shirts_menu-list">
                        <li class="our_shirts_link-items"><a href="#">Онлайн-магазин</a></li>
                        <li class="our_shirts_link-items"><a href="#">О нас</a></li>
                        <li class="our_shirts_link-items"><a href="#">Как это работает</a></li>
                    </ul>
                    <div class="our_shirts_logo">
                        <img src={LogoRiddi} alt="" />
                    </div>
                    <div class="our_shirts_sign-up">
                        <div class="our_shirts_sign-info">
                            <div class="our_shirts_search-icon">
                                <img src={headerSearchIcon} alt="" />
                                <a href="#">RUS</a>
                            </div>
                            <div class="our_shirts_user-icon">
                                <a href="#">ВХОД</a>
                                <img src={headerUserIcon} alt="" />
                            </div>
                            <div class="our_shirts_hearts-icons">
                                <img src={headerHeartIcon} alt="" />
                                <img src={headerQulf} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default OurShirtsHeader;