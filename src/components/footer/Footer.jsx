import React from 'react'
import './footer.css'
import facebook from '../../assets/main_img/facebook-logo 1.png'
import instagram from '../../assets/main_img/instagram-logo 1.png'
import telegram from '../../assets/main_img/telegram logo.png'
import mastercard from '../../assets/main_img/footer mastercard.png'
import mir from '../../assets/main_img/footer mir.png'
import payme from '../../assets/main_img/footer payme.png'
import visa from '../../assets/main_img/footer visa.png'
import yandeks from '../../assets/main_img/footer yandeks.png'

const Footer = () => {
    return (
        <>
            <div class="footer">
                <div class="main_container">
                    <div class="grid-footer">
                        <div class="footer-info">
                        <div class="footer-txt">
                            <a href="#" class="foot-zagalov">Онлайн-магазин</a>
                            <a href="#">Конструктор рубашек</a>
                            <a href="#">Коллекция рубашек</a>
                            <a href="#">Подарочная карта</a>
                        </div>
                        </div>
                        <div class="footer-info">
                        <div class="footer-txt">
                            <a href="#" class="foot-zagalov">О нас</a>
                            <a href="#">О нас</a>
                            <a href="#">Ткани</a>
                            <a href="#">Размер  Fit</a>
                            <a href="#">Пресса</a>
                            <a href="#">Карта сайта</a>
                        </div>
                        </div>
                        <div class="footer-info">
                        <div class="footer-txt">
                            <a href="#" class="foot-zagalov">помощь</a>
                            <a href="#">Контакты</a>
                            <a href="#">О конструкторе рубашек</a>
                            <a href="#">FAQ</a>
                        </div>
                        </div>
                        <div class="footer-info">
                        <div class="footer-txt">
                            <a href="#" class="foot-zagalov">МЫ В СОЦСЕТЯХ</a>
                            <div class="facebook">
                                <img src={facebook} alt="" />
                                <a href="#">Facebook</a>
                            </div>
                            <div class="instagram">
                                <img src={instagram} alt="" />
                                <a href="#">Instagram</a>
                            </div>
                            <div class="telegram">
                                <img src={telegram} alt="" />
                                <a href="#">Telegram</a>
                            </div>
                        </div>
                        </div>
                        <div class="footer-info">
                        <div class="partners-imgs">
                            <img src={yandeks} alt="" />
                            <img src={payme} alt="" />
                            <img src={mir} alt="" />
                            <img src={visa} alt="" />
                            <img src={mastercard} alt="" />
                        </div>
                        <div class="politics">
                            <p>© 2019 RIDDI camicie - <span>ВСЕ ПРАВА ЗАЩИЩЕНЫ</span> <br/>
                                Условия Использования / Политика Конфиденциальности</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
