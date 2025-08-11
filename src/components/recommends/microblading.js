import React from 'react';
import styles from './microblading.module.css';
import Button from '../button/Button';

// Import your images
import result1 from "../../images/ירדן כהן מיקרובליידינג 1.png";
import result2 from "../../images/ירדן כהן מיקרובליידינג 2.png";
import result3 from "../../images/ירדן כהן מיקרובליידינג 3.png";
import result4 from "../../images/ירדן כהן מיקרובליידינג 4.png";
import result5 from "../../images/ירדן כהן מיקרובליידינג 5.png";
import result6 from "../../images/ירדן כהן מיקרובליידינג 6.png";
import result7 from "../../images/ירדן כהן מיקרובליידינג 7.png";
import result8 from "../../images/ירדן כהן מיקרובליידינג 8.png";
import result9 from "../../images/ירדן כהן מיקרובליידינג 9.png";


const Microblading = () => {
  const images = [
     result1, result2, result3 ,result4, result5 , result6, result7, result8, result9, 
    
  ];

  return (
    <>
      <div className={styles.explain}>
   אני יודעת שאת סקרנית אז ריכזתי עבורך כמה נשים שכבר עשו את הצעד
      </div>

   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Microblading;