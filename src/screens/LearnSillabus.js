import React, { useState } from 'react';
import { 
  BookOpen, Heart, Sparkles, Camera, Eye, Shield, Paintbrush, Award,
  Brain, AlertTriangle, Search, Zap, Wrench, Microscope, Package,
  Lightbulb, Users, Target, Layers, Eraser, UserCheck, Star,
  CheckCircle, Repeat, Focus, Trophy, Instagram, Aperture, Plus, Minus,
  Palette, Brush, Crown, FileText
} from 'lucide-react';
import styles from './LearnSillabus.module.css';

const MakeupSyllabus = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const sessions = [
    {
      number: 1,

      title: "תורת היסוד - הבסיס החזק לאיפור מדוייק",
      quote: "הבסיס הנכון הוא המפתח לאיפור מושלם",
      content: [
        { text: "אבחון סוג עור הלקוחה", icon: <Palette className={styles.contentIcon} /> },
        { text: "השלמת מייקאפ וקונסילר", icon: <Brush className={styles.contentIcon} /> },
        { text: "ניהול כהויות והצללות", icon: <Layers className={styles.contentIcon} /> },
        { text: "הבחנה בין גוונים קרים וחמים", icon: <Target className={styles.contentIcon} /> }
      ]
    },
    {
      number: 2,
   
      title: "עיצוב חיטוב",
      quote: "בצל ובאור נוצר הקסם - כל עין יכולה לספר סיפור",
      content: [
        { text: "נלמד את שיטת האור והצל", icon: <Eye className={styles.contentIcon} /> },
        { text: "טכניקת פיסול הפנים ותיקון מבנה העיניים", icon: <Sparkles className={styles.contentIcon} /> },
        { text: "תרגול קונטור (הארות והצללות לוק עיניים מעושן מודרני , ולוק איפור מודרני וקלאסי)", icon: <Star className={styles.contentIcon} /> },
       
      ]
    },
    {
      number: 3,
    
      title: "אדריכלות ריסים",
      quote: "ריסים הם המסגרת שהופכת את העין ליצירת אמנות",
      content: [
        { text: "סגנון חתולי", icon: <Shield className={styles.contentIcon} /> },
        { text: "סגנון טבעי", icon: <Focus className={styles.contentIcon} /> },
        { text: "סגנון בובתי", icon: <Layers className={styles.contentIcon} /> }
      ]
    },
    {
      number: 4,
    
      title: "לשרטט בביטחון",
      quote: "הקו המושלם נולד מתרגול וביטחון עצמי",
      content: [
        { text: "לימוד 2 סוגי אייליינר - מעושן וקלאסי", icon: <Paintbrush className={styles.contentIcon} /> },
        { text: "שרטוט השפתיים והגבות", icon: <CheckCircle className={styles.contentIcon} /> },
       
      ]
    },
    {
      number: 5,
     
      title: "זה לא הגיל זה התרגיל - איפור מתאים לגיל מבוגר",
      quote: "יופי אמיתי לא יודע גיל - רק טכניקה נכונה",
      content: [
        { text: "טכניקות איפור לגיל מבוגר", icon: <Heart className={styles.contentIcon} /> },
        { text: "התאמת גוונים ומרקמים", icon: <Palette className={styles.contentIcon} /> },
        { text: "הדגשת יתרונות טבעיים", icon: <Star className={styles.contentIcon} /> }
      ]
    },
    {
      number: 6,

      title: "מלכת שבא - איפור כלה רך ומותאם",
      quote: "ביום הכי חשוב, היא צריכה להיראות כמו עצמה הכי יפה",
      content: [
        { text: "איפור כהות עור", icon: <Crown className={styles.contentIcon} /> },
        { text: "התמודדות עם פיגמנטציה", icon: <Brush className={styles.contentIcon} /> },
        { text: "התאמת הגוונים הנכונים", icon: <Users className={styles.contentIcon} /> }
      ]
    },
    {
      number: 7,
     
      title: "יפה בלבן",
      quote: "כשהמצלמה פוגשת איפור מושלם, נוצרות תמונות נצחיות",
      content: [
        { text: "איפור כלה - עבודת הגמר", icon: <Camera className={styles.contentIcon} /> },
         { text: "קבלת תעודת הסמכה", icon: <Lightbulb className={styles.contentIcon} /> },
        { text: "יום צילומים", icon: <Lightbulb className={styles.contentIcon} /> }
      ]
    },
    {
      number: 8,
    
      title: "יציאה לדרך",
      quote: "הסוף הוא רק ההתחלה של המסע המקצועי שלך",
      content: [
        { text: "כלים עסקיים לשיווק וקידום העסק ", icon: <Trophy className={styles.contentIcon} /> },
        { text: "הצעדים הראשונים בפתיחת העסק", icon: <CheckCircle className={styles.contentIcon} /> },
        { text: "אני כאן עבורך לכל שאלה גם אחרי הקורס", icon: <FileText className={styles.contentIcon} /> }
      ]
    }
  ];

  return (
    <div className={styles.syllabusContainer}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>קורס איפור מקצועי</h1>
        <h2 className={styles.subtitle}>הדרך שלך לשליטה מלאה באמנות האיפור</h2>
        <div className={styles.courseInfo}>
          <span>8 מפגשים</span>
          <span>4 שעות כל מפגש</span>
          <span>לימוד עיוני + תרגול מעשי</span>
        </div>
        
        <div className={styles.expandButtonContainer}>
          <button 
            className={styles.expandButton} 
            onClick={toggleExpanded}
            aria-label={isExpanded ? "הסתר מפגשים" : "הצג מפגשים"}
          >
            {isExpanded ? (
              <>
                <Minus className={styles.expandIcon} />
                <span>לחצי כדי להסתיר את תיאור המפגשים</span>
              </>
            ) : (
              <>
                <Plus className={styles.expandIcon} />
                <span>לחצי כדי לצפות בכל המפגשים</span>
              </>
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className={styles.sessionsContainer}>
          {sessions.map((session) => (
            <div key={session.number} className={styles.sessionCard}>
              <div className={styles.sessionHeader}>
                <div className={styles.sessionNumber}>מפגש {session.number}</div>
               
              </div>
              
              <h3 className={styles.sessionTitle}>{session.title}</h3>
              
              {/* <div className={styles.quoteContainer}>
                <p className={styles.sessionQuote}>"{session.quote}"</p>
              </div> */}
              
              <div className={styles.contentContainer}>
                {session.content.map((item, index) => (
                  <div key={index} className={styles.contentItem}>
                    <span className={styles.contentIconWrapper}>
                      {item.icon}
                    </span>
                    <span className={styles.contentText}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MakeupSyllabus;