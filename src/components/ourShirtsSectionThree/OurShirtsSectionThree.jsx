import React from 'react'
import './ourShirtsSectionThree.css'
import shirts from '../../assets/our_shirts_img/shirts.png'

const OurShirtsSectionThree = () => {
    return (
        <>
            <section class="our_shirts_section-3">
                <div class="our_shirts_container our_shirts_flexbox">
                    <div class="our_shirts_shirts-img">
                        <img src={shirts} alt="" />
                    </div>
                    <div class="our_shirts_sec-3-text">
                        <p class="our_shirts_right-txt1">Наши ткани поставляются только несколькими фабриками по всему миру. Мы тесно сотрудничаем с нашими <br/> фабриками-партнерами, чтобы усовершенствовать и обновить наши предложения ткани.</p>
                        <p class="our_shirts_right-txt1">Мы предлагаем ткани в различных тканях и количествах. Чтобы узнать больше о различных типах тканей, нажмите <a href="#">здесь.</a></p>
                        <p class="our_shirts_right-txt1">Жизнь вашей рубашки зависит от того, как вы относитесь к рубашке и присущей ткани. Следуйте нашим простым инструкциям по уходу за стиркой, чтобы понять, как лучше ухаживать за рубашкой, нажмите <a href="#">здесь.</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurShirtsSectionThree
