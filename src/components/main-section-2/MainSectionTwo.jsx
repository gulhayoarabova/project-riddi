import React from 'react'
import './MainSectionTwo.css'
import shirt from '../../assets/main_img/shirt.png'

const MainSectionTwo = () => {
    return (
        <>
            <section class="section-2">
                <div class="sec_2_grid_container">
                    <div class="shirt_img">
                        <img src={shirt} alt="Shirt" />
                    </div>
                    <div class="sec_2_text">
                        <h1 class="sec_2_title">Будь в тренде</h1>
                        <p class="right-text">Изысканный дизайн, высококачественные ткани,
                            отличная посадка, соответствие модным тенденциям
                            - главные составляющие коллекций
                            одежды. При создании моделей мы ориентируемся на
                            потребности наших покупателей, выпускаем
                            ограниченные партии, предлагаем систему подбора
                            элементов для своих рубашек и постоянно отслеживаем
                            изменения тенденций в деловой моде.</p>
                        <button class="sec_2_btn">Узнат больше</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainSectionTwo
