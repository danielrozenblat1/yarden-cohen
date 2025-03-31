import React from 'react';
import styles from './TrainingSillabus.module.css';

const TrainingSyllabus = () => {
  const stages = [
    { 
      number: "01",
      title: "פגישת ייעוץ ראשונית", 
      description: "בפגישה אנחנו מתאמות ציפיות,את מספרת לי איך חלמת להראות ויחד אנחנו מבינות לפי סוג העור שלך איזה סגנון הכי מתאים לך ליום הגדול"
    },
    { 
      number: "02",
      title: "ליווי והתייעצות", 
      description: "אני זמינה לך לכל שאלה או חשש לאורך כל הדרך עד החתונה"
    },
    { 
      number: "03",
      title: "יום האירוע", 
      description: "אני מופיעה לאחר עיצוב השיער, מאפרת אותך, עושה לך גבות ונשארת עד הצילומים"
    },
    { 
      number: "04",
      title: "ערכת טאצ׳אפ", 
      description: "כמובן שתקבלי ממני ערכת רענון אישית שתוחכלי לשמור על מראה מושלם לאורך כל האירוע"
    }
  ];

  // שלבי העבודה של ירדן באיפור כלות

  return (
    <div className={styles.container}>
      <div className={styles.stagesContainer}>
        {stages.map((stage, index) => (
          <div key={index} className={`${styles.stage} ${styles[`stage${index + 1}`]}`}>
            <div className={styles.stageNumber}>{stage.number}</div>
            <div className={styles.stageContent}>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDescription}>{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingSyllabus;