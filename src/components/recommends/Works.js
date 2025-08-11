import React from 'react';
import styles from './Recommends.module.css';
import Button from '../button/Button';

// Import your images
import result1 from "../../images/ירדן כהן עבודות 1.png";
import result2 from "../../images/ירדן כהן עבודות 2.png";
import result3 from "../../images/ירדן כהן עבודות 3.png";
import result4 from "../../images/ירדן כהן עבודות 4.png";
import result5 from "../../images/ירדן כהן עבודות 5.png";
import result6 from "../../images/ירדן כהן עבודות 6.png";
import result7 from "../../images/ירדן כהן עבודות 7.png";
import result8 from "../../images/ירדן כהן עבודות 8.png";
import result9 from "../../images/ירדן כהן עבודות 9.png";
import result10 from "../../images/ירדן כהן עבודות 10.png";
import result11 from "../../images/ירדן כהן עבודות 11.png";
import result12 from "../../images/ירדן כהן עבודות 12.png";
import result13 from "../../images/ירדן כהן עבודות 13.png";
import result14 from "../../images/ירדן כהן עבודות 14.png";

const Works = () => {
  const images = [
    result5, result6, result7, result8, 
    result9, result10, result11, result12 ,result13, result14
  ];

  return (
    <>
      <div className={styles.explain}>
       ריכזתי לך מקבץ נשים שבחרו בי לאפר אותן ליום הכי חשוב שלהן
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

export default Works;