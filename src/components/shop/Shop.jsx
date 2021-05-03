import React from 'react'
import OurShirtsHeader from '../ourShirtsHeader/OurShirtsHeader'
import ShopSectionThree from '../shopSectionThree/ShopSectionThree'
import './shop.css'

const Shop = () => {
    return (
        <>
            <OurShirtsHeader />
            <section class="shop_section_2">
                <div class="busines_info">
                    <h1>Мужские рубашки на заказ</h1>
                    <p>Вдохновитесь нашим выбором предварительно разработанных классических рубашек, каждый из которых подойдет вам по-своему. Возьмите их такими, какие они есть, или настройте новые под свои нужды, используя наш конструктор рубашек. Откройте для себя превосходное качество в наших рубашках легко, быстро и с учетом ваших пожеланий.</p>
                </div>
            </section>
            <ShopSectionThree />
        </>
    )
}

export default Shop
