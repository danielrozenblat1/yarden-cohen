import React from 'react';
import styles from './TrainingSillabus.module.css';

const TrainingSyllabus = () => {
  const stages = [
    { 
      number: "01",
      title: "פגישת ייעוץ ראשונית", 
      description: "תיאום ציפיות, בחירת סגנון איפור וטיפול בגבות"
    },
    { 
      number: "02",
      title: "ליווי והתייעצות", 
      description: "זמינות לכל שאלה או חשש לאורך כל הדרך עד החתונה"
    },
    { 
      number: "03",
      title: "יום האירוע", 
      description: "הגעה לאחר עיצוב השיער, ביצוע איפור מושלם ונוכחות עד הצילומים"
    },
    { 
      number: "04",
      title: "ערכת טאצ׳אפ", 
      description: "מתן ערכת רענון אישית לשמירה על מראה מושלם לאורך כל האירוע"
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