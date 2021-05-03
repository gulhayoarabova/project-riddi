import React from 'react';
import  "../about-section-one/about-section-one.css";

import image1 from "../../assets/about-images/first.png";

const AboutSectionOne = () => {
    return (
        <React.Fragment>
      <section>
      <div class="wrapper-of-about">

     {/* first section starts here   */}
        <div class="first-section">
          <p class="entry-heading">О НАС</p>
          <p class="txt-below-entry-heading">
            <span class="letter-k">K</span>
            расивая одежда настолько вдохновляет - баланс линий, образная резка
            и роскошные ткани. Наша мотивация, чтобы дать стильным людям
            исключительное качество и универсальные варианты, которые могут быть
            лишены для жизни. Мы нацелены на то, чтобы укрепить качество
            мирового класса, и продукт может появиться в Ташкенте. Мы сочетаем
            современный дизайн и технологии с технологиями пошива старой школы,
            чтобы предложить вам высококачественный, но доступный продукт.
          </p>
        </div>

        <div class="second-section">
         <img src={image1} class="second-section-img"/>
        </div>
        
      </div>
      </section>
    </React.Fragment>
    )
}

export default AboutSectionOne;
