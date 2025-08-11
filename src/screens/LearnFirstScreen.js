import SmallBox from "../components/SmallBox/SmallBox";
import { UserX, DollarSign, Sunrise, User, MessageCircle, Users } from "lucide-react";
import styles from "./LearnFirstScreen.module.css";
import MinimalComponent from "../components/NewSides/NewSides";
import MakeupSyllabus from "./LearnSillabus";
import recommends from "../images/ירדן כהן המלצות קורס.png"
import Button from "../components/WAButton/Button";

const LearnFirstScreen = () => {
  
  return <>
  
      <div className={styles.title}>אם הגעת לכאן</div>

      <div className={styles.description}>סימן שתמיד אהבת להתאפר ואיפור תמיד סקרן אותך אבל לאחרונה חשבת להתחיל ללמוד את התחום</div>
   <div className={styles.titleSpecial}>ולהפוך את התשוקה שלך לקריירה</div>
     <div className={styles.description}>אחרי שהתחלתי מ-0 בעצמי ואיפרתי למעלה מ-1000 נשים וכלות, אני כאן כדי לומר לך!</div>
     <div className={styles.title}>שזה לגמרי אפשרי!</div>
      <div className={styles.description}>ולהגיע למצב שאת..</div>
      <div className={styles.row}>
  <SmallBox icon={UserX} text="מפסיקה לתת דין וחשבון לבוס שלך ומחליטה על עצמך"/>
<SmallBox icon={DollarSign} text="מרוויחה סכומים שפעם רק חלמת עליהם"/>
<SmallBox icon={Sunrise} text="קמה כל בוקר בתחושה שאת מתפרנסת מהחלום שלך"/>
      </div>
           <div className={styles.title}>אבל חשוב לי שתדעי</div>
                <div className={styles.description}>שזה לא חלום ורוד! יהיו ימים שהדברים פחות יסתדרו בדרך שלך וכדי להצליח בתחום את תצטרכי להצטייד ב-3 דברים עיקריים</div>
                <MinimalComponent/>
                     <div className={styles.title}>קצת מהתלמידות שעברו את הקורס:</div>
                     <div className={styles.imageContainer}><img className={styles.image} src={recommends}/></div>
                     <div className={styles.title}>וכולן, אבל כולן התחילו במסלול הבא:</div>
                     <MakeupSyllabus/>

                             <div className={styles.titleSpecial}>חשוב לי שתדעי</div>

                             {/* החלק החדש */}
                             <div className={styles.importantInfo}>
                            
                               <div className={styles.infoItem}>
                                  <div className={styles.iconWrapper}>
                                 <User className={styles.infoIcon} strokeWidth={1} />
                                 </div>
                                 <div className={styles.infoText}>
                                   <strong>הקורס הוא 1 על 1</strong> - אני איתך בכל שלב מההתחלה עד הסוף והיחס הוא הכי אישי שיש
                                 </div>
                               </div>
                               
                               <div className={styles.infoItem}>
                                 <div className={styles.iconWrapper}>
                                 <MessageCircle className={styles.infoIcon} strokeWidth={1} />
                                 </div>
                                 <div className={styles.infoText}>
                                   <strong>אני איתך גם לאחר הקורס</strong> - כל שאלה שיש לך, התייעצות או חשש - אני כאן תמיד זמינה עבורך
                                 </div>
                               </div>
                               
                               <div className={styles.infoItem}>
                                 <div className={styles.iconWrapper}>
                                 <Users className={styles.infoIcon} strokeWidth={1} />
                                 </div>
                                 <div className={styles.infoText}>
                                   <strong>הקורס הוא לא רק תיאורטי</strong> - הקורס כולל תרגול על מודליסטיות לידי וערכה אישית עבורך בשווי 2500 שקלים
                                 </div>
                               </div>
                             </div>
                             
                     <Button text="לחצי כאן לעוד פרטים על הקורס" message="היי ירדן הגעתי מהדף שלך, אשמח לשמוע עוד לגבי הקורס"/>
             

      </>;
};

export default LearnFirstScreen;