import Works from "../components/recommends/Works"
import AssistantR from "../components/sides/Sides"
import styles from "./SecondScreen.module.css"
import one from "../images/one.png"
import two from "../images/two.png"
import three from "../images/three.png"
import TrainingSyllabus from "../components/Steps/TrainingSillabus"
import IconTextComponent from "../components/can/Can"
import video1 from "../videos/איפור 1.mp4"
import video2 from "../videos/איפור 2.mp4"
import video3 from "../videos/איפור 3.mp4"
import VideoGallery from "../components/studioVideos/StudioVideos"
import bride from "../images/כלה חדש.png"
import consult from "../images/ייעוץ.png"
import answers from "../images/מענה לכלות.png"
import Button from "../components/WAButton/Button"
const SecondScreen=()=>{
const videos=[{src:video1},{src:video2},{src:video3}]

    return <>




<div className={styles.title} id="איפור">מאז שאת ילדה</div>
<div className={styles.description}>תכננת את היום הזה - כל פרט ופרט עד לרמות הכי קטנות - וסוף סוף היום שלך מתקרב!</div>
<div className={styles.title}>אז שנייה לפני שנצלול לעומק</div>
<Works/>
<div className={styles.description}>עכשיו אפשר לדבר..</div>
<div className={styles.titleSilver}>אני יודעת כמה חשוב לך</div>
<div className={styles.row}>
<IconTextComponent icon={one} text="שהאיפור ייראה עלייך בדיוק כמו שדמיינת"/>
<IconTextComponent icon={two} text="שהאיפור יחזיק לך למשך כל הערב ושתהי בו בשיא שלך"/>
<IconTextComponent icon={three} text="להרגיש רגועה ולהנות מכל רגע ביום המיוחד שלך"/>

</div>
<div className={styles.title}>וזו הסיבה שאני שמה דגש על:</div>
<AssistantR text="תיאום ציפיות באופן מלא לפני החתונה" iconSide="left" icon={consult} />
<AssistantR text="זמינות לכל חשש,התייעצות,שינוי דעה או רעיון שצצים לך" iconSide="right"  icon={answers} /> 
<AssistantR text="יצירת מראה טבעי ועמיד שמותאם אישית לתווי הפנים שלך ולרצונות שלך" iconSide="left" icon={bride} /> 
<div className={styles.title}>והקסם קורה ככה:</div>
<TrainingSyllabus/>

<div className={styles.title}>ואם תהית איך זה נראה..</div>
<VideoGallery videos={videos}/>
<Button text="ירדן, אני רוצה לשריין תאריך"/>
    </>
}
export default SecondScreen