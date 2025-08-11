import React, { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
import styles from './SmallBox.module.css';

const SmallBox = ({ text, icon: Icon }) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.container}`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon size="100%" strokeWidth={1} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default SmallBox;