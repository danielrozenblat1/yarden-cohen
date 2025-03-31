import React, { useEffect } from 'react';
import styles from './Sides.module.css';
import ScrollReveal from 'scrollreveal';

const AssistantR = ({ text, icon, iconSide = 'left' }) => {
  // Define container class based on icon side
  const containerClass = `${styles.container} ${iconSide === 'right' ? styles.rightIcon : styles.leftIcon}`;
  
  // Add scroll reveal animations
  useEffect(() => {
    if (typeof ScrollReveal !== 'undefined') {
      ScrollReveal().reveal(`.${styles.title}`, {
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

      ScrollReveal().reveal(`.${styles.description}`, {
        duration: 1000,
        distance: "30px",
        origin: "bottom",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 300,
        delay: 200,
        scale: 1,
      });

      ScrollReveal().reveal(`.${styles.icon}`, {
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
    }
  }, []);

  // Determine order of elements based on icon side
  return (
    <div className={containerClass}>
      {iconSide === 'left' ? (
        <>
          <div className={`${styles.pill} ${styles.iconPill} ${styles.icon}`}>
            <img 
              src={icon} 
              className={styles.image} 
              alt="Icon"
            />
          </div>
          <div className={`${styles.pill} ${styles.textPill}`}>
            <span className={styles.text}>{text}</span>
          </div>
        </>
      ) : (
        <>
          <div className={`${styles.pill} ${styles.textPill}`}>
            <span className={styles.text}>{text}</span>
          </div>
          <div className={`${styles.pill} ${styles.iconPill} ${styles.icon}`}>
            <img 
              src={icon} 
              className={styles.image} 
              alt="Icon"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AssistantR;