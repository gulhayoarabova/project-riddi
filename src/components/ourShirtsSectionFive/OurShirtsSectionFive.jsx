import React from 'react'
import './ourShirtsSectionFive.css'
import qaychiMetr from '../../assets/our_shirts_img/Qaychi metr.png'

const OurShirtsSectionFive = () => {
    return (
        <>
            <section className="our_shirts_section-5">
                <div className="our_shirts_container our_shirts_grid">
                    <div className="instum-img">
                        <img src={qaychiMetr} alt="инструменты" />
                    </div>
                    <div className="our_shirts_sec-5-text">
                        <p className="our_section_five_right-text"> У нас нет инвентаря для рубашек - мы начнем работать над вашими рубашками после получения заказа.</p>
                        <p className="our_section_five_right-text">Все наши рубашки сделаны на заказ. Это отличается от Bespoke. Узнайте о разнице <a href="#">здесь.</a></p>
                        <p className="our_section_five_right-text">Наше проприетарное программное обеспечение FitSmart снимает нервозность предоставления ваших пользовательских измерений онлайн. Ответьте на несколько простых вопросов, и вуаля, у вас есть пользовательские измерения, готовые для сохранения и использования.</p>
                        <p className="our_section_five_right-text">Чтобы узнать больше о FitSmart, нажмите <a href="#">здесь.</a></p>
                        <p className="our_section_five_right-text">Если у вас уже есть рубашка, которая вам подходит, пришлите нам рубашку в качестве образца. Мы будем копировать и сохранять результаты измерений для дальнейшего использования.</p>
                        <p className="our_section_five_right-text">Для тех, кто предпочитает стандартные размеры, у нас есть такая опция.</p>
                        <p className="our_section_five_right-text"> Есть определенные общие проблемы с подгонкой, которые мы можем преодолеть в изготовленных на заказ рубашках. Чтобы узнать о распространенных проблемах подгонки, нажмите <a href="#">здесь.</a></p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OurShirtsSectionFive
