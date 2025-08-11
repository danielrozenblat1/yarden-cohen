import React, { useState, useEffect } from 'react';

import lips from "../images/לימוד איפור.png";
import styles from './FirstScreen.module.css';
import PinkScrollButton from '../components/button/Button';
import makeup from "../images/איפור.png"
import middleImage from "../images/ירדן כהן תדמית חדשה.png";
import rightImage from "../images/ירדן כהן תמונה ימנית.png"
import leftImage from "../images/ירדן כהן תמונה שמאלית.png"
import GradientLoader from '../components/loader/Loader';
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <GradientLoader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>YARDEN COHEN</h1>
  
        <div className={styles.buttonContainer}>
        <PinkScrollButton text="אני מעוניינת ללמוד איפור" icon={lips} to="מיקרובליידינג"/>
        <PinkScrollButton text="אני מעוניינת באיפור" icon={makeup} to="איפור"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;