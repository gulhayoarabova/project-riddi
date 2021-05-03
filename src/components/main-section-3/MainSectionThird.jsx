import React from 'react'
import './MainSectionThird.css'
import image1 from '../../assets/main_img/1.png'
import image2 from '../../assets/main_img/2.png'
import image3 from '../../assets/main_img/3.png'

const MainSectionThird = () => {
    return (
        <>
            <section class="main_section_3">
                <h1 class="main_sec_3_title">Как работает наш конструктор рубашек</h1>
                <div class="main_container">
                    <div class="main_sec_3_grid_container">
                        <div class="main_sec_3_grid_child">
                            <div class="first_child_img_box">
                                <img class="first_img" src={image1} alt="1" />
                            </div>
                            <div class="child_txt_box">
                                <h2>Выбор ткани</h2>
                                <p>Выберите ваши любимые более 150 изысканных и полностью сделанные в Италии ткани.</p>
                            </div>
                        </div>
                        <div class="main_sec_3_grid_child">
                            <div class="second_child_img_box">
                                <img class="second_img" src={image2} alt="1" />
                            </div>
                            <div class="child_txt_box_second">
                                <h2>Настройка</h2>
                                <p>Используйте конфигуратор, чтобы выбрать каждую деталь и проверить конечный результат в режиме реального времени.</p>
                            </div>
                        </div>
                        <div class="main_sec_3_grid_child">
                            <div class="third_child_img_box">
                                <img class="third_img" src={image3} alt="1" />
                            </div>
                            <div class="child_txt_box_third">
                                <h2>Мерка</h2>
                                <p>Выберите ваши любимые более 150 изысканных и полностью сделанные в Италии ткани.</p>
                            </div>
                        </div>
                    </div>
                    <div class="main_sec_3_btn">
                        <button>Создать Рубашку</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainSectionThird
