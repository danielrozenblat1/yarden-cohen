import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Button.module.css';

const PinkScrollButton = ({ text, icon, to }) => {
  return (
    <ScrollLink to={to} smooth={true} duration={2000} className={styles.button}>
      <div className={styles.rightIcon}>
        <img src={icon} className={styles.icon} alt="Button icon" />
      </div>
      <span className={styles.text}>{text}</span>
    </ScrollLink>
  );
};

export default PinkScrollButton;