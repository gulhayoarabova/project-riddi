import React from "react";
import "../about-section-two/about-section-two.css";

import image2 from "../../assets/about-images/first.png";
import image3 from "../../assets/about-images/play button.png";
const AboutSectionTwo = () => {
  return (
    <React.Fragment>
      <section>
        <div class="wrapper-of-about">
          {/* second section starts here */}

          <div class="third-section">
            <div class="inner-div">
              <h4>Сосредоточиться на дизайне</h4>
              <p>
                В Riddi мы помогаем вам направить вашу индивидуальность,
                предоставляя ткани и варианты дизайна, которые подбираются в
                соответствии с последними модными тенденциями. Мы постоянно
                внедряем инновации с тканями и изысканным дизайном, чтобы
                обеспечить идеальное сочетание современного дизайна и
                классического пошива. Наша приверженность дизайну
                распространяется на все сферы деятельности компании - наши
                розничные магазины, цифровые точки соприкосновения, а также сами
                продукты и упаковку.
              </p>
            </div>
            <div class="inner-div">
              <h4>Качество и требовательные методы</h4>
              <p>
                Происхождение наших рубашек очень важно для нас. Мы курировали
                группу продавцов тканей со всего мира. Только лучшее сырье
                поставляется. Каждая деталь тщательно изучена. Наш
                производственный процесс включает в себя только самые
                современные машины и четко определенные процессы. Идеальная
                рубашка - это просто сумма ее частей.
              </p>
            </div>
            <div class="inner-div">
              <h4>Заказ не должен быть сложным</h4>
              <p>
                Мы стремимся упростить и обезличить процесс покупки рубашек на
                заказ. Будь то описания тканей или пояснения к воротникам, мы
                стараемся сделать их забавными и причудливыми, чтобы их было
                легко понять. Наш процесс определения размеров также
                революционен - наш алгоритм FitSmart сжимает данные за многие
                годы, чтобы получить ваши индивидуальные результаты. Все, что мы
                просим, - это несколько основных ответов.
              </p>
            </div>
          </div>

          <div class="section-four">
            <img src={image2} class="image-1" />
            <div class="play-icon-on-image">
              <img src={image3} class="play-button" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutSectionTwo;
