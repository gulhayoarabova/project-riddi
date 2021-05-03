import React from 'react'
import './mainSectionFive.css'
import img from '../../assets/main_img/j-williams-tabzu_kbVs0-unsplash 1.png'
import img2 from '../../assets/main_img/jennifer-burk-ECXB0YAZ_zU-unsplash 1.png'
import img3 from '../../assets/main_img/image 4.png'

const MainSectionFive = () => {
    return (
        <>
            <section class="main_section_5">
                <div class="main_container">
                    <div class="main_grid_info_page">
                        <div class="main_box_one">
                            <div class="info_img">
                                <img src={img} alt="" />
                            </div>
                            <div class="info_title">
                                <h3>Безупречное качество</h3>
                            </div>
                            <div class="info_txt">
                                <p>Наши ткани поставляются только несколькими лучшими фабриками по всему миру. Каждая деталь тщательно изготовлена с использованием прецизионных технологий и самого современного оборудования.</p>
                                <button class="info_btn">Подробнее</button>
                            </div>
                        </div>
                        <div class="main_box_one">
                            <div class="info_img">
                                <img src={img2} alt="" />
                            </div>
                            <div class="info_title">
                                <h3>Мерка за минуту</h3>
                            </div>
                            <div class="info_txt">
                                <p>Забудьте об измерительных лентах - наш алгоритм SmartFit поможет рассчитать ваш истинный размер менее чем за минуту. Ваша покупка защищена нашей гарантией соответствия.</p>
                                <button class="info_btn">Подробнее</button>
                            </div>
                        </div>
                        <div class="main_box_one">
                            <div class="info_img">
                                <img src={img3} alt="" />
                            </div>
                            <div class="info_title">
                                <h3>наши работы</h3>
                            </div>
                            <div class="info_txt">
                                <p>Столкнувшись с проблемами в вашей форме? Не уверены в своих выборах? Мы только на расстоянии одного клика.</p>
                                <button class="info_btn">Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainSectionFive
