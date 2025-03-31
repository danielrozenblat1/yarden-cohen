import React, { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
import styles from './Can.module.css';

const IconTextComponent = ({ text, icon }) => {
    useEffect(() => {
      ScrollReveal().reveal(`.${styles.text}`, {
        duration: 1000,
        distance: "30px",
        origin: "left",
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
      <img src={icon} className={styles.icon} alt="Icon" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default IconTextComponent;