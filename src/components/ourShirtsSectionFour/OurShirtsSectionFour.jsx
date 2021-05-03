import React from 'react'
import './ourShirtsSectionFour.css'
import zavodInstrumenti from '../../assets/our_shirts_img/zavod instrumenti.png'

const OurShirtsSectionFour = () => {
    return (
        <>
            <section className="our_shirts_section-4">
                <div className="our_shirts_container our_shirts_gridbox">
                    <div className="our_shirts_sec-4-text">
                        <p className="our_shirts_left-txt1">Наши рубашки тщательно сконструированы в нашей сети мастерских по всему Ташкенту.</p>
                        <p className="our_shirts_left-txt1">При сборке наших рубашек мы используем только самое лучшее сырье. Наш флизелин, который соединен с воротниками и манжетами, получен из Германии. Наши пуговицы специально изготовлены для нас. Наши нити также имеют превосходное качество, способны выдерживать более высокие уровни стресса.</p>
                        <p className="our_shirts_left-txt1">Наши шаблоны оцифровываются с использованием технологии CAD и распечатываются каждый раз при размещении заказа. По сути, индивидуальный цифровой шаблон каждого клиента сохраняется в нашей базе данных. Это оставляет небольшое поле для ошибок и обеспечивает постоянную посадку каждый раз, когда вы заказываете рубашку.</p>
                        <p className="our_shirts_left-txt1">Чтобы узнать о некоторых нюансах, которые отличают наши рубашки, нажмите <a href="#">здесь.</a></p>
                        <p className="our_shirts_left-txt1">Мы предлагаем 14 различных типов воротников, чтобы пойти на вашей рубашке. Чтобы узнать больше о наших стилях воротника, нажмите <a href="#">здесь.</a></p>
                    </div>
                    <div className="zavod-img">
                        <img src={zavodInstrumenti} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurShirtsSectionFour
