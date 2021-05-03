import React from "react";
import "../shirt-section-two/shirt-section-two.css";

import img2 from "../../assets/shirt-images/material1.png";
import img3 from "../../assets/shirt-images/material2.png";
import img4 from "../../assets/shirt-images/material3.png";
import img5 from "../../assets/shirt-images/material4.png";

const ShirtSectionTwo = () => {
  return (
    <React.Fragment>
      <div class="how-to-select-wrapper">
        {/* the next four images start here  */}
        <div class="below-four-images">
          <div class="centered-txt">
            <p>Тканые переплетения</p>
          </div>
          <div class="grid-images">
            <div class="grid-one">
              <img src={img2} alt="" />
              <div class="inner-txt-wrapper">
                <p class="heading">Поплин</p>
                <p class="text">
                  Самая типичная рубашечная ткань Poplin или Broadcloth имеет
                  небольшую текстуру, а ее плотно сплетенный узор из-под
                  плетения создает тонкую, мягкую, гладкую и легкую ткань.
                  Poplin воздухопроницаемый, что делает их идеальным выбором для
                  ношения летом или под куртками и блейзерами для официальных
                  мероприятий. Чем выше количество ниток, тем роскошнее ткань.
                </p>
              </div>
            </div>
            <div class="grid-one">
              <img src={img3} alt="" />
              <div class="inner-txt-wrapper">
                <p class="heading">Оксфорд</p>
                <p class="text">
                  Хотя оксфордская ткань имеет слегка грубую и тяжелую текстуру,
                  она является мягкой, дышащей и прочной тканью, которую можно
                  носить ежедневно. Ткань, известная своим характерным плетением
                  «корзина», обычно предназначена для повседневных рубашек в
                  паре с воротником на пуговицах. Универсальный «должен иметь»
                  для каждого гардероба.
                </p>
              </div>
            </div>
            <div class="grid-one">
              <img src={img4} alt="" />
              <div class="inner-txt-wrapper">
                <p class="heading">Сатин</p>
                <p class="text">
                  Атласный тип плетения - более блестящий, чем обычный поплин.
                  Созданная таким образом ткань более блестящая и придает
                  рубашке эксклюзивный вид. Плетение наиболее классически
                  используется с шелковой нитью, хотя может использоваться и с
                  другими материалами. Атласные рубашки хорошо работают под
                  курткой или в неформальной обстановке в ночное время.
                </p>
              </div>
            </div>
            <div class="grid-one">
              <img src={img5} alt="" />
              <div class="inner-txt-wrapper">
                <p class="heading">Добби</p>
                <p class="text">
                  Плетение Добби создано с использованием небольших
                  геометрических узоров, которые повторяются по всей ткани.
                  Однотонные рубашки Добби, как правило, имеют слабую полоску
                  или пунктирные узоры, сплетенные того же цвета, что и базовая
                  ткань. Эта слегка утяжеленная ткань стала популярной в 1950-х
                  годах, ее уникальная узорчатая натура и структура с трудными
                  морщинами оказались отличным выбором для рубашек рабочей
                  одежды.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShirtSectionTwo;
