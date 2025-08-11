import styles from "./SixthScreen.module.css";
import FAQItem from "../components/questions/Questions"
import Button from "../components/WAButton/Button";

const SixthScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>שאלות נפוצות</div>
      <div className={styles.description}>(לחצי על כל שאלה כדי שהתשובה תפתח)</div>
      <div className={styles.faqList}>
        <FAQItem 
          question="למשך כמה זמן התוצאה מחזיקה?" 
          answer="עד כשנתיים וחצי, תלוי בסוג העור." 
        />
        <FAQItem 
          question="האם זה כואב?" 
          answer="לא. הטיפול לא חודרני ולכן לא כואב אך יכולה להיות תחושת אי נעימות קלה בשלב מסוים בטיפול." 
        />
        <FAQItem 
          question="האם זה מותר מבחינה הלכתית?" 
          answer="כן. איפור קבוע הוא אינו קעקוע- הוא נועד ליופי האישה ובשונה מקעקוע-הוא לא נשאר על הפנים לתמיד לכן רבנים אישרו איפור קבוע לנשים." 
        />
        <FAQItem 
          question="כמה זמן כל טיפול?" 
          answer="הטיפול הראשון כשעה וחצי, והטיפול השני כשעה." 
        />
        <FAQItem 
          question="ממה אני צריכה להמנע לפני ואחרי הטיפול?" 
          answer="כל לקוחה מקבלת תזכורת להוראות לפני הטיפול, וגם לאחר הטיפול. בגדול: לפני הטיפול- הימנעות משתיית משקאות המכילים קפאין, אחרי הטיפול- להמנע מחדירת נוזלים לאיזור המטופל (זיעה, מים)." 
        />
        <FAQItem 
          question="מה אם הטיפול לא יצליח לי או שהגוון לא יתאים לי?" 
          answer="תיאום הציפיות איתי מאוד מדויק ומבוסס על ניסיון רב. לפני תחילת הטיפול אני מבצעת התאמת גוון קפדנית ומשרטטת סקיצה לפי תווי הפנים שלך, ומוודאת שהתוצאה תהיה טבעית ומדויקת בדיוק לפי מה שנכון לך." 
        />
      </div>
      <Button text="ירדן, יש לי עוד שאלה קטנה"/>
    </div>
  );
};

export default SixthScreen;