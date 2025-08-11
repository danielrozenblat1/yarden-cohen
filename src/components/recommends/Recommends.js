import React from 'react';
import styles from './Regular.module.css';
import Button from '../WAButton/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images
import result1 from "../../images/ירדן כהן לקוחות ממליצות 1.png";
import result2 from "../../images/ירדן כהן לקוחות ממליצות 2.png";
import result3 from "../../images/ירדן כהן לקוחות ממליצות 3.png";
import result4 from "../../images/ירדן כהן לקוחות ממליצות 4.png";
import result5 from "../../images/ירדן כהן לקוחות ממליצות 5.png";
import result6 from "../../images/ירדן כהן לקוחות ממליצות 6.png";
import result7 from "../../images/ירדן כהן לקוחות ממליצות 7.png";

const Recommendations = () => {
  const images = [
    result1, result2, result3 , result4, result5, result6,  result7
  ];

  const sliderSettings = {
    infinite: true,
    speed: 700,
    autoplaySpeed: 2500,
    dots: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: window.innerWidth < 450 ? 1 :
                  window.innerWidth <= 1050 ? 2 : 4,
    slidesToScroll: 1,
  };

  const content = images.map((img, index) => ({
    type: 'image',
    src: img
  }));

  return (
    <>
      <div className={styles.title}>איפרתי מאות נשים</div>
      <div className={styles.explain}>
שבסוף התהליך דיברו ככה: (תחליקי בין התמונות)
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemScope itemType="http://schema.org/Review">
              {item.type === 'image' && (
                <img
                  src={item.src}
                  className={styles.image1}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              )}
              <meta itemProp="datePublished" content={new Date().toISOString()} />
            </div>
          ))}
        </Slider>
      </div>
      <Button text="ירדן, בואי נדבר!" />
    </>
  );
};

export default Recommendations;