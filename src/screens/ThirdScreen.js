import styles from "./ThirdScreen.module.css";
import FAQItem from "../components/questions/Questions"
import Button from "../components/WAButton/Button";

const ThirdScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>שאלות תשובות</div>
      <div className={styles.description}>ריכזתי עבורך שאלות שחזרו על עצמן מהכלות שלי ואני בטוחה שעלו גם לך (לחצי על כל שאלה כדי שהתשובה תפתח)</div>
      <div className={styles.faqList}>
        <FAQItem 
          question="אני מתאפרת מהבוקר ובנוסף מפחדת שאני אבכה. יש מצב שהאיפור יירד?" 
          answer="אין מצב בעולם שהאיפור יירד לך. אני עושה הכנה טובה לעור, משתמשת במוצרים איכותיים שמתאימים לך כך ששום מזג אוויר/דמעות לא יורידו לך את האיפור." 
        />
        <FAQItem 
          question="את עושה ליווי?" 
          answer="ליווי הוא אופציה אך ורק במידה ואת רוצה לשנות לוק איפור במהלך הערב. מלבד זאת, אני מציידת אותך בערכת טאצ׳ אפ כדי לנטרל הברקות ולחדש את האודם (במידת הצורך) לפני החופה." 
        />
        <FAQItem 
          question="את מקבלת עוד כלות באותו היום?" 
          answer="ממש לא. אני דוגלת בכלה אחת ביום. יום של כלה נסגר עבורה בלבד. אני לא עוזבת אותה עד שהיא צריכה ללכת לצילומים." 
        />
        <FAQItem 
          question="אני לא אוהבת ריסים. זה נראה לי מוגזם, אפשר שנוותר על זה?" 
          answer="אני מבינה את הפחד מריסים. אך אני מצויידת בכל סוגי הריסים שיש ואני בונה אותן בהתאמה אישית לכל סוג עין/דרישה של לקוחה. כך שגם כלה שמפחדת מריסים או כלה שדווקא כן אוהבת ריסים - תהיה מרוצה. המלצה שלי: לא לוותר על ריסים." 
        />

      </div>
      <Button text="ירדן, יש לי עוד שאלה קטנה"/>
    </div>
  );
};

export default ThirdScreen;
