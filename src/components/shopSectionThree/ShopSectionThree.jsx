import React from 'react'
import './shopSectionThree.css'
import shirt1 from '../../assets/shop_img/image 30.png'
import shirt2 from '../../assets/shop_img/image 26.png'
import shirt3 from '../../assets/shop_img/image 27.png'
import shirt4 from '../../assets/shop_img/image 34.png'
import heart from '../../assets/shop_img/Vector.png'
import heart2 from '../../assets/shop_img/heart not-color.png'
import circleImg from '../../assets/shop_img/Group 104.png'

const ShopSectionThree = () => {
    return (
        <>
            <section class="shop_section_3">
                <div class="shop_container">
                    <div class="shop_selections">
                        <select>
                            <option>Категория</option>
                        </select>
                        <select>
                            <option>Цвет</option>
                        </select>
                        <select>
                            <option>Узор</option>
                        </select>
                        <select>
                            <option>Цена</option>
                        </select>
                        <button class="shop_select_btn">Сбросить фильтры</button>
                    </div>
                    <div class="shop_grid_container">
                        <div class="shop_grid_childs">
                            <div class="shop_product_img">
                                <img src={shirt1} alt="Product-image" />
                            </div>
                            <div class="shop_product_title">
                                <p>Dawn Jungle Print</p>
                            </div>
                            <div class="shop_product_price">
                                <p>150$</p>
                                <img src={heart} alt="heart" />
                            </div>
                        </div>
                        <div class="shop_grid_childs">
                            <div class="shop_product_img">
                                <img src={shirt2} alt="Product-image" />
                            </div>
                            <div class="shop_product_title">
                                <p>Рубашка с принтом динозавров</p>
                            </div>
                            <div class="shop_product_price">
                                <p>70$</p>
                                <img src={heart2} alt="heart" />
                            </div>
                        </div>
                        <div class="shop_grid_childs">
                            <div class="shop_product_img">
                                <img src={shirt3} alt="Product-image" />
                            </div>
                            <div class="shop_product_title">
                                <p>Каролина с синими полосами</p>
                            </div>
                            <div class="shop_product_price">
                                <p>85$</p>
                                <img src={heart} alt="heart" />
                            </div>
                        </div>
                        <div class="shop_grid_childs">
                            <div class="shop_product_img">
                                <img src={shirt4} alt="Product-image" />
                            </div>
                            <div class="shop_product_title">
                                <p>Синяя клетчатая рубашка</p>
                            </div>
                            <div class="shop_product_price">
                                <p>67$</p>
                                <img src={heart2} alt="heart" />
                            </div>
                        </div>

                        <div class="shop_grid_childs">
                            <div class="shop_product_img">
                                <img src={shirt1} alt="Product-image" />
                            </div>
                            <div class="shop_product_title">
                                <p>Dawn Jungle Print</p>
                            </div>
                            <div class="shop_product_price">
                                <p>150$</p>
                                <img src={heart} alt="heart" />
                            </div>
                        </div>
                        <div class="shop_grid_childs">
                            <div class="shop_product_img">
                                <img src={shirt2} alt="Product-image" />
                            </div>
                            <div class="shop_product_title">
                                <p>Рубашка с принтом динозавров</p>
                            </div>
                            <div class="shop_product_price">
                                <p>70$</p>
                                <img src={heart2} alt="heart" />
                            </div>
                        </div>
                        <div class="shop_grid_childs">
                            <div class="shop_product_img">
                                <img src={shirt3} alt="Product-image" />
                            </div>
                            <div class="shop_product_title">
                                <p>Каролина с синими полосами</p>
                            </div>
                            <div class="shop_product_price">
                                <p>85$</p>
                                <img src={heart} alt="heart" />
                            </div>
                        </div>
                        <div class="shop_grid_childs">
                            <div class="shop_product_img">
                                <img src={shirt4} alt="Product-image" />
                            </div>
                            <div class="shop_product_title">
                                <p>Синяя клетчатая рубашка</p>
                            </div>
                            <div class="shop_product_price">
                                <p>67$</p>
                                <img src={heart2} alt="heart" />
                            </div>
                        </div>
                    </div>
                    <div class="circle_img">
                        <img src={circleImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopSectionThree
