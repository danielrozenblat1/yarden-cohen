import styles from "./FifthScreen.module.css";
import video1 from "../videos/מיקרובליידינג 1.mp4"
import video2 from "../videos/מיקרובליידינג 2.mp4"
import video3 from "../videos/מיקרובליידינג 3.mp4"
import video4 from "../videos/מיקרובליידינג 4.mp4"
import VideoGallery from "../components/studioVideos/StudioVideos";
const FifthScreen = () => {
    const videos=[{src:video1},{src:video2},{src:video3},{src:video4}]
  return <>
  
      <div className={styles.title}>אני רוצה לשבור לך מיתוס קטן</div>
    
 
      <div className={styles.description}>המון נשים משקפות בפני שהן מפחדות שהטיפול לא ייראה עליהן טבעי ושהטיפול עצמו ייכאב להן מאוד</div>
      <div className={styles.description}>אז חשוב לי שתראי איך הבנות שיוצאות ממני מגיבות</div>
      <div className={styles.title}>זה נראה ככה:</div>
<VideoGallery videos={videos}/>
 
      </>
};

export default FifthScreen;
