import React from 'react';
import Microblading from "../components/recommends/microblading";
import { Clock, Frown, Scissors, Heart, Sunrise, Shield } from 'lucide-react';
import styles from "./ForthScreen.module.css";
import { GiMirrorMirror } from 'react-icons/gi';
import Button from '../components/WAButton/Button';
import Timeline from '../components/timeline/Steps';
import FifthScreen from './FifthScreen';
import SixthScreen from './SixthScreen';
import ByMe from '../components/ByMe/ByMe';

const ForthScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title} id="מיקרובליידינג">אם את כאן</div>
      <div className={styles.description}>סימן שאת חושבת כבר על לעשות איפור קבוע בגבות</div>
      <div className={styles.title}>אז קודם כל</div>
      <Microblading/>
      <div className={styles.titleSilver}>אני יודעת כמה זה מתסכל</div>
      <div className={styles.frustrationsRow}>
        <div className={styles.frustrationItem}>
          <div className={styles.iconContainer}>
            <GiMirrorMirror className={styles.frustrationIcon} strokeWidth={1} />
          </div>
          <p className={styles.frustrationText}>להסתכל במראה בכל בוקר ולא להיות מרוצה ממה שאת רואה</p>
        </div>
        
        <div className={styles.frustrationItem}>
          <div className={styles.iconContainer}>
            <Frown className={styles.frustrationIcon} strokeWidth={1}/>
          </div>
          <p className={styles.frustrationText}>להתמודד עם גבות אסימטריות שקשה לתקן אפילו עם איפור</p>
        </div>
        
        <div className={styles.frustrationItem}>
          <div className={styles.iconContainer}>
            <Scissors className={styles.frustrationIcon} strokeWidth={1}/>
          </div>
          <p className={styles.frustrationText}>לבזבז כל כך הרבה זמן בבוקר על עיצוב ומילוי הגבות</p>
        </div>
      </div>
      <div className={styles.titleSilver}>אחרי טיפול המיקרובליידינג תוכלי</div>
      
      {/* Advantages Section */}
      <div className={styles.frustrationsRow}>

        
        <div className={styles.frustrationItem}>
          <div className={styles.advantageIconContainer}>
            <Heart className={styles.frustrationIcon} strokeWidth={1}/>
          </div>
          <p className={styles.frustrationText}>ליהנות מגבות סימטריות ומלאות שמותאמות במדויק למבנה הפנים שלך</p>
        </div>
        
        <div className={styles.frustrationItem}>
          <div className={styles.advantageIconContainer}>
            <Clock className={styles.frustrationIcon} strokeWidth={1} />
          </div>
          <p className={styles.frustrationText}>להפסיק לדאוג לגבי תיקוני איפור כשאת בים, בבריכה ובפעילות ספורטיבית</p>
        </div>
        
        <div className={styles.frustrationItem}>
          <div className={styles.advantageIconContainer}>
            <Shield className={styles.frustrationIcon} strokeWidth={1} />
          </div>
          <p className={styles.frustrationText}>להרגיש ביטחון לגבי המראה שלך עם תוצאות שמחזיקות עד כשנתיים וחצי (תלוי בסוג העור)</p>
        </div>
      </div>
      
      <div className={styles.titleSilver}>וזה קורה ככה:</div>
      <Timeline/>
      <Button text="ירדן, בואי נשריין טיפול" message="היי ירדן הגעתי מהדף, אשמחח לשמוע עוד על טיפול מיקרובליידינג"/>
      <FifthScreen/>
      <Button text="ירדן, בואי נדבר!" message="היי ירדן הגעתי מהדף, אשמחח לשמוע עוד על טיפול מיקרובליידינג"/>
      <SixthScreen/>
      <ByMe/>
    </div>
  );
};

export default ForthScreen;