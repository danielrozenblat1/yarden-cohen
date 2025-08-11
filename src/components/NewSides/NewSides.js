import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './NewSides.module.css';
import Button from '../WAButton/Button';

const MinimalComponent = () => {
  useEffect(() => {
    // הגדרת ScrollReveal
    const sr = ScrollReveal({
      reset: false,
      distance: '60px',
      duration: 800,
      delay: 100,
      easing: 'ease-out',
      opacity: 0
    });

    // אנימציות לכל פריט
    sr.reveal('[data-reveal="right"]', {
      origin: 'right',
      interval: 200
    });

    sr.reveal('[data-reveal="left"]', {
      origin: 'left',
      interval: 200
    });

    // ניקוי
    return () => sr.destroy();
  }, []);

  return (
    <div className={styles.container}>
      {/* פריט 01 - ספרה בצד ימין */}
      <div className={`${styles.item} ${styles.itemRight}`} data-reveal="right">
        <div className={styles.number}>01</div>
        <div className={`${styles.text} ${styles.textRight}`}>
          התמדה ונחישות - עסק מצליח ורווחי לא נבנה ביום וגם לא ביומיים, כדי לבנות את השם שלך את תצטרכי להתמיד גם כשקשה יותר וגם כשדברים פחות מסתדרים בדרך שלך
        </div>
      </div>

      {/* פריט 02 - ספרה בצד שמאל */}
      <div className={`${styles.item} ${styles.itemLeft}`} data-reveal="left">
        <div className={`${styles.text} ${styles.textLeft}`}>
  תשוקה לתחום - אם את עושה את זה רק בשביל הכסף, גם אם תרוויחי סכומים יפים - את תישחקי מהר ותעזבי את המקצוע מהר מהצפוי
        </div>
        <div className={styles.number}>02</div>
      </div>

      {/* פריט 03 - ספרה בצד ימין */}
      <div className={`${styles.item} ${styles.itemRight}`} data-reveal="right">
        <div className={styles.number}>03</div>
        <div className={`${styles.text} ${styles.textRight}`}>
תרגול והתחדשות - תמיד תשאפי לתרגל שיטות וטכניקות חדשות וכמובן לתחזק את הקיימות
        </div>
      </div>
      <Button text="ירדן, בואי נדבר לגבי הקורס!" message="היי ירדם הגעתי מהדף שלך, אשמח לשמוע עוד לגבי קורס איפור"/>
    </div>
  );
};

export default MinimalComponent;