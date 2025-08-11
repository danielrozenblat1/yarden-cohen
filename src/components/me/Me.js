import React from 'react';
import styles from './Me.module.css';
import yarden from "../../images/ירדן כהן תמונה ראשית.png";
import Recommendations from '../recommends/Recommends';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={yarden} alt="ירדן כהן" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>ירדן כהן</h1>
          <div className={styles.subtitle}>״כשאת מרגישה שלמה מבפנים עם המראה שלך - זה מקרין כלפי חוץ וזהו היופי בשלמותו״</div>
          <p className={styles.description}>
            מאז שאני זוכרת את עצמי, תמיד ציירתי והתעסקתי באמנות. בתיכון הייתי ה"מאפרת הרשמית" של החברות שלי לפני כל מסיבה וכשהחלו להגיע אליי בקשות לאיפור מאנשים חיצונייים, הבנתי שיש פה משהו מיוחד. הכישרון שהיה תמיד חלק ממני הפך להיות הדרך שלי להתבטא ולהתפרנס ממה שאני הכי אוהבת.
          </p>
          <p className={styles.description}>
            היום, אני מתמקדת בלהעביר את הידע שלי הלאה ובאיפור כלות וערב, והכיף הכי גדול? לראות את החיוך של הלקוחות כשהן מסתכלות במראה! אני אוהבת ליצור מראה טבעי ומדויק שפשוט "עובד" - כזה שיגרום לך להרגיש נהדר בלי יותר מדי התעסקות. בין אם את רוצה גבות מושלמות שיחסכו לך זמן בבוקר או מראה חלומי ביום החתונה שלך, אני כאן כדי להפוך את החלום למציאות ולגרום לך להרגיש הכי טוב שאפשר!
          </p>
        </div>
      </div>
    <Recommendations/>
    </>
  );
};

export default AboutMe;