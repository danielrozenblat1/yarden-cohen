import React from 'react';
import styles from './TrainingSillabus.module.css';

const TrainingSyllabus = () => {
  const stages = [
    { 
      number: "01",
      title: "פגישת ייעוץ ראשונית", 
      description: "בפגישה אנחנו מתאמות ציפיות,את מספרת לי איך חלמת להראות וביחד עם אבחון מבנה הפנים, סגנון השיער והשמלה שבחרת- נרכיב את הלוק המדוייק ליום הגדול"
    },
    { 
      number: "02",
      title: "ליווי והתייעצות", 
      description: "זמינה בשמחה ובאהבה לכל שאלה, ייעוץ ובקשה. כל הדרך עד החתונה."
    },
    { 
      number: "03",
      title: "יום האירוע", 
      description: "אני בד״כ מגיעה לאחר עיצוב השיער ונשארת איתך עד יציאתך לצילומים."
    },
    { 
      number: "04",
      title: "ערכת טאצ׳אפ", 
      description: "כמובן שתקבלי ממני ערכת רענון אישית שתוכלי לשמור על מראה מושלם לאורך כל האירוע"
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