import React from 'react'
import OurShirtsHeader from '../ourShirtsHeader/OurShirtsHeader'
import shirtImg1 from '../../assets/shop_item_img/image 37.png'
import shirtImg2 from '../../assets/shop_item_img/image 36.png'
import shirtImg3 from '../../assets/shop_item_img/image 38.png'
import shirtImg4 from '../../assets/shop_item_img/image 20.png'
import littleShirt from '../../assets/shop_item_img/Group.png'
import littleShirt2 from '../../assets/shop_item_img/Group _two.png'
import './shopItem.css'

const ShopItem = () => {
    return (
        <>
            <OurShirtsHeader />
            <section class="shop_item_section_2">
                <div class="shop_item_container">
                    <div class="shop_item_grid_container">
                        <div class="shop_item_box_one">
                            <div class="shirt_middle_img">
                                <img src={shirtImg1} alt="Shirt-img" />
                            </div>
                            <div class="shirt_middle_img">
                                <img src={shirtImg2} alt="Shirt-img" />
                            </div>
                            <div class="shirt_middle_img">
                                <img src={shirtImg3} alt="Shirt-img" />
                            </div>
                        </div>
                        <div class="shop_item_box_two">
                            <div class="shirt_big_img">
                                <img src={shirtImg4} alt="Shirt" />
                            </div>
                        </div>
                        <div class="shop_item_box_second">
                            <div class="shirt_info">
                                <h3>Каролина с синими горизонтальными полосами</h3>
                                <h5>85$</h5>
                                <p class="detals">Детали ткани</p>
                                <p class="info_txt">100% хлопок</p>
                                <p class="info_txt">Ткань добби, сотканная с тонким количеством, характеризуется диагональными ребрами. Мягкая, эластичная и воздушная, эта ткань идеально подходит для офисных рубашек.</p>
                            </div>
                            <div class="shirt_types">
                                <div class="shirt_type_one">
                                    <div class="type_one_img">
                                        <img src={littleShirt} alt="" />
                                    </div>
                                    <div class="type_one_btn">
                                        <button>Slim</button>
                                    </div>
                                </div>
                                <div class="shirt_type_two">
                                    <div class="type_two_img">
                                        <img src={littleShirt2} alt="" />
                                    </div>
                                    <div class="type_two_btn">
                                        <button>Classic</button>
                                    </div>
                                </div>
                            </div>
                            <div class="shirt_sizes">
                                <div class="size_txt">
                                    <p>Размер</p>
                                    <a href="#">Гид по размерам *</a>
                                </div>
                                <div class="size_buttons">
                                    <button class="btn_first">38</button>
                                    <button class="btn_second">40</button>
                                    <button class="btn_second">42</button>
                                    <button class="btn_second">44</button>
                                    <button class="btn_second">46</button>
                                </div>
                                <div class="buy_btn">
                                    <button class="add_btn">Добавить в корзину</button>
                                    <button class="create_self">Создать свою</button>
                                </div>
                                <div class="second_text">
                                    <a href="#">* Таблица размеров мужских рубашек</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}

export default ShopItem
